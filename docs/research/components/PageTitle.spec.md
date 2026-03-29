# PageTitle Specification

## Overview
- **Target file:** `src/components/PageTitle.tsx`
- **Screenshot:** `docs/design-references/merit-desktop-full.png`
- **Interaction model:** static

## DOM Structure
```
<div> // centered title block
  <h2>{title}</h2>
  <hr /> // red divider line
</div>
```

## Computed Styles

### Container
- textAlign: center
- paddingTop: 40px
- marginBottom: 32px

### H2 title
- fontSize: 35px
- fontWeight: 700
- color: rgb(255, 255, 255)
- letterSpacing: 2px
- textTransform: uppercase
- fontFamily: 'Poppins', Arial, sans-serif
- marginBottom: 8px

### Divider (hr)
- width: 240px
- height: 2px
- backgroundColor: rgb(230, 57, 70) — red (#e63946)
- border: none
- margin: 0 auto 32px

## Props
- `title: string` — the page heading text

## Text Content (per page)
- About Us → "ABOUT US"
- Process → "PROCESS"
- Products → "PRODUCTS"
- Clients → "CLIENTS"
- Social Responsibility → "SOCIAL RESPONSIBILITY"
- Contact → "CONTACT"
