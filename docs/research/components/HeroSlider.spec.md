# HeroSlider Specification — SARAR

## Overview
- **Target file:** `src/components/HeroSlider.tsx`
- **Screenshot:** `docs/design-references/section-01-header-hero.png`
- **Interaction model:** click-driven (manual carousel with arrows + dots)

## Container
- width: 100%
- height: 603px (desktop)
- position: relative; overflow: hidden
- backgroundColor: #f0f0f0 (fallback)

## Slides
8 slides — full-width landscape images, each fills entire container:
- display: flex (one active at a time)
- `<img>` fills container: width: 100%; height: 100%; object-fit: cover

Slide data:
1. src="/images/hero-slide-1.jpg" alt="Seçili Ürünlerde %50'ye Varan İndirim"
2. src="/images/hero-slide-2.jpg" alt="Banner"
3. src="/images/hero-slide-3.jpg" alt="Sarev %25 sezon sonu"
4. src="/images/hero-slide-4.jpg" alt="Kadın Koleksiyonunda Seçili Ürünlerde %20 İndirim"
5. src="/images/hero-slide-5.jpg" alt="Senin Sarar'ın Yok Mu?"
6. src="/images/hero-slide-6.jpg" alt="Seçili Kadın Ürünlerinde Sepette Tek Fiyat"
7. src="/images/hero-slide-7.jpg" alt="Robin Yayla Ürünlerinde %50 İndirim"
(skip hero-slide-8.jpg — 404)

## Navigation Arrows
- Position: absolute, top: 50%, transform: translateY(-50%)
- Left arrow: left: 0
- Right arrow: right: 0
- Style: backgroundColor: rgba(255,255,255,0.6), width: 48px, height: 60px
- Contains chevron icon (ChevronLeft / ChevronRight from lucide), size 24px, color: #373738
- On click: prev/next slide (wraps around)

## Dot Indicators
- Position: absolute, bottom: 20px, left: 50%, transform: translateX(-50%)
- display: flex; gap: 8px
- Each dot: width 8px, height 8px, border-radius 50%
- Inactive: backgroundColor #ffffff (semi-transparent), opacity: 0.6
- Active: backgroundColor #ffffff, opacity: 1
- On click: jump to that slide

## Behavior
- useState for currentSlide (0-indexed)
- No auto-play needed for static clone
- Transition: instant slide swap (no CSS transition needed for simplicity)

## Responsive
- Desktop: height 603px
- Mobile: height ~250px (aspect ratio maintained via object-fit)
