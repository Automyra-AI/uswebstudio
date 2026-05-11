// Project catalog — drives both the /projects grid and the /projects/[slug] detail pages.
// Edit copy, swap images, add new projects here.

export const PROJECTS = [
  {
    slug: "chris-painting",
    num: "01",
    title: "Chris Painting",
    subtitle: "Home Painting Solutions",
    tags: ["Website"],
    cover:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1400&q=80",
    short:
      "A professional website that showcases their craft and brings in steady local leads.",
    challenge:
      "Chris Painting had a strong reputation locally but no real online presence — just a one-page site that did not convert. They needed a home for their portfolio, clear service pages, and a flow that captured quote requests.",
    solution:
      "We rebuilt the site from scratch around a clean visual identity, set up service-specific landing pages tuned to local SEO, and added a multi-step quote form connected to their email and CRM.",
    result:
      "Within 90 days, organic leads tripled and the team stopped relying on word-of-mouth alone. Customers now book quotes directly through the site.",
    stats: [
      { label: "Lead increase", value: 210, suffix: "%" },
      { label: "Pages indexed", value: 42, suffix: "" },
      { label: "Avg. response time", value: 4, suffix: " hrs" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1400&q=80",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1400&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80",
    ],
  },
  {
    slug: "kyb-marketing-agency",
    num: "02",
    title: "KYB",
    subtitle: "Marketing Agency Website",
    tags: ["Website"],
    cover:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80",
    short:
      "A fully custom site with a structured conversion flow built around their agency's services.",
    challenge:
      "KYB needed a flagship website that reflected the calibre of their work. Off-the-shelf themes felt generic, and their existing site buried their best case studies behind unclear navigation.",
    solution:
      "Custom design system, modular CMS sections, and a service-first information architecture. Every page was tuned to lead a visitor to either a case study or a contact form.",
    result:
      "Inbound discovery calls increased significantly month over month after launch, and the new site became their primary sales tool.",
    stats: [
      { label: "Inbound calls", value: 180, suffix: "%" },
      { label: "Bounce rate drop", value: 38, suffix: "%" },
      { label: "Pages launched", value: 24, suffix: "" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1400&q=80",
    ],
  },
  {
    slug: "ecology-spray-foam",
    num: "03",
    title: "Ecology Spray Foam",
    subtitle: "Spray Foam Insulation Business",
    tags: ["Website"],
    cover:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80",
    short:
      "Replaced a slow, outdated Squarespace site with a performance-tuned custom build.",
    challenge:
      "Their original Squarespace site was slow, hard to update, and underperforming in search. With most customers researching on mobile, page-speed and clarity were costing them jobs.",
    solution:
      "Migrated to a faster stack with a modular content system. Re-architected the service pages around local search intent and added clear pricing-anchor CTAs above the fold.",
    result:
      "PageSpeed scores went from 'poor' to 'good' on mobile. Inbound contact forms grew steadily once new pages started ranking.",
    stats: [
      { label: "Mobile PageSpeed", value: 96, suffix: "/100" },
      { label: "Organic traffic", value: 145, suffix: "%" },
      { label: "Form submissions", value: 75, suffix: "%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1400&q=80",
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1400&q=80",
    ],
  },
  {
    slug: "di-air-duct-google-ads",
    num: "04",
    title: "D&I Air Duct (Google Ads)",
    subtitle: "Air Duct Cleaning Business",
    tags: ["Google Ads", "Meta Ads"],
    cover:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1400&q=80",
    short:
      "After Meta success, expanded into Google Ads to capture high-intent search traffic.",
    challenge:
      "Meta had been a steady lead source, but D&I knew there was a different category of customer searching for solutions on Google. They needed to capture that demand without cannibalising existing channels.",
    solution:
      "Built out Search and Local Service Ads campaigns with tightly themed ad groups, conversion tracking, and a dedicated landing-page flow. Used Meta data to inform Google ad copy and audience signals.",
    result:
      "Google ads now contribute a third of total leads at a CPL below Meta. The two channels run side by side without overlap.",
    stats: [
      { label: "Channel split", value: 33, suffix: "%" },
      { label: "Lower CPL vs Meta", value: 28, suffix: "%" },
      { label: "ROAS", value: 5.2, suffix: "x", decimals: 1 },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1400&q=80",
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    ],
  },
  {
    slug: "cadhauz-architectural",
    num: "05",
    title: "Cadhauz",
    subtitle: "Architectural & Remodelling",
    tags: ["Meta Ads"],
    cover:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80",
    short:
      "Rebuilt their funnel and ad creatives to bring growth back on track.",
    challenge:
      "By mid-2025, Cadhauz had hit a stall. Their Meta ads were underperforming and they were not generating new business at the pace the team needed to keep growing.",
    solution:
      "Audited their full creative library, rebuilt their funnel from cold-traffic to consult call, and shipped a fresh batch of video and static ads tuned to their best buyer personas.",
    result:
      "Booked consult calls returned to growth within six weeks, with a healthier mix of high-budget projects in the pipeline.",
    stats: [
      { label: "Consult bookings", value: 4.3, suffix: "x", decimals: 1 },
      { label: "Creative tested", value: 32, suffix: "" },
      { label: "Avg. project value", value: 65, suffix: "%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
    ],
  },
  {
    slug: "di-air-duct-meta",
    num: "06",
    title: "D&I Air Duct (Meta)",
    subtitle: "Air Duct Cleaning",
    tags: ["Meta Ads"],
    cover:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1400&q=80",
    short:
      "From a single hero video to a full creative system that scales month over month.",
    challenge:
      "D&I's Meta ads started strong on the back of one excellent video creative — but performance plateaued as the audience saw it too often. They needed a system, not a single ad.",
    solution:
      "Built a rolling creative pipeline: variations of the hero asset, testimonial cuts, before/after demos, and seasonal angles. Set up structured testing so winners scaled and losers were killed quickly.",
    result:
      "Predictable scale month over month with no single point of failure. Account now runs 8–12 active creatives at any time.",
    stats: [
      { label: "Active creatives", value: 12, suffix: "" },
      { label: "CPL trend (mom)", value: 18, suffix: "%↓" },
      { label: "Months scaling", value: 9, suffix: "" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1400&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1400&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80",
    ],
  },
  {
    slug: "airways-cleaning",
    num: "07",
    title: "Airways",
    subtitle: "Air Duct Cleaning Business",
    tags: ["Meta Ads", "Social Media"],
    cover:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1400&q=80",
    short:
      "Stabilised lead flow for a service business with unpredictable demand cycles.",
    challenge:
      "Airways had solid demand but their lead flow swung wildly week to week — making it impossible to staff and plan. The fix had to be more reliability, not more spend.",
    solution:
      "Diversified channels (paid social + organic content + email reactivation), introduced seasonal creative rotations, and built a always-on retargeting layer to smooth out the troughs.",
    result:
      "Lead-flow variance dropped meaningfully and the team can now confidently book technicians a week out without scrambling.",
    stats: [
      { label: "Lead variance drop", value: 62, suffix: "%" },
      { label: "Email reactivation", value: 23, suffix: "%" },
      { label: "Channels active", value: 4, suffix: "" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1400&q=80",
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1400&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80",
    ],
  },
  {
    slug: "di-air-duct-multichannel",
    num: "08",
    title: "D&I Air Duct (Multi-channel)",
    subtitle: "Air Duct Cleaning Business",
    tags: ["Google Ads"],
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    short:
      "Doubled down on multi-channel performance after early Meta wins.",
    challenge:
      "Having proven Meta worked, D&I wanted to capture every category of demand: people searching, people scrolling, and people already on their email list. The execution had to stay coordinated, not siloed.",
    solution:
      "Single attribution model, shared creative library across channels, and weekly cross-channel reviews. Email and SMS retention layered on top of the paid acquisition.",
    result:
      "Total monthly bookings up 4x year-over-year with margins improving as repeat revenue grew.",
    stats: [
      { label: "Monthly bookings", value: 4, suffix: "x" },
      { label: "Repeat revenue", value: 47, suffix: "%" },
      { label: "Channels running", value: 5, suffix: "" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1400&q=80",
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1400&q=80",
    ],
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}
