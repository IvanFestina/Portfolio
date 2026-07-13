// Visual verification: full-page screenshots at desktop/mobile in both themes.
// Usage: node scripts/screenshots.mjs [url]  (default: local dev server)
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const url = process.argv[2] ?? 'http://localhost:5173/Portfolio/'
const outDir = new URL('../shots/', import.meta.url).pathname
mkdirSync(outDir, { recursive: true })

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'mobile-390', width: 390, height: 844 },
]
const themes = ['light', 'dark']

const browser = await chromium.launch()
for (const vp of viewports) {
  for (const theme of themes) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      colorScheme: theme,
      deviceScaleFactor: 2,
    })
    await page.goto(url, { waitUntil: 'networkidle' })
    const file = `${outDir}${vp.name}-${theme}.png`
    await page.screenshot({ path: file, fullPage: true })
    console.log(`✓ ${file}`)
    await page.close()
  }
}
await browser.close()
