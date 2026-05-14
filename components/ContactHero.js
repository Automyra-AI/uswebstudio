import Reveal from "./Reveal";
import LetterReveal from "./LetterReveal";
import TiltCard from "./TiltCard";
import Magnetic from "./Magnetic";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-24 sm:pb-32 lg:pt-44 lg:pb-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 w-[500px] sm:w-[640px] h-[500px] sm:h-[640px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
          opacity: 0.85,
          filter: "blur(2px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow-reverse"
        style={{
          background:
            "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
          opacity: 0.7,
          filter: "blur(2px)",
        }}
      />

      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <LetterReveal as="span" text="Contact Us" stagger={40} />
          </h1>
          <Reveal variant="up" delay={500} duration={700}>
            <p className="mt-6 sm:mt-8 max-w-xl text-white/85 leading-relaxed text-sm sm:text-base lg:text-lg">
              Whether you are looking for a one-off project or long-term
              growth support, we are here to build, market, and grow with
              you. From eye-catching websites to marketing that moves the
              needle — drop us a message and let&apos;s launch your next
              digital chapter together.
            </p>
          </Reveal>

          <Reveal variant="up" delay={650} duration={700}>
            <div className="mt-8 sm:mt-10 flex flex-col gap-3">
              <a
                href="tel:+13205440303"
                className="group/c inline-flex items-center gap-3 text-white text-base sm:text-lg font-semibold w-fit"
              >
                <span className="inline-flex w-10 h-10 rounded-full border border-white/25 items-center justify-center group-hover/c:bg-white group-hover/c:text-navy-900 group-hover/c:border-white transition-colors">
                  <i className="fa-solid fa-phone text-xs" />
                </span>
                <span className="tabular-nums tracking-tight">
                  +1 (320) 544-0303
                </span>
              </a>
              <a
                href="mailto:hello@advertisingslabs.com"
                className="group/c inline-flex items-center gap-3 text-white text-base sm:text-lg font-semibold w-fit"
              >
                <span className="inline-flex w-10 h-10 rounded-full border border-white/25 items-center justify-center group-hover/c:bg-white group-hover/c:text-navy-900 group-hover/c:border-white transition-colors">
                  <i className="fa-solid fa-envelope text-xs" />
                </span>
                <span>hello@advertisingslabs.com</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* RIGHT - two cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          <Reveal variant="up" delay={300} duration={650}>
            <TiltCard max={6} scale={1.02} className="h-full">
              <ContactCard
                icon="phone"
                title=""
                body="Let’s kick off your next digital project with some serious spark. Whether it is a website, ad campaign, or strategy session — we are ready to dive in."
                primary={{ label: "Book A Call", href: "#book-a-call" }}
                secondary={{
                  label: "WhatsApp Now",
                  href: "https://wa.me/13205440303",
                }}
              />
            </TiltCard>
          </Reveal>

          <Reveal variant="up" delay={450} duration={650}>
            <TiltCard max={6} scale={1.02} className="h-full">
              <ContactCard
                icon="comment-dots"
                title="Write to us"
                body="Got an idea brewing? We are all ears and ready to build something great together."
                primary={{ label: "Book A Call", href: "#book-a-call" }}
              />
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, body, primary, secondary }) {
  return (
    <div className="rounded-3xl p-6 sm:p-7 lg:p-8 bg-white/[0.06] border border-white/15 backdrop-blur-sm flex flex-col h-full hover:border-brand-red/40 transition-all duration-500 group">
      <div className="text-white">
        <i className={`fa-solid fa-${icon} text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`} />
      </div>

      {title && (
        <h3 className="mt-8 sm:mt-12 text-xl sm:text-2xl font-semibold">
          {title}
        </h3>
      )}

      <p
        className={`text-white/85 leading-relaxed text-xs sm:text-sm lg:text-base ${
          title ? "mt-2 sm:mt-3" : "mt-8 sm:mt-12"
        }`}
      >
        {body}
      </p>

      <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
        <Magnetic strength={0.25}>
          <a
            href={primary.href}
            className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-redDark text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm"
          >
            {primary.label}
          </a>
        </Magnetic>
        {secondary && (
          <Magnetic strength={0.25}>
            <a
              href={secondary.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-redDark text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold transition text-xs sm:text-sm"
            >
              {secondary.label}
            </a>
          </Magnetic>
        )}
      </div>
    </div>
  );
}
