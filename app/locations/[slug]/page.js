import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
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
    title: `Ecommerce Agency in ${loc.name} — AdvertisingLab`,
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

      <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-20 sm:pb-24 lg:pt-44 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
            opacity: 0.7,
            filter: "blur(2px)",
          }}
        />

        <div className="container-x relative z-10 max-w-4xl">
          <Reveal variant="fade" duration={500}>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-5 sm:mb-6 group"
            >
              <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1" />
              All Locations
            </Link>
          </Reveal>

          <Reveal variant="up" delay={50} duration={600}>
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="animate-spin-slow inline-block">
                <HexIcon size={28} />
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white/90">
                {loc.region.toUpperCase()}
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={150} duration={800}>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
              Ecommerce Agency in{" "}
              <span className="bg-gradient-to-r from-brand-red via-pink-400 to-brand-red bg-clip-text text-transparent animate-gradient">
                {loc.name}
              </span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={280} duration={700}>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-white/85 max-w-2xl">
              {loc.tagline}
            </p>
          </Reveal>

          <Reveal variant="up" delay={400} duration={700}>
            <Magnetic strength={0.35}>
              <Link
                href="/contact"
                className="mt-8 sm:mt-10 inline-flex items-center gap-2 bg-white text-navy-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold relative overflow-hidden group/btn"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-brand-red translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
                />
                <span className="relative z-10 group-hover/btn:text-white transition-colors">
                  Get a Free Consultation
                </span>
                <i className="fa-solid fa-arrow-right relative z-10 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-8 sm:gap-12">
          <Reveal variant="left" duration={700}>
            <p className="text-brand-red font-semibold">Why local matters</p>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.1]">
              Working with brands in{" "}
              <span className="bg-gradient-to-r from-navy-900 via-brand-red to-navy-900 bg-clip-text text-transparent animate-gradient">
                {loc.name}
              </span>
              .
            </h2>
          </Reveal>
          <div className="space-y-4 sm:space-y-5 text-navy-900/75 leading-relaxed text-sm sm:text-base lg:text-lg">
            {loc.long.map((p, i) => (
              <Reveal key={i} variant="right" delay={i * 120} duration={700}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-navy-900 py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal variant="up" duration={600}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10">
              Other locations we serve
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {others.map((o, i) => (
              <Reveal key={o.slug} variant="up" delay={i * 100} duration={600}>
                <Link
                  href={`/locations/${o.slug}`}
                  className="group block rounded-2xl border border-navy-900/10 bg-white p-5 sm:p-6 hover:border-brand-red hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-red">
                    {o.region}
                  </span>
                  <h3 className="mt-2 text-base sm:text-lg font-bold text-navy-900 group-hover:text-brand-red transition">
                    {o.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-navy-900/65 line-clamp-3">
                    {o.tagline}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
