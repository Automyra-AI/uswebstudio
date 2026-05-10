import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import LetterReveal from "@/components/LetterReveal";
import TiltCard from "@/components/TiltCard";
import CountUp from "@/components/CountUp";
import Magnetic from "@/components/Magnetic";

export const metadata = {
  title: "Reviews — AdvertisingLab",
  description:
    "What our clients say — real reviews from the brands we have helped grow.",
};

// Placeholder reviews — replace with real client testimonials after collecting them.
// Required for FTC compliance: only use endorsements from actual customers,
// with their permission, and accurately attributed.
const REVIEWS = [
  { rating: 5, name: "Your Client Name", company: "Their company / website", body: "Replace this with a real, attributed testimonial from one of your clients. Quote it accurately and link to their real business." },
  { rating: 5, name: "Your Client Name", company: "Their company / website", body: "Replace this with a real, attributed testimonial from one of your clients. Quote it accurately and link to their real business." },
  { rating: 5, name: "Your Client Name", company: "Their company / website", body: "Replace this with a real, attributed testimonial from one of your clients. Quote it accurately and link to their real business." },
  { rating: 5, name: "Your Client Name", company: "Their company / website", body: "Replace this with a real, attributed testimonial from one of your clients. Quote it accurately and link to their real business." },
  { rating: 5, name: "Your Client Name", company: "Their company / website", body: "Replace this with a real, attributed testimonial from one of your clients. Quote it accurately and link to their real business." },
  { rating: 5, name: "Your Client Name", company: "Their company / website", body: "Replace this with a real, attributed testimonial from one of your clients. Quote it accurately and link to their real business." },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <i
          key={i}
          className="fa-solid fa-star text-brand-red"
          style={{ animation: `glow 2.4s ease-out ${i * 200}ms infinite` }}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const overall =
    REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length;

  return (
    <main className="relative">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-20 sm:pb-24 lg:pt-44 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.5,
            filter: "blur(20px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -bottom-40 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow-reverse"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.5,
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
                REVIEWS
              </span>
            </div>
          </Reveal>

          <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-4xl mx-auto">
            <LetterReveal as="span" text="Customer voices —" stagger={20} startDelay={100} />
            <span className="block mt-1 bg-gradient-to-r from-brand-red via-pink-400 to-brand-red bg-clip-text text-transparent animate-gradient">
              <LetterReveal as="span" text="hear what they are saying." stagger={26} startDelay={650} />
            </span>
          </h1>

          <Reveal variant="zoom" delay={1500} duration={700}>
            <div className="mt-6 sm:mt-8 inline-flex items-center gap-3 bg-white/10 border border-white/15 rounded-full px-4 sm:px-5 py-2 backdrop-blur-sm">
              <Stars />
              <span className="text-white font-semibold text-sm sm:text-base">
                <CountUp to={overall} duration={1500} decimals={1} /> average ·{" "}
                <CountUp to={REVIEWS.length} duration={1500} /> reviews
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-28">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={i} variant="up" delay={i * 80} duration={650}>
                <TiltCard max={5} scale={1.02} className="h-full">
                  <article className="rounded-2xl bg-white border border-navy-900/10 p-6 sm:p-7 flex flex-col hover:border-brand-red hover:shadow-2xl transition-all duration-500 group h-full">
                    <Stars count={r.rating} />
                    <p className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-brand-red transition">
                      {r.rating.toFixed(1)}
                    </p>
                    <p className="mt-2 sm:mt-3 text-navy-900/75 leading-relaxed text-xs sm:text-sm flex-1">
                      {r.body}
                    </p>
                    <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-navy-900/10">
                      <p className="font-semibold text-navy-900">{r.name}</p>
                      <p className="text-xs sm:text-sm text-navy-900/60">
                        {r.company}
                      </p>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={200} duration={700}>
            <div className="mt-12 sm:mt-14 max-w-2xl mx-auto rounded-2xl bg-white border border-navy-900/10 p-6 sm:p-8 text-center hover:border-brand-red transition">
              <h2 className="text-lg sm:text-xl font-bold text-navy-900">
                Worked with us? We would love your review.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-navy-900/70">
                Leave a review on Google, Trustpilot, or send us a few sentences
                and we will add it here with your permission.
              </p>
              <Magnetic strength={0.3}>
                <a
                  href="/contact"
                  className="mt-5 sm:mt-6 inline-flex items-center gap-2 bg-navy-900 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-brand-red transition group/btn"
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
