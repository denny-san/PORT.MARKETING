// Script para tomar capturas de pantalla de todas las páginas
// Ejecutar: node screenshot-script.js

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Usar el sitio desplegado en Vercel (más confiable)
const BASE_URL = 'https://soc-analyst-portfolio.vercel.app';
// Alternativa local: 'http://localhost:5173'
const OUTPUT_DIR = './framer-screenshots';

// Crear carpeta de salida
const outputPath = path.join(__dirname, OUTPUT_DIR);
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const pages = [
  { name: '01-home', path: '/#/' },
  { name: '02-about', path: '/#/about' },
  { name: '03-skills', path: '/#/skills' },
  { name: '04-experience', path: '/#/experience' },
  { name: '05-certifications', path: '/#/certs' },
  { name: '06-contact', path: '/#/contact' },
];

async function takeScreenshots() {
  console.log('🚀 Iniciando capturas de pantalla...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu'
    ],
    executablePath: undefined, // Usar Chrome instalado en el sistema
    timeout: 60000
  });

  try {
    for (const pageInfo of pages) {
      console.log(`📸 Capturando: ${pageInfo.name}...`);
      
      const page = await browser.newPage();
      
      // Configurar viewport para desktop (1920x1080)
      await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 2
      });

      // Navegar a la página
      const url = `${BASE_URL}${pageInfo.path}`;
      console.log(`   Navegando a: ${url}`);
      
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Esperar a que React cargue
      await page.waitForSelector('body', { visible: true });
      
      // Esperar un poco más para que las animaciones carguen
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Tomar captura desktop
      const desktopPath = path.join(__dirname, OUTPUT_DIR, `${pageInfo.name}-desktop.png`);
      await page.screenshot({
        path: desktopPath,
        fullPage: true,
        type: 'png'
      });

      // Captura móvil (375x667 - iPhone)
      await page.setViewport({
        width: 375,
        height: 667,
        deviceScaleFactor: 2
      });
      
      await page.goto(url, { waitUntil: 'networkidle0' });
      await page.waitForSelector('body', { visible: true });
      await new Promise(resolve => setTimeout(resolve, 3000));

      const mobilePath = path.join(__dirname, OUTPUT_DIR, `${pageInfo.name}-mobile.png`);
      await page.screenshot({
        path: mobilePath,
        fullPage: true,
        type: 'png'
      });

      await page.close();
      console.log(`✅ ${pageInfo.name} completado`);
    }

    console.log(`\n✨ Todas las capturas guardadas en: ${OUTPUT_DIR}`);
    console.log(`📁 Archivos creados:`);
    pages.forEach(p => {
      console.log(`   - ${p.name}-desktop.png`);
      console.log(`   - ${p.name}-mobile.png`);
    });

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await browser.close();
  }
}

takeScreenshots();

