/**
 * WEB-ROUTING-01 — Base-path routing regression tests.
 *
 * Tests cover:
 *   ROUTE-01  BrowserRouter basename is '/SpotWeldPro-Web'
 *   ROUTE-02  Vite marketing config base matches basename
 *   ROUTE-03  404.html segmentCount = 1 (one sub-directory segment)
 *   ROUTE-04  index.marketing.html restore script prepends base path
 *   ROUTE-05  index.marketing.html restore script uses dynamic l.pathname (no hardcoded hostname)
 *   ROUTE-06  No raw <a href="/#..."> for nav items in PublicLayout (use Link instead)
 *   ROUTE-07  All nav Link destinations have no hardcoded hostname
 *   ROUTE-08  Route paths are self-contained (no absolute URLs)
 */

import { describe, it, expect } from 'vitest'
import MainMarketingRaw from '../../main.marketing?raw'
import PublicLayoutRaw from '../../components/PublicLayout?raw'
import IndexMarketingRaw from '../../../index.marketing.html?raw'
import FourOhFourRaw from '../../../public/404.html?raw'
import ViteConfigRaw from '../../../vite.config.marketing.ts?raw'

const EXPECTED_BASENAME = '/SpotWeldPro-Web'

describe('ROUTE-01: BrowserRouter basename', () => {
  it('main.marketing.tsx sets basename to /SpotWeldPro-Web', () => {
    expect(MainMarketingRaw).toContain(`basename="${EXPECTED_BASENAME}"`)
  })

  it('main.marketing.tsx uses BrowserRouter (not HashRouter)', () => {
    expect(MainMarketingRaw).toContain('BrowserRouter')
    expect(MainMarketingRaw).not.toContain('HashRouter')
  })
})

describe('ROUTE-02: Vite base matches basename', () => {
  it("vite.config.marketing.ts has base: '/SpotWeldPro-Web/'", () => {
    expect(ViteConfigRaw).toContain(`base: '${EXPECTED_BASENAME}/'`)
  })
})

describe('ROUTE-03: 404.html segmentCount', () => {
  it('404.html has segmentCount = 1', () => {
    expect(FourOhFourRaw).toContain('segmentCount = 1')
  })

  it('404.html redirect preserves the base sub-directory', () => {
    expect(FourOhFourRaw).toContain('1 + segmentCount')
    expect(FourOhFourRaw).toContain('slice(segmentCount)')
  })
})

describe('ROUTE-04: index.marketing.html restore prepends base path', () => {
  it('restore script stores decoded path in a variable before replaceState', () => {
    expect(IndexMarketingRaw).toContain('var path = decoded.shift()')
  })

  it('restore script reads base from l.pathname', () => {
    expect(IndexMarketingRaw).toContain('l.pathname.replace')
  })

  it('restore script guards path with indexOf(base) check', () => {
    expect(IndexMarketingRaw).toContain('path.indexOf(base)')
  })

  it('restore script does NOT call replaceState with raw decoded.shift()', () => {
    // Old (broken): replaceState(..., decoded.shift() + ...)
    expect(IndexMarketingRaw).not.toMatch(/replaceState\s*\([^)]*decoded\.shift\(\)/)
  })

  it('restore script passes path (with base) to replaceState', () => {
    expect(IndexMarketingRaw).toMatch(/replaceState\s*\(\s*null\s*,\s*null\s*,\s*path/)
  })
})

describe('ROUTE-05: No hardcoded hostname in restore script', () => {
  it('index.marketing.html does not hardcode spotweldpro-ai.github.io', () => {
    expect(IndexMarketingRaw).not.toContain('spotweldpro-ai.github.io')
  })

  it('404.html does not hardcode spotweldpro-ai.github.io', () => {
    expect(FourOhFourRaw).not.toContain('spotweldpro-ai.github.io')
  })
})

describe('ROUTE-06: PublicLayout nav uses React Router Link for all items', () => {
  it('no raw <a href> for nav items with n.label as content', () => {
    // The old anchor special-case: <a key={n.to} href={n.to}>{n.label}</a>
    expect(PublicLayoutRaw).not.toMatch(/<a[^>]+href=\{n\.to\}/)
  })

  it('no n.to.startsWith anchor ternary in nav render', () => {
    expect(PublicLayoutRaw).not.toContain('n.to.startsWith')
  })

  it('nav renders all items via React Router Link component', () => {
    expect(PublicLayoutRaw).toContain('to={n.to}')
  })
})

describe('ROUTE-07: No hardcoded hostname in nav or routes', () => {
  it('PublicLayout nav has no hardcoded github.io', () => {
    expect(PublicLayoutRaw).not.toContain('github.io')
  })

  it('main.marketing.tsx routes have no hardcoded github.io', () => {
    expect(MainMarketingRaw).not.toContain('github.io')
  })
})

describe('ROUTE-08: Route paths are self-contained', () => {
  it('route paths do not include SpotWeldPro-Web prefix (basename handles it)', () => {
    const routeLines = MainMarketingRaw.split('\n').filter(l => l.includes('path='))
    for (const line of routeLines) {
      expect(line).not.toContain('http')
      expect(line).not.toContain('SpotWeldPro-Web')
    }
  })

  it('all expected page routes are defined', () => {
    expect(MainMarketingRaw).toContain('path="/"')
    expect(MainMarketingRaw).toContain('path="/features"')
    expect(MainMarketingRaw).toContain('path="/how-it-works"')
    expect(MainMarketingRaw).toContain('path="/packages"')
    expect(MainMarketingRaw).toContain('path="/demo"')
    expect(MainMarketingRaw).toContain('path="*"')
  })
})
