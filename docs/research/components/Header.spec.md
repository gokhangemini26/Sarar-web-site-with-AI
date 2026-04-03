# Header Specification — SARAR

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/section-01-header-hero.png`
- **Interaction model:** static (no scroll behavior)

## Structure
Three rows stacked vertically:
1. AnnouncementBar (black strip, 30px height, full width)
2. LogoRow (white bg, ~100px height — icons left placeholder, logo center, icons right)
3. NavBar (white bg, ~50px height — horizontal nav links centered)

## AnnouncementBar
- backgroundColor: #000000
- color: #ffffff
- height: 30px
- width: 100%
- display: flex; alignItems: center; justifyContent: center; overflow: hidden
- fontFamily: Teachers, sans-serif; fontSize: 16px; fontWeight: 500
- Two messages alternating via CSS animation fadeMessage (defined in globals.css):
  - Message 1 (delay 0s): "2.000 TL üzerine ücretsiz kargo"
  - Message 2 (delay 3s): "Seçili Ürünlerde %50'ye Varan İndirim"
  - Each: position: absolute, opacity: 0, animation: fadeMessage 9s infinite, text-align: center

## LogoRow
- backgroundColor: #ffffff
- height: 100px
- display: flex; alignItems: center; padding: 0 30px
- Three columns: left (empty/spacer col-4), center (logo, col-4 flex justify-center), right (icons, col-4 flex justify-end gap-5)
- Logo: `<img src="/images/srr-logo.png" alt="SARAR" style={{height:'65px',width:'auto'}} />`
- Right icons: Search (MagnifyingGlass + "Arama" text), User icon, ShoppingCart icon with "0" badge
- Icon color: #373738, fontSize: 13px, gap between items: 20px

## NavBar
- backgroundColor: #ffffff
- borderBottom: 1px solid #e5e5e5
- display: flex; justifyContent: center; gap: 40px; padding: 14px 0
- fontFamily: Teachers, sans-serif; fontSize: 15px; fontWeight: 600; color: #010203
- Nav items (in order): Erkek, Kadın, Smokin, Aksesuar, Sarev, Robin Yayla X SARAR, İndirim, Sarar Blog
- "İndirim": color #e42437 (red)
- "Sarar Blog": links to external blog.sarar.com
- All: text-decoration: none; no hover transition needed for static clone

## Responsive
- Desktop 1440px: full 3-col header + horizontal nav
- Mobile 390px: logo centered, hamburger icon (Menu lucide) on left, nav hidden
