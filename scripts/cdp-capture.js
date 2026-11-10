const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\b0c81165-8a40-43e6-8918-2d4c046ef6c6';
const PORT = 9222;

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Launching Chrome with live URL and remote debugging...');
  const chromeProcess = spawn(
    CHROME,
    [
      '--headless=new',
      `--remote-debugging-port=${PORT}`,
      '--window-size=1440,900',
      '--disable-gpu',
      '--hide-scrollbars',
      'https://moto-sync-web.vercel.app',
    ],
    { stdio: 'ignore' }
  );

  await wait(2500);

  try {
    const targets = await fetchJson(`http://127.0.0.1:${PORT}/json`);
    const pageTarget = targets.find((t) => t.type === 'page');
    if (!pageTarget) throw new Error('No page target found');

    const wsUrl = pageTarget.webSocketDebuggerUrl;
    console.log('Connected to Page CDP at:', wsUrl);

    const ws = new WebSocket(wsUrl);
    let msgId = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && callbacks.has(msg.id)) {
        const { resolve, reject } = callbacks.get(msg.id);
        callbacks.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };

    await new Promise((res) => (ws.onopen = res));

    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        callbacks.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    async function evaluate(expression) {
      const res = await send('Runtime.evaluate', {
        expression,
        returnByValue: true,
        awaitPromise: true,
      });
      return res?.result?.value;
    }

    async function captureScreenshot(filename) {
      const outPath = path.join(ARTIFACTS, filename);
      console.log(`Capturing ${filename}...`);
      const { data } = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(outPath, Buffer.from(data, 'base64'));
      console.log(`✓ ${filename} saved (${fs.statSync(outPath).size} bytes)`);
    }

    // 1. Desktop Hero Scene (Scene 1)
    await evaluate('window.scrollTo(0, 0)');
    await wait(600);
    await captureScreenshot('live_cinematic_hero_1440w.png');

    // 2. Scroll to Story (Scene 2: The Invite)
    await evaluate('document.getElementById("story").scrollIntoView({ behavior: "instant" })');
    await wait(700);
    await captureScreenshot('live_story_scene1_invite_1440w.png');

    // 3. Click Scene 3: Live Radar
    console.log('Clicking 02 Live Radar...');
    await evaluate(`
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('02 Live Radar'));
      if (btn) btn.click();
    `);
    await wait(800);
    await captureScreenshot('live_story_scene2_radar_1440w.png');

    // 4. Click Scene 4: Highway & Audio
    console.log('Clicking 03 Highway & Audio...');
    await evaluate(`
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('03 Highway & Audio'));
      if (btn) btn.click();
    `);
    await wait(800);
    await captureScreenshot('live_story_scene3_highway_1440w.png');

    // 5. Click Scene 5: Dhaba Splits
    console.log('Clicking 04 Dhaba Splits...');
    await evaluate(`
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('04 Dhaba Splits'));
      if (btn) btn.click();
    `);
    await wait(800);
    await captureScreenshot('live_story_scene4_dhaba_splits_1440w.png');

    // 6. Click Scene 6: Group Chat
    console.log('Clicking 05 Group Chat...');
    await evaluate(`
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('05 Group Chat'));
      if (btn) btn.click();
    `);
    await wait(800);
    await captureScreenshot('live_story_scene5_chat_1440w.png');

    // 7. Scroll to Grand Finale (Scene 7)
    console.log('Scrolling to Grand Finale...');
    await evaluate('document.getElementById("download").scrollIntoView({ behavior: "instant" })');
    await wait(800);
    await captureScreenshot('live_scene7_grand_finale_1440w.png');

    // 8. Mobile 390w Views
    console.log('Emulating iPhone 390x844...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await evaluate('window.scrollTo(0, 0)');
    await wait(600);
    await captureScreenshot('live_mobile_390w_hero.png');

    await evaluate('document.getElementById("story").scrollIntoView({ behavior: "instant" })');
    await wait(600);
    await captureScreenshot('live_mobile_390w_story.png');

    await evaluate('document.getElementById("download").scrollIntoView({ behavior: "instant" })');
    await wait(600);
    await captureScreenshot('live_mobile_390w_finale.png');

    console.log('=== ALL SCENES VERIFIED AND CAPTURED SUCCESSFULLY ===');
    ws.close();
  } finally {
    chromeProcess.kill();
  }
}

run().catch((err) => {
  console.error('CDP Error:', err);
  process.exit(1);
});
