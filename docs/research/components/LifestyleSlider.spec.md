# LifestyleSlider Specification — SARAR

## Overview
- **Target file:** `src/components/LifestyleSlider.tsx`
- **Screenshot:** `docs/design-references/section-04-featured.png`
- **Interaction model:** click-driven carousel (arrows)

## Section Container
- padding: 40px 15px
- width: 100%

## Section Heading
- "SARAR LIFE STYLE"
- fontFamily: Teachers; fontSize: 20px; fontWeight: 700; color: #010203; letterSpacing: 2px
- marginBottom: 4px
- After heading: 2px solid black bottom border, width ~200px

## Carousel Container
- position: relative; overflow: hidden; marginTop: 24px

## Cards (show 6 at once on desktop)
- display: flex; gap: 16px
- Each card width: calc(16.666% - 14px); flexShrink: 0

### Card
- borderRadius: 16px; overflow: hidden; cursor: pointer
- aspectRatio: 3/4
- position: relative

### Card Image
- width: 100%; height: 100%; object-fit: cover

### Card Caption (below image, outside card)
- fontSize: 12px; color: #373738; marginTop: 8px; textAlign: center; lineHeight: 1.4

## Arrow Buttons
- position: absolute, top: 40% of carousel, transform: translateY(-50%)
- Left: left: -16px; Right: right: -16px
- backgroundColor: #ffffff; border: 1px solid #e5e5e5; border-radius: 50%
- width: 36px; height: 36px; display: flex; alignItems: center; justifyContent: center
- ChevronLeft / ChevronRight lucide, size 16px

## Card Data (10 items)
1. src="/images/lifestyle/lifestyle-1.png", caption="Sessiz Lüks Akımı Nedir?"
2. src="/images/lifestyle/lifestyle-2.jpg", caption="Power Dressing Nedir?"
3. src="/images/lifestyle/lifestyle-3.png", caption=""
4. src="/images/lifestyle/lifestyle-4.png", caption="Power Dressing Nedir?"
5. src="/images/lifestyle/lifestyle-5.png", caption="Burçlara Şans Getiren Renkler Nelerdir?"
6. src="/images/lifestyle/lifestyle-6.png", caption="SARAR Spotify"
7. src="/images/lifestyle/lifestyle-7.png", caption="Sarar Blog"
8. src="/images/lifestyle/lifestyle-8.png", caption="Mustafa Kemal Atatürk'ün Çağdaş ve Klasik Giyim Stili"
9. src="/images/lifestyle/lifestyle-9.jpg", caption="Sessiz Lüks..."
10. src="/images/lifestyle/lifestyle-10.jpg", caption=""

## Carousel Logic
- useState for page (0-based), 6 visible at a time
- Arrows: page++ / page--

## Responsive
- Desktop: 6 cards
- Mobile: 2 cards visible, smaller
