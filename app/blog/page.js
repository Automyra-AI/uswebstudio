import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import LetterReveal from "@/components/LetterReveal";
import TiltCard from "@/components/TiltCard";
import { POSTS, formatDate } from "@/lib/blog-data";

export const metadata = {
  title: "Blog — AdvertisingLab",
  description:
    "Insights on ecommerce, AI search, paid media, and growth — from the team at AdvertisingLab.",
};

export default function BlogIndexPage() {
  const [featured, ...rest] = POSTS;

  return (
    <main className="relative">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-20 sm:pb-24 lg:pt-44 lg:pb-32">
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

        <div className="container-x relative z-10 text-center">
          <Reveal variant="fade" duration={600}>
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="animate-spin-slow inline-block">
                <HexIcon size={28} />
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.35em] text-white/90">
                BLOG
              </span>
            </div>
          </Reveal>

          <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-4xl mx-auto">
            <LetterReveal as="span" text="Insights on ecommerce," stagger={20} startDelay={100} />
            <span className="block mt-1">
              <LetterReveal as="span" text="AI search, and" stagger={22} startDelay={650} />{" "}
              <span className="bg-gradient-to-r from-brand-red via-pink-400 to-brand-red bg-clip-text text-transparent animate-gradient">
                <LetterReveal as="span" text="growth." stagger={45} startDelay={1000} />
              </span>
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-28">
        <div className="container-x">
          {/* Featured post */}
          <Reveal variant="up" duration={700}>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-3xl overflow-hidden bg-white border border-navy-900/10 hover:border-brand-red hover:shadow-2xl transition-all duration-500 mb-10 sm:mb-12"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden relative">
                  <img
                    src={featured.cover}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms]"
                  />
                </div>
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs font-bold tracking-[0.2em] text-brand-red">
                    FEATURED
                  </span>
                  <h2 className="mt-3 text-xl sm:text-2xl lg:text-4xl font-bold text-navy-900 group-hover:text-brand-red transition leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-navy-900/65 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-navy-900/50">
                    {featured.author} · {formatDate(featured.date)}
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Rest */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {rest.map((p, i) => (
              <Reveal key={p.slug} variant="up" delay={i * 100} duration={650}>
                <TiltCard max={5} scale={1.02} className="h-full">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-navy-900/10 hover:border-brand-red hover:shadow-xl transition-all duration-500 h-full"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={p.cover}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms]"
                      />
                    </div>
                    <div className="p-5 sm:p-6 flex-1 flex flex-col">
                      <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-brand-red transition leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-navy-900/65 leading-relaxed line-clamp-3">
                        {p.excerpt}
                      </p>
                      <p className="mt-auto pt-4 text-xs text-navy-900/50">
                        {p.author} · {formatDate(p.date)}
                      </p>
                    </div>
                  </Link>
                </TiltCard>
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
