// Genera public/cv/Denny-Sanchez-CV.pdf a partir de la página /cv.
// Uso: npm run cv:pdf
import fs from 'fs';
import path from 'path';
import { createServer } from 'vite';
import puppeteer from 'puppeteer';

const OUT = path.resolve('public/cv/Denny-Sanchez-CV.pdf');
const PORT = 5199;

const browsers = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
];
const executablePath = process.env.CHROME_PATH || browsers.find((p) => fs.existsSync(p));

const server = await createServer({ server: { port: PORT, strictPort: true }, logLevel: 'error' });
await server.listen();

const browser = await puppeteer.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
try {
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(() => sessionStorage.setItem('intro-seen', '1'));
  await page.setViewport({ width: 1200, height: 1600 });
  await page.goto(`http://localhost:${PORT}/#/cv`, { waitUntil: 'networkidle0' });
  await page.waitForSelector('#cv-sheet');
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMediaType('print');

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  await page.pdf({
    path: OUT,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    pageRanges: '1',
  });
  console.log('CV generado:', OUT, `(${Math.round(fs.statSync(OUT).size / 1024)} KB)`);
} finally {
  await browser.close();
  await server.close();
}
