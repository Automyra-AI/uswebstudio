import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Industries — US Web Studio",
  description:
    "Industry-tailored ecommerce solutions for fashion, home goods, health, food, automotive, B2B, and more.",
};

const INDUSTRIES = [
  {
    name: "Fashion & Apparel",
    icon: "shirt",
    body:
      "Lookbook-driven storefronts, lightning-fast PDPs, and merchandising tools tuned for seasonal drops.",
  },
  {
    name: "Health & Beauty",
    icon: "heart-pulse",
    body:
      "Clean compliance-friendly storefronts with subscription, sampling, and personalisation logic baked in.",
  },
  {
    name: "Home & Furniture",
    icon: "couch",
    body:
      "Configurable products, room visualisers, and shipping calculators for high-AOV catalogs.",
  },
  {
    name: "Food & Beverage",
    icon: "utensils",
    body:
      "Subscription boxes, regional shipping rules, and recipe content systems that drive repeat orders.",
  },
  {
    name: "Automotive & Parts",
    icon: "car",
    body:
      "Year-make-model fitment search, complex catalogs, and B2B / wholesale pricing tiers.",
  },
  {
    name: "Sports & Outdoors",
    icon: "person-running",
    body:
      "Gear-driven catalogs, technical product specs, and content hubs that keep customers coming back.",
  },
  {
    name: "Electronics",
    icon: "microchip",
    body:
      "Spec-rich product pages, comparison tools, and warranty / RMA flows tuned for customer trust.",
  },
  {
    name: "B2B & Wholesale",
    icon: "warehouse",
    body:
      "Net-terms checkout, customer-specific pricing, quote-to-order flows, and ERP integrations.",
  },
  {
    name: "Pet Supplies",
    icon: "paw",
    body:
      "Auto-ship subscription, breed/size personalisation, and content that builds long-term loyalty.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="relative">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 pt-36 pb-32 lg:pt-44 lg:pb-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.55,
            filter: "blur(20px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -bottom-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.55,
            filter: "blur(20px)",
          }}
        />

        <div className="container-x relative z-10 text-center">
          <div className="flex items-center gap-3 justify-center">
            <HexIcon size={28} />
            <span className="text-sm font-bold tracking-[0.35em] text-white/90">
              INDUSTRIES
            </span>
          </div>
          <h1 className="mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-5xl mx-auto">
            Industry-tailored solutions for ecommerce excellence.
          </h1>
          <p className="mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Every industry has its own buyer behaviour, catalog structure, and
            growth levers. We bring focused expertise to yours so the work
            lands faster and performs harder.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-[#f5f7fb] text-navy-900 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="rounded-2xl border border-navy-900/10 bg-white p-7 hover:border-brand-red hover:shadow-lg transition"
              >
                <span className="inline-flex w-12 h-12 rounded-xl bg-brand-red text-white items-center justify-center">
                  <i className={`fa-solid fa-${ind.icon} text-lg`} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy-900">
                  {ind.name}
                </h3>
                <p className="mt-2 text-navy-900/65 leading-relaxed text-sm">
                  {ind.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-navy-900/70 mb-4">
              Don&apos;t see your industry? We have probably worked in it —
              tell us what you do.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy-900 text-white px-7 py-3 rounded-full font-semibold hover:bg-brand-red transition"
            >
              Talk to us <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
