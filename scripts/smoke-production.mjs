import { spawn } from 'node:child_process'
import assert from 'node:assert/strict'
const server = spawn(process.execPath, ['.output/server/index.mjs'], { env: { ...process.env, PORT: '4317', HOST: '127.0.0.1' }, stdio: 'pipe' })
let logs = ''
server.stderr.on('data', chunk => { logs += chunk })
try {
 let response
 for (let attempt = 0; attempt < 30; attempt++) {
  try { response = await fetch('http://127.0.0.1:4317/'); break } catch { await new Promise(resolve => setTimeout(resolve, 200)) }
 }
 assert.ok(response, logs || 'Server did not start')
 assert.equal(response.status, 200)
 const html = await response.text()
 assert.ok(html.includes('TAKE THE NEXT STEP'))
 assert.ok(html.includes('Product in development'))
 assert.ok(html.includes('QR code to open MotoSync'))
 assert.ok(!html.includes('60HZ TELEMETRY'))
 const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]))
 const broken = [...html.matchAll(/href="#([^"]+)"/g)].map(match => match[1]).filter(id => !ids.has(id))
 assert.deepEqual(broken, [], 'Broken section links')
 const assets = new Set([...html.matchAll(/(?:src|href)="(\/[^"#?]+\.(?:js|css|png|webp|svg))"/g)].map(match=>match[1]))
 for(const asset of assets) assert.equal((await fetch(`http://127.0.0.1:4317${asset}`)).status,200,asset)
 console.log(`Production HTTP smoke passed; section anchors and ${assets.size} local assets verified. This is not a browser rendering test.`)
} finally { server.kill() }
