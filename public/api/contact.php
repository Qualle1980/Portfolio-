<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, bool $success): never
{
    http_response_code($status);
    echo json_encode(['success' => $success]);
    exit;
}

function smtpRead($socket): string
{
    $response = '';
    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (strlen($line) < 4 || $line[3] === ' ') {
            break;
        }
    }
    return $response;
}

function smtpCommand($socket, string $command, array $expectedCodes): void
{
    if ($command !== '') {
        fwrite($socket, $command . "\r\n");
    }

    $response = smtpRead($socket);
    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException("SMTP command failed with status {$code}.");
    }
}

function sendViaSmtp(string $recipient, string $subject, string $body, string $replyTo): bool
{
    $configPath = dirname(__DIR__, 2) . '/private/contact-config.php';
    if (!is_file($configPath)) {
        throw new RuntimeException('SMTP configuration is missing.');
    }

    $config = require $configPath;
    $password = is_array($config) ? (string) ($config['password'] ?? '') : '';
    if ($password === '') {
        throw new RuntimeException('SMTP password is missing.');
    }

    $host = 'mxe9bf.netcup.net';
    $username = 'contact@ahmad-ataya.de';
    $socket = stream_socket_client(
        "tcp://{$host}:587",
        $errorNumber,
        $errorMessage,
        15,
        STREAM_CLIENT_CONNECT
    );

    if ($socket === false) {
        throw new RuntimeException("SMTP connection failed ({$errorNumber}).");
    }

    stream_set_timeout($socket, 15);

    try {
        smtpCommand($socket, '', [220]);
        smtpCommand($socket, 'EHLO ahmad-ataya.de', [250]);
        smtpCommand($socket, 'STARTTLS', [220]);

        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            throw new RuntimeException('SMTP encryption could not be enabled.');
        }

        smtpCommand($socket, 'EHLO ahmad-ataya.de', [250]);
        smtpCommand($socket, 'AUTH LOGIN', [334]);
        smtpCommand($socket, base64_encode($username), [334]);
        smtpCommand($socket, base64_encode($password), [235]);
        smtpCommand($socket, "MAIL FROM:<{$username}>", [250]);
        smtpCommand($socket, "RCPT TO:<{$recipient}>", [250, 251]);
        smtpCommand($socket, 'DATA', [354]);

        $headers = [
            'Date: ' . date(DATE_RFC2822),
            'From: Ahmad Ataya Portfolio <contact@ahmad-ataya.de>',
            "Reply-To: {$replyTo}",
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
            'Subject: =?UTF-8?B?' . base64_encode($subject) . '?=',
        ];
        $message = implode("\r\n", $headers) . "\r\n\r\n" . str_replace("\n", "\r\n", $body);
        $message = preg_replace('/^\./m', '..', $message) ?? $message;
        fwrite($socket, $message . "\r\n.\r\n");
        smtpCommand($socket, '', [250]);
        smtpCommand($socket, 'QUIT', [221]);
    } finally {
        fclose($socket);
    }

    return true;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, false);
}

$contentType = strtolower((string) ($_SERVER['CONTENT_TYPE'] ?? ''));
if (strpos($contentType, 'application/json') !== 0) {
    respond(415, false);
}

$payload = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($payload)) {
    respond(400, false);
}

$name = trim((string) ($payload['name'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));
$privacy = ($payload['privacy'] ?? false) === true;
$website = trim((string) ($payload['website'] ?? ''));

if ($website !== '') {
    respond(200, true);
}

$nameIsValid = preg_match("/^[\\p{L}]+(?:[ '\\-][\\p{L}]+)*$/u", $name) === 1;
if (
    !$nameIsValid || mb_strlen($name) < 3 || mb_strlen($name) > 100 ||
    filter_var($email, FILTER_VALIDATE_EMAIL) === false || strlen($email) > 254 ||
    mb_strlen($message) < 10 || mb_strlen($message) > 5000 ||
    !$privacy
) {
    respond(422, false);
}

$safeName = str_replace(["\r", "\n"], '', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);
$subject = 'Neue Portfolio-Anfrage von ' . $safeName;
$body = "Name: {$safeName}\nE-Mail: {$safeEmail}\n\nNachricht:\n{$message}\n";
$sent = false;
try {
    $sent = sendViaSmtp('contact@ahmad-ataya.de', $subject, $body, $safeEmail);
} catch (Throwable $error) {
    error_log('Portfolio contact form: ' . $error->getMessage());
}

respond($sent ? 200 : 500, $sent);
