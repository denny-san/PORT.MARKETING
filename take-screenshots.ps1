# Script PowerShell para tomar capturas usando Selenium
# Requiere: Install-Module Selenium

Write-Host "🚀 Preparando capturas de pantalla..." -ForegroundColor Cyan

$baseUrl = "http://localhost:3000"
$outputDir = ".\framer-screenshots"

# Crear carpeta de salida
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

$pages = @(
    @{name="home"; path="/"},
    @{name="about"; path="/about"},
    @{name="skills"; path="/skills"},
    @{name="experience"; path="/experience"},
    @{name="certifications"; path="/certs"},
    @{name="contact"; path="/contact"}
)

Write-Host "`n⚠️  Para tomar capturas automáticas, necesitas:" -ForegroundColor Yellow
Write-Host "   1. Instalar Puppeteer: npm install puppeteer" -ForegroundColor Yellow
Write-Host "   2. Ejecutar: node screenshot-script.js" -ForegroundColor Yellow
Write-Host "`n📋 O toma las capturas manualmente:" -ForegroundColor Cyan
Write-Host "   1. Abre http://localhost:3000 en tu navegador" -ForegroundColor White
Write-Host "   2. Navega a cada página y toma capturas (F12 > Screenshot)" -ForegroundColor White
Write-Host "   3. Guarda en: $outputDir" -ForegroundColor White
Write-Host "`n📸 Páginas a capturar:" -ForegroundColor Cyan
foreach ($page in $pages) {
    Write-Host "   - $($page.name): $baseUrl$($page.path)" -ForegroundColor Gray
}

Write-Host "`n💡 Recomendación: Usa herramientas como:" -ForegroundColor Yellow
Write-Host "   - Lightshot (https://app.prntscr.com/)" -ForegroundColor White
Write-Host "   - ShareX (https://getsharex.com/)" -ForegroundColor White
Write-Host "   - Herramienta de captura de Windows (Win + Shift + S)" -ForegroundColor White


