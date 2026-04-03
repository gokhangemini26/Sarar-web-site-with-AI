# SarevBanner Specification — SARAR

## Overview
- **Target file:** `src/components/SarevBanner.tsx`
- **Screenshot:** `docs/design-references/section-05-video.png` (bottom) + section-06
- **Interaction model:** static

## Container
- width: 100%; position: relative; overflow: hidden

## Image
- src="/images/sarev-banner.jpg"
- width: 100%; display: block; height: auto

## CTA Button overlay (centered on image)
- position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%)
- "Alışverişe Başla ▶"
- border: 2px solid #ffffff; color: #ffffff; backgroundColor: transparent
- padding: 12px 28px; borderRadius: 30px
- fontFamily: Teachers; fontSize: 15px; fontWeight: 600; letterSpacing: 1px
- cursor: pointer; whiteSpace: nowrap

## Responsive
- Desktop: full width with centered button
- Mobile: smaller button text
