import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarev — Ev Tekstili | SARAR",
  description:
    "Sarev ev tekstili koleksiyonu: nevresim takımları, banyo grubu, battaniye, throw ve daha fazlası.",
};

const mainCategories = [
  {
    label: "Nevresim Takımları",
    href: "/nevresim-takimlari",
    desc: "Saten, poplin, lyocell, keten",
    emoji: "🛏️",
  },
  {
    label: "Sarev Elite",
    href: "/sarev-elite",
    desc: "Premium koleksiyon, ipek yorgan",
    emoji: "👑",
  },
  {
    label: "Bornoz",
    href: "/bornoz-modelleri",
    desc: "Aile seti, tekli bornoz",
    emoji: "🛁",
  },
  {
    label: "Havlu",
    href: "/havlu-modelleri",
    desc: "Banyo havlusu, plaj havlusu",
    emoji: "🏖️",
  },
  {
    label: "Yatak Örtüleri",
    href: "/yatak-ortuleri",
    desc: "Çeşitli model ve renkler",
    emoji: "🌿",
  },
  {
    label: "Battaniye",
    href: "/battaniye",
    desc: "Her mevsime uygun",
    emoji: "🧸",
  },
  {
    label: "Throw",
    href: "/throw",
    desc: "Dekoratif throw modelleri",
    emoji: "🪑",
  },
  {
    label: "Kırlent",
    href: "/kirlent",
    desc: "Dekoratif kırlent koleksiyonu",
    emoji: "💛",
  },
  {
    label: "Çarşaf Takımları",
    href: "/carsaf-takimlari",
    desc: "Tek & çift kişilik",
    emoji: "🌙",
  },
  {
    label: "Pike Takımları",
    href: "/pike-takimlari",
    desc: "İnce ve kalın pike",
    emoji: "☀️",
  },
  {
    label: "Yorgan",
    href: "/yorgan-modelleri",
    desc: "İpek, kumaş, mevsimlik",
    emoji: "❄️",
  },
  {
    label: "Ev Kozmetiği",
    href: "/ev-kozmetigi",
    desc: "Oda spreyi, çamaşır kokusu",
    emoji: "🌸",
  },
  {
    label: "Masa Örtüleri",
    href: "/masa-ortuleri",
    desc: "Çeşitli boyut ve desenler",
    emoji: "🍽️",
  },
  {
    label: "Plaj Havlusu",
    href: "/plaj-havlusu-pestemal",
    desc: "Plaj havlusu & peştemal",
    emoji: "🌊",
  },
  {
    label: "Yastık Modelleri",
    href: "/yastik-modelleri",
    desc: "Uyku yastıkları",
    emoji: "😴",
  },
  {
    label: "Alez",
    href: "/alez",
    desc: "Su geçirmez alez modelleri",
    emoji: "🛡️",
  },
];

const eliteItems = [
  { label: "Elite Nevresim Takımı", href: "/elite-nevresim-takimi" },
  { label: "Elite Yatak Örtüsü", href: "/elite-yatak-ortusu" },
  { label: "Elite Throw", href: "/elite-throw" },
  { label: "Elite Havlu", href: "/elite-havlu" },
  { label: "Elite Masa Örtüsü", href: "/elite-masa-ortusu" },
  { label: "İpek Yorgan", href: "/ipek-yorgan-modelleri" },
  { label: "Kadın Pijama ve Ev Giyim", href: "/kadin-pijama-ve-ev-giyim" },
  { label: "Elite İpek Yastık Kılıfı", href: "/elite-ipek-yastik-kilifi" },
];

const quickLinks = [
  { label: "Yeni Gelenler", href: "/sarev-yeni-gelenler" },
  { label: "Sarev Elite", href: "/sarev-elite" },
  { label: "%25 Sezon Sonu Kampanyası", href: "/sarev-secili-urunlerde-25-sezon-sonu-kampanyasi" },
  { label: "10.000₺ Alışverişe Eşarp Hediye", href: "/sarev-urunlerinde-10000tl-ve-katlari-alisverise-1-adet-ipek-esarp-hediye" },
  { label: "Paspas", href: "/paspas-modelleri" },
  { label: "Çarşaf", href: "/carsaf" },
];

const SARAR_BASE = "https://sarar.com";

export default function SarevPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative flex h-56 items-end bg-stone-50 px-8 pb-10 md:h-72">
        <div className="relative z-10">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
            Ev Tekstili
          </p>
          <h1 className="text-4xl font-light tracking-tight text-stone-900 md:text-5xl">
            Sarev
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Evinizin her köşesine dokunuş kalitesi
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-24 bg-stone-800" />
        {/* Decorative dots */}
        <div className="absolute right-12 top-12 grid grid-cols-4 gap-2 opacity-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-stone-700" />
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="border-b border-neutral-100 bg-neutral-50 px-6 py-4">
        <div className="mx-auto flex max-w-screen-xl flex-wrap gap-2">
          {quickLinks.map((q) => (
            <a
              key={q.href}
              href={`${SARAR_BASE}${q.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-[11px] font-medium text-neutral-700 transition hover:border-stone-800 hover:text-stone-900"
            >
              {q.label}
            </a>
          ))}
        </div>
      </section>

      {/* Sarev Elite highlight */}
      <section className="border-b border-neutral-100 bg-neutral-900 px-6 py-10">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-6 flex items-baseline justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Premium
              </p>
              <h2 className="text-xl font-light text-white">Sarev Elite</h2>
            </div>
            <a
              href={`${SARAR_BASE}/sarev-elite`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium text-neutral-400 transition hover:text-white"
            >
              Tümünü Gör →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {eliteItems.map((el) => (
              <a
                key={el.href}
                href={`${SARAR_BASE}${el.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-neutral-700 px-3 py-3 text-center text-[11px] text-neutral-300 transition hover:border-white hover:text-white"
              >
                {el.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="mx-auto max-w-screen-xl px-6 py-12">
        <h2 className="mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Tüm Kategoriler
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {mainCategories.map((cat) => (
            <a
              key={cat.href}
              href={`${SARAR_BASE}${cat.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-xl border border-neutral-100 p-5 text-center transition hover:border-stone-800 hover:shadow-md"
            >
              <span className="text-3xl">{cat.emoji}</span>
              <div>
                <p className="text-[12px] font-semibold text-neutral-900 group-hover:text-black">
                  {cat.label}
                </p>
                <p className="mt-0.5 text-[10px] text-neutral-400">{cat.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Nevresim feature banner */}
      <section className="mx-auto max-w-screen-xl px-6 pb-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-stone-200 bg-stone-50 px-8 py-12 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
              En Çok Tercih Edilen
            </p>
            <h3 className="mt-1 text-2xl font-light text-stone-900">
              Nevresim Takımları
            </h3>
            <p className="mt-2 max-w-xs text-sm text-stone-500">
              Saten'den linen'a, her zevke ve mevsime uygun kumaş seçenekleri
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:justify-end">
            {[
              { l: "Saten", h: "/saten-nevresim-takimi" },
              { l: "Lyocell", h: "/lyocell-nevresim-takimi" },
              { l: "Keten", h: "/keten-nevresim-takimi" },
              { l: "Poplin", h: "/poplin-nevresim-takimi" },
            ].map((n) => (
              <a
                key={n.h}
                href={`${SARAR_BASE}${n.h}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-medium text-stone-800 transition hover:border-stone-900 hover:text-black"
              >
                {n.l}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
