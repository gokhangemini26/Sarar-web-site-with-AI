// ─────────────────────────────────────────────────────────────────────────────
// Sarar Navigation Data — Erkek · Kadın · Sarev
// Kaynak: sarar.com (scrape: 2026-04)
// ─────────────────────────────────────────────────────────────────────────────

export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavCategory {
  label: string;
  href: string;
  items?: NavSubItem[];
}

export interface NavColumn {
  categories: NavCategory[];
}

export interface MegaMenuData {
  columns: NavColumn[];
  featured?: {
    label: string;
    href: string;
    badge?: string;
  }[];
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  megaMenu?: MegaMenuData;
}

// ─── ERKEK ───────────────────────────────────────────────────────────────────

const erkekMegaMenu: MegaMenuData = {
  featured: [
    { label: "Yeni Gelenler", href: "/erkek-yeni-gelenler-634" },
    { label: "Ofis Giyim", href: "/erkek-ofis-giyim" },
    { label: "Kampanyalar", href: "/secili-erkek-urunlerinde-kampanyalar", badge: "%50'ye Varan" },
    { label: "Robin Yayla Ürünlerinde %50 İndirim", href: "/robin-yayla-urunlerinde-50-indirim", badge: "İndirim" },
  ],
  columns: [
    {
      categories: [
        {
          label: "Takım Elbise",
          href: "/erkek/takim-elbise",
          items: [
            { label: "Senin Sarar'ın Yok Mu?", href: "/senin-sararin-yok-mu" },
            { label: "Relax Fit Takım Elbise", href: "/erkek-relax-fit-takim-elbise" },
            { label: "Davet Stili Takım Elbise", href: "/davet-stili-takim-elbise" },
            { label: "Regular Fit Takım Elbise", href: "/erkek/regular-fit-takim-elbise" },
            { label: "Slim Fit Takım Elbise", href: "/erkek/slim-fit-takim-elbise" },
            { label: "Keten Takım Elbise", href: "/erkek-keten-takim-elbise" },
            { label: "Ekstra Slim Fit Takım Elbise", href: "/ekstra-slim-fit-takim-elbise" },
            { label: "Yelekli Takım Elbise", href: "/erkek/yelekli-takim-elbise" },
            { label: "Kruvaze Takım Elbise", href: "/erkek/kruvaze-takim-elbise" },
            { label: "Kareli Takım Elbise", href: "/erkek/kareli-takim-elbise" },
            { label: "Tümünü Gör →", href: "/erkek/takim-elbise" },
          ],
        },
        {
          label: "Damatlık",
          href: "/damatlik",
          items: [
            { label: "Damatlık Takım Elbise", href: "/damatlik-takim-elbise" },
            { label: "Damatlık Gömlek", href: "/damatlik-gomlek" },
            { label: "Damatlık Ayakkabı", href: "/damatlik-ayakkabi" },
            { label: "Tümünü Gör →", href: "/damatlik" },
          ],
        },
      ],
    },
    {
      categories: [
        {
          label: "Ceket",
          href: "/erkek/ceket",
          items: [
            { label: "Regular Fit Ceket", href: "/erkek/regular-fit-ceket" },
            { label: "Slim Fit Ceket", href: "/erkek/slim-fit-ceket" },
            { label: "Blazer Ceket", href: "/erkek/blazer-ceket" },
            { label: "Relax Fit Ceket", href: "/erkek/relax-fit-ceket" },
            { label: "Ekstra Slim Fit Ceket", href: "/ekstra-slim-fit-ceket" },
            { label: "Ekose Ceket", href: "/erkek/ekose-ceket" },
            { label: "Keten Ceket", href: "/erkek/keten-ceket" },
            { label: "Kruvaze Ceket", href: "/erkek/kruvaze-ceket" },
            { label: "Tümünü Gör →", href: "/erkek/ceket" },
          ],
        },
        {
          label: "Dış Giyim",
          href: "/erkek/dis-giyim",
          items: [
            { label: "Mont", href: "/erkek/mont" },
            { label: "Kaban", href: "/erkek/kaban" },
            { label: "Palto", href: "/erkek/palto" },
            { label: "Trençkot", href: "/erkek/trenckot" },
            { label: "Pardösü", href: "/erkek/pardosu" },
            { label: "Deri Ceket", href: "/erkek/deri-ceket" },
            { label: "Tümünü Gör →", href: "/erkek/dis-giyim" },
          ],
        },
      ],
    },
    {
      categories: [
        {
          label: "Pantolon",
          href: "/erkek/pantolon",
          items: [
            { label: "Kumaş Pantolon", href: "/erkek/kumas-pantolon" },
            { label: "Slim Fit Pantolon", href: "/slim-fit-pantolon" },
            { label: "Regular Fit Pantolon", href: "/regular-fit-pantolon" },
            { label: "Relax Fit Pantolon", href: "/erkek-relax-fit-pantolon" },
            { label: "Ekstra Slim Fit Pantolon", href: "/ekstra-slim-fit-pantolon" },
            { label: "Denim Kot Pantolon", href: "/erkek/denim-kot-pantolon" },
            { label: "Pamuk ve Kanvas Pantolon", href: "/erkek/pamuk-ve-kanvas-pantolon" },
            { label: "Keten Pantolon", href: "/erkek-keten-pantolon" },
            { label: "Tümünü Gör →", href: "/erkek/pantolon" },
          ],
        },
        {
          label: "Gömlek",
          href: "/erkek-gomlek-modelleri",
          items: [
            { label: "Slim Fit Gömlek", href: "/erkek/slim-fit-gomlek" },
            { label: "Klasik Gömlek", href: "/erkek/regular-fit-gomlek" },
            { label: "Pamuklu Gömlek", href: "/pamuklu-gomlek" },
            { label: "Desenli Gömlek", href: "/erkek/desenli-gomlek" },
            { label: "Ekose Gömlek", href: "/erkek/ekose-gomlek" },
            { label: "Keten Gömlek", href: "/erkek/keten-gomlek" },
            { label: "Non Iron Gömlek", href: "/non-iron-gomlek" },
            { label: "Kol Manşetli Gömlek", href: "/erkek/kol-mansetli-gomlek" },
            { label: "Kısa Kollu Gömlek", href: "/erkek/kisa-kollu-gomlek" },
            { label: "Tümünü Gör →", href: "/erkek-gomlek-modelleri" },
          ],
        },
      ],
    },
    {
      categories: [
        {
          label: "Triko Kazak",
          href: "/erkek/triko-kazak",
          items: [
            { label: "Polo Yaka Triko", href: "/erkek/polo-yaka-triko" },
            { label: "Bisiklet Yaka Triko", href: "/erkek/bisiklet-yaka-triko" },
            { label: "Yarım Balıkçı Yaka Triko", href: "/erkek/yarim-balikci-yaka-triko" },
            { label: "Tam Balıkçı Yaka Triko", href: "/erkek/tam-balikci-yaka-triko" },
            { label: "V Yaka Triko", href: "/erkek/v-yaka-triko" },
            { label: "Kısa Kollu Triko", href: "/erkek/kisa-kollu-triko" },
            { label: "Hırka", href: "/erkek/hirka" },
            { label: "Tümünü Gör →", href: "/erkek/triko-kazak" },
          ],
        },
        {
          label: "Sweatshirt",
          href: "/erkek/sweatshirt",
          items: [
            { label: "Polo Yaka Sweatshirt", href: "/erkek/polo-yaka-sweatshirt" },
            { label: "Bisiklet Yaka Sweatshirt", href: "/erkek/bisiklet-yaka-sweatshirt" },
            { label: "Kapüşonlu Sweatshirt", href: "/erkek/kapusonlu-sweatshirt" },
            { label: "Fermuarlı Sweatshirt", href: "/erkek/fermuarli-sweatshirt" },
            { label: "Tümünü Gör →", href: "/erkek/sweatshirt" },
          ],
        },
        {
          label: "Spor Giyim",
          href: "/erkek/spor-giyim",
          items: [
            { label: "Spor Üst Giyim", href: "/erkek/spor-ust-giyim" },
            { label: "Eşofman Altı", href: "/erkek/esofman-alti" },
            { label: "Tümünü Gör →", href: "/erkek/spor-giyim" },
          ],
        },
        {
          label: "Tişört",
          href: "/erkek/tisort",
          items: [
            { label: "Polo Yaka Tişört", href: "/erkek/polo-yaka-tisort" },
            { label: "Bisiklet Yaka Tişört", href: "/erkek/o-bisiklet-yaka-tisort" },
            { label: "V Yaka Tişört", href: "/erkek/v-yaka-tisort" },
            { label: "Basic Tişört", href: "/erkek/basic-tisort" },
            { label: "Tümünü Gör →", href: "/erkek/tisort" },
          ],
        },
        {
          label: "Ayakkabı",
          href: "/erkek/ayakkabi",
          items: [
            { label: "Klasik Ayakkabı", href: "/erkek/klasik-ayakkabi" },
            { label: "Casual Ayakkabı", href: "/erkek/casual-ayakkabi" },
            { label: "Ayakkabı Kalıbı", href: "/ayakkabi-kalibi" },
            { label: "Tümünü Gör →", href: "/erkek/ayakkabi" },
          ],
        },
        {
          label: "Yelek",
          href: "/erkek/yelek",
          items: [
            { label: "Kumaş Yelek", href: "/erkek/kumas-yelek" },
            { label: "Spor Yelek", href: "/erkek/spor-yelek" },
            { label: "Tümünü Gör →", href: "/erkek/yelek" },
          ],
        },
        {
          label: "İç Giyim",
          href: "/erkek/ic-giyim",
          items: [
            { label: "Atlet", href: "/erkek/atlet" },
            { label: "Bisiklet Yaka Fanila", href: "/erkek/bisiklet-yaka-fanila" },
            { label: "V Yaka Fanila", href: "/erkek/v-yaka-fanila" },
            { label: "Boxer", href: "/erkek/boxer" },
            { label: "Tümünü Gör →", href: "/erkek/ic-giyim" },
          ],
        },
        {
          label: "Çocuk Giyim",
          href: "/cocuk-giyim",
          items: [
            { label: "Çocuk Spor Giyim", href: "/cocuk/spor-giyim" },
            { label: "Çocuk Smokin", href: "/cocuk-smokin" },
            { label: "Çocuk Tişört", href: "/cocuk-tisort" },
            { label: "Tümünü Gör →", href: "/cocuk-giyim" },
          ],
        },
      ],
    },
  ],
};

// ─── KADIN ───────────────────────────────────────────────────────────────────

const kadinMegaMenu: MegaMenuData = {
  featured: [
    { label: "Yeni Gelenler", href: "/kadin-yeni-gelenler-635" },
    { label: "Ofis Giyim", href: "/kadin-ofis-giyim" },
    { label: "%20'ye Varan İndirim", href: "/kadin-koleksiyonunda-secili-urunlerde-20ye-varan-indirim", badge: "İndirim" },
    { label: "Sepette Tek Fiyat 1.199,99₺", href: "/secili-kadin-urunlerinde-sepette-tek-fiyat-119999tl", badge: "Kampanya" },
  ],
  columns: [
    {
      categories: [
        {
          label: "Elbise",
          href: "/elbise",
          items: [
            { label: "Davet Elbiseleri", href: "/davet-elbiseleri" },
            { label: "Desenli Elbise", href: "/desenli-elbise" },
            { label: "Yazlık Elbise", href: "/yazlik-elbise" },
            { label: "Klasik Düz Elbise", href: "/klasik-duz-elbise" },
            { label: "Tüvit Elbise", href: "/tuvit-elbise" },
            { label: "Tümünü Gör →", href: "/elbise" },
          ],
        },
        {
          label: "Dış Giyim",
          href: "/kadin/dis-giyim",
          items: [
            { label: "Mont", href: "/sararcom/kadin/mont" },
            { label: "Kaban - Palto", href: "/kadin/kaban" },
            { label: "Trençkot", href: "/kadin/trenckot" },
            { label: "Tümünü Gör →", href: "/kadin/dis-giyim" },
          ],
        },
        {
          label: "Ceket",
          href: "/kadin/ceket",
          items: [
            { label: "Klasik Ceket", href: "/kadin/klasik-ceket" },
            { label: "Tüvit Ceket", href: "/tuvit-ceket" },
            { label: "Deri Ceket", href: "/kadin/deri-ceket" },
            { label: "Spor Ceket", href: "/kadin/spor-ceket" },
            { label: "Tümünü Gör →", href: "/kadin/ceket" },
          ],
        },
        {
          label: "Kadın Smokin",
          href: "/kadin-smokin",
          items: [
            { label: "Smokin Ceket", href: "/smokin-ceket" },
            { label: "Smokin Pantolon", href: "/smokin-pantolon" },
            { label: "Tümünü Gör →", href: "/kadin-smokin" },
          ],
        },
      ],
    },
    {
      categories: [
        {
          label: "Tüvit Giyim",
          href: "/tuvit-giyim",
          items: [
            { label: "Ceket", href: "/ceket-tuvit" },
            { label: "Yelek", href: "/yelek-tuvit" },
            { label: "Etek", href: "/etek-tuvit" },
            { label: "Elbise", href: "/elbise-tuvit" },
            { label: "Pantolon", href: "/pantolon-tuvit" },
            { label: "Şort", href: "/sort-tuvit" },
            { label: "Tümünü Gör →", href: "/tuvit-giyim" },
          ],
        },
        {
          label: "Etek",
          href: "/etek",
          items: [
            { label: "Kalem Etek", href: "/kalem-etek" },
            { label: "Desenli Etek", href: "/desenli-etek" },
            { label: "Tüvit Etek", href: "/tuvit-etek" },
            { label: "Mini Etek", href: "/mini-etek" },
            { label: "Midi Etek", href: "/midi-etek" },
            { label: "Şifon Etek", href: "/sifon-etek" },
            { label: "Tümünü Gör →", href: "/etek" },
          ],
        },
        {
          label: "Takım Elbise",
          href: "/takim-elbise-kadin",
        },
        {
          label: "Yelek",
          href: "/kadin-yelek",
          items: [
            { label: "Tüvit Yelek", href: "/tuvit-yelek" },
            { label: "Kumaş Yelek", href: "/kadin-kumas-yelek" },
            { label: "Triko Yelek", href: "/triko-yelek-17682019691171" },
            { label: "Tümünü Gör →", href: "/kadin-yelek" },
          ],
        },
      ],
    },
    {
      categories: [
        {
          label: "Triko",
          href: "/kadin/triko",
          items: [
            { label: "Bisiklet Yaka Triko", href: "/kadin/bisiklet-yaka-triko" },
            { label: "Boğazlı Triko", href: "/kadin/bogazli-triko" },
            { label: "Polo Yaka Triko", href: "/kadin/polo-yaka-triko" },
            { label: "Triko Sweatshirt", href: "/kadin/triko-sweatshirt" },
            { label: "Hırka", href: "/kadin/hirka" },
            { label: "Tümünü Gör →", href: "/kadin/triko" },
          ],
        },
        {
          label: "Pantolon",
          href: "/kadin/pantolon",
          items: [
            { label: "Kumaş Pantolon", href: "/kadin/kumas-pantolon" },
            { label: "Denim Pantolon", href: "/kadin/denim-kot-pantolon" },
            { label: "Tüvit Pantolon", href: "/tuvit-pantolon" },
            { label: "Tümünü Gör →", href: "/kadin/pantolon" },
          ],
        },
        {
          label: "Gömlek",
          href: "/kadin/gomlek",
          items: [
            { label: "Pamuklu Gömlek", href: "/kadin-pamuklu-gomlek" },
            { label: "Desenli Gömlek", href: "/kadin-desenli-gomlek" },
            { label: "Kısa Kol Gömlek", href: "/kadin-kisa-kol-gomlek" },
            { label: "Uzun Kollu Gömlek", href: "/kadin-uzun-kollu-gomlek" },
            { label: "Tümünü Gör →", href: "/kadin/gomlek" },
          ],
        },
        {
          label: "Bluz",
          href: "/bluz",
          items: [
            { label: "Klasik Bluz", href: "/klasik-bluz" },
            { label: "Desenli Bluz", href: "/desenli-bluz" },
            { label: "Tümünü Gör →", href: "/bluz" },
          ],
        },
      ],
    },
    {
      categories: [
        {
          label: "Spor Giyim",
          href: "/kadin/spor-giyim",
          items: [
            { label: "Spor Sweatshirt", href: "/kadin-spor-sweatshirt" },
            { label: "Eşofman Üstü", href: "/kadin/esofman-ustu" },
            { label: "Eşofman Altı", href: "/kadin/esofman-alti" },
            { label: "Basic Atlet", href: "/kadin/basic-atlet" },
            { label: "Tümünü Gör →", href: "/kadin/spor-giyim" },
          ],
        },
        {
          label: "Tişört",
          href: "/kadin/tisort",
          items: [
            { label: "Bisiklet Yaka Tişört", href: "/kadin/bisiklet-yaka-tisort" },
            { label: "Kolsuz Tişört", href: "/kadin/kolsuz-tisort" },
            { label: "Tümünü Gör →", href: "/kadin/tisort" },
          ],
        },
        {
          label: "Eşarp Şal & Fular",
          href: "/esarp-sal-fular-modelleri",
          items: [
            { label: "Yeni Gelenler", href: "/esarp-sal-fular-yeni-gelenler-636" },
            { label: "Eşarp", href: "/esarp" },
            { label: "Şal", href: "/sal" },
            { label: "Fular", href: "/fular" },
            { label: "Tümünü Gör →", href: "/esarp-sal-fular-modelleri" },
          ],
        },
        {
          label: "Ayakkabı",
          href: "/kadin-ayakkabi",
        },
        {
          label: "Şort",
          href: "/kadin/sort",
        },
      ],
    },
  ],
};

// ─── SAREV (EV TEKSTİLİ) ─────────────────────────────────────────────────────

const sarevMegaMenu: MegaMenuData = {
  featured: [
    { label: "Yeni Gelenler", href: "/sarev-yeni-gelenler" },
    { label: "Sarev Elite", href: "/sarev-elite" },
    { label: "%25 Sezon Sonu Kampanyası", href: "/sarev-secili-urunlerde-25-sezon-sonu-kampanyasi", badge: "%25" },
    { label: "10.000₺ Alışverişe Eşarp Hediye", href: "/sarev-urunlerinde-10000tl-ve-katlari-alisverise-1-adet-ipek-esarp-hediye", badge: "Hediye" },
  ],
  columns: [
    {
      categories: [
        {
          label: "Nevresim Takımları",
          href: "/nevresim-takimlari",
          items: [
            { label: "Saten Nevresim Takımı", href: "/saten-nevresim-takimi" },
            { label: "Mood Comfort Nevresim", href: "/mood-comfort-nevresim-takimi" },
            { label: "Solid Nevresim Takımı", href: "/solid-nevresim-takimi" },
            { label: "Sport & Chic Nevresim", href: "/sport-chic-nevresim-takimi" },
            { label: "Poplin Nevresim Takımı", href: "/poplin-nevresim-takimi" },
            { label: "Flanel Nevresim Takımı", href: "/flanel-nevresim-takimi" },
            { label: "Lyocell Nevresim Takımı", href: "/lyocell-nevresim-takimi" },
            { label: "Keten Nevresim Takımı", href: "/keten-nevresim-takimi" },
            { label: "Tümünü Gör →", href: "/nevresim-takimlari" },
          ],
        },
        {
          label: "Sarev Elite",
          href: "/sarev-elite",
          items: [
            { label: "Kadın Pijama ve Ev Giyim", href: "/kadin-pijama-ve-ev-giyim" },
            { label: "Elite Nevresim Takımı", href: "/elite-nevresim-takimi" },
            { label: "Elite Yatak Örtüsü", href: "/elite-yatak-ortusu" },
            { label: "Elite Throw Modelleri", href: "/elite-throw" },
            { label: "Elite Havlu Modelleri", href: "/elite-havlu" },
            { label: "Elite Masa Örtüsü", href: "/elite-masa-ortusu" },
            { label: "Elite Ev Kozmetiği", href: "/elite-ev-kozmetigi" },
            { label: "İpek Yorgan Modelleri", href: "/ipek-yorgan-modelleri" },
            { label: "Elite İpek Yastık Kılıfı", href: "/elite-ipek-yastik-kilifi" },
            { label: "Tümünü Gör →", href: "/sarev-elite" },
          ],
        },
      ],
    },
    {
      categories: [
        {
          label: "Yatak Örtüleri",
          href: "/yatak-ortuleri",
        },
        {
          label: "Battaniye",
          href: "/battaniye",
        },
        {
          label: "Throw",
          href: "/throw",
        },
        {
          label: "Kırlent",
          href: "/kirlent",
        },
        {
          label: "Beyaz Ev Tekstili",
          href: "/beyaz-ev-tekstili",
          items: [
            { label: "Yorgan Modelleri", href: "/yorgan-modelleri" },
            { label: "Alez", href: "/alez" },
            { label: "Yastık Modelleri", href: "/yastik-modelleri" },
            { label: "Tümünü Gör →", href: "/beyaz-ev-tekstili" },
          ],
        },
        {
          label: "Pike Takımları",
          href: "/pike-takimlari",
        },
        {
          label: "Nevresim",
          href: "/nevresim-982",
        },
        {
          label: "Yastık Kılıfı",
          href: "/yastik-kilifi",
        },
      ],
    },
    {
      categories: [
        {
          label: "Banyo Grubu",
          href: "/banyo-grubu",
          items: [
            { label: "Bornoz", href: "/bornoz-modelleri" },
            { label: "Aile Bornoz Seti", href: "/bornoz-aile-seti" },
            { label: "Havlu", href: "/havlu-modelleri" },
            { label: "Paspas", href: "/paspas-modelleri" },
            { label: "Tümünü Gör →", href: "/banyo-grubu" },
          ],
        },
        {
          label: "Çarşaf Takımları",
          href: "/carsaf-takimlari",
        },
        {
          label: "Çarşaf",
          href: "/carsaf",
        },
        {
          label: "Plaj Havlusu & Peştemal",
          href: "/plaj-havlusu-pestemal",
        },
        {
          label: "Ev Kozmetiği",
          href: "/ev-kozmetigi",
        },
        {
          label: "Masa Örtüleri",
          href: "/masa-ortuleri",
        },
        {
          label: "Aksesuar",
          href: "/aksesuar-17627838541140",
        },
      ],
    },
  ],
};

// ─── TAM NAV YAPISI ──────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  {
    id: "erkek",
    label: "Erkek",
    href: "/erkek-giyim",
    megaMenu: erkekMegaMenu,
  },
  {
    id: "kadin",
    label: "Kadın",
    href: "/kadin-giyim",
    megaMenu: kadinMegaMenu,
  },
  {
    id: "smokin",
    label: "Smokin",
    href: "/smokin",
  },
  {
    id: "aksesuar",
    label: "Aksesuar",
    href: "/aksesuar",
  },
  {
    id: "sarev",
    label: "Sarev",
    href: "/sarev",
    megaMenu: sarevMegaMenu,
  },
  {
    id: "robin-yayla",
    label: "Robin Yayla X SARAR",
    href: "/robin-yayla-x-sarar-koleksiyonu",
  },
  {
    id: "indirim",
    label: "İndirim",
    href: "/indirim",
  },
  {
    id: "blog",
    label: "Sarar Blog",
    href: "https://blog.sarar.com/",
  },
];
