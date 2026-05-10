import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlatformsHero from "@/components/PlatformsHero";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";
import TiltCard from "@/components/TiltCard";
import { PLATFORMS } from "@/lib/platforms-data";

export const metadata = {
  title: "Platforms — AdvertisingLab",
  description:
    "Shopify, BigCommerce, Magento, WooCommerce, OpenCart, Volusion, Shift4Shop, Zen Cart, and Amazon — full-stack expertise across every major platform.",
};

export default function PlatformsPage() {
  return (
    <main className="relative">
      <Header />
      <PlatformsHero />

      <section className="bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-28">
        <Spotlight color="rgba(225,29,42,0.12)" size={600}>
          <div className="container-x">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {PLATFORMS.map((p, i) => (
                <Reveal key={p.slug} variant="up" delay={i * 80} duration={650}>
                  <TiltCard max={5} scale={1.02} className="h-full">
                    <Link
                      href={`/platforms/${p.slug}`}
                      className="group block rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-7 hover:border-brand-red hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-12 -top-12 w-32 h-32 rounded-full bg-brand-red/10 scale-0 group-hover:scale-100 transition-transform duration-500"
                      />
                      <h3 className="relative text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-brand-red transition">
                        {p.name}
                      </h3>
                      <p className="relative mt-2 text-xs sm:text-sm font-semibold text-navy-900/80">
                        {p.tagline}
                      </p>
                      <p className="relative mt-3 sm:mt-4 text-navy-900/65 leading-relaxed text-sm">
                        {p.short}
                      </p>
                      <span className="relative mt-5 sm:mt-6 inline-flex items-center gap-2 text-navy-900 font-semibold text-sm">
                        Learn more
                        <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Spotlight>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
