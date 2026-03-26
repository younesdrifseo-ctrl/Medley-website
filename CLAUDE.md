# MÉDLËY — Project Guidelines

@AGENTS.md

## Restaurant Info
- **Name**: MÉDLËY by KGS FOOD
- **SIRET**: 984 926 352 00019
- **Address**: 72 route de Pontoise, 95100 Argenteuil
- **Phone**: 07 64 01 65 97 / +33764016597
- **Email**: Medleyrestaurants@gmail.com
- **Instagram**: @medleyrestaurant
- **Opening**: 15 avril 2026
- **Hours**: Mardi–Dimanche / Coffee Shop 15h–19h / Restaurant 19h–01h / Fermé le Lundi
- **Reservations**: WhatsApp wa.me/33764016597

## Chef
- **Mohamed Si** — Chef Cuisinier (NEVER "Chef Propriétaire")
- Top Chef France Saison 5, Top Chef Middle East, Top Chef ME All Stars
- Meilleur Apprenti de France, Finaliste Championnat de France Desserts

## Non-Negotiable Rules
1. **Logo** — Always CSS-treated, never raw white JPEG visible. Dark bg: `filter: invert(1) brightness(1); mix-blend-mode: screen`. Light bg: `filter: saturate(0.7) brightness(0.6); mix-blend-mode: multiply`
2. **Cuisines** — Exactly 4: Orient, Asian, Brasserie, Italy (NEVER 5, NEVER "Dessert")
3. **Icons** — Use official PNG icons (brasserie.png, asian.png, orient.png, italy.png)
4. **Chef title** — "Chef Cuisinier" only
5. **Halal** — Do NOT mention on the site
6. **Hours** — Mardi–Dimanche (never split weekday/weekend)
7. **Images** — next/image everywhere, WebP auto, lazy loading
8. **Mobile** — cursor:none only on @media(hover:hover), call button visible on mobile
9. **Form** — WhatsApp redirect with pre-filled message
10. **Animations** — `prefers-reduced-motion: reduce` respected everywhere

## Color Palette (exact hex)
```
--cream:  #F0EBE0
--cream2: #E4DDCF
--sage:   #8B9A6B
--sage2:  #6B7A50
--olive:  #5A6B3A
--forest: #3A4A28
--deep:   #1E2D12
--gold:   #B8A455
--gold2:  #D4B840
--ink:    #1C2010
```

## Typography
- **Display**: Cormorant Garamond (italic, weight 300/400/600)
- **Body**: Space Grotesk (weight 300/400/500)
- **Mono**: DM Mono (labels, prix, codes)

## Tech Stack
- Next.js (App Router), TypeScript strict
- Tailwind CSS, Framer Motion
- React Hook Form + Zod
- Deploy: Netlify

## Assets
All in `/public/assets/` — logo/, icons/ (brasserie/asian/orient/italy.png), photos/ (hero/salle/ambiance/bar/neon/sign/chef/boeuf/poke/ravioli/tajine/canard/pizza/bibimbap.jpg)

## Commands
```bash
npm run dev    # Development
npm run build  # Build + TS check
```
