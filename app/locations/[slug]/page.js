import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";
import {
  LOCATIONS,
  getLocationBySlug,
  getAllLocationSlugs,
} from "@/lib/locations-data";

export function generateStaticParams() {
  return getAllLocationSlugs();
}

export function generateMetadata({ params }) {
  const loc = getLocationBySlug(params.slug);
  if (!loc) return { title: "Location not found" };
  return {
    title: `Ecommerce Agency in ${loc.name} — US Web Studio`,
    description: loc.tagline,
  };
}

export default function LocationPage({ params }) {
  const loc = getLocationBySlug(params.slug);
  if (!loc) notFound();

  const others = LOCATIONS.filter((l) => l.slug !== loc.slug).slice(0, 4);

  return (
    <main className="relative">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
            opacity: 0.7,
            filter: "blur(2px)",
          }}
        />

        <div className="container-x relative z-10 max-w-4xl">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6"
          >
            <i className="fa-solid fa-arrow-left" /> All Locations
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <HexIcon size={28} />
            <span className="text-sm font-bold tracking-[0.25em] text-white/90">
              {loc.region.toUpperCase()}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
            Ecommerce Agency in {loc.name}
          </h1>
          <p className="mt-6 text-xl lg:text-2xl text-white/85 max-w-2xl">
            {loc.tagline}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-full font-semibold hover:bg-brand-red hover:text-white transition"
          >
            Get a Free Consultation <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </section>

      <section className="bg-[#f5f7fb] text-navy-900 py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-brand-red font-semibold">Why local matters</p>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold leading-[1.1]">
              Working with brands in {loc.name}.
            </h2>
          </div>
          <div className="space-y-5 text-navy-900/75 leading-relaxed text-base lg:text-lg">
            {loc.long.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-navy-900 py-20 lg:py-24">
        <div className="container-x">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10">
            Other locations we serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/locations/${o.slug}`}
                className="group block rounded-2xl border border-navy-900/10 bg-white p-6 hover:border-brand-red transition"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-brand-red">
                  {o.region}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy-900 group-hover:text-brand-red transition">
                  {o.name}
                </h3>
                <p className="mt-2 text-sm text-navy-900/65 line-clamp-3">
                  {o.tagline}
                </p>
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
