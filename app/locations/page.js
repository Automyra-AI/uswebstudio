import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";
import { LOCATIONS } from "@/lib/locations-data";

export const metadata = {
  title: "Locations — US Web Studio",
  description:
    "Ecommerce expertise across the US and UAE — local insight, global standards.",
};

export default function LocationsPage() {
  return (
    <main className="relative">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 pt-36 pb-32 lg:pt-44 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.45,
            filter: "blur(20px)",
          }}
        />

        <div className="container-x relative z-10 text-center">
          <div className="flex items-center gap-3 justify-center">
            <HexIcon size={28} />
            <span className="text-sm font-bold tracking-[0.35em] text-white/90">
              LOCATIONS
            </span>
          </div>
          <h1 className="mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-5xl mx-auto">
            Local insight, global standards — wherever your brand calls home.
          </h1>
        </div>
      </section>

      <section className="bg-[#f5f7fb] text-navy-900 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((l) => (
              <Link
                key={l.slug}
                href={`/locations/${l.slug}`}
                className="group block rounded-2xl border border-navy-900/10 bg-white p-7 hover:border-brand-red hover:shadow-lg transition"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-brand-red">
                  {l.region}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-navy-900 group-hover:text-brand-red transition">
                  {l.name}
                </h3>
                <p className="mt-3 text-navy-900/65 leading-relaxed text-sm">
                  {l.tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-navy-900 font-semibold text-sm">
                  Explore <i className="fa-solid fa-arrow-right text-xs" />
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
