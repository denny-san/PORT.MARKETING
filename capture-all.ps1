# Script para tomar capturas de todas las páginas
Write-Host "🚀 Iniciando proceso de capturas..." -ForegroundColor Cyan

# Iniciar servidor en background
Write-Host "`n📡 Iniciando servidor de desarrollo..." -ForegroundColor Yellow
$devServer = Start-Process -FilePath "npm" -ArgumentList "run", "dev" -PassThru -WindowStyle Hidden

# Esperar a que el servidor inicie
Write-Host "⏳ Esperando 10 segundos para que el servidor inicie..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

# Verificar que el servidor esté corriendo
try {
    $response = Invoke-WebRequest -Uri "http://localhost:5173" -TimeoutSec 5 -UseBasicParsing
    Write-Host "✅ Servidor iniciado correctamente" -ForegroundColor Green
} catch {
    Write-Host "⚠️  El servidor puede no estar listo aún. Esperando 5 segundos más..." -ForegroundColor Yellow
    Start-Sleep -Seconds 5
}

# Ejecutar script de capturas
Write-Host "`n📸 Iniciando capturas de pantalla..." -ForegroundColor Cyan
node screenshot-script.js

# Detener servidor
Write-Host "`n🛑 Deteniendo servidor..." -ForegroundColor Yellow
Stop-Process -Id $devServer.Id -Force -ErrorAction SilentlyContinue

Write-Host "`n✨ Proceso completado!" -ForegroundColor Green
Write-Host "📁 Capturas guardadas en: .\framer-screenshots" -ForegroundColor Cyan

