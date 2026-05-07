# US Web Studio — Next.js Clone

A pixel-close React/Next.js clone of the uswebstudio.com landing page, ready for one-click deploy on Vercel.

## Stack

- **Next.js 14** (App Router, JavaScript — no TS toolchain to set up)
- **Tailwind CSS** for styling
- **Font Awesome** + **Inter** loaded via CDN

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**. No env vars needed.

Or one-shot from the CLI:

```bash
npm i -g vercel
vercel
```

## File structure

```
app/
  layout.js        # root layout, fonts + globals
  page.js          # composes the home page
  globals.css      # Tailwind + custom CSS (marquee, hero gradient)
components/
  Header.js        # nav + mobile menu
  Hero.js          # headline, hero circle, speech bubbles
  Marquee.js       # red infinite-scroll banner
  Testimonials.js  # tabbed client section
  Services.js      # 3-card services grid
  Process.js       # We Communicate / Execute / Present
  Work.js          # project showcase grid
  CTA.js           # contact call-to-action card
  Footer.js
  Logo.js / HexIcon.js
tailwind.config.js
next.config.mjs
```

## Customization

- Colors: edit the `colors` block in `tailwind.config.js` (`navy.*`, `brand.red`).
- Copy: each component holds its own constants near the top — search for the section you want and edit in place.
- Images: currently loaded from Unsplash CDN. Replace with your own URLs (or move to `/public/images/...` and use `next/image`).
