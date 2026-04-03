"use client";

import Link from "next/link";
import { useState, useRef, useCallback } from "react";
import type { NavItem } from "@/data/navigation";

interface MegaMenuProps {
  item: NavItem;
}

export function MegaMenuTrigger({ item }: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  }, []);

  if (!item.megaMenu) {
    return (
      <Link
        href={item.href}
        className="relative flex items-center gap-0.5 py-4 text-[13px] font-medium uppercase tracking-[0.08em] text-neutral-800 transition-colors hover:text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <Link
        href={item.href}
        className={`relative flex items-center gap-0.5 py-4 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black after:transition-all ${
          open
            ? "text-black after:w-full"
            : "text-neutral-800 hover:text-black after:w-0 hover:after:w-full"
        }`}
      >
        {item.label}
      </Link>

      {/* Dropdown Panel */}
      {open && (
        <div
          className="fixed left-0 right-0 z-50 border-t border-neutral-200 bg-white shadow-xl"
          style={{ top: "calc(var(--header-height, 88px))" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mx-auto max-w-screen-xl px-6 py-8">
            {/* Featured links row */}
            {item.megaMenu.featured && item.megaMenu.featured.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-3 border-b border-neutral-100 pb-5">
                {item.megaMenu.featured.map((f) => (
                  <Link
                    key={f.href}
                    href={`https://sarar.com${f.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-[11px] font-medium text-neutral-600 transition-all hover:border-black hover:text-black"
                  >
                    {f.badge && (
                      <span className="rounded bg-black px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                        {f.badge}
                      </span>
                    )}
                    {f.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Category columns */}
            <div
              className="grid gap-x-8 gap-y-0"
              style={{
                gridTemplateColumns: `repeat(${item.megaMenu.columns.length}, 1fr)`,
              }}
            >
              {item.megaMenu.columns.map((col, colIdx) => (
                <div key={colIdx} className="space-y-6">
                  {col.categories.map((cat) => (
                    <div key={cat.href}>
                      {/* Category header */}
                      <Link
                        href={`https://sarar.com${cat.href}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-black hover:underline"
                      >
                        {cat.label}
                      </Link>
                      {/* Sub-items */}
                      {cat.items && (
                        <ul className="space-y-1.5">
                          {cat.items.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={`https://sarar.com${sub.href}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block text-[12px] transition-colors ${
                                  sub.label.startsWith("Tümünü Gör")
                                    ? "mt-2 font-medium text-neutral-500 hover:text-black"
                                    : "text-neutral-600 hover:text-black"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
