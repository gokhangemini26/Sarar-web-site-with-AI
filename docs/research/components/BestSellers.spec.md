# BestSellers Specification — SARAR

## Overview
- **Target file:** `src/components/BestSellers.tsx`
- **Screenshot:** `docs/design-references/section-03-bestsellers.png`
- **Interaction model:** click-driven carousel (manual arrows)

## Section Container
- width: 100%; padding: 48px 15px
- display: flex; alignItems: center; gap: 0

## Left Column (text + CTA)
- width: ~280px; flexShrink: 0; paddingRight: 32px

### Heading
- "Çok\nSatanlar" (two lines)
- fontFamily: Teachers; fontSize: 56px; fontWeight: 700; lineHeight: 1; color: #010203

### Subtext
- "Kadın, Erkek ve Sarev\nkoleksiyonlarının en çok\ntercih edilen ürünleri"
- fontSize: 14px; color: #373738; lineHeight: 1.6; marginTop: 12px

### Subtext colored words
- "Kadın" — color: #e42437 (red)
- "Erkek" — color: #4a90d9 (blue)
- "Sarev" — color: #b8860b (gold/dark-yellow)

### KEŞFET button
- "KEŞFET" — uses .sarar-btn-primary class
- backgroundColor: #010203; color: #ffffff
- padding: 12px 32px; fontSize: 13px; fontWeight: 600; letterSpacing: 1.5px; textTransform: uppercase
- marginTop: 24px; display: block; width: fit-content; textDecoration: none

## Right Column (product carousel)
- flex: 1; position: relative; overflow: hidden

### Arrow buttons
- position: absolute, top: 50%, transform: translateY(-50%)
- left arrow: left: -20px; right arrow: right: -20px
- backgroundColor: rgba(255,255,255,0.9); width: 40px; height: 40px; border: 1px solid #e5e5e5
- border-radius: 50%; display: flex; alignItems: center; justifyContent: center
- ChevronLeft / ChevronRight lucide, size 16px

### Product cards (4 visible at once, slide left/right)
- display: flex; transition: transform 0.3s ease
- Each card width: 25% of container; padding: 0 8px

### Each product card
- backgroundColor: #ffffff
- Image: width: 100%; aspectRatio: 3/4; object-fit: contain; backgroundColor: #f8f8f8
- Name: fontSize: 13px; color: #373738; marginTop: 8px; textAlign: center; lineHeight: 1.4

## Product Data (12 items)
1. src="/images/products/product-1.jpg", name="Kadın Siyah Elbise"
2. src="/images/products/product-2.jpg", name="Fleet Çizgili Siyah Ceket"
3. src="/images/products/product-3.jpg", name="Zeus Resta Slim Fit Lacivert Takım Elbise"
4. src="/images/products/product-4.jpg", name="Düğmeli Polo Yaka Kiremit Triko"
5. src="/images/products/product-5.jpg", name="Neva Bej Elbise"
6. src="/images/products/product-6.jpg", name="Arta Regular Fit Çizgili Siyah Mont"
7. src="/images/products/product-7.jpg", name="Goias Soho Desenli Siyah Gömlek"
8. src="/images/products/product-8.jpg", name="Napoleone Regular Fit Açık Lacivert Takım Elbise"
9. src="/images/products/product-9.jpg", name="Dorso Pembe Triko Elbise"
10. src="/images/products/product-10.jpg", name="Heno Siyah Pantolon"
11. src="/images/products/product-11.jpg", name="Blair Ekose Siyah Etek"
(skip product-12 — 404)

## Carousel Logic
- useState: page index (0-based), show 4 at a time
- Left arrow: page--; Right arrow: page++; clamp to bounds
- Show: items[page*4 .. page*4+3]

## Responsive
- Desktop: 4 cards visible
- Mobile: 2 cards visible, stack heading above carousel
