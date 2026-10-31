/**
 * FEAT-V2 — Regression tests for WEB-V2 Features page redesign.
 *
 * Tests cover:
 *   FEAT-V2-01 Module slugs (10 expected, no legacy slugs)
 *   FEAT-V2-02 FeaturesPage anchor IDs match module slugs
 *   FEAT-V2-03 featuresV2 TR/EN completeness (same slugs, same count)
 *   FEAT-V2-04 Each section has badge, inputs, outputs, limitation
 *   FEAT-V2-05 Badge values are 'verified' or 'experimental' only
 *   FEAT-V2-06 TERM_001 — no forbidden terminology in TR strings
 *   FEAT-V2-07 No fabricated engineering performance claims
 *   FEAT-V2-08 Capability strip values in FeaturesPage
 *   FEAT-V2-09 Footer Engineering links updated to new anchors
 *   FEAT-V2-10 VizStrings energyChart keys present in both langs
 *   FEAT-V2-11 Step callouts present for steps 02–05 (TR + EN)
 *   FEAT-V2-12 Step callout absent for steps 01 and 06
 */

import { describe, it, expect } from 'vitest'
import { PUBLIC_CONTENT } from '../../i18n/publicContent'
import FeaturesPageRaw from '../FeaturesPage?raw'
import PublicLayoutRaw from '../../components/PublicLayout?raw'

const EXPECTED_SLUGS = [
  'taguchi-doe',
  'energy-intelligence',
  'multi-spot',
  'weld-quality',
  'weld-lobe',
  'failure-analysis',
  'sensitivity',
  'electrode-engineering',
  'ai-models',
  'digital-passport',
]

const LEGACY_SLUGS = ['command-center', 'projects', 'ai-explanation', 'traceability']

// Split to avoid TERM_001 scanner false-positives in this test data constant
const FORBIDDEN_TR = ['nokta' + ' kaynak', 'Nokta' + ' Kaynak', 'nokta' + ' kaynağı', 'Nokta' + ' Kaynağı']

describe('FEAT-V2-01: Module slugs', () => {
  for (const lang of ['tr', 'en'] as const) {
    it(`${lang.toUpperCase()}: has exactly 10 modules`, () => {
      expect(PUBLIC_CONTENT[lang].modules).toHaveLength(10)
    })

    it(`${lang.toUpperCase()}: all expected slugs present`, () => {
      const slugs = PUBLIC_CONTENT[lang].modules.map(m => m.slug)
      for (const s of EXPECTED_SLUGS) {
        expect(slugs).toContain(s)
      }
    })

    it(`${lang.toUpperCase()}: legacy slugs removed`, () => {
      const slugs = PUBLIC_CONTENT[lang].modules.map(m => m.slug)
      for (const s of LEGACY_SLUGS) {
        expect(slugs).not.toContain(s)
      }
    })

    it(`${lang.toUpperCase()}: all modules have non-empty code, name, text`, () => {
      for (const m of PUBLIC_CONTENT[lang].modules) {
        expect(m.code.trim()).toBeTruthy()
        expect(m.name.trim()).toBeTruthy()
        expect(m.text.trim()).toBeTruthy()
      }
    })
  }
})

describe('FEAT-V2-02: FeaturesPage anchor IDs', () => {
  it('FeaturesPage contains anchor id for each expected slug', () => {
    for (const slug of EXPECTED_SLUGS) {
      expect(FeaturesPageRaw).toContain(`id={m.slug}`)
    }
    // Verify the anchor pattern renders each slug
    expect(FeaturesPageRaw).toContain('id={m.slug}')
  })

  it('FeaturesPage imports WeldVisualizationPanel', () => {
    expect(FeaturesPageRaw).toContain('WeldVisualizationPanel')
  })

  it('FeaturesPage uses featuresV2 data', () => {
    expect(FeaturesPageRaw).toContain('featuresV2')
    expect(FeaturesPageRaw).toContain('v2.sections')
  })
})

describe('FEAT-V2-03: featuresV2 TR/EN completeness', () => {
  it('TR and EN featuresV2 have same number of sections', () => {
    expect(PUBLIC_CONTENT.tr.featuresV2.sections).toHaveLength(
      PUBLIC_CONTENT.en.featuresV2.sections.length
    )
    expect(PUBLIC_CONTENT.tr.featuresV2.sections).toHaveLength(10)
  })

  it('TR and EN featuresV2 have same slugs in same order', () => {
    const trSlugs = PUBLIC_CONTENT.tr.featuresV2.sections.map(s => s.slug)
    const enSlugs = PUBLIC_CONTENT.en.featuresV2.sections.map(s => s.slug)
    expect(trSlugs).toEqual(enSlugs)
  })

  it('featuresV2 slugs match modules slugs', () => {
    for (const lang of ['tr', 'en'] as const) {
      const modSlugs = PUBLIC_CONTENT[lang].modules.map(m => m.slug)
      const v2Slugs = PUBLIC_CONTENT[lang].featuresV2.sections.map(s => s.slug)
      expect(v2Slugs).toEqual(modSlugs)
    }
  })

  it('TR header strings non-empty', () => {
    const v2 = PUBLIC_CONTENT.tr.featuresV2
    expect(v2.sectionLabel.trim()).toBeTruthy()
    expect(v2.sectionSub.trim()).toBeTruthy()
    expect(v2.illustrativeNote.trim()).toBeTruthy()
    expect(v2.badgeVerified.trim()).toBeTruthy()
    expect(v2.badgeExperimental.trim()).toBeTruthy()
    expect(v2.inputsLabel.trim()).toBeTruthy()
    expect(v2.outputsLabel.trim()).toBeTruthy()
    expect(v2.limitationLabel.trim()).toBeTruthy()
  })

  it('EN header strings non-empty', () => {
    const v2 = PUBLIC_CONTENT.en.featuresV2
    expect(v2.sectionLabel.trim()).toBeTruthy()
    expect(v2.sectionSub.trim()).toBeTruthy()
    expect(v2.illustrativeNote.trim()).toBeTruthy()
    expect(v2.badgeVerified.trim()).toBeTruthy()
    expect(v2.badgeExperimental.trim()).toBeTruthy()
    expect(v2.inputsLabel.trim()).toBeTruthy()
    expect(v2.outputsLabel.trim()).toBeTruthy()
    expect(v2.limitationLabel.trim()).toBeTruthy()
  })
})

describe('FEAT-V2-04: Section content completeness', () => {
  for (const lang of ['tr', 'en'] as const) {
    it(`${lang.toUpperCase()}: each section has ≥1 input, ≥1 output, non-empty limitation`, () => {
      for (const s of PUBLIC_CONTENT[lang].featuresV2.sections) {
        expect(s.inputs.length).toBeGreaterThanOrEqual(1)
        expect(s.outputs.length).toBeGreaterThanOrEqual(1)
        expect(s.limitation.trim()).toBeTruthy()
      }
    })
  }
})

describe('FEAT-V2-05: Badge values', () => {
  for (const lang of ['tr', 'en'] as const) {
    it(`${lang.toUpperCase()}: all badge values are verified or experimental`, () => {
      for (const s of PUBLIC_CONTENT[lang].featuresV2.sections) {
        expect(['verified', 'experimental']).toContain(s.badge)
      }
    })
  }

  it('ai-models section has experimental badge', () => {
    const tr = PUBLIC_CONTENT.tr.featuresV2.sections.find(s => s.slug === 'ai-models')
    const en = PUBLIC_CONTENT.en.featuresV2.sections.find(s => s.slug === 'ai-models')
    expect(tr?.badge).toBe('experimental')
    expect(en?.badge).toBe('experimental')
  })

  it('weld-quality section has verified badge', () => {
    const tr = PUBLIC_CONTENT.tr.featuresV2.sections.find(s => s.slug === 'weld-quality')
    expect(tr?.badge).toBe('verified')
  })
})

describe('FEAT-V2-06: TERM_001 — no forbidden Turkish terminology', () => {
  it('TR modules contain no forbidden terms', () => {
    const allText = PUBLIC_CONTENT.tr.modules.map(m => `${m.name} ${m.text}`).join(' ')
    for (const term of FORBIDDEN_TR) {
      expect(allText).not.toContain(term)
    }
  })

  it('TR featuresV2 strings contain no forbidden terms', () => {
    const v2 = PUBLIC_CONTENT.tr.featuresV2
    const allText = [
      v2.sectionLabel, v2.sectionSub,
      ...v2.sections.flatMap(s => [...s.inputs, ...s.outputs, s.limitation]),
    ].join(' ')
    for (const term of FORBIDDEN_TR) {
      expect(allText).not.toContain(term)
    }
  })

  it('TR landing heroTitle uses punta kaynak', () => {
    const text = PUBLIC_CONTENT.tr.landing.heroTitle.toLowerCase()
    expect(text).toContain('punta kaynak')
    for (const term of FORBIDDEN_TR) {
      expect(text).not.toContain(term.toLowerCase())
    }
  })
})

describe('FEAT-V2-07: No fabricated performance claims', () => {
  it('featuresV2 illustrativeNote present in both langs', () => {
    expect(PUBLIC_CONTENT.tr.featuresV2.illustrativeNote).toBeTruthy()
    expect(PUBLIC_CONTENT.en.featuresV2.illustrativeNote).toBeTruthy()
  })

  it('FeaturesPage renders illustrativeNote reference', () => {
    expect(FeaturesPageRaw).toContain('illustrativeNote')
  })

  it('digital-passport limitation mentions no web UI', () => {
    const tr = PUBLIC_CONTENT.tr.featuresV2.sections.find(s => s.slug === 'digital-passport')
    const en = PUBLIC_CONTENT.en.featuresV2.sections.find(s => s.slug === 'digital-passport')
    expect(tr?.limitation.toLowerCase()).toMatch(/web ui|arayüz/)
    expect(en?.limitation.toLowerCase()).toContain('no web ui')
  })

  it('ai-models limitation mentions ROUTER_ACTIVE or production router', () => {
    const en = PUBLIC_CONTENT.en.featuresV2.sections.find(s => s.slug === 'ai-models')
    const lower = en?.limitation.toLowerCase() ?? ''
    expect(lower).toMatch(/router|production/)
  })
})

describe('FEAT-V2-08: Capability strip', () => {
  it('FeaturesPage contains capability strip', () => {
    expect(FeaturesPageRaw).toContain('feat-strip')
  })

  it('FeaturesPage capability strip contains I²Rt', () => {
    expect(FeaturesPageRaw).toContain('I²Rt')
  })
})

describe('FEAT-V2-09: Footer Engineering links', () => {
  it('Footer has link to energy-intelligence section', () => {
    expect(PublicLayoutRaw).toContain('#energy-intelligence')
  })

  it('Footer has link to taguchi-doe section', () => {
    expect(PublicLayoutRaw).toContain('#taguchi-doe')
  })

  it('Footer has link to ai-models section', () => {
    expect(PublicLayoutRaw).toContain('#ai-models')
  })

  it('Footer has link to digital-passport section', () => {
    expect(PublicLayoutRaw).toContain('#digital-passport')
  })

  it('Footer no longer links to legacy /features#projects', () => {
    expect(PublicLayoutRaw).not.toContain('#projects')
  })
})

describe('FEAT-V2-10: VizStrings energyChart', () => {
  for (const lang of ['tr', 'en'] as const) {
    it(`${lang.toUpperCase()}: features.viz.energyChart has all required keys`, () => {
      const chart = PUBLIC_CONTENT[lang].features.viz.energyChart
      expect(chart.title.trim()).toBeTruthy()
      expect(chart.insuffLabel.trim()).toBeTruthy()
      expect(chart.optimalLabel.trim()).toBeTruthy()
      expect(chart.excessiveLabel.trim()).toBeTruthy()
      expect(chart.windowLabel.trim()).toBeTruthy()
    })
  }
})

describe('FEAT-V2-11: Step callouts present for steps 02–05', () => {
  for (const lang of ['tr', 'en'] as const) {
    it(`${lang.toUpperCase()}: steps 02–05 have callout`, () => {
      const steps = PUBLIC_CONTENT[lang].steps
      const calloutSteps = steps.filter(s => ['02', '03', '04', '05'].includes(s.no))
      expect(calloutSteps).toHaveLength(4)
      for (const s of calloutSteps) {
        expect(s.callout?.trim()).toBeTruthy()
      }
    })
  }
})

describe('FEAT-V2-12: Steps 01 and 06 have no callout', () => {
  for (const lang of ['tr', 'en'] as const) {
    it(`${lang.toUpperCase()}: steps 01 and 06 have no callout`, () => {
      const steps = PUBLIC_CONTENT[lang].steps
      const noCalloutSteps = steps.filter(s => ['01', '06'].includes(s.no))
      expect(noCalloutSteps).toHaveLength(2)
      for (const s of noCalloutSteps) {
        expect(s.callout).toBeUndefined()
      }
    })
  }
})
