# FooterBottom Specification — SARAR

## Overview
- **Target file:** `src/components/FooterBottom.tsx`
- **Screenshot:** `docs/design-references/section-08-footer-bottom.png`
- **Interaction model:** static

## Container
- padding: 40px 15px; backgroundColor: #ffffff; textAlign: center
- borderTop: 1px solid #e5e5e5

## Logo
- `<img src="/images/srr-logo.png" alt="SARAR" style={{height:'70px',width:'auto',marginBottom:'16px'}} />`

## Hours text
- "Hafta içi 09.00-18.00 saatleri arasında arayabilirsiniz."
- fontSize: 13px; color: #666; marginBottom: 8px

## Phone
- "444 95 44"
- fontFamily: Teachers; fontSize: 28px; fontWeight: 700; color: #010203; marginBottom: 12px; letterSpacing: 2px

## Links row
- "Mağazalarımız | İletişim"
- fontSize: 14px; color: #010203; textDecoration: underline; marginBottom: 24px

## App store badges
- display: flex; justifyContent: center; gap: 16px; marginBottom: 24px
- Google Play: `<img src="/images/footer/google-play.png" height="40" />`
- App Store: `<img src="/images/footer/app-store.png" height="40" />`

## Social links heading
- "Bizi Takip Edin"
- fontSize: 14px; fontWeight: 600; color: #010203; marginBottom: 12px

## Social icons row
- display: flex; justifyContent: center; gap: 16px; marginBottom: 32px
- Facebook (img /images/footer/social-facebook.svg, 28px)
- X/Twitter (use ExternalLink or text "𝕏", 28px)
- Instagram (use Instagram lucide icon or placeholder, 28px)
- YouTube (use Youtube lucide icon, 28px)
- LinkedIn (use Linkedin lucide icon, 28px)
- Spotify (use Music lucide icon, 28px — Spotify green #1DB954)
- All icons: color #010203 except Spotify

## Payment logos
- display: flex; justifyContent: center; alignItems: center; gap: 12px; flexWrap: wrap
- Use the downloaded payment images:
  - /images/footer/payments-1.jpg
  - /images/footer/payments-2.jpg
  - /images/footer/payments-3.jpg
  - /images/footer/payments-4.jpg
  - Each: height: 28px; width: auto

## Copyright / Tsoft
- marginTop: 24px; fontSize: 11px; color: #aaa
- "© SARAR 2024. Tüm hakları saklıdır."

## Responsive
- Desktop: centered column layout
- Mobile: same, slightly smaller fonts
