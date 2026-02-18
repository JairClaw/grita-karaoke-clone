import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('https://gritakaraoke.com/', { waitUntil: 'networkidle2', timeout: 30000 });
await page.type('input', 'aquamarine-learning-knot');
await page.keyboard.press('Enter');
await new Promise(r => setTimeout(r, 3000));
// Go to menu
await page.goto('https://gritakaraoke.com/menu', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 2000));
await page.screenshot({ path: 'original-menu.png', fullPage: true });
console.log('✓ Menu captured');
await browser.close();
