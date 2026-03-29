# Merit Tekstil — Behaviors

## Global
- Background: solid navy `#002e5d` on all pages, no transitions
- No smooth scroll library detected (native Wix scrolling)
- No scroll-snap
- No parallax

## Header
- **Interaction model:** static (no scroll-triggered changes observed)
- Logo centered top, nav centered below logo
- Active page nav item: `rgb(240, 213, 213)` (light pink/salmon) vs white for others
- No hover effects visible beyond browser default underline

## Process Page
- **Interaction model:** static
- 3 cards with icons + text, separated by arrow icons
- No animations

## Products Page
- **Interaction model:** click-driven carousel
- Navigation arrows (< >) cycle through product images
- Each slide shows: brand name (bold, white), badge (e.g. "ORGANIC COTTON"), product image
- Arrow click → next/prev product

## Clients Page
- **Interaction model:** static
- 3×3 grid of client logo images (PNG, white on transparent)

## Social Responsibility
- **Interaction model:** static
- Large cert badges displayed inline

## Contact Page
- **Interaction model:** form submit + embedded Google Map
- Form fields: Name, Email, Phone, Message (textarea), Submit button
- Map: Google Maps iframe embed showing company location

## Hover States
- Nav links: no visible hover effect beyond cursor change
- Button "Get in touch now!": transparent bg, white border/text — hover likely darkens slightly (Wix default)
- No card hover effects observed
