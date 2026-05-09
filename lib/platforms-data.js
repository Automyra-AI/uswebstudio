// Platform catalog — edit copy and slugs here.
// Each entry powers both the /platforms index and the /platforms/[slug] detail page.

export const PLATFORMS = [
  {
    slug: "shopify",
    name: "Shopify",
    tagline: "Custom Shopify stores that convert.",
    short:
      "We build standout, sales-driven Shopify stores — from custom themes to advanced apps and headless storefronts.",
    long: [
      "Shopify is fast, reliable, and battle-tested for ecommerce — but a stock theme will never set your brand apart. We build custom Shopify experiences that pair beautiful design with the conversion patterns proven to work in your industry.",
      "From Shopify Liquid theme work to custom apps and headless Hydrogen builds, we cover the full spectrum.",
    ],
    features: [
      "Custom Shopify theme development",
      "Headless storefronts on Hydrogen / Next.js",
      "Custom Shopify apps & integrations",
      "Checkout extensibility & Shopify Functions",
      "Speed and Core Web Vitals optimisation",
    ],
  },
  {
    slug: "bigcommerce",
    name: "BigCommerce",
    tagline: "Scale faster on BigCommerce.",
    short:
      "From mid-market launches to enterprise builds — we know BigCommerce inside out and unlock its real growth potential.",
    long: [
      "BigCommerce shines for high-volume, multi-channel brands. We design and build BigCommerce stores that move with your catalog, your B2B requirements, and your reporting needs.",
      "Stencil theming, BigCommerce APIs, headless builds — we have shipped them all.",
    ],
    features: [
      "Stencil theme development",
      "Headless BigCommerce storefronts",
      "Custom checkout flows",
      "B2B Edition implementation",
      "Multi-storefront configuration",
    ],
  },
  {
    slug: "volusion",
    name: "Volusion",
    tagline: "Get the most out of Volusion.",
    short:
      "We help long-time Volusion stores modernise design, improve conversion, and add the features the platform makes hard.",
    long: [
      "Many established stores still run on Volusion and want to keep momentum without a full replatform. We work inside Volusion's constraints to refresh the front-end, tighten conversion, and squeeze more performance out of the platform.",
      "When the time does come to migrate, we plan the move properly — no lost SEO, no lost data.",
    ],
    features: [
      "Volusion theme refreshes & redesigns",
      "Conversion optimisation",
      "Custom JS / CSS enhancements",
      "Migration planning to modern platforms",
      "Performance audits",
    ],
  },
  {
    slug: "magento",
    name: "Magento (Adobe Commerce)",
    tagline: "Enterprise-grade Magento builds.",
    short:
      "Magento and Adobe Commerce builds for catalogs, B2B logic, and complex pricing rules — done right.",
    long: [
      "Magento is powerful, but only when handled by a team that respects its complexity. Our developers ship clean, upgrade-safe Magento code and architect stores that scale to thousands of SKUs without slowing down.",
      "We work across Open Source and Adobe Commerce, including PWA Studio for headless front-ends.",
    ],
    features: [
      "Magento 2 theme development",
      "Custom modules & extensions",
      "PWA Studio headless front-ends",
      "B2B Commerce features",
      "Performance tuning & caching strategy",
    ],
  },
  {
    slug: "woocommerce",
    name: "WooCommerce",
    tagline: "Flexible WooCommerce stores on WordPress.",
    short:
      "We build WooCommerce stores that combine WordPress flexibility with ecommerce performance — fast, scalable, and easy to manage.",
    long: [
      "WooCommerce is the most popular ecommerce stack on the web for a reason — flexibility. We harness that flexibility without the bloat: clean themes, careful plugin selection, and rock-solid hosting.",
      "From single-product stores to subscription-based brands, we design the right Woo build for your stage.",
    ],
    features: [
      "Custom WooCommerce themes",
      "Subscription & membership flows",
      "Plugin selection & cleanup",
      "Performance & caching",
      "Headless Woo with Next.js",
    ],
  },
  {
    slug: "opencart",
    name: "OpenCart",
    tagline: "Lean, fast OpenCart stores.",
    short:
      "OpenCart builds and refreshes for brands that want a lean, self-hosted platform without the complexity of Magento.",
    long: [
      "OpenCart is a great middle-ground for stores that want self-hosted control without the overhead of Magento. We design and build OpenCart stores tuned for performance and ease of management.",
      "Custom modules, theme builds, and migrations are all in scope.",
    ],
    features: [
      "Custom OpenCart theme development",
      "Module & extension development",
      "Migration to / from OpenCart",
      "Performance tuning",
      "Multi-store setup",
    ],
  },
  {
    slug: "shift4shop",
    name: "Shift4Shop",
    tagline: "Modern Shift4Shop builds.",
    short:
      "We bring fresh design and modern best practices to Shift4Shop stores — with clean theming and conversion-focused layouts.",
    long: [
      "Shift4Shop has come a long way and offers a strong feature set out of the box. We help brands take advantage of it with thoughtful theme work and conversion-tested layouts.",
      "Custom features, integrations, and ongoing maintenance are part of the package.",
    ],
    features: [
      "Shift4Shop theme design & build",
      "Custom feature development",
      "Payment & shipping integrations",
      "Conversion optimisation",
      "Maintenance retainers",
    ],
  },
  {
    slug: "zen-cart",
    name: "Zen Cart",
    tagline: "Zen Cart support and modernisation.",
    short:
      "If you run on Zen Cart, we keep your store secure, modern, and ready for the next stage — whether that is a refresh or a full migration.",
    long: [
      "Zen Cart still powers many established stores. We help owners modernise the look, harden security, and plan thoughtful migrations when the time comes.",
      "Our focus is preserving your hard-earned SEO and customer base through every change.",
    ],
    features: [
      "Zen Cart theme refreshes",
      "Security patches & hardening",
      "Custom modules",
      "SEO-safe migration planning",
      "Ongoing maintenance",
    ],
  },
  {
    slug: "amazon",
    name: "Amazon",
    tagline: "Sell more on Amazon, end to end.",
    short:
      "Listings, ads, account health, and storefronts — we cover the full Amazon ecosystem so you sell more and stress less.",
    long: [
      "Amazon is its own discipline — keyword strategy, A+ content, ads, and Seller Central account hygiene all need expert attention. We treat Amazon as a real revenue channel, not an afterthought.",
      "From new launches to scaling existing brands, we plug in at the level you need.",
    ],
    features: [
      "Listing & A+ content optimisation",
      "Sponsored Products / Brands / Display ads",
      "Seller & Vendor Central management",
      "Buy with Prime setup",
      "FBA & inventory support",
    ],
  },
];

export function getPlatformBySlug(slug) {
  return PLATFORMS.find((p) => p.slug === slug);
}

export function getAllPlatformSlugs() {
  return PLATFORMS.map((p) => ({ slug: p.slug }));
}
