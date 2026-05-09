import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlatformsHero from "@/components/PlatformsHero";
import ContactSection from "@/components/ContactSection";
import { PLATFORMS } from "@/lib/platforms-data";

export const metadata = {
  title: "Platforms — US Web Studio",
  description:
    "Shopify, BigCommerce, Magento, WooCommerce, OpenCart, Volusion, Shift4Shop, Zen Cart, and Amazon — full-stack expertise across every major platform.",
};

export default function PlatformsPage() {
  return (
    <main className="relative">
      <Header />
      <PlatformsHero />

      <section className="bg-[#f5f7fb] text-navy-900 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLATFORMS.map((p) => (
              <Link
                key={p.slug}
                href={`/platforms/${p.slug}`}
                className="group block rounded-2xl border border-navy-900/10 bg-white p-7 hover:border-brand-red hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-navy-900 group-hover:text-brand-red transition">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-navy-900/80">
                  {p.tagline}
                </p>
                <p className="mt-4 text-navy-900/65 leading-relaxed text-sm">
                  {p.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-navy-900 font-semibold">
                  Learn more <i className="fa-solid fa-arrow-right text-xs" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
