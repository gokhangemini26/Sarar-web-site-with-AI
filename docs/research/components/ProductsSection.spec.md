# ProductsSection Specification

## Overview
- **Target file:** `src/components/ProductsSection.tsx`
- **Screenshot:** `docs/design-references/merit-page-products.png`
- **Interaction model:** click-driven carousel (prev/next arrows)

## DOM Structure
```
<section>
  <PageTitle title="PRODUCTS" />
  <p> // description text
  <div class="carousel">
    <button class="prev">‹</button>
    <div class="slide">
      <div class="slide-inner">
        <p class="brand">AXEL ARIGATO</p>
        <span class="badge">🌿 ORGANIC COTTON</span>
        <img src="..." />
      </div>
    </div>
    <button class="next">›</button>
  </div>
</section>
```

## Computed Styles

### Section
- maxWidth: 570px; margin: 0 auto; padding: 0 24px 60px
- display: flex; flexDirection: column; alignItems: center

### Description text
- fontSize: 18px; fontWeight: 400; color: #ffffff
- textAlign: center; lineHeight: 1.7; marginBottom: 32px; maxWidth: 480px

### Carousel container
- display: flex; flexDirection: row; alignItems: center
- gap: 16px; width: 100%

### Prev/Next buttons
- background: transparent; border: none
- color: #ffffff; fontSize: 36px; fontWeight: 300
- cursor: pointer; padding: 0 8px
- opacity: 0.8
- hover: opacity: 1

### Slide container
- flex: 1
- backgroundColor: rgba(0,0,0,0.2) or slightly lighter navy
- border: 1px solid rgba(255,255,255,0.2)
- borderRadius: 4px
- padding: 16px; textAlign: center

### Brand name
- fontSize: 14px; fontWeight: 700; color: #ffffff
- letterSpacing: 2px; textTransform: uppercase; marginBottom: 4px

### Badge
- fontSize: 12px; color: rgba(255,255,255,0.8)
- display: flex; alignItems: center; gap: 4px
- justifyContent: center; marginBottom: 12px

### Product image
- maxWidth: 200px; maxHeight: 220px; objectFit: contain
- margin: 0 auto; display: block

## Per-State Content
The carousel shows one product at a time. Products (from screenshot, only 1 confirmed visible):
1. Brand: "AXEL ARIGATO", Badge: "ORGANIC COTTON", image from Wix ProGallery (not accessible as static img — use a placeholder or the axel-arigato client logo as fallback)

Note: The Wix ProGallery images are loaded dynamically. Use the axel-arigato logo from `/images/clients/axel-arigato.png` as a stand-in for the product image. Show a "Product image" placeholder if no image is available.

For demo purposes, create 3 mock slides:
1. AXEL ARIGATO | ORGANIC COTTON | (placeholder image)
2. ERMENEGILDO ZEGNA | PREMIUM WOOL | (placeholder)
3. HACKETT LONDON | SLIM FIT | (placeholder)

## Text Content (verbatim)
"We have unique access to a selection of highly specialized manufacturers of fabrics and materials. We combine these highly specialized materials to produce the highest quality polo shirts, t-shirts, sweatshirts, and hoodies."
"You can see some of the products we've made below."

## Responsive
- **Desktop:** carousel centered, max-width 570px
- **Mobile:** same, arrows smaller
