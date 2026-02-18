import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

// Original site
await page.goto('https://gritakaraoke.com/', { waitUntil: 'networkidle2', timeout: 30000 });
await page.type('input', 'aquamarine-learning-knot');
await page.keyboard.press('Enter');
await new Promise(r => setTimeout(r, 3000));
await page.screenshot({ path: 'original-home.png', fullPage: true });
console.log('✓ Original homepage');

// Clone
await page.goto('http://localhost:3002/', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1000));
await page.screenshot({ path: 'clone-home.png', fullPage: true });
console.log('✓ Clone homepage');

await browser.close();
