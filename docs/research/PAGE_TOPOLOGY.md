# SARAR.COM — Page Topology

## Site Info
Single-page homepage (Turkish fashion e-commerce)
URL: https://sarar.com
Language: tr-TR
Font: Teachers (main), Montserrat (secondary)
Colors: bg #ffffff, text #373738, accent red #e42437, gold/bronze for logo

## Global Layout
- Background: white (#ffffff)
- Body text: rgb(55, 55, 56) = #373738
- Max content width: ~1405px (container with 15px side padding)
- Header: static (scrolls with page, NOT sticky)
- No smooth scroll library detected

## Sections (top to bottom)

| # | Name | Approx Height | Interaction |
|---|------|--------------|-------------|
| 1 | AnnouncementBar | 30px | time-driven (2 alternating messages, CSS fadeMessage animation) |
| 2 | Header (Logo + Nav) | 130px | static |
| 3 | HeroSlider | 603px | click-driven (Swiper.js, arrows + dots) |
| 4 | CategoryBanners (Kadın/Erkek) | 887px | static (2 large editorial images) |
| 5 | BestSellers | 448px | click-driven (Swiper.js carousel) |
| 6 | DavetStili | ~450px | static (split: image left, text right) |
| 7 | LifestyleSlider | ~350px | click-driven (Swiper.js, round cards) |
| 8 | VideoSection | ~450px | static (autoplay looping video) |
| 9 | SarevBanner | ~500px | static (wide banner image with CTA button) |
| 10 | TrustBadges | ~180px | static (5 icon+text columns) |
| 11 | Newsletter | ~200px | static (email input + submit) |
| 12 | FooterLinks | ~700px | static (multi-column link grid) |
| 13 | FooterBottom | ~300px | static (logo, phone, social, payments) |

## Shared/Sticky Elements
- Back-to-top button: bottom-right, appears on scroll
- Cookie banner: fixed bottom, z-index 9999

## Dependencies
- Header: srr-logo.png
- HeroSlider: 8 slide images
- BestSellers: 12 product images
- LifestyleSlider: 8-10 card images
- TrustBadges: 5 SVG icons
- Footer: logo, Google Play/App Store badges, social icon images, payment method sprite images

## Responsive
- Bootstrap grid (col-12 → col-sm-* → col-lg-*)
- Mobile nav: drawer/hamburger at ~768px
