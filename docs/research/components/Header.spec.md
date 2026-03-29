# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/merit-desktop-full.png`
- **Interaction model:** static + click navigation

## DOM Structure
```
<header>
  <div> // centered logo container
    <img src="/images/logo.png" alt="Merit Textile LTD." />
  </div>
  <nav>
    <ul> // horizontal flex list
      <li><a href="/">About Us</a></li>
      <li><a href="/process">Process</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/clients">Clients</a></li>
      <li><a href="/social-responsibility">Social Responsibility</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

## Computed Styles (exact)

### Header container
- backgroundColor: transparent (sits on top of page navy #002e5d)
- paddingTop: 13px (logo starts at y=13)
- height: 142px total
- display: flex; flexDirection: column; alignItems: center

### Logo image
- width: 180px (rendered, natural: 360x71)
- height: auto
- marginBottom: ~15px

### Nav
- width: 100%
- display: flex; justifyContent: center
- backgroundColor: transparent

### Nav UL
- display: flex; flexDirection: row; listStyle: none
- gap: 0; padding: 0; margin: 0

### Nav link (default)
- fontFamily: 'Poppins', Arial, sans-serif
- fontSize: 15px
- fontWeight: 700
- color: rgb(255, 255, 255) — white
- textDecoration: none
- padding: 0 12px
- cursor: pointer

### Nav link (active page)
- color: rgb(240, 213, 213) — light pink/salmon

## States & Behaviors

### Active nav item
- **Trigger:** current page URL matches href
- **State A (default):** color: #ffffff
- **State B (active):** color: rgb(240, 213, 213) = #f0d5d5
- **Transition:** none (static color)
- **Implementation:** use Next.js `usePathname()` to compare

### Hover
- No explicit hover effect beyond cursor change (Wix default)

## Assets
- Logo image: `/images/logo.png` (downloaded)

## Text Content (verbatim)
- About Us | Process | Products | Clients | Social Responsibility | Contact

## Responsive Behavior
- **Desktop (1440px):** logo centered, nav links horizontal below
- **Mobile (390px):** logo centered, nav links in a smaller row or wrap
- **Breakpoint:** ~768px — nav may stack or shrink
