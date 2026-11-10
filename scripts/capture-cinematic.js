const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\b0c81165-8a40-43e6-8918-2d4c046ef6c6';
const BASE_URL = 'https://moto-sync-web.vercel.app';

async function capture(url, width, height, filename) {
  const outPath = path.join(ARTIFACTS, filename);
  console.log(`Capturing ${filename} (${width}x${height})...`);
  return new Promise((resolve, reject) => {
    const args = [
      '--headless=new',
      `--window-size=${width},${height}`,
      '--disable-gpu',
      '--hide-scrollbars',
      '--virtual-time-budget=2500',
      `--screenshot=${outPath}`,
      url
    ];
    execFile(CHROME, args, { timeout: 25000 }, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error capturing ${filename}:`, err);
        return reject(err);
      }
      console.log(`Saved: ${outPath} (${fs.statSync(outPath).size} bytes)`);
      resolve(outPath);
    });
  });
}

async function run() {
  console.log('--- Capturing Mobile Responsive Widths (360, 390, 430) ---');
  await capture(`${BASE_URL}`, 360, 800, 'cinematic_360w.png');
  await capture(`${BASE_URL}`, 390, 844, 'cinematic_390w.png');
  await capture(`${BASE_URL}`, 430, 932, 'cinematic_430w.png');

  console.log('--- Capturing Desktop Viewports ---');
  await capture(`${BASE_URL}`, 1440, 900, 'cinematic_hero_1440w.png');
  console.log('All screenshots captured successfully!');
}

run().catch(console.error);
