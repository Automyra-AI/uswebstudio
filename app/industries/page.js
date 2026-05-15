import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import LetterReveal from "@/components/LetterReveal";
import Spotlight from "@/components/Spotlight";
import TiltCard from "@/components/TiltCard";
import Magnetic from "@/components/Magnetic";

export const metadata = {
  title: "Industries — AdvertisingsLabs",
  description:
    "Industry-tailored ecommerce solutions for fashion, home goods, health, food, automotive, B2B, and more.",
};

const INDUSTRIES = [
  { name: "Fashion & Apparel", icon: "shirt", body: "Lookbook-driven storefronts, lightning-fast PDPs, and merchandising tools tuned for seasonal drops." },
  { name: "Health & Beauty", icon: "heart-pulse", body: "Clean compliance-friendly storefronts with subscription, sampling, and personalisation logic baked in." },
  { name: "Home & Furniture", icon: "couch", body: "Configurable products, room visualisers, and shipping calculators for high-AOV catalogs." },
  { name: "Food & Beverage", icon: "utensils", body: "Subscription boxes, regional shipping rules, and recipe content systems that drive repeat orders." },
  { name: "Automotive & Parts", icon: "car", body: "Year-make-model fitment search, complex catalogs, and B2B / wholesale pricing tiers." },
  { name: "Sports & Outdoors", icon: "person-running", body: "Gear-driven catalogs, technical product specs, and content hubs that keep customers coming back." },
  { name: "Electronics", icon: "microchip", body: "Spec-rich product pages, comparison tools, and warranty / RMA flows tuned for customer trust." },
  { name: "B2B & Wholesale", icon: "warehouse", body: "Net-terms checkout, customer-specific pricing, quote-to-order flows, and ERP integrations." },
  { name: "Pet Supplies", icon: "paw", body: "Auto-ship subscription, breed/size personalisation, and content that builds long-term loyalty." },
];

export default function IndustriesPage() {
  return (
    <main className="relative">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-24 sm:pb-32 lg:pt-44 lg:pb-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow"
          style={{ background: "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)", opacity: 0.55, filter: "blur(20px)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -bottom-40 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow-reverse"
          style={{ background: "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)", opacity: 0.55, filter: "blur(20px)" }}
        />

        <div className="container-x relative z-10 text-center">
          <Reveal variant="fade" duration={600}>
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="animate-spin-slow inline-block">
                <HexIcon size={28} />
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.35em] text-white/90">
                INDUSTRIES
              </span>
            </div>
          </Reveal>

          <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-5xl mx-auto">
            <LetterReveal as="span" text="Industry-tailored solutions for" stagger={20} startDelay={100} />
            <span className="block bg-gradient-to-r from-brand-red via-pink-400 to-brand-red bg-clip-text text-transparent animate-gradient mt-1">
              <LetterReveal as="span" text="ecommerce excellence." stagger={32} startDelay={750} />
            </span>
          </h1>

          <Reveal variant="up" delay={1500} duration={650}>
            <p className="mt-5 sm:mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
              Every industry has its own buyer behaviour, catalog structure, and
              growth levers. We bring focused expertise to yours so the work
              lands faster and performs harder.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-28">
        <Spotlight color="rgba(225,29,42,0.12)" size={600}>
          <div className="container-x">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {INDUSTRIES.map((ind, i) => (
                <Reveal key={ind.name} variant="up" delay={i * 80} duration={650}>
                  <TiltCard max={5} scale={1.02} className="h-full">
                    <div className="rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-7 hover:border-brand-red hover:shadow-2xl transition-all duration-500 group h-full relative overflow-hidden">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-12 -top-12 w-32 h-32 rounded-full bg-brand-red/10 scale-0 group-hover:scale-100 transition-transform duration-500"
                      />
                      <span className="relative inline-flex w-12 h-12 rounded-xl bg-brand-red text-white items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <i className={`fa-solid fa-${ind.icon} text-lg`} />
                      </span>
                      <h3 className="relative mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-navy-900 group-hover:text-brand-red transition">
                        {ind.name}
                      </h3>
                      <p className="relative mt-2 text-navy-900/65 leading-relaxed text-xs sm:text-sm">
                        {ind.body}
                      </p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            <Reveal variant="up" delay={200} duration={700}>
              <div className="mt-12 sm:mt-14 text-center">
                <p className="text-navy-900/70 mb-4 text-sm sm:text-base">
                  Don&apos;t see your industry? We have probably worked in it —
                  tell us what you do.
                </p>
                <Magnetic strength={0.35}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 sm:px-7 py-3 rounded-full font-semibold hover:bg-brand-red transition group/btn"
                  >
                    Talk to us
                    <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </Spotlight>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
