import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import LetterReveal from "@/components/LetterReveal";
import TiltCard from "@/components/TiltCard";
import Magnetic from "@/components/Magnetic";
import CountUp from "@/components/CountUp";
import { REVIEWS, getAverageRating } from "@/lib/reviews-data";

export const metadata = {
  title: "Reviews — AdvertisingsLabs",
  description:
    "What our clients say — real reviews from the brands we have helped grow.",
};

function Stars({ count = 5, size = "text-sm" }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} className={`fa-solid fa-star text-brand-red ${size}`} />
      ))}
    </div>
  );
}

const TONES = [
  "bg-gradient-to-br from-brand-red to-[#8a0e18]",
  "bg-gradient-to-br from-navy-700 to-navy-900",
  "bg-gradient-to-br from-[#1f7da6] to-[#0d3a6a]",
  "bg-gradient-to-br from-[#5a0e18] to-navy-900",
];

export default function ReviewsPage() {
  const overall = getAverageRating();

  return (
    <main className="relative">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-20 sm:pb-24 lg:pt-44 lg:pb-32">
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -bottom-40 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow-reverse"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.45,
            filter: "blur(20px)",
          }}
        />

        <div className="container-x relative z-10 text-center">
          <Reveal variant="fade" duration={500}>
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="animate-spin-slow inline-block">
                <HexIcon size={28} />
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.35em] text-white/90">
                REVIEWS
              </span>
            </div>
          </Reveal>

          <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-4xl mx-auto">
            <LetterReveal as="span" text="Customer voices — hear what" stagger={22} />{" "}
            <span className="bg-gradient-to-r from-brand-red via-pink-400 to-brand-red bg-clip-text text-transparent animate-gradient">
              <LetterReveal as="span" text="they are saying." stagger={32} startDelay={700} />
            </span>
          </h1>

          <Reveal variant="up" delay={1300} duration={650}>
            <div className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-white/10 border border-white/15 rounded-full px-5 py-2 backdrop-blur-sm">
              <Stars size="text-base" />
              <span className="text-white font-semibold text-sm sm:text-base">
                <CountUp to={overall} duration={1500} decimals={1} /> average ·{" "}
                <CountUp to={REVIEWS.length} duration={1500} /> reviews
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-20 w-72 h-72 rounded-full bg-navy-900/[0.03] animate-float-slow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-0 w-96 h-96 rounded-full bg-navy-900/[0.03] animate-float-slow-reverse"
        />

        <div className="container-x relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={i} variant="up" delay={(i % 6) * 90} duration={650}>
                <TiltCard max={5} scale={1.02} className="h-full">
                  <article className="rounded-2xl bg-white border border-navy-900/10 p-6 sm:p-7 flex flex-col h-full hover:shadow-2xl hover:border-brand-red/40 transition-all duration-500 group relative overflow-hidden">
                    {/* corner accent */}
                    <span
                      aria-hidden="true"
                      className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-brand-red/0 group-hover:bg-brand-red/10 transition-all duration-500 blur-xl"
                    />

                    <div className="flex items-center justify-between">
                      <Stars />
                      <span className="text-2xl font-extrabold text-navy-900/15 group-hover:text-brand-red/40 transition-colors">
                        {r.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* big quote mark */}
                    <span
                      aria-hidden="true"
                      className="absolute top-3 right-5 text-6xl font-serif text-brand-red/10 leading-none select-none group-hover:text-brand-red/20 transition-colors"
                    >
                      &ldquo;
                    </span>

                    <p className="mt-4 text-navy-900/80 leading-relaxed text-sm flex-1 relative">
                      {r.body}
                    </p>

                    <div className="mt-6 pt-5 border-t border-navy-900/10 flex items-center gap-3">
                      <span
                        className={`shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full text-white font-bold text-sm ${
                          TONES[i % TONES.length]
                        } shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                      >
                        {r.initial}
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-navy-900 truncate">
                          {r.name}
                        </p>
                        <p className="text-xs text-navy-900/60 truncate">
                          {r.company}
                        </p>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* CTA card */}
          <Reveal variant="zoom" duration={750}>
            <div className="mt-14 sm:mt-16 max-w-2xl mx-auto rounded-2xl bg-white border border-navy-900/10 p-8 sm:p-10 text-center shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
                Worked with us? We&apos;d love your review.
              </h2>
              <p className="mt-2 text-navy-900/70 text-sm sm:text-base">
                Leave a review on Google or send us a few sentences and
                we&apos;ll add it here with your permission.
              </p>
              <Magnetic strength={0.3}>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-red transition group/btn"
                >
                  Send your review
                  <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
