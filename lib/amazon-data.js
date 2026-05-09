// Amazon sub-services catalog.

export const AMAZON_SERVICES = [
  {
    slug: "full-service-agency",
    name: "Full-Service Agency",
    tagline: "End-to-end Amazon partnership.",
    short:
      "One team that handles your entire Amazon channel — listings, ads, account health, content, and growth strategy.",
    long: [
      "Running Amazon well requires a dozen specialists working together. We bundle them into one team — your dedicated Amazon partner — so you get coordinated execution and a single point of contact.",
      "From new launches to scaling mature brands, we plug in at the level you need.",
    ],
    features: [
      "Dedicated account strategist",
      "Listings, ads, and creative under one roof",
      "Weekly reporting and growth roadmap",
      "Account health monitoring",
      "Catalog and inventory support",
    ],
  },
  {
    slug: "dedicated-va",
    name: "Dedicated Virtual Assistant",
    tagline: "Trained Amazon VAs working as part of your team.",
    short:
      "Skilled, vetted virtual assistants who handle your day-to-day Amazon work — listings, customer messages, case logs, and reports.",
    long: [
      "Hire the equivalent of an in-house Amazon VA without the hiring overhead. Our VAs are trained on Seller and Vendor Central and know how to keep your operation tidy.",
      "Full-time, part-time, or task-based engagements — your choice.",
    ],
    features: [
      "Listing creation and updates",
      "Customer message handling",
      "Case log management",
      "Inventory and FBA tasks",
      "Weekly reporting in your format",
    ],
  },
  {
    slug: "amazon-seo",
    name: "Amazon SEO",
    tagline: "Rank higher, sell more, organically.",
    short:
      "Keyword strategy, listing optimisation, backend tuning, and A+ content — built to lift your organic rank on Amazon search.",
    long: [
      "Amazon search has its own rules. We research the keywords your buyers actually type, structure your listings around them, and build the on-listing signals A9 rewards.",
      "Steady organic ranking lifts that compound over time, not paid traffic that stops the moment you turn it off.",
    ],
    features: [
      "Keyword research and gap analysis",
      "Title, bullet, and description rewriting",
      "Backend keyword optimisation",
      "A+ content / Enhanced Brand Content",
      "Monthly rank tracking and reporting",
    ],
  },
  {
    slug: "advertising-expert",
    name: "Dedicated Advertising Expert",
    tagline: "A specialist focused only on your Amazon ads.",
    short:
      "Get a dedicated Amazon advertising specialist who knows your account, your goals, and your numbers — running campaigns daily.",
    long: [
      "Amazon ads change fast. A general agency manager juggling ten accounts will miss things a dedicated specialist catches in real time.",
      "Your dedicated expert lives inside your ad account — bid management, search-term mining, defensive plays, and weekly optimisation.",
    ],
    features: [
      "Daily bid and search-term tuning",
      "Sponsored Products / Brands / Display",
      "Defensive bidding on competitor terms",
      "DSP campaign support",
      "Weekly strategy calls",
    ],
  },
  {
    slug: "amazon-ads",
    name: "Amazon Ads",
    tagline: "Sponsored campaigns built to scale.",
    short:
      "We architect, launch, and optimise Sponsored Products, Brands, and Display campaigns — tuned to your TACoS and growth goals.",
    long: [
      "Amazon ads can be your single biggest sales lever or your biggest leak. We treat every campaign with surgical precision: clear KPIs, clean structure, and weekly adjustments based on what the data is actually saying.",
      "From new product launches to mature SKUs, we build paid plans that drive incremental sales — not cannibalised organic ones.",
    ],
    features: [
      "Sponsored Products campaigns",
      "Sponsored Brands and Brand Stores",
      "Sponsored Display retargeting",
      "Amazon DSP support",
      "ACoS / TACoS goal management",
    ],
  },
  {
    slug: "seller-central-management",
    name: "Seller Central Management",
    tagline: "End-to-end Seller Central support.",
    short:
      "Listings, account health, performance issues, FBA — we keep your Seller Central account running smoothly so you can focus on growth.",
    long: [
      "Seller Central is full of moving parts: variations, brand registry, IP claims, suppressed listings, FBA hiccups, performance notifications. We handle them so you do not have to.",
      "Daily monitoring, fast issue resolution, and proactive prevention before small problems turn into account suspensions.",
    ],
    features: [
      "Daily account health monitoring",
      "Listing variation and parentage management",
      "Case log and seller support escalations",
      "Brand Registry support",
      "FBA inbound and inventory issues",
    ],
  },
  {
    slug: "buy-with-prime",
    name: "Buy with Prime",
    tagline: "Prime conversion, on your own site.",
    short:
      "We set up and optimise Buy with Prime so your DTC site benefits from Prime trust, fast shipping, and higher conversion.",
    long: [
      "Buy with Prime brings Prime's trust badge and fast delivery to your own storefront — a proven conversion lift for shoppers who already love Amazon's logistics.",
      "We handle the technical setup, theme integration, catalog mapping, and ongoing optimisation.",
    ],
    features: [
      "Buy with Prime integration",
      "Theme and product page implementation",
      "Catalog and inventory mapping",
      "Reviews import",
      "Ongoing performance tuning",
    ],
  },
  {
    slug: "vendor-central-management",
    name: "Vendor Central Management",
    tagline: "Profitable, well-run Vendor Central accounts.",
    short:
      "Specialist support for Vendor Central — chargebacks, shortages, AP issues, A+ content, AMS campaigns, and growth planning.",
    long: [
      "Vendor Central rewards brands who manage it tightly. Chargebacks, shortages, and pricing disputes can quietly erode your margin — we hunt them down and recover them.",
      "Plus the upside work: AMS / DSP, A+ content, brand-building campaigns, and direct conversations with your Amazon vendor manager.",
    ],
    features: [
      "Chargeback and shortage recovery",
      "AP / accounts payable claims",
      "AMS and DSP campaign management",
      "A+ content and Brand Stores",
      "Vendor manager relationship support",
    ],
  },
];

export function getAmazonBySlug(slug) {
  return AMAZON_SERVICES.find((s) => s.slug === slug);
}

export function getAllAmazonSlugs() {
  return AMAZON_SERVICES.map((s) => ({ slug: s.slug }));
}
