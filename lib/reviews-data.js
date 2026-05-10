// ⚠️  PLACEHOLDER REVIEWS — REPLACE BEFORE LAUNCH ⚠️
//
// These are visual scaffolding only. Under FTC § 5 you can only display
// reviews from people who actually used your service. Replace each entry
// below with reviews you've collected (with permission) from real clients.
//
// Tip: pull from your Google Business Profile, Trustpilot, or email
// testimonials. Keep the original quote intact and attribute accurately.

export const REVIEWS = [
  {
    initial: "S",
    name: "Sarah K.",
    company: "Founder · Boutique fashion brand",
    rating: 5,
    body:
      "The team rebuilt our store from the ground up and the difference was instant. Our conversion rate jumped, our brand looked premium for the first time, and the entire process was painless. Communication was constant and they always delivered on time.",
  },
  {
    initial: "M",
    name: "Marcus D.",
    company: "CEO · Multi-state HVAC contractor",
    rating: 5,
    body:
      "We came in with a marketing problem we'd been stuck on for two years. They diagnosed it in the first call, ran a 90-day plan, and our booked jobs doubled. Clear reporting every week, no jargon, no surprises.",
  },
  {
    initial: "P",
    name: "Priya R.",
    company: "Director of Ecommerce · Home goods retailer",
    rating: 5,
    body:
      "Our migration from one platform to another could have been a disaster. They mapped every URL, preserved our SEO, and launched with zero downtime. Six months later our organic traffic is 40% higher than before the move.",
  },
  {
    initial: "J",
    name: "James W.",
    company: "Co-founder · DTC supplement brand",
    rating: 5,
    body:
      "Paid ads finally feel like a growth lever instead of a money pit. They restructured our campaigns, built creative we actually liked, and dropped our CAC by half. We've stuck with them for two years and counting.",
  },
  {
    initial: "L",
    name: "Linda M.",
    company: "Owner · Independent jewellery store",
    rating: 5,
    body:
      "I'm not technical and I was nervous about hiring an agency. They explained everything in plain English, never made me feel stupid, and built a site I'm genuinely proud to send people to. Will keep using them.",
  },
  {
    initial: "R",
    name: "Robert T.",
    company: "Marketing Director · B2B equipment supplier",
    rating: 5,
    body:
      "We needed a partner who could handle both our ecommerce stack and our B2B quote workflow. Most agencies do one or the other. These folks did both — clean handoff, well-documented, and they trained our team properly.",
  },
  {
    initial: "A",
    name: "Aisha N.",
    company: "Head of Growth · Subscription box company",
    rating: 5,
    body:
      "Their work on our retention emails alone paid for the entire engagement in three months. The team understood our subscriber lifecycle better than we did and built flows that actually moved metrics. Highly recommend.",
  },
  {
    initial: "T",
    name: "Tom B.",
    company: "Director · Outdoor lifestyle brand",
    rating: 5,
    body:
      "Honest, fast, and they hit deadlines. Three things you don't always get with creative agencies. The site they built is fast, the ads they run convert, and the reporting is genuinely useful.",
  },
  {
    initial: "E",
    name: "Elena G.",
    company: "Founder · Beauty ecommerce startup",
    rating: 5,
    body:
      "From brand identity to launch in eight weeks. They handled everything — logo, packaging guidelines, Shopify build, paid social, the works. Launched on time, hit our pre-launch waitlist target, and now we're scaling.",
  },
  {
    initial: "D",
    name: "David S.",
    company: "Operations Manager · Specialty food retailer",
    rating: 5,
    body:
      "I've worked with three agencies over the years and this is the only one I've kept past the first year. They treat our business like their own, flag opportunities we miss, and stay calm when we don't.",
  },
  {
    initial: "M",
    name: "Meera P.",
    company: "Owner · Pet accessories brand",
    rating: 5,
    body:
      "Our Amazon channel was a mess. They cleaned up listings, restructured ads, and got us into the Brand Registry properly. Sales on Amazon are up 3x and we finally know what's actually working.",
  },
  {
    initial: "C",
    name: "Chris L.",
    company: "Co-founder · Sportswear DTC",
    rating: 5,
    body:
      "What separates them from other agencies is they actually push back when they disagree. We've had a few brutal-but-honest strategy calls that saved us from bad decisions. That's the difference between a vendor and a partner.",
  },
];

export function getAverageRating() {
  if (!REVIEWS.length) return 0;
  return REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length;
}
