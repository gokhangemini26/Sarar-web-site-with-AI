# SocialSection Specification (Social Responsibility page)

## Overview
- **Target file:** `src/components/SocialSection.tsx`
- **Screenshot:** `docs/design-references/merit-page-social.png`
- **Interaction model:** static

## DOM Structure
```
<section>
  <PageTitle title="SOCIAL RESPONSIBILITY" />
  <div> // text block
    <p>paragraph 1</p>
    <p>paragraph 2</p>
  </div>
  <div> // large cert badges (inline, centered)
    <img src="/images/badges/amfori-bsci.png" alt="amfori BSCI" />
    <img src="/images/badges/gots.png" alt="GOTS" />
  </div>
</section>
```

## Computed Styles

### Section
- maxWidth: 570px; margin: 0 auto; padding: 0 24px 60px
- display: flex; flexDirection: column; alignItems: center

### Paragraphs
- fontSize: 18px; fontWeight: 400; color: #ffffff
- textAlign: center; lineHeight: 1.7; marginBottom: 24px

### Badge container
- display: flex; flexDirection: row; gap: 24px
- marginTop: 32px; alignItems: center; justifyContent: center

### Large cert badge images (inline on this page, larger than fixed ones)
- width: 80px; height: 80px; objectFit: contain

## Text Content (verbatim)
**Paragraph 1:**
We maintain full compliance with all applicable government regulations as well as our clients' specific requirements. We are BSCI-certified(Grade A) and frequently collaborate with independent third-party quality assurance companies to continuously enhance our product quality and operational standards.

**Paragraph 2:**
We are also GOTS-certified, ensuring that our organic cotton is sourced and processed according to the highest ethical and environmental standards — from seed to stitch, and ultimately to the finished product.

## Assets
- `/images/badges/amfori-bsci.png`
- `/images/badges/gots.png`

## Responsive
- Centered, single column at all widths
