import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, writeFileSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import QRCode from 'qrcode'

const script = resolve('scripts/generate-qr.mjs')
function generate({ envUrl, fileUrl, mode = 'production' } = {}) {
  const cwd = mkdtempSync(join(tmpdir(), 'motosync-qr-'))
  if (fileUrl) writeFileSync(join(cwd, `.env.${mode}`), `VITE_RIDER_URL=${fileUrl}\n`)
  const env = { ...process.env }
  delete env.VITE_RIDER_URL
  if (envUrl) env.VITE_RIDER_URL = envUrl
  const result = spawnSync(process.execPath, [script, mode], { cwd, env, encoding: 'utf8' })
  return { result, source: result.status === 0 ? readFileSync(join(cwd, 'src/lib/qr-matrix.ts'), 'utf8') : '' }
}
test('production environment controls QR destination and encoded modules', () => {
  const url = 'https://example.org/rider?invite=crew'
  const { result, source } = generate({ fileUrl: url })
  assert.equal(result.status, 0, result.stderr)
  assert.ok(source.includes(`export const QR_URL = ${JSON.stringify(url)}`))
  const matrix = JSON.parse(source.match(/QR_MATRIX: number\[\]\[\] = (.*)/)[1])
  assert.deepEqual(matrix.flat(), Array.from(QRCode.create(url, { errorCorrectionLevel: 'M' }).modules.data))
})
test('deployment environment overrides file configuration', () => {
  const { source } = generate({ fileUrl: 'https://file.example', envUrl: 'https://deploy.example' })
  assert.ok(source.includes('export const QR_URL = "https://deploy.example"'))
})
test('non-web destinations fail the build', () => {
  assert.notEqual(generate({ envUrl: 'javascript:alert(1)' }).result.status, 0)
})
