const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\b0c81165-8a40-43e6-8918-2d4c046ef6c6';

async function capture(url, width, height, filename) {
  const outPath = path.join(ARTIFACTS, filename);
  console.log(`Capturing ${filename} (${width}x${height})...`);
  return new Promise((resolve, reject) => {
    const args = [
      '--headless=new',
      `--window-size=${width},${height}`,
      '--disable-gpu',
      '--hide-scrollbars',
      `--screenshot=${outPath}`,
      url
    ];
    execFile(CHROME, args, { timeout: 15000 }, (err, stdout, stderr) => {
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
  await capture('http://localhost:3005', 390, 844, 'landing_before_390w.png');
  await capture('http://localhost:3005', 1440, 900, 'landing_before_1440w.png');
}

run().catch(console.error);
