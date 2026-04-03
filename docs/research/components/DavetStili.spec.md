# DavetStili Specification — SARAR

## Overview
- **Target file:** `src/components/DavetStili.tsx`
- **Screenshot:** `docs/design-references/section-03-bestsellers.png` (bottom half)
- **Interaction model:** static

## Container
- display: flex; width: 100%; alignItems: center
- padding: 48px 15px

## Left Column (image)
- width: 50%; paddingRight: 24px
- Image: src="/images/davet-stili.jpg"
- width: 100%; height: auto; display: block
- Caption below image (if any): fontSize: 13px

## Right Column (text)
- width: 50%; paddingLeft: 48px

### Heading
- "DAVET STİLİ"
- fontFamily: Teachers; fontSize: 36px; fontWeight: 700; color: #010203; letterSpacing: 2px; marginBottom: 16px

### Body text
- "Sofistike dokular ve özgün tasarımlar, davetlerdeki stilinizi bir adım öne taşıyor"
- fontSize: 15px; color: #373738; lineHeight: 1.7; marginBottom: 24px

### CTA link
- "İncele" or "Keşfet" — text link with arrow
- fontSize: 14px; color: #010203; fontWeight: 600; textDecoration: underline

## Responsive
- Desktop: side-by-side (50/50)
- Mobile: stack, image first, text below
