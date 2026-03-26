# Performance Engineer — MÉDLËY

## Core Web Vitals Targets
- LCP < 2.5s (hero image preload priority)
- CLS = 0 (reserve image dimensions)
- FID < 100ms (no blocking JS)

## Rules
- next/image with WebP auto-conversion
- Lazy load all below-fold images
- Priority load hero image only
- Font display: swap for all fonts
- Minimize JS bundle: dynamic imports for heavy components
- prefers-reduced-motion: reduce respected
