# ClientsSection Specification

## Overview
- **Target file:** `src/components/ClientsSection.tsx`
- **Screenshot:** `docs/design-references/merit-page-clients.png`
- **Interaction model:** static

## DOM Structure
```
<section>
  <PageTitle title="CLIENTS" />
  <div> // subtitle text block
    <p>You're in good company.</p>
    <p>Trusted by the world's leading clothing retailers.</p>
  </div>
  <div class="logos-grid"> // 3x3 grid
    <div class="logo-cell"><img /></div>
    ... 9 cells
  </div>
</section>
```

## Computed Styles

### Section
- maxWidth: 960px; margin: 0 auto; padding: 0 24px 80px
- display: flex; flexDirection: column; alignItems: center

### Subtitle
- fontSize: 18px; fontWeight: 400; color: #ffffff
- textAlign: center; lineHeight: 1.7; marginBottom: 48px

### Logos grid
- display: grid; gridTemplateColumns: repeat(3, 1fr)
- gap: 40px 60px; width: 100%; maxWidth: 900px

### Logo cell
- display: flex; alignItems: center; justifyContent: center
- minHeight: 100px

### Logo image
- maxWidth: 200px; maxHeight: 100px
- objectFit: contain; filter: brightness(0) invert(1) (white logos on dark bg)

## Per-State Content (9 client logos in order — row by row)
Row 1:
1. `/images/clients/ermenegildo-zegna.png` alt="Ermenegildo Zegna" (244x59)
2. `/images/clients/eden-park.png` alt="Eden Park Paris" (228x81)
3. `/images/clients/fay.png` alt="Fay" (127x92)

Row 2:
4. `/images/clients/hackett.png` alt="Hackett London" (165x108)
5. `/images/clients/hartford.png` alt="Hartford" (175x121)
6. `/images/clients/falke.png` alt="FALKE" (149x78)

Row 3:
7. `/images/clients/beymen.png` alt="BEYMEN" (165x25)
8. `/images/clients/network.png` alt="NetWork" (173x133)
9. `/images/clients/axel-arigato.png` alt="Axel Arigato" (139x54)

## Text Content (verbatim)
- "You're in good company."
- "Trusted by the world's leading clothing retailers."

## Responsive
- **Desktop:** 3×3 grid
- **Tablet (768px):** 2-column grid
- **Mobile (390px):** 1 or 2-column grid
- **Breakpoint:** ~640px → 2 col, ~400px → 1 col
