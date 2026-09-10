<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$payload = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

$name = trim((string) ($payload['name'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));
$privacy = ($payload['privacy'] ?? false) === true;
$website = trim((string) ($payload['website'] ?? ''));

if ($website !== '') {
    echo json_encode(['success' => true]);
    exit;
}

$nameIsValid = preg_match("/^[\\p{L}]+(?:[ '\\-][\\p{L}]+)*$/u", $name) === 1;
if (
    !$nameIsValid || mb_strlen($name) < 3 || mb_strlen($name) > 100 ||
    filter_var($email, FILTER_VALIDATE_EMAIL) === false || strlen($email) > 254 ||
    mb_strlen($message) < 10 || mb_strlen($message) > 5000 ||
    !$privacy
) {
    http_response_code(422);
    echo json_encode(['success' => false]);
    exit;
}

$safeName = str_replace(["\r", "\n"], '', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);
$subject = 'Neue Portfolio-Anfrage von ' . $safeName;
$body = "Name: {$safeName}\nE-Mail: {$safeEmail}\n\nNachricht:\n{$message}\n";
$headers = [
    'From: Ahmad Ataya Portfolio <contact@ahmad-ataya.de>',
    "Reply-To: {$safeEmail}",
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail(
    'ahmad-ataya@hotmail.de',
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    implode("\r\n", $headers)
);

if (!$sent) {
    http_response_code(500);
}

echo json_encode(['success' => $sent]);
