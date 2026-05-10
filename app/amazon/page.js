import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import LetterReveal from "@/components/LetterReveal";
import Spotlight from "@/components/Spotlight";
import TiltCard from "@/components/TiltCard";
import { AMAZON_SERVICES } from "@/lib/amazon-data";

export const metadata = {
  title: "Amazon Services — AdvertisingLab",
  description:
    "Listings, ads, account health, and storefronts — full-service Amazon support for ambitious brands.",
};

export default function AmazonHubPage() {
  return (
    <main className="relative">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-24 sm:pb-32 lg:pt-44 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.55,
            filter: "blur(20px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-10 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full animate-float-slow-reverse"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.4,
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
                AMAZON
              </span>
            </div>
          </Reveal>

          <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-5xl mx-auto">
            <LetterReveal as="span" text="Sell more on Amazon —" stagger={20} startDelay={100} />
            <span className="block mt-1">
              <LetterReveal as="span" text="listings, ads, account" stagger={22} startDelay={650} />
            </span>
            <span className="block bg-gradient-to-r from-brand-red via-pink-400 to-brand-red bg-clip-text text-transparent animate-gradient">
              <LetterReveal as="span" text="health, end to end." stagger={32} startDelay={1100} />
            </span>
          </h1>

          <Reveal variant="up" delay={1700} duration={650}>
            <p className="mt-5 sm:mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
              Amazon is its own discipline. Our specialists handle every corner
              of the channel so your brand performs at its best.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-28">
        <Spotlight color="rgba(225,29,42,0.12)" size={600}>
          <div className="container-x">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {AMAZON_SERVICES.map((s, i) => (
                <Reveal key={s.slug} variant="up" delay={i * 80} duration={650}>
                  <TiltCard max={5} scale={1.02} className="h-full">
                    <Link
                      href={`/amazon/${s.slug}`}
                      className="group block rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-7 hover:border-brand-red hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-12 -top-12 w-32 h-32 rounded-full bg-brand-red/10 scale-0 group-hover:scale-100 transition-transform duration-500"
                      />
                      <h3 className="relative text-lg sm:text-xl font-bold text-navy-900 group-hover:text-brand-red transition">
                        {s.name}
                      </h3>
                      <p className="relative mt-2 text-xs sm:text-sm font-semibold text-navy-900/80">
                        {s.tagline}
                      </p>
                      <p className="relative mt-3 sm:mt-4 text-navy-900/65 leading-relaxed text-sm">
                        {s.short}
                      </p>
                      <span className="relative mt-5 sm:mt-6 inline-flex items-center gap-2 text-navy-900 font-semibold text-xs sm:text-sm">
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
