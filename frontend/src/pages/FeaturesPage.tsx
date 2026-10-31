import { Link } from 'react-router-dom'
import { PublicLayout } from '../components/PublicLayout'
import { useLang } from '../i18n/useLang'
import { PUBLIC_CONTENT } from '../i18n/publicContent'
import { WeldVisualizationPanel } from '../components/public/WeldVisualizationPanel'

export function FeaturesPage() {
  const { lang } = useLang()
  const t = PUBLIC_CONTENT[lang]
  const f = t.features
  const v2 = t.featuresV2

  const sectionMap = Object.fromEntries(v2.sections.map(s => [s.slug, s]))

  return (
    <PublicLayout>
      <main className="pub-main">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="pub-hero" aria-labelledby="features-hero">
          <span className="eyebrow">{f.eyebrow}</span>
          <h1 id="features-hero">{f.heroTitle}</h1>
          <p className="lead">{f.heroSubtitle}</p>
        </section>

        {/* ── Capability strip ───────────────────────────────────── */}
        <div className="feat-strip" role="list" aria-label={v2.sectionLabel}>
          <div className="feat-strip-item" role="listitem">
            <span className="feat-strip-num">10</span>
            <span className="feat-strip-label">{v2.badgeVerified}</span>
          </div>
          <div className="feat-strip-item" role="listitem">
            <span className="feat-strip-num">L4–L27</span>
            <span className="feat-strip-label">{lang === 'tr' ? 'Ortogonal Dizi' : 'Orthogonal Array'}</span>
          </div>
          <div className="feat-strip-item" role="listitem">
            <span className="feat-strip-num">I²Rt</span>
            <span className="feat-strip-label">{lang === 'tr' ? 'Enerji Modeli' : 'Energy Model'}</span>
          </div>
          <div className="feat-strip-item" role="listitem">
            <span className="feat-strip-num">6</span>
            <span className="feat-strip-label">{lang === 'tr' ? 'Malzeme Ailesi' : 'Material Families'}</span>
          </div>
          <div className="feat-strip-item" role="listitem">
            <span className="feat-strip-num">10</span>
            <span className="feat-strip-label">{lang === 'tr' ? 'Pasaport Aşaması' : 'Passport Lifecycle States'}</span>
          </div>
        </div>

        {/* ── Section heading ────────────────────────────────────── */}
        <section className="pub-section" aria-labelledby="feat-v2-overview-title">
          <h2 id="feat-v2-overview-title" className="pub-h2">{v2.sectionLabel}</h2>
          <p className="pub-sub">{v2.sectionSub}</p>
        </section>

        {/* ── 10 capability sections ─────────────────────────────── */}
        {t.modules.map((m, i) => {
          const detail = sectionMap[m.slug]
          if (!detail) return null
          const isReversed = i % 2 === 1

          return (
            <section
              key={m.slug}
              id={m.slug}
              className="pub-section feat-v2-section"
              aria-labelledby={`feat-${m.slug}-title`}
            >
              <div className={'feat-v2-inner' + (isReversed ? ' feat-v2-inner--reverse' : '')}>

                {/* Text column */}
                <div className="feat-v2-text">
                  <div className="feat-v2-header">
                    <span className="feat-v2-code" aria-hidden="true">{m.code}</span>
                    <span className={`feat-v2-badge feat-v2-badge--${detail.badge}`}>
                      {detail.badge === 'verified' ? v2.badgeVerified : v2.badgeExperimental}
                    </span>
                  </div>
                  <h2 id={`feat-${m.slug}-title`} className="feat-v2-title">{m.name}</h2>
                  <p className="feat-v2-subtitle">{m.text}</p>

                  <div className="feat-v2-cols">
                    <div>
                      <div className="feat-v2-label">{v2.inputsLabel}</div>
                      <ul className="feat-v2-bullets">
                        {detail.inputs.map((inp, j) => <li key={j}>{inp}</li>)}
                      </ul>
                    </div>
                    <div>
                      <div className="feat-v2-label">{v2.outputsLabel}</div>
                      <ul className="feat-v2-bullets">
                        {detail.outputs.map((out, j) => <li key={j}>{out}</li>)}
                      </ul>
                    </div>
                  </div>

                  <p className="feat-v2-limitation">
                    <span className="feat-v2-limitation-label">{v2.limitationLabel}:</span>{' '}
                    {detail.limitation}
                  </p>

                  <Link to="/demo" className="btn btn-secondary btn-sm">{f.demoBtn}</Link>
                </div>

                {/* Viz column */}
                <div className="feat-v2-viz" aria-hidden="true">
                  <CapabilityDiagram slug={m.slug} index={i} lang={lang} />
                </div>

              </div>
            </section>
          )
        })}

        {/* ── Engineering visualizations panel ─────────────────── */}
        <WeldVisualizationPanel v={f.viz} />

        <p className="viz-demo-note">{v2.illustrativeNote}</p>

        {/* ── Trust note ────────────────────────────────────────── */}
        <aside className="pub-trust" role="note">
          <span className="pub-icon" aria-hidden="true">i</span>
          <span>
            <b>{t.trustNote.bold}</b>{t.trustNote.rest}
          </span>
        </aside>

      </main>
    </PublicLayout>
  )
}

/* ─────────────────────────────────────────────────────────────────
   Capability Diagram — per-section illustrative engineering display.
   All values are example only. Labels are hardcoded in TR/EN
   engineering notation (universal engineering terms).
   PRESENTATIONAL ONLY — no calculations performed.
───────────────────────────────────────────────────────────────── */
function CapabilityDiagram({ slug, index, lang }: { slug: string; index: number; lang: string }) {
  const isTr = lang === 'tr'

  if (slug === 'taguchi-doe') {
    return (
      <div className="feat-v2-diagram">
        <div className="feat-v2-diagram-title">{isTr ? 'Ana Etkiler (Örnek · S/N Oranı)' : 'Main Effects (Example · S/N Ratio)'}</div>
        <svg viewBox="0 0 240 160" width="100%" aria-hidden="true" className="viz-svg">
          {/* Axes */}
          <line x1="30" y1="20" x2="30" y2="130" stroke="#334" strokeWidth="0.8"/>
          <line x1="30" y1="130" x2="230" y2="130" stroke="#334" strokeWidth="0.8"/>
          {/* Factor A line */}
          {[[40,90],[80,55],[120,75]].map(([x,y],i,a) => i===0 ? null : (
            <line key={i} x1={a[i-1][0]} y1={a[i-1][1]} x2={x} y2={y}
                  stroke="rgba(88,166,255,0.8)" strokeWidth="1.8"/>
          ))}
          {[[40,90],[80,55],[120,75]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="rgba(88,166,255,0.9)"/>
          ))}
          {/* Factor B line */}
          {[[140,100],[175,70],[215,85]].map(([x,y],i,a) => i===0 ? null : (
            <line key={i} x1={a[i-1][0]} y1={a[i-1][1]} x2={x} y2={y}
                  stroke="rgba(52,208,88,0.8)" strokeWidth="1.8"/>
          ))}
          {[[140,100],[175,70],[215,85]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="rgba(52,208,88,0.9)"/>
          ))}
          {/* Labels */}
          <text x="62" y="145" textAnchor="middle" fontSize="7" fill="#6b7689" fontFamily="var(--font-sans)">{isTr ? 'A: Akım' : 'A: Current'}</text>
          <text x="175" y="145" textAnchor="middle" fontSize="7" fill="#6b7689" fontFamily="var(--font-sans)">{isTr ? 'B: Süre' : 'B: Time'}</text>
          <text x="8" y="80" fontSize="7" fill="#6b7689" fontFamily="var(--font-sans)" transform="rotate(-90,8,80)">S/N (dB)</text>
          {/* Optimal markers */}
          <text x="80" y="48" textAnchor="middle" fontSize="6.5" fill="rgba(88,166,255,0.75)" fontFamily="var(--font-sans)">opt</text>
          <text x="175" y="63" textAnchor="middle" fontSize="6.5" fill="rgba(52,208,88,0.75)" fontFamily="var(--font-sans)">opt</text>
        </svg>
        <div className="feat-v2-diagram-note">{isTr ? 'L9 · 4 faktör · 3 seviye · Örnek' : 'L9 · 4 factors · 3 levels · Example'}</div>
      </div>
    )
  }

  if (slug === 'energy-intelligence') {
    const zones = [
      { label: isTr ? 'Yetersiz' : 'Insufficient', w: 44, color: 'rgba(88,166,255,0.55)', x: 28 },
      { label: isTr ? 'Optimal' : 'Optimal',        w: 80, color: 'rgba(52,208,88,0.65)',  x: 72 },
      { label: isTr ? 'Aşırı' : 'Excessive',        w: 56, color: 'rgba(248,81,73,0.55)',  x: 152 },
    ]
    return (
      <div className="feat-v2-diagram">
        <div className="feat-v2-diagram-title">{isTr ? 'Enerji Penceresi I²Rt (Örnek)' : 'Energy Window I²Rt (Example)'}</div>
        <svg viewBox="0 0 240 160" width="100%" aria-hidden="true" className="viz-svg">
          {zones.map(z => (
            <g key={z.label}>
              <rect x={z.x} y={52} width={z.w} height={36} rx="3" fill={z.color}/>
              <text x={z.x + z.w / 2} y={72} textAnchor="middle" fontSize="7.5" fontWeight="600"
                    fill="#eee" fontFamily="var(--font-sans)">{z.label}</text>
            </g>
          ))}
          {/* Current point marker */}
          <line x1="105" y1="44" x2="105" y2="94" stroke="#34d058" strokeWidth="1.5" strokeDasharray="3 2"/>
          <circle cx="105" cy="44" r="4" fill="#34d058"/>
          <text x="105" y="38" textAnchor="middle" fontSize="7" fill="#34d058" fontFamily="var(--font-sans)">
            {isTr ? 'Mevcut' : 'Current'}
          </text>
          {/* Axis */}
          <line x1="28" y1="100" x2="208" y2="100" stroke="#334" strokeWidth="0.8"/>
          <text x="118" y="115" textAnchor="middle" fontSize="7" fill="#6b7689" fontFamily="var(--font-sans)">J (Wh)</text>
          {/* I²Rt label */}
          <text x="118" y="30" textAnchor="middle" fontSize="8.5" fontWeight="600"
                fill="#8b95a8" fontFamily="var(--font-mono)">E = I² · R · t</text>
          <text x="118" y="140" textAnchor="middle" fontSize="6.5" fill="#5a6880" fontFamily="var(--font-sans)">
            {isTr ? 'Sabit direnç varsayımı' : 'Constant resistance assumption'}
          </text>
        </svg>
        <div className="feat-v2-diagram-note">{isTr ? 'Örnek değerler' : 'Example values'}</div>
      </div>
    )
  }

  if (slug === 'multi-spot') {
    const bars = [
      { id: 'W-14', v: 0.92 }, { id: 'W-07', v: 0.81 }, { id: 'W-22', v: 0.73 },
      { id: 'W-03', v: 0.61 }, { id: 'W-18', v: 0.55 },
    ]
    return (
      <div className="feat-v2-diagram">
        <div className="feat-v2-diagram-title">{isTr ? 'Nokta Başına Enerji — Pareto (Örnek)' : 'Per-Point Energy — Pareto (Example)'}</div>
        <svg viewBox="0 0 240 160" width="100%" aria-hidden="true" className="viz-svg">
          {bars.map((b, i) => {
            const barW = b.v * 140
            const y = 22 + i * 24
            return (
              <g key={b.id}>
                <text x="28" y={y + 11} textAnchor="end" fontSize="7.5" fill="#8b95a8" fontFamily="var(--font-mono)">{b.id}</text>
                <rect x="32" y={y} width={barW} height="16" rx="2" fill={`rgba(88,166,255,${0.5 + b.v * 0.4})`}/>
                <text x={32 + barW + 4} y={y + 11} fontSize="7" fill="rgba(88,166,255,0.85)" fontFamily="var(--font-mono)">{Math.round(b.v * 100)}</text>
              </g>
            )
          })}
          <line x1="32" y1="145" x2="175" y2="145" stroke="#334" strokeWidth="0.6"/>
          <text x="104" y="157" textAnchor="middle" fontSize="7" fill="#6b7689" fontFamily="var(--font-sans)">
            {isTr ? 'Göreceli Enerji (%)' : 'Relative Energy (%)'}
          </text>
        </svg>
        <div className="feat-v2-diagram-note">{isTr ? '5 en yüksek nokta · Örnek' : 'Top 5 points · Example'}</div>
      </div>
    )
  }

  if (slug === 'weld-quality') {
    return (
      <div className="feat-v2-diagram">
        <div className="feat-v2-diagram-title">{isTr ? 'Kaynak Kalite Skoru (Örnek)' : 'Weld Quality Score (Example)'}</div>
        <svg viewBox="0 0 240 160" width="100%" aria-hidden="true" className="viz-svg">
          {/* Score ring */}
          <circle cx="120" cy="78" r="46" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10"/>
          <circle cx="120" cy="78" r="46" fill="none" stroke="rgba(52,208,88,0.7)" strokeWidth="10"
                  strokeDasharray="230 289" strokeLinecap="round"
                  transform="rotate(-90 120 78)"/>
          <text x="120" y="74" textAnchor="middle" fontSize="24" fontWeight="700"
                fill="rgba(52,208,88,0.9)" fontFamily="var(--font-mono)">82</text>
          <text x="120" y="87" textAnchor="middle" fontSize="9" fill="#8b95a8" fontFamily="var(--font-sans)">
            {isTr ? 'DÜŞÜK RİSK' : 'LOW RISK'}
          </text>
          {/* Parameter badges */}
          {[
            { label: isTr ? 'Akım ✓' : 'Current ✓', x: 30,  fill: 'rgba(52,208,88,0.18)' },
            { label: isTr ? 'Süre ✓' : 'Time ✓',    x: 95,  fill: 'rgba(52,208,88,0.18)' },
            { label: isTr ? 'Kuvvet ⚠' : 'Force ⚠', x: 160, fill: 'rgba(250,173,20,0.22)' },
          ].map(b => (
            <g key={b.label}>
              <rect x={b.x} y="136" width="52" height="16" rx="3" fill={b.fill}/>
              <text x={b.x + 26} y="147" textAnchor="middle" fontSize="7" fill="#c9d1d9"
                    fontFamily="var(--font-sans)">{b.label}</text>
            </g>
          ))}
        </svg>
        <div className="feat-v2-diagram-note">{isTr ? '2T · Galvanizli · Örnek' : '2T · Galvanised · Example'}</div>
      </div>
    )
  }

  if (slug === 'weld-lobe') {
    const safe = [[40,50],[70,42],[100,40],[130,43],[160,50],[190,58],[215,70]]
    const exp  = [[40,100],[70,108],[100,112],[130,110],[160,104],[190,96],[215,86]]
    const insuffPts = [...safe.map(([x,y]) => `${x},${y}`), '215,150','40,150'].join(' ')
    const safePts   = [...safe.map(([x,y]) => `${x},${y}`), ...[...exp].reverse().map(([x,y]) => `${x},${y}`)].join(' ')
    const expPts    = [...exp.map(([x,y]) => `${x},${y}`), '215,20','40,20'].join(' ')
    return (
      <div className="feat-v2-diagram">
        <div className="feat-v2-diagram-title">{isTr ? 'Proses Penceresi (Örnek)' : 'Process Window (Example)'}</div>
        <svg viewBox="0 0 240 160" width="100%" aria-hidden="true" className="viz-svg">
          <polygon points={insuffPts} fill="rgba(88,166,255,0.10)"/>
          <polygon points={safePts}   fill="rgba(52,208,88,0.13)"/>
          <polygon points={expPts}    fill="rgba(248,81,73,0.10)"/>
          <polyline points={safe.map(([x,y]) => `${x},${y}`).join(' ')} fill="none" stroke="rgba(88,166,255,0.4)" strokeWidth="1.2"/>
          <polyline points={exp.map(([x,y]) => `${x},${y}`).join(' ')}  fill="none" stroke="rgba(248,81,73,0.4)" strokeWidth="1.2"/>
          <circle cx="115" cy="72" r="6" fill="rgba(52,208,88,0.18)" stroke="#34d058" strokeWidth="1"/>
          <circle cx="115" cy="72" r="2.5" fill="#34d058"/>
          <text x="115" y="64" textAnchor="middle" fontSize="6" fill="#34d058" fontFamily="var(--font-sans)">
            {isTr ? 'İşletim Noktası' : 'Operating Point'}
          </text>
          <text x="127" y="150" textAnchor="middle" fontSize="6.5" fill="#5a6880" fontFamily="var(--font-sans)">
            {isTr ? 'Süre (çevrim)' : 'Time (cycles)'}
          </text>
          <text x="90" y="29" textAnchor="middle" fontSize="6.5" fill="rgba(248,81,73,0.6)" fontFamily="var(--font-sans)">
            {isTr ? 'Expulsion' : 'Expulsion'}
          </text>
          <text x="80" y="133" textAnchor="middle" fontSize="6.5" fill="rgba(88,166,255,0.6)" fontFamily="var(--font-sans)">
            {isTr ? 'Yetersiz' : 'Insufficient'}
          </text>
          <text x="80" y="78" textAnchor="middle" fontSize="7" fontWeight="600" fill="rgba(52,208,88,0.8)" fontFamily="var(--font-sans)">
            {isTr ? 'Güvenli' : 'Safe'}
          </text>
        </svg>
        <div className="feat-v2-diagram-note">{isTr ? 'AHSS · Örnek tarama' : 'AHSS · Example scan'}</div>
      </div>
    )
  }

  if (slug === 'failure-analysis') {
    const modes = isTr
      ? [['Expulsion', 0.72], ['Soğuk Kaynak', 0.51], ['Yapışma', 0.38], ['Aşınma', 0.29], ['LME', 0.21], ['Kaplama', 0.14]]
      : [['Expulsion', 0.72], ['Cold Weld', 0.51], ['Sticking', 0.38], ['Wear', 0.29], ['LME', 0.21], ['Coating', 0.14]]
    return (
      <div className="feat-v2-diagram">
        <div className="feat-v2-diagram-title">{isTr ? 'Hata Modu Olasılıkları (Örnek)' : 'Failure Mode Probabilities (Example)'}</div>
        <svg viewBox="0 0 240 160" width="100%" aria-hidden="true" className="viz-svg">
          {(modes as [string, number][]).map(([label, v], i) => {
            const barW = v * 130
            const y = 16 + i * 22
            const col = v > 0.6 ? 'rgba(248,81,73,0.75)' : v > 0.4 ? 'rgba(250,173,20,0.7)' : 'rgba(88,166,255,0.6)'
            return (
              <g key={label}>
                <text x="58" y={y + 10} textAnchor="end" fontSize="7" fill="#8b95a8" fontFamily="var(--font-sans)">{label}</text>
                <rect x="62" y={y} width={barW} height="14" rx="2" fill={col}/>
                <text x={62 + barW + 4} y={y + 10} fontSize="7" fill="#8b95a8" fontFamily="var(--font-mono)">{Math.round(v * 100)}%</text>
              </g>
            )
          })}
        </svg>
        <div className="feat-v2-diagram-note">{isTr ? 'AHSS / Kaplamalı · Örnek' : 'AHSS / Coated · Example'}</div>
      </div>
    )
  }

  if (slug === 'sensitivity') {
    const params = isTr
      ? [['Kaynak Akımı', 0.82], ['Kaynak Süresi', 0.61], ['Elektrot Kuvveti', 0.44]]
      : [['Welding Current', 0.82], ['Weld Time', 0.61], ['Electrode Force', 0.44]]
    return (
      <div className="feat-v2-diagram">
        <div className="feat-v2-diagram-title">{isTr ? 'Parametre Duyarlılığı — Örnek' : 'Parameter Sensitivity — Example'}</div>
        <svg viewBox="0 0 240 160" width="100%" aria-hidden="true" className="viz-svg">
          {(params as [string, number][]).map(([label, v], i) => {
            const barW = v * 150
            const y = 36 + i * 36
            return (
              <g key={label}>
                <text x="118" y={y - 4} textAnchor="middle" fontSize="7.5" fill="#8b95a8" fontFamily="var(--font-sans)">{label}</text>
                <rect x="32" y={y} width={barW} height="18" rx="2" fill={`rgba(88,166,255,${0.5 + v * 0.4})`}/>
                <text x={32 + barW + 5} y={y + 12} fontSize="8" fill="rgba(88,166,255,0.85)" fontFamily="var(--font-mono)">{Math.round(v * 100)}</text>
              </g>
            )
          })}
          <text x="118" y="148" textAnchor="middle" fontSize="7" fill="#5a6880" fontFamily="var(--font-sans)">
            {isTr ? 'Göreceli Etki (±%5 pertürbasyon)' : 'Relative Impact (±5% perturbation)'}
          </text>
        </svg>
        <div className="feat-v2-diagram-note">{isTr ? 'Öncelik sırası: Akım → Süre → Kuvvet' : 'Priority: Current → Time → Force'}</div>
      </div>
    )
  }

  if (slug === 'electrode-engineering') {
    const profile = [[0,9.0],[200,9.0],[200,9.3],[600,9.3],[600,9.6],[1200,9.6],[1200,9.9],[1600,9.9]]
    const px = (x: number) => 30 + (x / 1600) * 175
    const py = (y: number) => 110 - ((y - 8.8) / 1.4) * 80
    return (
      <div className="feat-v2-diagram">
        <div className="feat-v2-diagram-title">{isTr ? 'Basamaklı Akım Profili (Örnek)' : 'Stepped Current Profile (Example)'}</div>
        <svg viewBox="0 0 240 160" width="100%" aria-hidden="true" className="viz-svg">
          <polyline points={profile.map(([x,y]) => `${px(x)},${py(y)}`).join(' ')}
                    fill="none" stroke="rgba(250,173,20,0.8)" strokeWidth="2"/>
          {[0,400,800,1200,1600].map(v => (
            <g key={v}>
              <line x1={px(v)} y1="110" x2={px(v)} y2="114" stroke="#445" strokeWidth="0.6"/>
              <text x={px(v)} y="122" textAnchor="middle" fontSize="6.5" fill="#5a6880" fontFamily="var(--font-mono)">{v}</text>
            </g>
          ))}
          {[9.0,9.3,9.6,9.9].map(v => (
            <g key={v}>
              <line x1="27" y1={py(v)} x2="30" y2={py(v)} stroke="#445" strokeWidth="0.6"/>
              <text x="25" y={py(v)+3} textAnchor="end" fontSize="6.5" fill="#5a6880" fontFamily="var(--font-mono)">{v}</text>
            </g>
          ))}
          <line x1="30" y1="20" x2="30" y2="110" stroke="#334" strokeWidth="0.8"/>
          <line x1="30" y1="110" x2="205" y2="110" stroke="#334" strokeWidth="0.8"/>
          <text x="117" y="136" textAnchor="middle" fontSize="7" fill="#6b7689" fontFamily="var(--font-sans)">
            {isTr ? 'Kaynak Adedi' : 'Weld Count'}
          </text>
          <text x="8" y="65" fontSize="7" fill="#6b7689" fontFamily="var(--font-sans)" transform="rotate(-90,8,65)">kA</text>
        </svg>
        <div className="feat-v2-diagram-note">{isTr ? 'Düşük–Orta güven · Ampirik' : 'Low–Medium confidence · Empirical'}</div>
      </div>
    )
  }

  if (slug === 'ai-models') {
    const models = [
      { id: 'MLR-v1', status: isTr ? 'DOĞRULANMIŞ' : 'VALIDATED',   col: 'rgba(52,208,88,0.2)',  border: 'rgba(52,208,88,0.5)'  },
      { id: 'RSM-v2', status: isTr ? 'DENEYSEL' : 'EXPERIMENTAL',   col: 'rgba(250,173,20,0.2)', border: 'rgba(250,173,20,0.5)' },
      { id: 'M4-v1',  status: isTr ? 'DOĞRULANMIŞ' : 'VALIDATED',   col: 'rgba(52,208,88,0.2)',  border: 'rgba(52,208,88,0.5)'  },
    ]
    return (
      <div className="feat-v2-diagram">
        <div className="feat-v2-diagram-title">{isTr ? 'Model Kataloğu (Örnek)' : 'Model Catalog (Example)'}</div>
        <svg viewBox="0 0 240 160" width="100%" aria-hidden="true" className="viz-svg">
          {models.map((m, i) => (
            <g key={m.id}>
              <rect x="28" y={20 + i * 42} width="184" height="32" rx="4"
                    fill={m.col} stroke={m.border} strokeWidth="0.8"/>
              <text x="46" y={40 + i * 42} fontSize="9" fontWeight="700" fill="#e6edf3" fontFamily="var(--font-mono)">{m.id}</text>
              <rect x="130" y={26 + i * 42} width="72" height="18" rx="3" fill="rgba(0,0,0,0.25)"/>
              <text x="166" y={38 + i * 42} textAnchor="middle" fontSize="7" fontWeight="600"
                    fill={m.border} fontFamily="var(--font-sans)">{m.status}</text>
            </g>
          ))}
          <text x="120" y="154" textAnchor="middle" fontSize="7" fill="#5a6880" fontFamily="var(--font-sans)">
            {isTr ? 'ROUTER_ACTIVE = False (DENEYSEL)' : 'ROUTER_ACTIVE = False (EXPERIMENTAL)'}
          </text>
        </svg>
        <div className="feat-v2-diagram-note">{isTr ? 'Kullanıcı kalibrasyon verisi gerekli' : 'User calibration data required'}</div>
      </div>
    )
  }

  if (slug === 'digital-passport') {
    const states = isTr
      ? ['OLUŞTURULDU', 'TASLAK', 'MÜH. TANIMLI', 'DOĞRULANDI', 'ONAYLANDI', 'ÜRETİMDE', 'ARŞİVLENDİ']
      : ['CREATED', 'DRAFT', 'ENG. DEFINED', 'VALIDATED', 'APPROVED', 'PRODUCTION', 'ARCHIVED']
    const W = 240, cols = 4
    return (
      <div className="feat-v2-diagram">
        <div className="feat-v2-diagram-title">{isTr ? 'Yaşam Döngüsü (10 Aşama · Örnek)' : 'Lifecycle (10 States · Example)'}</div>
        <svg viewBox={`0 0 ${W} 160`} width="100%" aria-hidden="true" className="viz-svg">
          {states.map((s, i) => {
            const col = i % cols
            const row = Math.floor(i / cols)
            const x = 14 + col * 56
            const y = 24 + row * 54
            const isActive = i === 5
            return (
              <g key={s}>
                <rect x={x} y={y} width="50" height="26" rx="4"
                      fill={isActive ? 'rgba(52,208,88,0.25)' : 'rgba(255,255,255,0.05)'}
                      stroke={isActive ? 'rgba(52,208,88,0.6)' : 'rgba(255,255,255,0.12)'}
                      strokeWidth="0.8"/>
                <text x={x + 25} y={y + 15} textAnchor="middle" fontSize="5.8"
                      fill={isActive ? '#34d058' : '#8b95a8'}
                      fontWeight={isActive ? '700' : '400'}
                      fontFamily="var(--font-sans)">{s}</text>
                {i < states.length - 1 && (
                  <line x1={x + 50} y1={y + 13} x2={x + 55} y2={y + 13}
                        stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"/>
                )}
              </g>
            )
          })}
        </svg>
        <div className="feat-v2-diagram-note">{isTr ? 'API katmanı · Web UI henüz mevcut değil' : 'API layer · No web UI yet'}</div>
      </div>
    )
  }

  // Fallback for any unrecognised slug
  return (
    <div className="feat-v2-diagram feat-v2-diagram--fallback">
      <span className="feat-v2-code-large" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  )
}
