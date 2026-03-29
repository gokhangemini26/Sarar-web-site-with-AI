# AboutSection Specification (Homepage)

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Screenshot:** `docs/design-references/merit-desktop-full.png`
- **Interaction model:** static + button click (links to /contact)

## DOM Structure
```
<section>
  <PageTitle title="ABOUT US" />
  <div> // text block
    <p>paragraph 1</p>
    <p>paragraph 2</p>
  </div>
  <div> // button container
    <a href="/contact">Get in touch now!</a>
  </div>
</section>
```

## Computed Styles

### Section container
- backgroundColor: transparent (on #002e5d)
- display: flex; flexDirection: column; alignItems: center
- maxWidth: 570px; margin: 0 auto
- padding: 0 24px 60px

### Text paragraphs
- fontSize: 19px; fontWeight: 400
- color: rgb(255, 255, 255)
- textAlign: center; lineHeight: 1.7
- marginBottom: 24px
- fontFamily: 'Poppins', Arial

### Button
- display: inline-block
- border: 1px solid rgb(255, 255, 255)
- borderRadius: 30px
- padding: 12px 32px
- color: rgb(255, 255, 255)
- backgroundColor: transparent
- fontSize: 15px; fontWeight: 600
- cursor: pointer; textDecoration: none
- transition: background-color 0.2s, color 0.2s

### Button hover
- backgroundColor: rgb(255, 255, 255)
- color: rgb(0, 46, 93)

## Text Content (verbatim)
**Paragraph 1:**
We are an Istanbul-based jersey manufacturer specializing in high-quality and exclusive garments. With over 30 years of experience in the textile industry, we are committed to operating at the highest standards and continuously bringing the latest fabric innovations and industrial trends to our clients.

**Paragraph 2:**
Our team of highly skilled professionals is dedicated to meeting the day-to-day challenges of the industry with passion and expertise. At Merit, we strongly believe in the power of teamwork. We take pride in being actively involved in every project we undertake, ensuring excellence at every stage of production.

**Button:** Get in touch now!

## Responsive
- **Desktop:** centered, max-width 570px
- **Mobile:** full-width with 24px horizontal padding
