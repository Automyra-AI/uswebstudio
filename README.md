# AdvertisingLab — Marketing Agency Website

A modern, animated marketing agency site built with Next.js 14, Tailwind, and a custom animation toolkit. Ready for one-click deploy on Vercel.

## Stack

- **Next.js 14** (App Router, JavaScript)
- **Tailwind CSS** for styling
- **Font Awesome** + **Inter** loaded via CDN
- Custom animation primitives: `Reveal`, `LetterReveal`, `Magnetic`, `TiltCard`, `CountUp`, `Spotlight`

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo.
3. Vercel auto-detects Next.js — click **Deploy**. No env vars needed.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/services` + `/services/[slug]` | 9 service detail pages |
| `/platforms` + `/platforms/[slug]` | 9 platform detail pages |
| `/amazon` + `/amazon/[slug]` | Amazon hub + 8 sub-services |
| `/industries` | Industries overview |
| `/locations` + `/locations/[slug]` | 9 location pages |
| `/projects` | Projects with filter |
| `/blog` + `/blog/[slug]` | Blog index + 6 posts |
| `/reviews` | Client reviews |
| `/about` | About page |
| `/contact` | Contact + Calendly + form |

## File structure

```
app/
  layout.js        # root layout, fonts + globals
  page.js          # home page (composes hero/marquee/services/etc.)
  globals.css      # Tailwind + animation keyframes
  services/        # services index + dynamic [slug]
  platforms/       # platforms index + dynamic [slug]
  amazon/          # amazon hub + dynamic [slug]
  industries/, locations/, projects/, blog/, reviews/, about/, contact/

components/
  Header.js, Footer.js, Logo.js
  Hero.js, Marquee.js, Services.js, Process.js, Work.js, Testimonials.js, CTA.js
  ServiceDetail.js, PlatformDetail.js, ServiceRow.js
  ProjectsHero.js, ProjectsGrid.js
  AboutHero.js, AboutStory.js, AboutValues.js
  ContactHero.js, ContactSection.js, BookACall.js
  FAQ.js
  Reveal.js, LetterReveal.js, Magnetic.js, TiltCard.js, CountUp.js, Spotlight.js

lib/
  services-data.js, platforms-data.js, amazon-data.js, locations-data.js, blog-data.js
```

## Customization

- **Colors**: edit `tailwind.config.js` → `navy.*` and `brand.red`
- **Copy**: each `lib/*-data.js` file holds the catalog for its section — edit in place
- **Logo**: [components/Logo.js](components/Logo.js)
- **Images**: currently loaded from Unsplash CDN. Replace with your own (or move to `/public/images/` and switch to `next/image`)
- **Calendly**: pass your real URL via the `calendlyUrl` prop in [app/contact/page.js](app/contact/page.js)
- **Email**: search for `hello@advertisinglab.com` and swap with your real address
- **Form endpoint**: [components/ContactSection.js](components/ContactSection.js) currently logs to console — wire `submit()` to your API route or service (Resend, Formspree)

## Animation toolkit

| Component | What it does |
|---|---|
| `<Reveal>` | scroll-reveal wrapper, 5 variants, supports `delay` for stagger |
| `<LetterReveal>` | character-by-character text reveal |
| `<Magnetic>` | child pulls toward cursor on hover |
| `<TiltCard>` | 3D perspective tilt + optional glare |
| `<CountUp>` | eased number count when scrolled into view |
| `<Spotlight>` | cursor-following soft glow inside a section |

All animations respect `prefers-reduced-motion`.
