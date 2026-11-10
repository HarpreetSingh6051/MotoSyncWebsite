import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'

const ARTIFACT_DIR = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\b0c81165-8a40-43e6-8918-2d4c046ef6c6'

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = ''
      res.on('data', (chunk) => (data += chunk))
      res.on('end', () => {
        try {
          resolve(JSON.parse(data))
        } catch (e) {
          reject(e)
        }
      })
    }).on('error', reject)
  })
}

function sendCommand(ws, method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = Math.floor(Math.random() * 1000000)
    const handleMsg = (event) => {
      try {
        const msg = JSON.parse(event.data)
        if (msg.id === id) {
          ws.removeEventListener('message', handleMsg)
          if (msg.error) reject(new Error(JSON.stringify(msg.error)))
          else resolve(msg.result)
        }
      } catch (err) {
        // ignore
      }
    }
    ws.addEventListener('message', handleMsg)
    ws.send(JSON.stringify({ id, method, params }))
  })
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function run() {
  const version = await fetchJson('http://127.0.0.1:9222/json/version')
  console.log('Chrome version connected:', version.Browser)

  const targets = await fetchJson('http://127.0.0.1:9222/json/list')
  let pageTarget = targets.find((t) => t.type === 'page')

  if (!pageTarget) {
    const newTab = await fetchJson('http://127.0.0.1:9222/json/new?http://localhost:3009/')
    pageTarget = newTab
  }

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl)
  await new Promise((resolve, reject) => {
    ws.onopen = resolve
    ws.onerror = reject
  })

  console.log('WebSocket connected to page target.')

  await sendCommand(ws, 'Page.enable')
  await sendCommand(ws, 'DOM.enable')

  // Set desktop viewport
  await sendCommand(ws, 'Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  })

  await sendCommand(ws, 'Page.navigate', { url: 'http://localhost:3009/' })
  await sleep(2500)

  async function snap(name, filename) {
    const res = await sendCommand(ws, 'Page.captureScreenshot', { format: 'png' })
    const buffer = Buffer.from(res.data, 'base64')
    const outPath = path.join(ARTIFACT_DIR, filename)
    fs.writeFileSync(outPath, buffer)
    console.log(`Saved screenshot: ${filename} (${buffer.length} bytes)`)
  }

  async function scrollToSection(id) {
    await sendCommand(ws, 'Runtime.evaluate', {
      expression: `
        (() => {
          const el = document.getElementById('${id}');
          if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
        })()
      `,
    })
    await sleep(700)
  }

  console.log('Capturing Desktop Scenes...')
  await scrollToSection('hero')
  await snap('Hero Scene', 'gentle_scene1_hero_1440w.png')

  await scrollToSection('invite')
  await snap('Invite Scene', 'gentle_scene2_invite_1440w.png')

  await scrollToSection('radar')
  // Scroll slightly down inside radar to test convergence
  await sendCommand(ws, 'Runtime.evaluate', {
    expression: `window.scrollBy({ top: 350, behavior: 'instant' })`,
  })
  await sleep(700)
  await snap('Radar Scene', 'gentle_scene3_radar_1440w.png')

  await scrollToSection('intercom')
  await snap('Intercom Scene', 'gentle_scene4_intercom_1440w.png')

  await scrollToSection('split')
  await snap('Split Scene', 'gentle_scene5_splits_1440w.png')

  await scrollToSection('chat')
  await snap('Chat Scene', 'gentle_scene6_chat_1440w.png')

  await scrollToSection('finale')
  await snap('Finale Scene', 'gentle_scene7_finale_1440w.png')

  // Mobile screenshots: 390w (iPhone 14/15/16)
  console.log('Capturing Mobile 390w...')
  await sendCommand(ws, 'Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  })
  await scrollToSection('hero')
  await sleep(600)
  await snap('Mobile 390w Hero', 'gentle_mobile_390w_hero.png')

  await scrollToSection('invite')
  await sleep(600)
  await snap('Mobile 390w Invite', 'gentle_mobile_390w_invite.png')

  await scrollToSection('radar')
  await sleep(600)
  await snap('Mobile 390w Radar', 'gentle_mobile_390w_radar.png')

  // Mobile 360w (compact Android)
  console.log('Capturing Mobile 360w...')
  await sendCommand(ws, 'Emulation.setDeviceMetricsOverride', {
    width: 360,
    height: 780,
    deviceScaleFactor: 2,
    mobile: true,
  })
  await scrollToSection('hero')
  await sleep(600)
  await snap('Mobile 360w', 'gentle_mobile_360w.png')

  // Mobile 430w (iPhone Pro Max)
  console.log('Capturing Mobile 430w...')
  await sendCommand(ws, 'Emulation.setDeviceMetricsOverride', {
    width: 430,
    height: 932,
    deviceScaleFactor: 2,
    mobile: true,
  })
  await scrollToSection('hero')
  await sleep(600)
  await snap('Mobile 430w', 'gentle_mobile_430w.png')

  ws.close()
  console.log('Done capturing all screenshots!')
}

run().catch((err) => {
  console.error('Error running capture:', err)
  process.exit(1)
})
