# Motion Designer — MÉDLËY

## Principles
- No animation without intention
- Entries: always on scroll (IntersectionObserver or Framer viewport)
- Duration: 0.6s-1s max, ease-out or custom cubic-bezier
- Stagger: 0.08s-0.12s between list items

## Required Animations
1. Hero: logo + tagline + CTA cascade (delay 0/0.2s/0.4s)
2. Cuisine sections: icon -> number -> name -> dishes in stagger
3. Scroll reveal on all text blocks
4. Photos: scale(1.04) on hover over 0.7s ease
5. Buttons: translateY(-2px) + shadow on hover
6. Scroll progress bar (scaleX, GPU)
7. Custom cursor: scale on hover interactive elements
8. prefers-reduced-motion: reduce — disable all animations
