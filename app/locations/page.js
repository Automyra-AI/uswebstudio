import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import LetterReveal from "@/components/LetterReveal";
import Spotlight from "@/components/Spotlight";
import TiltCard from "@/components/TiltCard";
import { LOCATIONS } from "@/lib/locations-data";

export const metadata = {
  title: "Locations — AdvertisingLab",
  description:
    "Ecommerce expertise across the US and UAE — local insight, global standards.",
};

export default function LocationsPage() {
  return (
    <main className="relative">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-24 sm:pb-32 lg:pt-44 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.45,
            filter: "blur(20px)",
          }}
        />

        <div className="container-x relative z-10 text-center">
          <Reveal variant="fade" duration={600}>
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="animate-spin-slow inline-block">
                <HexIcon size={28} />
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.35em] text-white/90">
                LOCATIONS
              </span>
            </div>
          </Reveal>

          <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-5xl mx-auto">
            <LetterReveal as="span" text="Local insight, global standards —" stagger={20} startDelay={100} />
            <span className="block mt-1 bg-gradient-to-r from-brand-red via-pink-400 to-brand-red bg-clip-text text-transparent animate-gradient">
              <LetterReveal as="span" text="wherever your brand calls home." stagger={26} startDelay={750} />
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-28">
        <Spotlight color="rgba(225,29,42,0.12)" size={600}>
          <div className="container-x">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {LOCATIONS.map((l, i) => (
                <Reveal key={l.slug} variant="up" delay={i * 80} duration={650}>
                  <TiltCard max={5} scale={1.02} className="h-full">
                    <Link
                      href={`/locations/${l.slug}`}
                      className="group block rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-7 hover:border-brand-red hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-12 -top-12 w-32 h-32 rounded-full bg-brand-red/10 scale-0 group-hover:scale-100 transition-transform duration-500"
                      />
                      <span className="relative text-xs font-bold tracking-[0.2em] text-brand-red">
                        {l.region}
                      </span>
                      <h3 className="relative mt-2 text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-brand-red transition">
                        {l.name}
                      </h3>
                      <p className="relative mt-3 text-navy-900/65 leading-relaxed text-xs sm:text-sm">
                        {l.tagline}
                      </p>
                      <span className="relative mt-4 sm:mt-5 inline-flex items-center gap-2 text-navy-900 font-semibold text-xs sm:text-sm">
                        Explore
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
