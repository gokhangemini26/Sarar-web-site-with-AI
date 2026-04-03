# SARAR.COM — Behaviors

## Global
- Background: white #ffffff
- No smooth scroll library
- No scroll-snap
- No parallax
- Back-to-top button (bottom-right) appears after scrolling

## AnnouncementBar
- **Interaction model:** time-driven CSS animation
- 2 messages alternate with `fadeMessage` animation (opacity 0→1→0)
- Each message stays 3s, full cycle 9s
- `animation-delay: 0s` (first), `animation-delay: 3s` (second)
- CSS: position absolute, width 100%, text-align center

## Header
- **Interaction model:** static — does NOT change on scroll
- Logo: centered (col-4 d-flex justify-content-center)
- Icons (search, account, cart): right side (col-4)
- Nav: horizontal menu below logo, items font-weight 600
- "İndirim" item: color #e42437 (red)
- Mobile: hamburger drawer opens on the left

## HeroSlider
- **Interaction model:** click-driven (Swiper.js)
- 8 slides — full-width landscape images
- Left/right arrow buttons (gray, semi-transparent)
- Dot indicators at bottom center
- Auto-play likely active (Swiper)

## CategoryBanners
- **Interaction model:** static
- Two equal-width images side by side (KADIN left, ERKEK right)
- Text overlaid at bottom of each image in white, uppercase
- Small caption text below each image

## BestSellers
- **Interaction model:** click-driven (Swiper.js carousel)
- Left text column: "Çok Satanlar" heading, subtext, KEŞFET black button
- Right: product image cards, white background, product name below
- Arrows on both sides

## DavetStili
- **Interaction model:** static
- Left: large editorial photo (couple in formalwear, wooden backdrop)
- Right: "DAVET STİLİ" bold heading, subtext paragraph, link

## LifestyleSlider
- **Interaction model:** click-driven (Swiper.js)
- Section heading: "SARAR LIFE STYLE" with bottom border underline
- Rounded cards (border-radius ~16px), various content types
- Arrow navigation left/right

## VideoSection
- **Interaction model:** static (autoplay, loop, muted video)
- Full-width video — man in beige suit walking, light blue/grey bg
- video: autoplay=true, loop=true, muted=true
- Source: https://witcdn.sarar.com/Data/EditorFiles/Video/robin-yayla-2025-2.mp4

## SarevBanner
- **Interaction model:** static (single full-width composite image)
- Burgundy/floral home textiles imagery
- SAREV logo overlay (white)
- "Alışverişe Başla ▶" oval CTA button (white border, centered)

## TrustBadges
- **Interaction model:** static
- 5 columns: Güvenli Alışveriş, Ücretsiz Kargo, Taksitli Alışveriş, İade & Değişim, Online Öde Mağazadan Al
- Each: SVG icon above, bold title, small subtitle text below

## Newsletter
- **Interaction model:** form submit
- "Yenilikleri kaçırmayın!" heading (centered)
- Email input (placeholder: "E-posta adresinizi giriniz") + "Kayıt Ol" black button
- KVKK checkbox + link text below

## FooterLinks
- **Interaction model:** static (link grid)
- 4 column groups with colored category headers
- Link colors: some orange (#e07b39), some blue (#0d6efd style), some plain black
- Columns: Erkek/Erkek Kategorileri, Kadın, Ev Tekstil/Sarev, Aksesuar, Özel Sayfalar, Kurumsal

## FooterBottom
- **Interaction model:** static
- SARAR logo (centered)
- "Hafta içi 09.00-18.00 saatleri arasında arayabilirsiniz."
- Phone: "444 95 44" (large, bold)
- "Mağazalarımız | İletişim" links
- Google Play + App Store badges
- "Bizi Takip Edin" with social icons: Facebook, X, Instagram, YouTube, LinkedIn, Spotify
- Payment method logos (sprite image row): World, American Express, Bonus, QNB, BankKart, Paraf, Axess, MasterCard, Troy, Visa, Maximum, Sağlam Kart

## Hover States
- Nav items: likely color change on hover (no visible transition)
- Footer links: color change on hover
- Buttons: slight darkening
