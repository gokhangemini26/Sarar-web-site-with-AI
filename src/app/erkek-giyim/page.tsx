import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erkek Giyim | SARAR",
  description:
    "SARAR erkek giyim koleksiyonu: takım elbise, ceket, gömlek, pantolon ve daha fazlası.",
};

const mainCategories = [
  {
    label: "Takım Elbise",
    href: "/erkek/takim-elbise",
    desc: "Slim fit, regular fit, relax fit",
    emoji: "🤵",
  },
  {
    label: "Gömlek",
    href: "/erkek-gomlek-modelleri",
    desc: "Klasik, pamuklu, keten, non-iron",
    emoji: "👔",
  },
  {
    label: "Ceket",
    href: "/erkek/ceket",
    desc: "Blazer, kruvaze, ekose",
    emoji: "🧥",
  },
  {
    label: "Pantolon",
    href: "/erkek/pantolon",
    desc: "Kumaş, denim, keten",
    emoji: "👖",
  },
  {
    label: "Dış Giyim",
    href: "/erkek/dis-giyim",
    desc: "Mont, kaban, palto, trençkot",
    emoji: "🧤",
  },
  {
    label: "Triko Kazak",
    href: "/erkek/triko-kazak",
    desc: "Polo, bisiklet, balıkçı yaka",
    emoji: "🧶",
  },
  {
    label: "Sweatshirt",
    href: "/erkek/sweatshirt",
    desc: "Kapüşonlu, fermuarlı, polo yaka",
    emoji: "👕",
  },
  {
    label: "Tişört",
    href: "/erkek/tisort",
    desc: "Basic, polo yaka, v yaka",
    emoji: "👕",
  },
  {
    label: "Spor Giyim",
    href: "/erkek/spor-giyim",
    desc: "Eşofman, spor üst giyim",
    emoji: "🏃",
  },
  {
    label: "Ayakkabı",
    href: "/erkek/ayakkabi",
    desc: "Klasik, casual",
    emoji: "👞",
  },
  {
    label: "Damatlık",
    href: "/damatlik",
    desc: "Takım elbise, gömlek, ayakkabı",
    emoji: "💍",
  },
  {
    label: "İç Giyim",
    href: "/erkek/ic-giyim",
    desc: "Atlet, fanila, boxer",
    emoji: "🩲",
  },
];

const quickLinks = [
  { label: "Yeni Gelenler", href: "/erkek-yeni-gelenler-634" },
  { label: "Ofis Giyim", href: "/erkek-ofis-giyim" },
  { label: "Plaj Ürünleri", href: "/plaj-urunleri" },
  { label: "Çocuk Giyim", href: "/cocuk-giyim" },
  { label: "Kampanyalar", href: "/secili-erkek-urunlerinde-kampanyalar" },
  { label: "Yelek", href: "/erkek/yelek" },
  { label: "Şort", href: "/erkek/sort" },
];

const SARAR_BASE = "https://sarar.com";

export default function ErkekGiyimPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative flex h-56 items-end bg-neutral-900 px-8 pb-10 md:h-72">
        <div className="relative z-10">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Koleksiyon
          </p>
          <h1 className="text-4xl font-light tracking-tight text-white md:text-5xl">
            Erkek Giyim
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            Sofistike tasarımlar, üstün kumaş kalitesi
          </p>
        </div>
        {/* Decorative stripe */}
        <div className="absolute bottom-0 left-0 h-1 w-24 bg-white" />
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
              className="group flex flex-col items-center gap-3 rounded-xl border border-neutral-100 p-5 text-center transition hover:border-black hover:shadow-md"
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

      {/* Davet Stili Banner */}
      <section className="mx-auto max-w-screen-xl px-6 pb-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-neutral-900 px-8 py-12 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Öne Çıkan
            </p>
            <h3 className="mt-1 text-2xl font-light text-white">Davet Stili</h3>
            <p className="mt-2 max-w-xs text-sm text-neutral-400">
              Smokin ve takım elbisede özel davet koleksiyonu
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`${SARAR_BASE}/davet-stili-takim-elbise`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-100"
            >
              Takım Elbise
            </a>
            <a
              href={`${SARAR_BASE}/smokin`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              Smokin
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
