// Live check: collect every link on the page, verify each responds in a real browser.
import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto('https://ivanfestina.github.io/Portfolio/', { waitUntil: 'networkidle' })

const links = await page.$$eval('a[href]', (as) => as.map((a) => a.href))
console.log(`links on page: ${links.length}`)

for (const href of links) {
  if (href.startsWith('mailto:')) {
    console.log(`mailto ok  ${href}`)
    continue
  }
  const p = await browser.newPage()
  try {
    const resp = await p.goto(href, { waitUntil: 'domcontentloaded', timeout: 30000 })
    const title = (await p.title()).slice(0, 60)
    console.log(`${resp?.status() ?? '???'}  ${href}  «${title}»`)
  } catch (e) {
    console.log(`FAIL  ${href}  ${String(e).slice(0, 80)}`)
  }
  await p.close()
}
await browser.close()
