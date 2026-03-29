# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/merit-desktop-full.png`
- **Interaction model:** static

## DOM Structure
```
<footer>
  <div> // contact row — 3 items with vertical separators
    <div> // item: location
      <img src="/images/icons/pin.png" />
      <span>Istanbul, Turkey</span>
    </div>
    <div class="separator" /> // vertical line
    <div> // item: email
      <img src="/images/icons/email.png" />
      <a href="mailto:contact@meritteks.com">contact@meritteks.com</a>
    </div>
    <div class="separator" />
    <div> // item: phone
      <img src="/images/icons/phone.png" />
      <span>+90 216 425 71 46</span>
    </div>
  </div>
  <p>© 2026 Merit. All rights reserved.</p>
</footer>
```

## Computed Styles

### Footer container
- backgroundColor: transparent (on navy #002e5d)
- paddingTop: 30px; paddingBottom: 20px
- display: flex; flexDirection: column; alignItems: center
- gap: 20px

### Contact row
- display: flex; flexDirection: row; alignItems: center
- gap: 0; justifyContent: center

### Contact item
- display: flex; flexDirection: column; alignItems: center
- gap: 8px; padding: 0 32px
- color: rgb(255, 255, 255)
- fontSize: 13px; fontWeight: 400

### Vertical separator
- width: 1px; height: 40px
- backgroundColor: rgb(255, 255, 255)
- opacity: 0.5

### Icon images
- width: 20px; height: 20px; objectFit: contain

### Email link
- color: rgb(255, 255, 255); textDecoration: none
- fontSize: 13px

### Copyright
- fontSize: 13px; fontWeight: 400; color: rgb(255, 255, 255)
- position: fixed; bottom: 8px; left: 16px (appears fixed bottom-left in screenshots)

## Assets
- `/images/icons/pin.png` (20x20)
- `/images/icons/email.png` (24x20)
- `/images/icons/phone.png` (19x20)

## Text Content (verbatim)
- Istanbul, Turkey
- contact@meritteks.com
- +90 216 425 71 46
- © 2026 Merit. All rights reserved.

## Responsive
- **Desktop:** horizontal 3-item row with separators
- **Mobile:** stacks to column
