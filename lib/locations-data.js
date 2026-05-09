// Location catalog — edit copy and slugs here.

export const LOCATIONS = [
  {
    slug: "new-york",
    name: "New York",
    region: "USA",
    tagline: "Ecommerce growth partners for New York brands.",
    long: [
      "From boutique brands in Brooklyn to enterprise retailers in Manhattan, we help New York ecommerce businesses stand out in one of the most competitive markets in the world.",
      "Local market knowledge, fast turnarounds, and a team that understands the pace of NYC commerce.",
    ],
  },
  {
    slug: "florida",
    name: "Florida",
    region: "USA",
    tagline: "Ecommerce solutions across the Sunshine State.",
    long: [
      "We support Florida-based brands across Miami, Tampa, Orlando, and Jacksonville — from fashion to home goods to outdoor and lifestyle.",
      "Whether you sell statewide or ship nationally, we tune your stack to your customer base.",
    ],
  },
  {
    slug: "texas",
    name: "Texas",
    region: "USA",
    tagline: "Big stores, bigger results — built for Texas brands.",
    long: [
      "Texas ecommerce is booming. We work with brands across Houston, Dallas, Austin, and San Antonio — automotive, B2B, food, retail, and beyond.",
      "Scalable builds, transparent reporting, and operators who understand Texas-sized ambition.",
    ],
  },
  {
    slug: "wyoming",
    name: "Wyoming",
    region: "USA",
    tagline: "A trusted ecommerce partner for Wyoming brands.",
    long: [
      "Wyoming brands need partners who understand small-team dynamics and lean budgets without sacrificing polish. That is exactly what we deliver.",
      "Plain-spoken communication and craftsman-quality builds — the way Wyoming likes it.",
    ],
  },
  {
    slug: "chicago",
    name: "Chicago",
    region: "USA",
    tagline: "Ecommerce expertise for Chicago and the Midwest.",
    long: [
      "Chicago brands compete in a crowded national market. We help local retailers, B2B operators, and DTC brands cut through with sharper design and smarter ads.",
      "Reliable execution, no fluff — the way Midwesterners prefer to do business.",
    ],
  },
  {
    slug: "minneapolis",
    name: "Minneapolis",
    region: "USA",
    tagline: "Helping Minneapolis brands grow online.",
    long: [
      "From outdoor gear to consumer goods, Minneapolis is home to some of the most distinctive brands in the country. We help them scale online without losing what makes them special.",
      "Tight budgets, big ambitions, and craft you can be proud of.",
    ],
  },
  {
    slug: "rochester",
    name: "Rochester",
    region: "USA",
    tagline: "Ecommerce growth for Rochester businesses.",
    long: [
      "We work with Rochester-based brands that want a serious online presence without enterprise pricing. Pragmatic builds, real ROI, and a team that sticks around after launch.",
      "Long-term partnerships are the norm, not the exception.",
    ],
  },
  {
    slug: "decorah",
    name: "Decorah",
    region: "USA",
    tagline: "Local roots, modern ecommerce builds.",
    long: [
      "Decorah is small but proud — and the brands here punch above their weight. We give them the same craft and care we give to enterprise clients, scaled to their budget.",
      "Personal communication and clear deliverables, every project.",
    ],
  },
  {
    slug: "uae",
    name: "UAE",
    region: "Middle East",
    tagline: "Ecommerce built for UAE growth.",
    long: [
      "The UAE market moves fast — multilingual storefronts, regional payment options, and luxury-grade design are baseline expectations. We deliver them.",
      "Arabic / English bilingual builds, regional payment integrations, and design tuned for UAE buyer behaviour.",
    ],
  },
];

export function getLocationBySlug(slug) {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getAllLocationSlugs() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}
