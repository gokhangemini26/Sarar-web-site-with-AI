# CertBadges Specification

## Overview
- **Target file:** `src/components/CertBadges.tsx`
- **Screenshot:** `docs/design-references/merit-desktop-full.png`
- **Interaction model:** static

## DOM Structure
```
<div> // fixed bottom-right
  <img src="/images/badges/amfori-bsci.png" alt="amfori BSCI" />
  <img src="/images/badges/gots.png" alt="GOTS certification" />
</div>
```

## Computed Styles

### Container
- position: fixed
- bottom: 24px; right: 16px
- display: flex; flexDirection: column
- gap: 8px; zIndex: 100

### Badge images
- width: 73px; height: 73px
- objectFit: contain

## Assets
- `/images/badges/amfori-bsci.png` (73x73)
- `/images/badges/gots.png` (73x73)

## Responsive
- Same position on all viewport sizes
