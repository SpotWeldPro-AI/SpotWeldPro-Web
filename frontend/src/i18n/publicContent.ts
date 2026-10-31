/**
 * PUBLIC-01B: Bilingual public content.
 * Architecture: one codebase · one engineering truth · two presentation languages (TR + EN).
 *
 * No fabricated data: no prices, quotas, SLA terms, customer names, reviews,
 * logos, case-study results, addresses, certifications, or team identities.
 * Tier names (Starter / Professional / Enterprise) are structural labels only.
 * Commercial action: "Demo Talep Et / Request Demo" → /demo.
 */
export type Lang = 'tr' | 'en'

export interface NavItem {
  to: string
  label: string
}

export interface Module {
  slug: string
  code: string
  name: string
  text: string
}

export interface Industry {
  name: string
  use: string
  need: string
  modules: string
}

export interface Tier {
  name: string
  tagline: string
  points: string[]
}

export interface Step {
  no: string
  title: string
  input: string
  system: string
  output: string
  next: string
  callout?: string
}

export interface FeaturesV2Section {
  slug: string
  badge: string
  inputs: string[]
  outputs: string[]
  limitation: string
}

export interface TrustNote {
  bold: string
  rest: string
}

export interface LangContent {
  langToggle: string;
  brand: string
  brandMark: string
  nav: NavItem[]
  footer: string
  cta: {
    primary: string
    secondary: string
    tertiary: string
  }
  trustNote: TrustNote

  // Shared data arrays (consumed by multiple pages)
  modules: Module[]
  industries: Industry[]
  tiers: Tier[]
  steps: Step[]

  // Landing page strings
  landing: {
    eyebrow: string
    heroTitle: string
    heroSubtitle: string
    // Hero engineering simulation labels (PUBLIC-VISUAL-01, presentational only)
    heroSim: {
      exampleLabel: string
      currentLabel: string
      timeLabel: string
      forceLabel: string
      nuggetLabel: string
      processWindowLabel: string
      insufficientLabel: string
      safeLabel: string
      expulsionLabel: string
      upperElectrode: string
      lowerElectrode: string
      completeLabel: string
      currentValue: string
      timeValue: string
      forceValue: string
      nuggetValue: string
      // Hero preview panel labels (PUBLIC-I18N-01)
      panelAriaLabel: string
      panelHeading: string
      panelBadge: string
      panelCurrent: string
      panelTime: string
      panelForce: string
      panelTip: string
      panelTraceLabel: string
      panelTraceValue: string
      panelStateLabel: string
      panelStateValue: string
    }
    modulesTitle: string
    modulesSub: string
    moduleDetailBtn: string
    industriesTitle: string
    industriesSub: string
    industriesNeedLabel: string
    industriesModulesLabel: string
    packagesTitle: string
    packagesSub: string
    packagesCompareBtn: string
    qualityTitle: string
    qualitySub: string
    qualityItems: string[]
    contactTitle: string
    contactSub: string
    locationLabel: string
    location: string
  }

  contact: {
    person1: { name: string; role: string }
    person2: { name: string; role: string }
    emailLabel: string
    phoneLabel: string
    linkedinLabel: string
  }

  footerSection: {
    tagline: string
    platformTitle: string
    engineeringTitle: string
    aiTitle: string
    contactTitle: string
    copyright: string
    liveDemoLabel: string
    useCasesLabel: string
    energyIntelLabel: string
    modelCatalogLabel: string
  }

  // Features page strings
  features: {
    eyebrow: string
    heroTitle: string
    heroSubtitle: string
    overviewTitle: string
    overviewSub: string
    flowBtn: string
    demoBtn: string
    // WEBSITE_DESIGN_02 — visualization panel (illustrative only)
    viz: {
      sectionTitle: string
      sectionSub: string
      demoNote: string
      nuggetChart: {
        title: string
        xLabel: string
        yLabel: string
        threshLabel: string
        trendLabel: string
      }
      lobeChart: {
        title: string
        xLabel: string
        yLabel: string
        safeLabel: string
        insuffLabel: string
        expulsionLabel: string
        opLabel: string
      }
      sensChart: {
        title: string
        currentLabel: string
        timeLabel: string
        forceLabel: string
        tipLabel: string
      }
      riskChart: {
        title: string
        lowLabel: string
        mediumLabel: string
        highLabel: string
        indicatorLabel: string
        failureModeNote: string
      }
      energyChart: {
        title: string
        insuffLabel: string
        optimalLabel: string
        excessiveLabel: string
        windowLabel: string
      }
    }
  }

  featuresV2: {
    sectionLabel: string
    sectionSub: string
    illustrativeNote: string
    badgeVerified: string
    badgeExperimental: string
    inputsLabel: string
    outputsLabel: string
    limitationLabel: string
    sections: FeaturesV2Section[]
  }

  // How It Works page strings
  howItWorks: {
    eyebrow: string
    heroTitle: string
    heroSubtitle: string
    stepsTitle: string
    stepsSub: string
    inputLabel: string
    systemLabel: string
    outputLabel: string
    nextLabel: string
  }

  // Packages page strings
  packages: {
    eyebrow: string
    heroTitle: string
    heroSubtitle: string
    compareTitle: string
    compareSub: string
    ctaTitle: string
    demoBtn: string
    exploreBtn: string
  }

  // Demo page strings
  demo: {
    eyebrow: string
    heroTitle: string
    heroSubtitle: string
    formTitle: string
    formSub: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    companyLabel: string
    companyPlaceholder: string
    submitBtn: string
    ackHeroTitle: string
    ackHeroSubtitle: string
    ackTitle: string
    ackConfirm: string
    ackMessage: string
    exploreBtn: string
    howBtn: string
    loginBtn: string
  }

  // Login page strings
  login: {
    ariaLabel: string
    note: string
    usernameLabel: string
    passwordLabel: string
    submitBusy: string
    submitIdle: string
    submitDemo: string
    connecting: string
    retrying: string
    errorNetwork: string
    errorTimeout: string
    errorServer: string
    errorCredentials: string
    demoBannerTitle: string
    demoBannerText: string
  }
}

export const PUBLIC_CONTENT: Record<Lang, LangContent> = {
  // ─────────────────────────────────────────────────────────────
  // TURKISH
  // ─────────────────────────────────────────────────────────────
  tr: {
    langToggle: 'EN',
    brand: 'SpotWeldPro AI',
    brandMark: 'SW',
    nav: [
      { to: '/', label: 'Ana Sayfa' },
      { to: '/features', label: 'Özellikler' },
      { to: '/how-it-works', label: 'Nasıl Kullanılır' },
      { to: '/packages', label: 'Paketler' },
      { to: '/demo', label: 'Demo' },
      { to: '/#contact', label: 'İletişim' },
    ],
    footer: 'SpotWeldPro AI',
    cta: {
      primary: 'Demo Talep Et',
      secondary: 'Özellikleri İncele',
      tertiary: 'Giriş Yap',
    },
    trustNote: {
      bold: 'AI açıklama ve mühendislik bağlamı sağlar;',
      rest: ' nihai karar deterministik mühendislik kurallarına dayanır.',
    },

    modules: [
      {
        slug: 'taguchi-doe',
        code: 'TD',
        name: 'Taguchi DOE ve ANOVA',
        text: 'L4/L9/L16/L27 ortogonal dizileriyle deney tasarımı yapın; varyans analizi (ANOVA) ile parametre katkılarını sıralayın.',
      },
      {
        slug: 'energy-intelligence',
        code: 'EI',
        name: 'Kaynak Enerjisi Zekası',
        text: 'I²Rt formülüyle kaynak enerjisini hesaplayın; enerji penceresi uyumunu, maliyet tasarrufunu ve yıllık CO₂ etkisini değerlendirin.',
      },
      {
        slug: 'multi-spot',
        code: 'MS',
        name: 'Çok Noktalı Enerji ve Parça Haritası',
        text: 'Kaynak noktası başına enerji çıktılarını Pareto sırasıyla listeleyin; parça haritasında yüksek tüketimli bölgeleri belirleyin.',
      },
      {
        slug: 'weld-quality',
        code: 'WQ',
        name: 'Kaynak Kalite Analizi',
        text: 'Nugget çapını, minimum kabul sınırını ve fışkırma riskini değerlendirin; skor, risk düzeyi ve düzeltici önerilerle birlikte sonuç alın.',
      },
      {
        slug: 'weld-lobe',
        code: 'WL',
        name: 'Proses Penceresi (Weld Lobe)',
        text: 'Akım–süre parametrik alanını görselleştirin; Güvenli / Uyarı / Expulsion bölgelerini ve optimal çalışma noktasını belirleyin.',
      },
      {
        slug: 'failure-analysis',
        code: 'FA',
        name: 'Hata Olasılık Analizi',
        text: '6 hata modu (expulsion, soğuk kaynak, elektrot yapışması, aşınma, LME, kaplama bozulması) için risk olasılığını sıralayın.',
      },
      {
        slug: 'sensitivity',
        code: 'SN',
        name: 'Parametre Duyarlılık Analizi',
        text: 'Akım, süre ve kuvvet parametrelerinin nugget çapı üzerindeki göreli etkisini sonlu fark yöntemiyle sıralayın.',
      },
      {
        slug: 'electrode-engineering',
        code: 'EE',
        name: 'Elektrot Mühendisliği',
        text: 'Malzeme ailesi ve soğutma koşullarına göre elektrot ömrünü ve basamaklı akım profilini tahmin edin.',
      },
      {
        slug: 'ai-models',
        code: 'AI',
        name: 'AI Model Kataloğu',
        text: 'Kullanıcı tarafından kalibre edilen MLR ve RSM nugget tahmin modellerini yönetişim durum etiketleriyle (DOĞRULANMIŞ / DENEYSEL) listeleyin.',
      },
      {
        slug: 'digital-passport',
        code: 'DP',
        name: 'Dijital Kaynak Pasaportu',
        text: '10 aşamalı yaşam döngüsüyle (OLUŞTURULDU → ÜRETİMDE AKTİF → ARŞİVLENDİ) kaynak parametrelerinin yönetimli izlenebilirliğini sağlayın.',
      },
    ],

    industries: [
      {
        name: 'Otomotiv',
        use: 'Yapısal gövde ve şase bağlantılarında yüksek adetli punta kaynağı.',
        need: 'Tutarlı nugget kalitesi ve parça bazlı izlenebilirlik.',
        modules: 'Weld Quality Analysis · Traceability',
      },
      {
        name: 'Beyaz Eşya',
        use: 'İnce saç panellerin seri kaynağında döngü süresi kontrolü.',
        need: 'Dar proses penceresinde hızlı parametre doğrulaması.',
        modules: 'Weld Lobe Lab',
      },
      {
        name: 'Savunma',
        use: 'Yüksek kritiklikteki bağlantılarda tam doğrulanmış parametreler.',
        need: 'Kural tabanlı doğrulama ve eksiksiz denetim izi.',
        modules: 'Traceability · Projects & Weld Points',
      },
      {
        name: 'Raylı Sistemler',
        use: 'Araç gövdesi ve alt yapı birleşimlerinde uzun süreli dayanım.',
        need: 'Minimum nugget kanıtı ve partide raporlanabilirlik.',
        modules: 'Command Center · Failure Analysis',
      },
      {
        name: 'Makine İmalatı',
        use: 'Karmaşık parça kombinasyonlarında kaynak penceresinin yeniden kurulması.',
        need: 'Yeni malzeme girişlerinde proses penceresinin haritalanması.',
        modules: 'Weld Lobe Lab',
      },
      {
        name: 'Sac Metal Üretimi',
        use: 'Farklı kalınlık ve kaplama kombinasyonlarında tutarlı kalite.',
        need: 'Malzeme yığınına göre parametre hassasiyeti.',
        modules: 'Weld Quality Analysis · Projects',
      },
    ],

    tiers: [
      {
        name: 'Starter',
        tagline: 'Tek hat, temel değerlendirme.',
        points: ['Weld Quality Analysis', 'Proses penceresi özeti', 'Temel raporlama'],
      },
      {
        name: 'Professional',
        tagline: 'Mühendislik ekibi için tam çalışma alanı.',
        points: ['Weld Lobe Lab', 'Failure Analysis', 'Proje & kaynak noktası yönetimi'],
      },
      {
        name: 'Enterprise',
        tagline: 'Çok tesisli, tam izlenebilirlik.',
        points: ['Tam denetim izi', 'Çok tesis yönetimi', 'Kurumsal entegrasyonlar'],
      },
    ],

    steps: [
      {
        no: '01',
        title: 'Proje / Uygulama Bağlamı',
        input: 'Proje, hat/istasyon ve kaynak noktası seçimi.',
        system: 'Bağlam doğrulanır; ilgili mühendislik kuralları eşleştirilir.',
        output: 'Analize hazır kaynak noktası bağlamı.',
        next: 'Malzeme ve sac bilgileri',
      },
      {
        no: '02',
        title: 'Malzeme ve Sac Bilgileri',
        input: 'Sac kalınlıkları, malzeme sınıfı, yığın (stack) yapısı.',
        system: 'Yığın uyumluluğu ve kalınlık limitleri kontrol edilir.',
        output: 'Doğrulanmış malzeme/yığın bağlamı.',
        next: 'Kaynak parametreleri',
        callout: 'Elektrot uç çapı ve soğutma parametreleri de burada girilir — Elektrot Mühendisliği modülünün girdileri.',
      },
      {
        no: '03',
        title: 'Kaynak Parametreleri',
        input: 'Welding current (kA), weld time, electrode force (kN).',
        system: 'Parametreler mühendislik limitlerine karşı değerlendirilir.',
        output: 'Parametre durumu: limit içi / dışı.',
        next: 'Analiz ve mühendislik kontrolleri',
        callout: 'Taguchi DOE ile sistematik deney tasarımı yapın; parametre katkısını ANOVA ile ölçün.',
      },
      {
        no: '04',
        title: 'Analiz ve Mühendislik Kontrolleri',
        input: 'Doğrulanmış bağlam + parametre seti.',
        system: 'Kalite değerlendirmesi, proses penceresi konumu, risk kontrolü.',
        output: 'Kaynak kalitesi sonucu ve mühendislik yorumu.',
        next: 'Proses penceresi / optimizasyon',
        callout: 'Enerji Zekası modülü I²Rt enerjisini ve enerji penceresi uyumunu bu adımda raporlar.',
      },
      {
        no: '05',
        title: 'Proses Penceresi / Optimizasyon',
        input: 'Analiz sonucu + hedefler.',
        system: 'Operating window incelemesi ve parametre doğrulama.',
        output: 'Current vs recommended delta ve önerilen parametre.',
        next: 'Sonuç, doğrulama ve izlenebilirlik',
        callout: 'Duyarlılık Analizi parametre önceliğini ölçer. Dijital Kaynak Pasaportu izlenebilirliği bu adımda başlar.',
      },
      {
        no: '06',
        title: 'Sonuç, Doğrulama ve İzlenebilirlik',
        input: 'Önerilen parametre + mühendislik onayı.',
        system: 'Sonuç kaydı: analiz ID, zaman damgası, parametre seti, kanıt referansı.',
        output: 'İzlenebilir mühendislik sonucu ve rapor.',
        next: 'Yeni analiz veya doğrulama akışı',
      },
    ],

    landing: {
      eyebrow: 'SpotWeldPro AI · Engineering Workstation',
      heroTitle: 'Punta Kaynak Parametre Analizi',
      heroSubtitle:
        'Deterministik mühendislik kuralları ile kaynak kalitesini doğrulayın;'
        + ' deney tasarımı ve hata analizi ile prosesi yönetin.',
      heroSim: {
        exampleLabel: 'Örnek Proses',
        currentLabel: 'Kaynak Akımı',
        timeLabel: 'Kaynak Süresi',
        forceLabel: 'Elektrot Kuvveti',
        nuggetLabel: 'Çekirdek Çapı',
        processWindowLabel: 'Proses Penceresi',
        insufficientLabel: 'Yetersiz',
        safeLabel: 'Güvenli Pencere',
        expulsionLabel: 'Kaynak Çapağı Riski',
        upperElectrode: 'Üst Elektrot',
        lowerElectrode: 'Alt Elektrot',
        completeLabel: 'Örnek Tamamlandı',
        currentValue: '9.2 kA',
        timeValue: '14 cyc',
        forceValue: '3.5 kN',
        nuggetValue: '5.4 mm',
        panelAriaLabel: 'Mühendislik ürün önizlemesi',
        panelHeading: 'Mühendislik Girdileri',
        panelBadge: 'Deterministik Kural Kontrolü',
        panelCurrent: 'Kaynak Akımı',
        panelTime: 'Kaynak Süresi',
        panelForce: 'Elektrot Kuvveti',
        panelTip: 'Elektrot Uç Çapı',
        panelTraceLabel: 'İzlenebilirlik',
        panelTraceValue: 'Denetim Kanıtıyla Desteklenmiş',
        panelStateLabel: 'Durum',
        panelStateValue: 'Analiz Bekleniyor',
      },
      modulesTitle: 'Modüller',
      modulesSub: 'Bir modülü incelemek için Özellikler sayfasındaki detayı görüntüleyin.',
      moduleDetailBtn: 'Detayı Gör',
      industriesTitle: 'Sektör Kullanım Senaryoları',
      industriesSub:
        'Kendi üretim bağlamınızı seçin; tipik kullanım, ihtiyaç ve ilgili modülleri görün.',
      industriesNeedLabel: 'İhtiyaç:',
      industriesModulesLabel: 'Modüller:',
      packagesTitle: 'Paketler',
      packagesSub: 'Detaylı karşılaştırma için Paketler sayfasını açın.',
      packagesCompareBtn: 'Paket Karşılaştırması',
      qualityTitle: 'Kaynak Kalitesini Daha Erken Değerlendirin',
      qualitySub:
        'Gereksiz denemeleri azaltın. Proses geliştirme sürecini optimize edin.'
        + ' Fiziksel doğrulama zorunlu olmaya devam eder — yazılım bu süreci destekler.',
      qualityItems: [
        'Potansiyel kaynak hatalarını erken aşamada tespit edin',
        'Hurda ve yeniden işleme risklerini mühendislik kurallarıyla değerlendirin',
        'Uygunsuz kaynak parametrelerini önceden belirleyin',
        'Fiziksel deneme planlamasını daha verimli yürütün',
        'Tekrarlayan mühendislik çabasını azaltın',
        'Kaynak proses standardizasyonunu iyileştirin',
        'Kalite maliyetini (COPQ) minimize etme potansiyelini artırın',
        'Daha yapılandırılmış mühendislik kararları alın',
      ],
      contactTitle: 'İletişim',
      contactSub: 'SpotWeldPro AI hakkında detaylı bilgi veya demo talebiniz için bizimle iletişime geçin.',
      locationLabel: 'Konum',
      location: 'Nilüfer / Bursa / Türkiye',
    },

    features: {
      eyebrow: 'Özellikler',
      heroTitle: 'SpotWeldPro AI Modülleri',
      heroSubtitle:
        'Kaynak kalitesi, proses penceresi, optimizasyon ve izlenebilirlik'
        + ' için deterministik mühendislik kuralları ve AI destekli açıklama.',
      overviewTitle: 'Modüllere Genel Bakış',
      overviewSub:
        'Her modül, kaynağın fiziksel modeline dayalı hesaplama yapar.'
        + ' AI yalnızca açıklama ve özet sağlar;'
        + ' nihai karar her zaman deterministik kurallara dayanır.',
      flowBtn: 'Akışı Gör',
      demoBtn: 'Demo Talep Et',
      viz: {
        sectionTitle: 'Mühendislik Görselleştirmeleri',
        sectionSub:
          'Tipik punta kaynak analizi çıktılarından örnek görseller.'
          + ' Tüm değerler yalnızca temsilidir; gerçek hesaplama sonucu değildir.',
        demoNote:
          'Örnek / Temsili — Mühendislik hesaplama sonucu değildir.'
          + ' Yazılım analizi, zorunlu fiziksel doğrulamanın yerini almaz.',
        nuggetChart: {
          title: 'Kaynak Akımı ↔ Çekirdek Çapı',
          xLabel: 'Kaynak Akımı (kA)',
          yLabel: 'Çekirdek Ø (mm)',
          threshLabel: 'Min. kabul',
          trendLabel: 'Trend bandı',
        },
        lobeChart: {
          title: 'Kaynak Lobu / Proses Penceresi',
          xLabel: 'Kaynak Süresi (cyc)',
          yLabel: 'Kaynak Akımı (kA)',
          safeLabel: 'Güvenli',
          insuffLabel: 'Yetersiz Nüfuziyet',
          expulsionLabel: 'Kaynak Çapağı Riski',
          opLabel: 'İşletim Noktası',
        },
        sensChart: {
          title: 'Parametre Duyarlılığı (Göreceli)',
          currentLabel: 'Kaynak Akımı',
          timeLabel: 'Kaynak Süresi',
          forceLabel: 'Elektrot Kuvveti',
          tipLabel: 'Uç Çapı',
        },
        riskChart: {
          title: 'Kaynak Kalitesi Risk Göstergesi',
          lowLabel: 'DÜŞÜK',
          mediumLabel: 'ORTA',
          highLabel: 'YÜKSEK',
          indicatorLabel: 'Risk Seviyesi (Örnek)',
          failureModeNote: '10 hata modu · önceliğe göre sıralı',
        },
        energyChart: {
          title: 'Kaynak Enerjisi Penceresi (I²Rt)',
          insuffLabel: 'Yetersiz',
          optimalLabel: 'Optimal',
          excessiveLabel: 'Aşırı',
          windowLabel: 'Enerji Penceresi',
        },
      },
    },

    featuresV2: {
      sectionLabel: '10 Doğrulanmış Mühendislik Yeteneği',
      sectionSub: 'Gerçek uygulama kaynak kodundan doğrulanan yetenekler — her iddia için test kanıtı.',
      illustrativeNote: 'Gösterim amaçlı örnek değerler — hesaplanmış sonuç değildir.',
      badgeVerified: 'DOĞRULANMIŞ',
      badgeExperimental: 'DENEYSEL',
      inputsLabel: 'Girişler',
      outputsLabel: 'Çıktılar',
      limitationLabel: 'Sınırlama',
      sections: [
        {
          slug: 'taguchi-doe',
          badge: 'verified',
          inputs: ['Faktör adları ve seviyeleri (2–4 faktör)', 'Dizi tipi: L4 / L9 / L16 / L27', 'Ölçülen deney yanıtları (kullanıcı girer)'],
          outputs: ['Tasarlanmış deney koşulları (run matrisi)', 'S/N oranı ve ana etkiler tablosu', 'Optimal parametre kombinasyonu'],
          limitation: 'Model ölçülen verileri kullanır; yanıt değerlerini tahmin etmez.',
        },
        {
          slug: 'energy-intelligence',
          badge: 'verified',
          inputs: ['Kaynak akımı (kA, RMS)', 'Kaynak direnci (µΩ)', 'Kaynak süresi (çevrim) ve frekans (Hz)'],
          outputs: ['Kaynak enerjisi (J / Wh / kWh)', 'Enerji penceresi durumu (OPTIMAL / KABUL EDİLEBİLİR / AŞIRI)', 'Yıllık maliyet ve CO₂ farkı'],
          limitation: 'Sabit direnç varsayımı; dinamik direnç değişimi modellenmez.',
        },
        {
          slug: 'multi-spot',
          badge: 'verified',
          inputs: ['Kaynak noktası listesi (akım + direnç + çevrim)', 'İstasyon ve parça gruplaması'],
          outputs: ['Nokta başına enerji (Pareto sıralamasıyla)', 'Grup özetleri ve parça haritası', 'En yüksek enerji tüketen noktalar'],
          limitation: 'Noktalar arası şant akımı hesabı yapılmaz (yalnızca bayrak girişi).',
        },
        {
          slug: 'weld-quality',
          badge: 'verified',
          inputs: ['Akım (kA), süre (çevrim), kuvvet (kN)', 'Malzeme ailesi ve sac kalınlıkları', 'Elektrot uç çapı ve soğutma parametreleri'],
          outputs: ['0–100 kalite skoru ve risk düzeyi', 'Hesaplanan nugget aralığı (min / opt)', 'Parametre uyum tablosu ve düzeltici öneriler'],
          limitation: 'Referans profil 2T istifine özeldir; 4T desteklenmez.',
        },
        {
          slug: 'weld-lobe',
          badge: 'verified',
          inputs: ['Malzeme ailesi ve kalınlık', 'Akım / süre / kuvvet tarama aralıkları', 'Minimum nugget çapı hedefi'],
          outputs: ['Bölge haritası (Güvenli / Uyarı / Expulsion / Yetersiz Füzyon)', 'En iyi aday parametre seti', 'Expulsion ve füzyon riski skorları'],
          limitation: 'Ampirik model; deneysel kalibrasyon verisi içermez.',
        },
        {
          slug: 'failure-analysis',
          badge: 'verified',
          inputs: ['Malzeme ailesi ve kaplama durumu', 'Parametre sapması önerilen aralıklardan', 'Şant riski ve yapıştırıcı bayrakları'],
          outputs: ['6 hata modu için olasılık (expulsion, soğuk kaynak, yapışma, aşınma, LME, kaplama)', 'Katkı faktörü sıralaması ve önerilen eylemler', 'Doğrulama kontrol listesi'],
          limitation: 'Sapma tabanlı model; göreceli sonuçlar — nicel kalibrasyon verisi gerekmez.',
        },
        {
          slug: 'sensitivity',
          badge: 'verified',
          inputs: ['Referans parametre noktası (akım, süre, kuvvet)', 'Pertürbasyon oranı: ±%5 (sabit)'],
          outputs: ['Parametre başına duyarlılık (mm / birim)', 'Mutlak etki ve öncelik sıralaması'],
          limitation: 'Yalnızca 3 parametre; etkileşim terimleri dahil değil.',
        },
        {
          slug: 'electrode-engineering',
          badge: 'verified',
          inputs: ['Malzeme ailesi, kaplama, soğutma debisi ve sıcaklığı', 'Uç çapı ve yıllık kaynak adedi'],
          outputs: ['Tahmini elektrot ömrü (kaynak adedi)', 'Kaplama sıklığı ve yıllık değiştirme sayısı', 'Basamaklı akım profili'],
          limitation: 'Ampirik model; güven düzeyi düşük–orta. Gerçek bakım verisiyle kalibrasyon önerilir.',
        },
        {
          slug: 'ai-models',
          badge: 'experimental',
          inputs: ['Kullanıcı tarafından ölçülmüş kalibrasyon verisi (akım–süre–kuvvet → nugget)', 'Model tipi: MLR veya RSM'],
          outputs: ['Uyarlanmış katsayılar, R², RMSE, MAE', 'VIF tablosu ve Cook\'s D aykırı nokta tespiti', 'Yönetişim durum rozeti (DOĞRULANMIŞ / DENEYSEL)'],
          limitation: 'Üretim yönlendiricisinde aktif değil. Kullanıcı kalibrasyon verisi zorunludur.',
        },
        {
          slug: 'digital-passport',
          badge: 'verified',
          inputs: ['Kaynak parametreleri ve mühendislik açıklamaları', 'Revizyon tetikleyicileri ve onay adımları'],
          outputs: ['10 aşamalı yaşam döngüsü izlenebilirliği', 'Yönetimli denetim izi ve revizyon geçmişi', 'Üretim aktif / arşivlenmiş durum yönetimi'],
          limitation: 'Altyapı API katmanı; web UI arayüzü henüz mevcut değil.',
        },
      ],
    },

    howItWorks: {
      eyebrow: 'Mühendislik Akışı',
      heroTitle: 'Bağlamdan İzlenebilir Sonuça',
      heroSubtitle:
        'OEM / Tier-1 üretim, kalite ve mühendislik ekipleri için altı adımlık'
        + ' mühendislik akışı: bağlam, malzeme, parametre, analiz, optimizasyon, izlenebilirlik.',
      stepsTitle: 'Altı Adımlık Mühendislik Süreci',
      stepsSub:
        'Her adım, kullanıcı girişini alır, mühendislik kuralları ile değerlendirir'
        + ' ve izlenebilir bir çıktı üretir.',
      inputLabel: 'Giriş',
      systemLabel: 'Sistem Değerlendirmesi',
      outputLabel: 'Mühendislik Çıktısı',
      nextLabel: 'Sonraki →',
    },

    packages: {
      eyebrow: 'Paketler',
      heroTitle: 'Üretim İhtiyacınıza Uygun Paketi Seçin',
      heroSubtitle:
        "Starter'dan Enterprise'a kadar ihtiyacınıza uygun pakete başlayın."
        + ' Tüm paketler temel mühendislik kurallarını içerir.',
      compareTitle: 'Paket Karşılaştırması',
      compareSub: 'Detaylı bilgi için satış ekibimizle iletişime geçin.',
      ctaTitle: 'Hemen Başlayın',
      demoBtn: 'Demo Talep Et',
      exploreBtn: 'Özellikleri İncele',
    },

    demo: {
      eyebrow: 'Demo',
      heroTitle: 'Demo Talep Edin',
      heroSubtitle:
        "SpotWeldPro AI'ı kendi üretim ortamınızda denemek için formu"
        + ' doldurun; ekibimiz en kısa sürede sizinle iletişime geçsin.',
      formTitle: 'Demo Talebi',
      formSub: 'Aşağıdaki formu doldurarak demo talebinizi bize iletin.',
      nameLabel: 'Ad Soyad',
      namePlaceholder: 'Adınız Soyadınız',
      emailLabel: 'E-posta',
      emailPlaceholder: 'sirket@example.com',
      companyLabel: 'Şirket',
      companyPlaceholder: 'Şirket Adı',
      submitBtn: 'Talebi Gönder',
      ackHeroTitle: 'Demo Talep Edin',
      ackHeroSubtitle:
        "SpotWeldPro AI'ı kendi üretim ortamınızda denemek için talebinizi ilettiniz.",
      ackTitle: 'Talebiniz Alındı',
      ackConfirm: '✓ Alındı',
      ackMessage:
        'Demo talebiniz başarıyla alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.',
      exploreBtn: 'Özellikleri İncele',
      howBtn: 'Nasıl Kullanılır',
      loginBtn: 'Demo Uygulamasına Giriş Yap',
    },

    login: {
      ariaLabel: 'Kurumsal giriş',
      note: 'Kurumsal giriş — resistance spot welding mühendislik zekası',
      usernameLabel: 'Kullanıcı Adı',
      passwordLabel: 'Şifre',
      submitBusy: 'Giriş yapılıyor…',
      submitIdle: 'Giriş Yap',
      submitDemo: 'Başlat / Giriş Yap',
      connecting: 'Sunucuya bağlanılıyor…',
      retrying: 'Yeniden deneniyor…',
      errorNetwork:
        'Backend bağlantısı yok. Mühendislik verisi yüklenemedi; API servisini doğrulayın ve tekrar deneyin.',
      errorTimeout:
        'Sunucu başlatılıyor olabilir. Lütfen birkaç saniye bekleyin ve tekrar deneyin.',
      errorServer:
        'Sunucu hatası. Servis geçici olarak kullanılamıyor; kısa bir süre sonra tekrar deneyin.',
      errorCredentials: 'Kullanıcı adı veya şifre hatalı.',
      demoBannerTitle: 'Demo Hesabı',
      demoBannerText: 'Kullanıcı adı ve şifre otomatik dolduruldu. Giriş yapmak için düğmeye tıklayın.',
    },

    contact: {
      person1: { name: 'İlhan Çekiç', role: 'Mühendislik, Ürün ve İş Geliştirme' },
      person2: { name: 'Koray Tokol', role: 'Danışmanlık ve Teknoloji' },
      emailLabel: 'E-posta',
      phoneLabel: 'Telefon',
      linkedinLabel: 'LinkedIn',
    },

    footerSection: {
      tagline: 'Akıllı Direnç Punta Kaynağı Mühendisliği',
      platformTitle: 'Platform',
      engineeringTitle: 'Mühendislik',
      aiTitle: 'AI & Analitik',
      contactTitle: 'İletişim',
      copyright: '© 2024–2026 SpotWeldPro AI. Tüm hakları saklıdır.',
      liveDemoLabel: 'Canlı Demo',
      useCasesLabel: 'Kullanım Alanları',
      energyIntelLabel: 'Enerji Zekası',
      modelCatalogLabel: 'Model Kataloğu',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // ENGLISH
  // ─────────────────────────────────────────────────────────────
  en: {
    langToggle: 'TR',
    brand: 'SpotWeldPro AI',
    brandMark: 'SW',
    nav: [
      { to: '/', label: 'Home' },
      { to: '/features', label: 'Features' },
      { to: '/how-it-works', label: 'How It Works' },
      { to: '/packages', label: 'Packages' },
      { to: '/demo', label: 'Demo' },
      { to: '/#contact', label: 'Contact' },
    ],
    footer: 'SpotWeldPro AI',
    cta: {
      primary: 'Request Demo',
      secondary: 'Explore Features',
      tertiary: 'Sign In',
    },
    trustNote: {
      bold: 'AI provides explanation and engineering context;',
      rest: ' the final decision is always based on deterministic engineering rules.',
    },

    modules: [
      {
        slug: 'taguchi-doe',
        code: 'TD',
        name: 'Taguchi DOE & ANOVA',
        text: 'Design experiments with L4/L9/L16/L27 orthogonal arrays; rank parameter contributions with variance analysis (ANOVA).',
      },
      {
        slug: 'energy-intelligence',
        code: 'EI',
        name: 'Welding Energy Intelligence',
        text: 'Compute weld energy with the I²Rt formula; evaluate energy window compliance, cost savings, and annual CO₂ impact.',
      },
      {
        slug: 'multi-spot',
        code: 'MS',
        name: 'Multi-Spot Energy & Part Map',
        text: 'List weld point energy outputs ranked by Pareto; identify high-consumption zones on the part map.',
      },
      {
        slug: 'weld-quality',
        code: 'WQ',
        name: 'Weld Quality Analysis',
        text: 'Evaluate nugget diameter, minimum acceptance threshold, and expulsion risk; receive a score, risk level, and corrective recommendations.',
      },
      {
        slug: 'weld-lobe',
        code: 'WL',
        name: 'Process Window (Weld Lobe)',
        text: 'Visualize the current–time parameter space; identify Safe / Warning / Expulsion zones and the optimal operating point.',
      },
      {
        slug: 'failure-analysis',
        code: 'FA',
        name: 'Failure Probability Analysis',
        text: 'Rank risk probabilities for 6 failure modes: expulsion, cold weld, electrode sticking, wear, LME, and coating breakdown.',
      },
      {
        slug: 'sensitivity',
        code: 'SN',
        name: 'Parameter Sensitivity Analysis',
        text: 'Rank the relative impact of current, time, and force on nugget diameter using finite-difference perturbation.',
      },
      {
        slug: 'electrode-engineering',
        code: 'EE',
        name: 'Electrode Engineering',
        text: 'Estimate electrode life and stepped current profile based on material family and cooling conditions.',
      },
      {
        slug: 'ai-models',
        code: 'AI',
        name: 'AI Model Catalog',
        text: 'Browse user-calibrated MLR and RSM nugget prediction models with governance status labels (VALIDATED / EXPERIMENTAL).',
      },
      {
        slug: 'digital-passport',
        code: 'DP',
        name: 'Digital Weld Passport',
        text: 'Governed traceability for weld parameters through a 10-state lifecycle (CREATED → PRODUCTION ACTIVE → ARCHIVED).',
      },
    ],

    industries: [
      {
        name: 'Automotive',
        use: 'High-volume spot welding on structural body and chassis joints.',
        need: 'Consistent nugget quality and part-level traceability.',
        modules: 'Weld Quality Analysis · Traceability',
      },
      {
        name: 'White Goods',
        use: 'Cycle time control in high-speed welding of thin sheet panels.',
        need: 'Fast parameter validation within a narrow process window.',
        modules: 'Weld Lobe Lab',
      },
      {
        name: 'Defense',
        use: 'Fully verified parameters on high-criticality joints.',
        need: 'Rule-based validation and complete audit trail.',
        modules: 'Traceability · Projects & Weld Points',
      },
      {
        name: 'Rail Systems',
        use: 'Long-term durability on body and underframe joints.',
        need: 'Minimum nugget evidence and batch-level reportability.',
        modules: 'Command Center · Failure Analysis',
      },
      {
        name: 'Machine Manufacturing',
        use: 'Rebuilding the weld window for complex part combinations.',
        need: 'Mapping the process window for new material introductions.',
        modules: 'Weld Lobe Lab',
      },
      {
        name: 'Sheet Metal Production',
        use: 'Consistent quality across varying thickness and coating combinations.',
        need: 'Parameter sensitivity per material stack.',
        modules: 'Weld Quality Analysis · Projects',
      },
    ],

    tiers: [
      {
        name: 'Starter',
        tagline: 'Single line, essential assessment.',
        points: ['Weld Quality Analysis', 'Process window summary', 'Basic reporting'],
      },
      {
        name: 'Professional',
        tagline: 'Full workspace for engineering teams.',
        points: ['Weld Lobe Lab', 'Failure Analysis', 'Project & weld point management'],
      },
      {
        name: 'Enterprise',
        tagline: 'Multi-facility, full traceability.',
        points: ['Full audit trail', 'Multi-facility management', 'Enterprise integrations'],
      },
    ],

    steps: [
      {
        no: '01',
        title: 'Project / Application Context',
        input: 'Project, line/station and weld point selection.',
        system: 'Context is validated; relevant engineering rules are matched.',
        output: 'Weld point context ready for analysis.',
        next: 'Material and sheet information',
      },
      {
        no: '02',
        title: 'Material and Sheet Information',
        input: 'Sheet thicknesses, material class, stack structure.',
        system: 'Stack compatibility and thickness limits are checked.',
        output: 'Validated material/stack context.',
        next: 'Welding parameters',
        callout: 'Electrode tip diameter and cooling parameters are also entered here — inputs for the Electrode Engineering module.',
      },
      {
        no: '03',
        title: 'Welding Parameters',
        input: 'Welding current (kA), weld time, electrode force (kN).',
        system: 'Parameters are evaluated against engineering limits.',
        output: 'Parameter status: within / outside limits.',
        next: 'Analysis and engineering checks',
        callout: 'Use Taguchi DOE for systematic experiment design; measure parameter contributions with ANOVA.',
      },
      {
        no: '04',
        title: 'Analysis and Engineering Checks',
        input: 'Validated context + parameter set.',
        system: 'Quality assessment, process window position, risk check.',
        output: 'Weld quality result and engineering interpretation.',
        next: 'Process window / optimization',
        callout: 'The Energy Intelligence module reports I²Rt energy and energy window compliance at this step.',
      },
      {
        no: '05',
        title: 'Process Window / Optimization',
        input: 'Analysis result + targets.',
        system: 'Operating window review, DOE/optimization proposal.',
        output: 'Current vs recommended delta and proposed parameter.',
        next: 'Result, validation and traceability',
        callout: 'Sensitivity Analysis ranks parameter priority. Digital Weld Passport traceability begins at this step.',
      },
      {
        no: '06',
        title: 'Result, Validation and Traceability',
        input: 'Proposed parameter + engineering approval.',
        system: 'Result record: analysis ID, timestamp, parameter set, evidence reference.',
        output: 'Traceable engineering result and report.',
        next: 'New analysis or validation flow',
      },
    ],

    landing: {
      eyebrow: 'SpotWeldPro AI · Engineering Workstation',
      heroTitle: 'Spot Welding Parameter Analysis',
      heroSubtitle:
        'Verify weld quality with deterministic engineering rules;'
        + ' manage the process with design of experiments and failure analysis.',
      heroSim: {
        exampleLabel: 'Example Process',
        currentLabel: 'Welding Current',
        timeLabel: 'Weld Time',
        forceLabel: 'Electrode Force',
        nuggetLabel: 'Nugget Diameter',
        processWindowLabel: 'Process Window',
        insufficientLabel: 'Insufficient',
        safeLabel: 'Safe Window',
        expulsionLabel: 'Weld Expulsion Risk',
        upperElectrode: 'Upper Electrode',
        lowerElectrode: 'Lower Electrode',
        completeLabel: 'Example Complete',
        currentValue: '9.2 kA',
        timeValue: '14 cyc',
        forceValue: '3.5 kN',
        nuggetValue: '5.4 mm',
        panelAriaLabel: 'Engineering product preview',
        panelHeading: 'Engineering Inputs',
        panelBadge: 'Deterministic Rule Validation',
        panelCurrent: 'Welding Current',
        panelTime: 'Welding Time',
        panelForce: 'Electrode Force',
        panelTip: 'Electrode Tip Diameter',
        panelTraceLabel: 'Traceability',
        panelTraceValue: 'Supported by Audit Evidence',
        panelStateLabel: 'State',
        panelStateValue: 'Awaiting Analysis',
      },
      modulesTitle: 'Modules',
      modulesSub: 'View the details on the Features page to explore a module.',
      moduleDetailBtn: 'View Details',
      industriesTitle: 'Industry Use Cases',
      industriesSub:
        'Select your manufacturing context; see typical usage, requirements, and relevant modules.',
      industriesNeedLabel: 'Need:',
      industriesModulesLabel: 'Modules:',
      packagesTitle: 'Packages',
      packagesSub: 'Open the Packages page for a detailed comparison.',
      packagesCompareBtn: 'Compare Packages',
      qualityTitle: 'Evaluate Welding Quality Earlier',
      qualitySub:
        'Reduce unnecessary trials. Optimize process development.'
        + ' Physical validation remains mandatory — software supports this process.',
      qualityItems: [
        'Identify potential weld defects at an earlier stage',
        'Assess scrap and rework risks using engineering rules',
        'Identify unsuitable welding parameters in advance',
        'Plan physical trials more efficiently',
        'Reduce repetitive engineering effort',
        'Improve welding process standardization',
        'Increase the potential for minimizing cost of poor quality (COPQ)',
        'Make more structured engineering decisions',
      ],
      contactTitle: 'Contact',
      contactSub: 'Get in touch for detailed information about SpotWeldPro AI or to request a demo.',
      locationLabel: 'Location',
      location: 'Nilüfer / Bursa / Türkiye',
    },

    features: {
      eyebrow: 'Features',
      heroTitle: 'SpotWeldPro AI Modules',
      heroSubtitle:
        'Deterministic engineering rules and AI-assisted explanation for weld quality,'
        + ' process window, optimization, and traceability.',
      overviewTitle: 'Module Overview',
      overviewSub:
        'Each module performs calculations based on the physical model of the weld.'
        + ' AI provides explanation and summary only;'
        + ' the final decision is always based on deterministic rules.',
      flowBtn: 'View Flow',
      demoBtn: 'Request Demo',
      viz: {
        sectionTitle: 'Engineering Visualizations',
        sectionSub:
          'Example outputs from typical spot welding analysis.'
          + ' All values are illustrative only and are not computed engineering results.',
        demoNote:
          'Example / Illustrative — not an engineering computation result.'
          + ' Software analysis does not replace mandatory physical validation.',
        nuggetChart: {
          title: 'Welding Current ↔ Nugget Diameter',
          xLabel: 'Welding Current (kA)',
          yLabel: 'Nugget Ø (mm)',
          threshLabel: 'Min. acceptance',
          trendLabel: 'Trend band',
        },
        lobeChart: {
          title: 'Weld Lobe / Process Window',
          xLabel: 'Weld Time (cyc)',
          yLabel: 'Welding Current (kA)',
          safeLabel: 'Safe Window',
          insuffLabel: 'Insufficient Penetration',
          expulsionLabel: 'Weld Expulsion Risk',
          opLabel: 'Operating Point',
        },
        sensChart: {
          title: 'Parameter Sensitivity (Relative)',
          currentLabel: 'Welding Current',
          timeLabel: 'Weld Time',
          forceLabel: 'Electrode Force',
          tipLabel: 'Tip Diameter',
        },
        riskChart: {
          title: 'Weld Quality Risk Indicator',
          lowLabel: 'LOW',
          mediumLabel: 'MEDIUM',
          highLabel: 'HIGH',
          indicatorLabel: 'Risk Level (Example)',
          failureModeNote: '10 failure modes · ranked by priority',
        },
        energyChart: {
          title: 'Weld Energy Window (I²Rt)',
          insuffLabel: 'Insufficient',
          optimalLabel: 'Optimal',
          excessiveLabel: 'Excessive',
          windowLabel: 'Energy Window',
        },
      },
    },

    featuresV2: {
      sectionLabel: '10 Verified Engineering Capabilities',
      sectionSub: 'Capabilities verified from real application source code — test evidence for every claim.',
      illustrativeNote: 'Illustrative example values — not computed results.',
      badgeVerified: 'VERIFIED',
      badgeExperimental: 'EXPERIMENTAL',
      inputsLabel: 'Inputs',
      outputsLabel: 'Outputs',
      limitationLabel: 'Limitation',
      sections: [
        {
          slug: 'taguchi-doe',
          badge: 'verified',
          inputs: ['Factor names and levels (2–4 factors)', 'Array type: L4 / L9 / L16 / L27', 'Measured experiment responses (user-supplied)'],
          outputs: ['Designed experiment run matrix', 'S/N ratio and main effects table', 'Optimal parameter combination'],
          limitation: 'Uses measured data; does not predict response values.',
        },
        {
          slug: 'energy-intelligence',
          badge: 'verified',
          inputs: ['Welding current (kA, RMS)', 'Weld resistance (µΩ)', 'Weld cycles and frequency (Hz)'],
          outputs: ['Weld energy (J / Wh / kWh)', 'Energy window status (OPTIMAL / ACCEPTABLE / EXCESSIVE)', 'Annual cost and CO₂ delta'],
          limitation: 'Constant resistance assumption; dynamic resistance transient not modelled.',
        },
        {
          slug: 'multi-spot',
          badge: 'verified',
          inputs: ['Weld point list (current + resistance + cycles)', 'Station and part grouping'],
          outputs: ['Per-point energy ranked by Pareto', 'Group summaries and part map', 'Highest-consumption weld points'],
          limitation: 'No shunt current transfer calculation (shunting is a boolean flag only).',
        },
        {
          slug: 'weld-quality',
          badge: 'verified',
          inputs: ['Current (kA), weld cycles, force (kN)', 'Material family and sheet thicknesses', 'Electrode tip diameter and cooling parameters'],
          outputs: ['0–100 quality score and risk level', 'Computed nugget range (min / opt)', 'Parameter compliance table and corrective recommendations'],
          limitation: 'Reference profile is for 2T stack only; 4T is not supported.',
        },
        {
          slug: 'weld-lobe',
          badge: 'verified',
          inputs: ['Material family and thickness', 'Current / time / force scan ranges', 'Minimum nugget diameter target'],
          outputs: ['Zone map (Safe / Warning / Expulsion / Insufficient Fusion)', 'Best candidate parameter set', 'Expulsion and fusion risk scores'],
          limitation: 'Empirical model; does not include experimental calibration data.',
        },
        {
          slug: 'failure-analysis',
          badge: 'verified',
          inputs: ['Material family and coating flag', 'Parameter deviation from recommended ranges', 'Shunt risk and adhesive flags'],
          outputs: ['Probability for 6 failure modes (expulsion, cold weld, sticking, wear, LME, coating)', 'Contributing factor ranking and corrective actions', 'Validation checklist'],
          limitation: 'Deviation-based model; relative results — no experimental calibration required.',
        },
        {
          slug: 'sensitivity',
          badge: 'verified',
          inputs: ['Reference parameter point (current, cycles, force)', 'Perturbation ratio: ±5% (fixed)'],
          outputs: ['Per-parameter sensitivity (mm / unit)', 'Absolute impact and priority rank'],
          limitation: 'Only 3 parameters analysed; interaction terms not included.',
        },
        {
          slug: 'electrode-engineering',
          badge: 'verified',
          inputs: ['Material family, coating, cooling flow rate and temperature', 'Tip diameter and annual weld count'],
          outputs: ['Estimated electrode life (weld count)', 'Dress interval and annual replacements', 'Stepped current profile'],
          limitation: 'Empirical model; confidence: Low–Medium. Calibration with real maintenance data is recommended.',
        },
        {
          slug: 'ai-models',
          badge: 'experimental',
          inputs: ['User-supplied calibration data (current–cycles–force → nugget)', 'Model type: MLR or RSM'],
          outputs: ['Fitted coefficients, R², RMSE, MAE', 'VIF table and Cook\'s D outlier detection', 'Governance status badge (VALIDATED / EXPERIMENTAL)'],
          limitation: 'Not active in production router. User calibration data is required.',
        },
        {
          slug: 'digital-passport',
          badge: 'verified',
          inputs: ['Weld parameters and engineering descriptions', 'Revision triggers and approval steps'],
          outputs: ['10-state lifecycle traceability', 'Governed audit trail and revision history', 'Production-active / archived state management'],
          limitation: 'Infrastructure API layer; no web UI page currently available.',
        },
      ],
    },

    howItWorks: {
      eyebrow: 'Engineering Flow',
      heroTitle: 'From Context to Traceable Result',
      heroSubtitle:
        'Six-step engineering flow for OEM / Tier-1 production, quality, and engineering teams:'
        + ' context, material, parameters, analysis, optimization, traceability.',
      stepsTitle: 'Six-Step Engineering Process',
      stepsSub:
        'Each step takes user input, evaluates it against engineering rules,'
        + ' and produces a traceable output.',
      inputLabel: 'Input',
      systemLabel: 'System Evaluation',
      outputLabel: 'Engineering Output',
      nextLabel: 'Next →',
    },

    packages: {
      eyebrow: 'Packages',
      heroTitle: 'Choose the Package That Fits Your Production Needs',
      heroSubtitle:
        'Start with the package that fits your needs, from Starter to Enterprise.'
        + ' All packages include core engineering rules.',
      compareTitle: 'Package Comparison',
      compareSub: 'Contact our sales team for detailed information.',
      ctaTitle: 'Get Started',
      demoBtn: 'Request Demo',
      exploreBtn: 'Explore Features',
    },

    demo: {
      eyebrow: 'Demo',
      heroTitle: 'Request a Demo',
      heroSubtitle:
        'Fill in the form to try SpotWeldPro AI in your own production environment;'
        + ' our team will get in touch as soon as possible.',
      formTitle: 'Demo Request',
      formSub: 'Fill in the form below to submit your demo request.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Your Full Name',
      emailLabel: 'Email',
      emailPlaceholder: 'company@example.com',
      companyLabel: 'Company',
      companyPlaceholder: 'Company Name',
      submitBtn: 'Submit Request',
      ackHeroTitle: 'Request a Demo',
      ackHeroSubtitle:
        'Your request to try SpotWeldPro AI in your own production environment has been submitted.',
      ackTitle: 'Request Received',
      ackConfirm: '✓ Received',
      ackMessage:
        'Your demo request has been successfully received. Our team will contact you as soon as possible.',
      exploreBtn: 'Explore Features',
      howBtn: 'How It Works',
      loginBtn: 'Log In to Demo',
    },

    login: {
      ariaLabel: 'Sign in',
      note: 'Enterprise login — engineering intelligence for resistance spot welding',
      usernameLabel: 'Username',
      passwordLabel: 'Password',
      submitBusy: 'Signing in…',
      submitIdle: 'Sign In',
      submitDemo: 'Start / Sign In',
      connecting: 'Connecting to server…',
      retrying: 'Retrying…',
      errorNetwork:
        'No backend connection. Engineering data could not be loaded; verify the API service and retry.',
      errorTimeout:
        'The server may be starting up. Please wait a few seconds and try again.',
      errorServer:
        'Server error. The service is temporarily unavailable; please try again shortly.',
      errorCredentials: 'Incorrect username or password.',
      demoBannerTitle: 'Demo Account',
      demoBannerText: 'Username and password are pre-filled. Click the button to sign in.',
    },

    contact: {
      person1: { name: 'İlhan Çekiç', role: 'Engineering, Product & Business Development' },
      person2: { name: 'Koray Tokol', role: 'Consulting & Technology' },
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      linkedinLabel: 'LinkedIn',
    },

    footerSection: {
      tagline: 'Intelligent Resistance Spot Welding Engineering',
      platformTitle: 'Platform',
      engineeringTitle: 'Engineering',
      aiTitle: 'AI & Analytics',
      contactTitle: 'Contact',
      copyright: '© 2024–2026 SpotWeldPro AI. All rights reserved.',
      liveDemoLabel: 'Live Demo',
      useCasesLabel: 'Use Cases',
      energyIntelLabel: 'Energy Intelligence',
      modelCatalogLabel: 'Model Catalog',
    },
  },
}
