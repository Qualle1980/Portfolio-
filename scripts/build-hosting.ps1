$ErrorActionPreference = 'Stop'

$portfolioRoot = Split-Path -Parent $PSScriptRoot
$projectsRoot = Split-Path -Parent $portfolioRoot
$joinRoot = Join-Path $projectsRoot 'join'
$elPolloRoot = Join-Path $projectsRoot 'El Pollo Loco'
$deploymentRoot = Join-Path $portfolioRoot '.deploy\httpdocs'

if (-not (Test-Path -LiteralPath (Join-Path $joinRoot 'angular.json'))) {
  throw "Join project not found at $joinRoot"
}

if (-not (Test-Path -LiteralPath (Join-Path $elPolloRoot 'index.html'))) {
  throw "El Pollo Loco project not found at $elPolloRoot"
}

$resolvedDeploymentParent = (Resolve-Path -LiteralPath $portfolioRoot).Path
if (-not $deploymentRoot.StartsWith($resolvedDeploymentParent, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw 'Deployment target is outside the portfolio project.'
}

if (Test-Path -LiteralPath $deploymentRoot) {
  Remove-Item -LiteralPath $deploymentRoot -Recurse -Force
}
New-Item -ItemType Directory -Path $deploymentRoot -Force | Out-Null

Push-Location $portfolioRoot
try {
  & npm run build
  if ($LASTEXITCODE -ne 0) { throw 'Portfolio build failed.' }
} finally {
  Pop-Location
}

$portfolioBuild = Join-Path $portfolioRoot 'dist\ahmad-ataya-portfolio\browser'
Copy-Item -Path (Join-Path $portfolioBuild '*') -Destination $deploymentRoot -Recurse -Force
Copy-Item -LiteralPath (Join-Path $portfolioBuild '.htaccess') -Destination $deploymentRoot -Force

Push-Location $joinRoot
try {
  & npx ng build --configuration production --base-href /join/
  if ($LASTEXITCODE -ne 0) { throw 'Join build failed.' }
} finally {
  Pop-Location
}

$joinTarget = Join-Path $deploymentRoot 'join'
New-Item -ItemType Directory -Path $joinTarget -Force | Out-Null
$joinBuild = Join-Path $joinRoot 'dist\join\browser'
Copy-Item -Path (Join-Path $joinBuild '*') -Destination $joinTarget -Recurse -Force
if (Test-Path -LiteralPath (Join-Path $joinBuild '.htaccess')) {
  Copy-Item -LiteralPath (Join-Path $joinBuild '.htaccess') -Destination $joinTarget -Force
}

$elPolloTarget = Join-Path $deploymentRoot 'el-pollo-loco'
New-Item -ItemType Directory -Path $elPolloTarget -Force | Out-Null
$elPolloDirectories = @('assets', 'audio', 'classes', 'helper_classes', 'levels', 'scripts', 'styles')
$elPolloFiles = @('index.html', 'style.css')

foreach ($directory in $elPolloDirectories) {
  Copy-Item -LiteralPath (Join-Path $elPolloRoot $directory) -Destination $elPolloTarget -Recurse -Force
}

foreach ($file in $elPolloFiles) {
  Copy-Item -LiteralPath (Join-Path $elPolloRoot $file) -Destination $elPolloTarget -Force
}

Write-Host "Hosting build created at $deploymentRoot"
