# VideoSection Specification — SARAR

## Overview
- **Target file:** `src/components/VideoSection.tsx`
- **Screenshot:** `docs/design-references/section-05-video.png`
- **Interaction model:** static (autoplay looping muted video)

## Container
- width: 100%; position: relative; overflow: hidden; backgroundColor: #d0dce5

## Video element
- src: "https://witcdn.sarar.com/Data/EditorFiles/Video/robin-yayla-2025-2.mp4"
- autoPlay muted loop playsInline
- width: 100%; height: auto; display: block; maxHeight: 500px; objectFit: cover

## Responsive
- Desktop: full width ~500px height
- Mobile: full width, proportional
