import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kadın Giyim | SARAR",
  description:
    "SARAR kadın giyim koleksiyonu: elbise, ceket, pantolon, tüvit giyim ve daha fazlası.",
};

const mainCategories = [
  {
    label: "Elbise",
    href: "/elbise",
    desc: "Davet, yazlık, tüvit, desenli",
    emoji: "👗",
  },
  {
    label: "Ceket",
    href: "/kadin/ceket",
    desc: "Klasik, tüvit, deri, spor",
    emoji: "🧥",
  },
  {
    label: "Pantolon",
    href: "/kadin/pantolon",
    desc: "Kumaş, denim, tüvit",
    emoji: "👖",
  },
  {
    label: "Etek",
    href: "/etek",
    desc: "Kalem, mini, midi, tüvit",
    emoji: "👘",
  },
  {
    label: "Tüvit Giyim",
    href: "/tuvit-giyim",
    desc: "Ceket, yelek, elbise, etek",
    emoji: "✨",
  },
  {
    label: "Dış Giyim",
    href: "/kadin/dis-giyim",
    desc: "Mont, kaban, palto, trençkot",
    emoji: "🧤",
  },
  {
    label: "Triko",
    href: "/kadin/triko",
    desc: "Polo, bisiklet, boğazlı, hırka",
    emoji: "🧶",
  },
  {
    label: "Gömlek",
    href: "/kadin/gomlek",
    desc: "Pamuklu, desenli, kısa kol",
    emoji: "👚",
  },
  {
    label: "Bluz",
    href: "/bluz",
    desc: "Klasik, desenli",
    emoji: "🌸",
  },
  {
    label: "Spor Giyim",
    href: "/kadin/spor-giyim",
    desc: "Sweatshirt, eşofman, atlet",
    emoji: "🏃",
  },
  {
    label: "Eşarp & Şal",
    href: "/esarp-sal-fular-modelleri",
    desc: "Eşarp, şal, fular",
    emoji: "🧣",
  },
  {
    label: "Ayakkabı",
    href: "/kadin-ayakkabi",
    desc: "Klasik, casual",
    emoji: "👠",
  },
  {
    label: "Takım Elbise",
    href: "/takim-elbise-kadin",
    desc: "Kadın takım elbise koleksiyonu",
    emoji: "💼",
  },
  {
    label: "Kadın Smokin",
    href: "/kadin-smokin",
    desc: "Smokin ceket, pantolon",
    emoji: "🎩",
  },
  {
    label: "Tişört",
    href: "/kadin/tisort",
    desc: "Bisiklet yaka, kolsuz",
    emoji: "👕",
  },
  {
    label: "Yelek",
    href: "/kadin-yelek",
    desc: "Tüvit, kumaş, triko",
    emoji: "🎽",
  },
];

const quickLinks = [
  { label: "Yeni Gelenler", href: "/kadin-yeni-gelenler-635" },
  { label: "Davet Elbiseleri", href: "/davet-elbiseleri" },
  { label: "Ofis Giyim", href: "/kadin-ofis-giyim" },
  { label: "Şort", href: "/kadin/sort" },
  { label: "%20'ye Varan İndirim", href: "/kadin-koleksiyonunda-secili-urunlerde-20ye-varan-indirim" },
  { label: "Sepette Tek Fiyat 1.199,99₺", href: "/secili-kadin-urunlerinde-sepette-tek-fiyat-119999tl" },
];

const SARAR_BASE = "https://sarar.com";

export default function KadinGiyimPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative flex h-56 items-end bg-stone-100 px-8 pb-10 md:h-72">
        <div className="relative z-10">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
            Koleksiyon
          </p>
          <h1 className="text-4xl font-light tracking-tight text-stone-900 md:text-5xl">
            Kadın Giyim
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Zarafet, özgünlük ve kalite
          </p>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-24 bg-stone-900" />
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
              className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-[11px] font-medium text-neutral-700 transition hover:border-black hover:text-black"
            >
              {q.label}
            </a>
          ))}
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
              className="group flex flex-col items-center gap-3 rounded-xl border border-neutral-100 p-5 text-center transition hover:border-stone-900 hover:shadow-md"
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

      {/* Tüvit & Davet Banner */}
      <section className="mx-auto max-w-screen-xl px-6 pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-2xl bg-stone-900 px-8 py-10 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
              Öne Çıkan
            </p>
            <div className="mt-4">
              <h3 className="text-2xl font-light">Tüvit Giyim</h3>
              <p className="mt-2 text-sm text-stone-400">
                Klasik dokusu, modern kesimiyle tam bir sofistike seçenek
              </p>
              <a
                href={`${SARAR_BASE}/tuvit-giyim`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition hover:bg-stone-100"
              >
                Koleksiyonu Keşfet
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-200 px-8 py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Özel
            </p>
            <div className="mt-4">
              <h3 className="text-2xl font-light text-neutral-900">
                Davet Elbiseleri
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Her özel an için sofistike elbise seçenekleri
              </p>
              <a
                href={`${SARAR_BASE}/davet-elbiseleri`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-full bg-neutral-900 px-5 py-2 text-xs font-semibold text-white transition hover:bg-black"
              >
                Koleksiyonu Keşfet
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
