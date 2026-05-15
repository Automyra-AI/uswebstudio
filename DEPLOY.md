# Deploying AdvertisingsLabs

Three paths. **Path A is the easiest and what I recommend.**

---

## Path A — Vercel hosting + Namecheap domain (recommended)

Free, takes 5 minutes, made for Next.js. You keep your Namecheap domain — only the DNS points elsewhere.

### 1. Push the repo to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<you>/advertisingslabs.git
git push -u origin main
```

### 2. Import to Vercel

1. Go to <https://vercel.com/new>
2. Sign in with GitHub
3. Pick the `advertisingslabs` repo → **Deploy**
4. Vercel auto-detects Next.js. No env vars needed. ~2 min build.

You now have a live `*.vercel.app` URL.

### 3. Point your Namecheap domain at Vercel

In Vercel:
- Project → Settings → Domains → Add `advertisingslabs.com` and `www.advertisingslabs.com`
- Vercel shows you the DNS values you need.

In Namecheap dashboard:
- Domain List → Manage `advertisingslabs.com` → Advanced DNS
- Replace existing A / CNAME records with the values Vercel gave you (usually):
  - **A record**, host `@`, value `76.76.21.21`
  - **CNAME record**, host `www`, value `cname.vercel-dns.com`
- Save. DNS propagation: 5 min – 24 hr (usually < 1 hour).

That's it. Auto-redeploys every time you push to `main`. SSL handled automatically.

> Vercel free tier handles 100 GB bandwidth/month — plenty for an agency site.

---

## Path B — Static export to Namecheap shared hosting

Works on **any** Namecheap plan (Stellar, Stellar Plus, Stellar Business). Already configured in this repo.

### What's already set up

- [next.config.mjs](next.config.mjs) — `output: "export"` enabled
- [public/.htaccess](public/.htaccess) — forces HTTPS, caches assets, adds security headers, clean URLs

### 1. Build the static site locally

```bash
npm install
npm run build
```

This produces a `/out` folder containing the entire static site — HTML, CSS, JS, images.

### 2. Upload `/out` contents to Namecheap

**Option B1 — cPanel File Manager (browser, no tools)**
1. Log in to Namecheap → Hosting List → cPanel
2. Open **File Manager** → navigate to `public_html`
3. **Empty** `public_html` (delete the default `cgi-bin`, `index.html`, etc.) — or back them up first
4. Upload **the contents of `/out`** (not the `out` folder itself) into `public_html`
5. Make sure `.htaccess` is uploaded (File Manager → Settings → "Show Hidden Files")

**Option B2 — FTP (faster for repeat deploys)**
1. cPanel → FTP Accounts → use your main account credentials
2. In FileZilla / Cyberduck: connect to `ftp.advertisingslabs.com` (or your hosting IP)
3. Upload `/out/*` to `/public_html/`

### 3. Enable SSL (if not already)

cPanel → SSL/TLS Status → **Run AutoSSL** (free Let's Encrypt cert, takes ~5 min)

The `.htaccess` already redirects HTTP → HTTPS once the cert is active.

### Limitations of static export

- **Contact form** — the current form just `console.log`s. Wire it to a static-friendly service before relying on it:
  - [Formspree](https://formspree.io) — free 50 submissions/month
  - [Web3Forms](https://web3forms.com) — free unlimited, no signup
  - [Resend](https://resend.com) via a serverless function (would need Vercel/Netlify)
- **No API routes** — none exist in this project, so not an issue
- **Image optimization** disabled — we use plain `<img>` tags, so unaffected
- **Page revalidation** — site is fully static, redeploy to update

### Redeploy after changes

```bash
npm run build
# upload /out contents to public_html again
```

---

## Path C — Node.js app on Namecheap (Stellar Plus or higher)

If you really need server-rendered features later (real-time data, API routes, dynamic ISR). More involved.

### Requirements

- Stellar Plus, Stellar Business, or VPS plan
- Node.js 18+ available in cPanel (Setup Node.js App feature)

### Steps

1. In `next.config.mjs`, **remove** `output: "export"` and `trailingSlash: true` (or comment out)
2. cPanel → **Setup Node.js App** → Create Application:
   - Node.js version: 18.x or 20.x
   - Application mode: Production
   - Application root: `advertisingslabs` (creates `~/advertisingslabs/`)
   - Application URL: your domain or subdomain
   - Application startup file: `node_modules/next/dist/bin/next` with args `start`
3. Upload the **entire project** (excluding `node_modules` and `.next`) via FTP to `~/advertisingslabs/`
4. SSH or cPanel terminal:
   ```bash
   cd ~/advertisingslabs
   npm install
   npm run build
   ```
5. Back in Setup Node.js App: **Restart** the application
6. Tail the app log to confirm `Ready - started server on 0.0.0.0:PORT`

`.htaccess` in `public_html` should proxy to the Passenger app (cPanel usually adds this automatically).

---

## Pre-deploy checklist

Before going live, regardless of path:

- [ ] **Wire the contact form** — `components/ContactSection.js` `submit()` still console.logs
- [ ] **Replace WhatsApp + cal.com placeholders** if you change numbers/URLs
- [ ] **Add real client reviews** to `lib/reviews-data.js`
- [ ] **Add real project case studies** to `lib/projects-data.js`
- [ ] **Replace stock Unsplash images** with your own (move to `/public/images/`)
- [ ] **Add a favicon** at `public/favicon.ico` (32×32 PNG works)
- [ ] **Add an OG image** at `public/og.png` (1200×630) and reference it in `app/layout.js` metadata
- [ ] **Have Terms + Privacy reviewed by counsel** — the current versions are templates with a placeholder banner
- [ ] **Test all routes** — `/`, `/services/*`, `/platforms/*`, `/amazon/*`, `/projects/*`, `/locations/*`, `/blog/*`, `/about`, `/contact`, `/reviews`, `/terms`, `/privacy`

---

## My honest recommendation

Use **Path A** (Vercel + Namecheap DNS). You get:
- Automatic deploys on every git push
- Automatic SSL
- Edge CDN globally
- Built-in analytics
- Server features later if you need them (API routes, ISR, middleware)
- All free at your traffic level

Namecheap shared hosting works for static (Path B) but the deploy loop is manual every time. Path C only makes sense if you outgrow Vercel.
