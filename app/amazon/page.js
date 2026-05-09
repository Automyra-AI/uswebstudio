import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";
import { AMAZON_SERVICES } from "@/lib/amazon-data";

export const metadata = {
  title: "Amazon Services — US Web Studio",
  description:
    "Listings, ads, account health, and storefronts — full-service Amazon support for ambitious brands.",
};

export default function AmazonHubPage() {
  return (
    <main className="relative">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 pt-36 pb-32 lg:pt-44 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 w-[700px] h-[700px] rounded-full"
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
              AMAZON
            </span>
          </div>
          <h1 className="mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-5xl mx-auto">
            Sell more on Amazon — listings, ads, account health, end to end.
          </h1>
          <p className="mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Amazon is its own discipline. Our specialists handle every corner
            of the channel so your brand performs at its best.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f7fb] text-navy-900 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AMAZON_SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/amazon/${s.slug}`}
                className="group block rounded-2xl border border-navy-900/10 bg-white p-7 hover:border-brand-red hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-navy-900 group-hover:text-brand-red transition">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-navy-900/80">
                  {s.tagline}
                </p>
                <p className="mt-4 text-navy-900/65 leading-relaxed text-sm">
                  {s.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-navy-900 font-semibold text-sm">
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
