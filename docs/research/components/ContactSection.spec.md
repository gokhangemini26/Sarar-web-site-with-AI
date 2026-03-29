# ContactSection Specification

## Overview
- **Target file:** `src/components/ContactSection.tsx`
- **Screenshot:** `docs/design-references/merit-page-contact.png`
- **Interaction model:** form (static demo — no real submission)

## DOM Structure
```
<section>
  <PageTitle title="CONTACT" />
  <div> // subtitle
    <p>Let's get in touch.</p>
    <p>Send us a message or give us a call.</p>
  </div>
  <form>
    <input placeholder="Name" />
    <input placeholder="Email" />
    <input placeholder="Phone" />
    <textarea placeholder="Type your message here.." />
    <button type="submit">Submit</button>
  </form>
  <div> // Google Maps embed area
    <iframe src="https://maps.google.com/..." />
  </div>
</section>
```

## Computed Styles

### Section
- maxWidth: 520px; margin: 0 auto; padding: 0 24px 60px
- display: flex; flexDirection: column; alignItems: center

### Subtitle
- fontSize: 18px; fontWeight: 400; color: #ffffff
- textAlign: center; marginBottom: 32px; lineHeight: 1.7

### Form
- width: 100%; display: flex; flexDirection: column; gap: 12px

### Input / Textarea
- width: 100%
- backgroundColor: rgba(0, 46, 93, 0.6) (slightly lighter than page bg)
- border: 1px solid rgba(255,255,255,0.3)
- borderRadius: 4px
- padding: 10px 14px
- color: rgba(255,255,255,0.7)
- fontSize: 15px; fontWeight: 400
- outline: none
- placeholderColor: rgba(255,255,255,0.5)

### Textarea
- minHeight: 100px; resize: vertical

### Submit button
- backgroundColor: rgb(255, 255, 255)
- color: rgb(0, 46, 93)
- border: none; borderRadius: 4px
- padding: 10px 32px
- fontSize: 15px; fontWeight: 600
- cursor: pointer; alignSelf: flex-start
- marginTop: 4px

### Map container
- width: 100%; marginTop: 32px
- border: 1px solid rgba(255,255,255,0.3)
- borderRadius: 4px; overflow: hidden
- height: 200px

## Text Content (verbatim)
- "Let's get in touch."
- "Send us a message or give us a call."
- Placeholders: Name | Email | Phone | Type your message here..
- Button: Submit

## Map
Google Maps embed showing: Merit Tekstil Giyim San. Ltd.Şti, Kavacık, Otağcı Sk. No:10, 34810 Beykoz/İstanbul, Türkiye
Embed URL (approximate): `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...`

Use a static iframe pointing to that location, or use the actual embed URL from the site.
For the demo, use: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.8!2d29.098!3d41.115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9b9c7f7e7e7%3A0x0!2sMerit%20Tekstil!5e0!3m2!1sen!2str!4v1`

## Responsive
- **Desktop:** centered single column, max-width 520px
- **Mobile:** full-width with padding
