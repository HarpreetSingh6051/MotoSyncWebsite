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
  console.log('--- 1. Responsive Viewports ---');
  await capture('http://localhost:3005', 390, 844, 'landing_after_390w.png');
  await capture('http://localhost:3005', 768, 1024, 'landing_after_768w.png');
  await capture('http://localhost:3005', 1280, 800, 'landing_after_1280w.png');
  await capture('http://localhost:3005', 1440, 900, 'landing_after_1440w.png');
  await capture('http://localhost:3005', 1536, 960, 'landing_after_1536w.png');

  console.log('--- 2. Pinned Story Stages (Scroll Transition Evidence) ---');
  await capture('http://localhost:3005?preview_stage=0', 1440, 900, 'pinned_stage1_planning.png');
  await capture('http://localhost:3005?preview_stage=1', 1440, 900, 'pinned_stage2_rendezvous.png');
  await capture('http://localhost:3005?preview_stage=2', 1440, 900, 'pinned_stage3_settlement.png');
  await capture('http://localhost:3005?preview_stage=3', 1440, 900, 'pinned_stage4_community.png');
  await capture('http://localhost:3005?preview_stage=4', 1440, 900, 'pinned_stage5_comms.png');
  await capture('http://localhost:3005?preview_stage=download', 1440, 900, 'landing_download_section.png');
}

run().catch(console.error);
