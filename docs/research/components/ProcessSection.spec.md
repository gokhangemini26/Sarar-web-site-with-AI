# ProcessSection Specification

## Overview
- **Target file:** `src/components/ProcessSection.tsx`
- **Screenshot:** `docs/design-references/merit-page-process.png`
- **Interaction model:** static

## DOM Structure
```
<section>
  <PageTitle title="PROCESS" />
  <p> // subtitle
  <div class="cards-row"> // 3 cards with arrows between
    <div class="card">icon + title + description</div>
    <div class="arrow">→</div>
    <div class="card">icon + title + description</div>
    <div class="arrow">→</div>
    <div class="card">icon + title + description</div>
  </div>
</section>
```

## Computed Styles

### Section
- maxWidth: 960px; margin: 0 auto; padding: 0 24px 60px
- display: flex; flexDirection: column; alignItems: center

### Subtitle text
- fontSize: 18px; fontWeight: 400 (displayed as 700 in Wix h6 — use 600)
- color: #ffffff; textAlign: center; lineHeight: 1.7
- maxWidth: 480px; marginBottom: 48px

### Cards row
- display: flex; flexDirection: row; alignItems: flex-start
- gap: 0; justifyContent: center; width: 100%

### Arrow separator
- color: #ffffff; fontSize: 24px
- display: flex; alignItems: center; padding: 60px 16px 0
- opacity: 0.7

### Process card
- width: ~270px
- border: 1px solid rgba(255,255,255,0.3)
- borderRadius: 8px
- padding: 24px 20px
- display: flex; flexDirection: column; alignItems: center; gap: 12px

### Card icon image
- width: 40px; height: 40px; objectFit: contain
- marginBottom: 8px

### Card title
- fontSize: 14px; fontWeight: 700; color: #ffffff
- textTransform: uppercase; letterSpacing: 1px; textAlign: center

### Card description
- fontSize: 15px; fontWeight: 400; color: #ffffff
- textAlign: center; lineHeight: 1.6

## Per-State Content

### Card 1: FABRIC SOURCING
- Icon: `/images/process/fabric-icon.png`
- Title: "FABRIC SOURCING"
- Description: "Fabrics are carefully sourced to match your specific requirements in composition, performance, and texture. We also offer custom dyeing to meet your exact color specifications, along with additional finishing treatments to enhance softness and overall quality."

### Card 2: PROTOTYPES & SAMPLING
- Icon: `/images/process/design-icon.png`
- Title: "PROTOTYPES & SAMPLING"
- Description: "For each order, we develop a prototype for your approval, giving you the opportunity to test and refine the functionality and fit of your design. Once the samples are approved, we proceed with bulk production, ensuring consistency and quality at every stage."

### Card 3: BULK MANUFACTURE
- Icon: `/images/process/tshirt-icon.png`
- Title: "BULK MANUFACTURE"
- Description: "Bulk production takes place on our dedicated production lines, where all items are manufactured to order and carefully monitored throughout each stage. Additional quality inspections are carried out during the finishing process, ensuring every product meets our standards before being carefully packaged for delivery."

## Text Content (verbatim — subtitle)
"The production process at Merit consists of several carefully managed stages, each designed to ensure the highest standards of quality and efficiency."

## Responsive
- **Desktop:** 3 cards in a row with arrows
- **Mobile:** stacks to column, arrows hidden or rotated ↓
- **Breakpoint:** ~768px
