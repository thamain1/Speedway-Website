# Speedway Market Site - Project Context for Claude

## Repository & Local Path
- **GitHub**: https://github.com/thamain1/Speedway-Website.git
- **Local Path**: `C:\dev\speedway-market-site`
- **Branch**: `main`
- **Run**: `cd C:\dev\speedway-market-site && npm run dev` (port 5174)

## Overview
Marketing and online ordering website for **Speedway Market**, a St. Louis restaurant at 4760 S Spring Ave. Showcases the full menu and drives orders through DoorDash integration.

**Business info:**
- Phone: (314) 352-5752
- Address: 4760 S Spring Ave, St. Louis, MO 63116
- Hours: Sun 9AM–8PM | Mon–Thu 9AM–9PM | Fri–Sat 9AM–10PM
- Copyright: © 2026 4wardmotion

## Tech Stack
- React 19 + TypeScript + Vite 8 (port 5174)
- Tailwind CSS 4
- Framer Motion (animations)
- No backend or database — static site with local menu data
- External: DoorDash (ordering), Google Maps (directions), Google Reviews

## Project Structure
```
src/
├── App.tsx         # Full site (~530 lines) — all sections in one component
├── main.tsx
├── index.css       # Tailwind + brand CSS variables
└── data/
    └── menu.ts     # 50+ menu items across 19 categories (265 lines)
public/
└── assets/menu/    # 20+ food item images (AVIF/JPEG)
```

## Site Sections
1. Fixed nav bar with "Order Now" CTA (DoorDash link)
2. Mobile menu overlay (responsive)
3. Hero — "Hot. Fresh. Speedway."
4. Popular Items carousel (horizontal scroll)
5. Full Menu Explorer — search + category filter tabs (19 categories)
6. Location & Hours with Google Maps link
7. Google Reviews — 4.8/5 stars, 500+ reviews
8. FAQ — 5 expandable questions
9. Footer

## Brand Colors
```css
--color-brand-red:      #D42020
--color-brand-red-dark: #B01A1A
--color-brand-black:    #18181B
--color-brand-light:    #F8F8F8
--color-brand-yellow:   #FFB800
```

## Menu Categories (19)
Pizzas, whole wings, boneless wings, party wings, fajitas, burritos, quesadillas,
tacos, sandwiches, seafood combos, appetizers, salads, chicken tenders, and more.

## Development Commands
```bash
npm run dev      # Start dev server (port 5174)
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Notes
- No `.env` needed — no backend or API keys
- DoorDash links are hardcoded in the menu data
- Images stored in `public/assets/menu/` as AVIF/JPEG
