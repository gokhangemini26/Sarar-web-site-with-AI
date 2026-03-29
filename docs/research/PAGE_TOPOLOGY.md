# Merit Tekstil — Page Topology

## Site Structure
Multi-page site (Wix). All pages share the same Header and Footer.
Base URL: https://www.merittekstil.com/

## Pages
1. `/` — About Us (homepage)
2. `/process` — Process
3. `/products` — Products
4. `/clients` — Clients
5. `/social-responsibility` — Social Responsibility
6. `/contact` — Contact

## Global Layout
- Background: `rgb(0, 46, 93)` (#002e5d) — dark navy blue, applies to every page
- All pages: full-page navy blue background, centered content column (~570px wide on small pages, ~980px on clients)
- Header: sticky, transparent bg on top of navy, contains centered logo + horizontal nav
- Footer: contains contact row (location, email, phone) + certification badges bottom-right
- CertificationBadges (amfori BSCI + GOTS): fixed bottom-right on all pages

## Shared Components
- `Header` — logo (image) + nav links
- `Footer` — contact icons row + copyright
- `CertBadges` — bottom-right fixed amfori BSCI + GOTS icons
- `PageTitle` — H2 + red horizontal rule, used on every page

## Z-Index Layers
- CertBadges: fixed bottom-right, above content

## Interaction Models
- Header nav: click-driven page navigation (no dropdown except "More")
- Process cards: static
- Products: click-driven carousel (prev/next arrows)
- Clients grid: static
- Contact form: form submit (static demo)

## Responsive
- Pages appear to center content with max-width ~960px
- At mobile, nav collapses (Wix adds "More" dropdown)
