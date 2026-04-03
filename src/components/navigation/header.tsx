"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { MegaMenuTrigger } from "@/components/navigation/mega-menu";

// ─── Announcement Bar ────────────────────────────────────────────────────────

function AnnouncementBar() {
  const messages = [
    "2.000 TL üzerine ücretsiz kargo",
    "Seçili Ürünlerde %50'ye Varan İndirim",
  ];
  const [idx, setIdx] = useState(0);

  return (
    <div className="flex h-8 items-center justify-center gap-6 bg-black px-4 text-[11px] font-medium tracking-widest text-white">
      {messages.map((msg, i) => (
        <button
          key={i}
          onClick={() => setIdx(i)}
          className={`transition-opacity ${i === idx ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
        >
          {msg}
        </button>
      ))}
    </div>
  );
}

// ─── Mobile Menu ─────────────────────────────────────────────────────────────

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      <div className="flex h-14 items-center justify-between border-b border-neutral-200 px-4">
        <Image src="/images/srr-logo.png" alt="SARAR" width={80} height={24} />
        <button onClick={onClose} className="p-2">
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="divide-y divide-neutral-100">
        {navItems.map((item) => (
          <div key={item.id}>
            {item.megaMenu ? (
              <>
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-[13px] font-medium uppercase tracking-wider"
                  onClick={() =>
                    setExpanded(expanded === item.id ? null : item.id)
                  }
                >
                  {item.label}
                  <span
                    className={`transition-transform ${expanded === item.id ? "rotate-90" : ""}`}
                  >
                    ›
                  </span>
                </button>
                {expanded === item.id && (
                  <div className="bg-neutral-50 px-5 pb-4">
                    {item.megaMenu.columns.map((col, ci) =>
                      col.categories.map((cat) => (
                        <div key={ci + cat.href} className="mt-4">
                          <Link
                            href={`https://sarar.com${cat.href}`}
                            target="_blank"
                            className="block text-[11px] font-semibold uppercase tracking-widest text-black"
                            onClick={onClose}
                          >
                            {cat.label}
                          </Link>
                          {cat.items && (
                            <ul className="mt-1.5 space-y-1">
                              {cat.items.slice(0, -1).map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={`https://sarar.com${sub.href}`}
                                    target="_blank"
                                    className="block text-[12px] text-neutral-600"
                                    onClick={onClose}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className="block px-5 py-4 text-[13px] font-medium uppercase tracking-wider"
                onClick={onClose}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

// ─── Main Header ─────────────────────────────────────────────────────────────

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* CSS variable so mega-menu can calculate its position */}
      <style>{`:root { --header-height: 88px; }`}</style>

      <AnnouncementBar />

      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4 lg:px-6">
          {/* Mobile: hamburger */}
          <button
            className="p-2 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Menü"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/srr-logo.png"
              alt="SARAR"
              width={88}
              height={26}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <MegaMenuTrigger key={item.id} item={item} />
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-neutral-700 hover:text-black"
              aria-label="Arama"
            >
              <Search className="h-5 w-5" />
            </button>
            <button className="relative p-2 text-neutral-700 hover:text-black" aria-label="Sepet">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-neutral-100 px-4 py-3 lg:px-6">
            <div className="mx-auto flex max-w-xl items-center gap-3 rounded-full border border-neutral-300 px-4 py-2.5 focus-within:border-black">
              <Search className="h-4 w-4 shrink-0 text-neutral-400" />
              <input
                autoFocus
                type="text"
                placeholder="Ürün veya kategori ara..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
              />
            </div>
          </div>
        )}
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
