# CategoryBanners Specification — SARAR

## Overview
- **Target file:** `src/components/CategoryBanners.tsx`
- **Screenshot:** `docs/design-references/section-02-categories.png`
- **Interaction model:** static

## Container
- display: flex; width: 100%
- No padding/margin between the two images

## Each Banner (half width)
- width: 50%; position: relative; overflow: hidden; cursor: pointer
- height: ~750px (desktop)

### Image
- width: 100%; height: 100%; object-fit: cover

### Label overlay (bottom of image)
- position: absolute; bottom: 60px; right: 30px (for KADIN left panel, text aligns bottom-right)
- For ERKEK right panel: bottom: 60px; right: 30px
- Color: #ffffff; fontFamily: Teachers; fontSize: 28px; fontWeight: 600; letterSpacing: 4px

### Caption (below image, outside)
- paddingTop: 12px; paddingLeft: 16px
- fontSize: 13px; color: #373738; textTransform: uppercase; letterSpacing: 1px

## Banner Data
Left (KADIN):
- src="/images/category-kadin.jpg"
- label="KADIN"
- caption="ŞIKLIK DOZUNUZU ARTIRAN DIŞ GİYİM KOLEKSİYONU"
- href="https://sarar.com/kadin-giyim"

Right (ERKEK):
- src="/images/category-erkek.jpg"
- label="ERKEK"
- caption="STİLİNİZİ GÜÇLENDİREN DIŞ GİYİM KOLEKSİYONU"
- href="https://sarar.com/erkek-giyim"

## Responsive
- Desktop: side by side, 50% each
- Mobile: stack vertically, each 100% width, height ~300px
