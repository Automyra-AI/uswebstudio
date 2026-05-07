export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-36 pb-32 lg:pt-44 lg:pb-44">
      {/* left red blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 w-[640px] h-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
          opacity: 0.85,
          filter: "blur(2px)",
        }}
      />

      {/* right red blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
          opacity: 0.7,
          filter: "blur(2px)",
        }}
      />

      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Contact Us
          </h1>
          <p className="mt-8 max-w-xl text-white/85 leading-relaxed text-base lg:text-lg">
            Whether you are looking for a one-off project or long-term
            growth support, we are here to build, market, and grow with
            you. From eye-catching websites to marketing that moves the
            needle — drop us a message and let&apos;s launch your next
            digital chapter together.
          </p>
        </div>

        {/* RIGHT - two cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          <ContactCard
            icon="phone"
            title=""
            body="Let’s kick off your next digital project with some serious spark. Whether it is a website, ad campaign, or strategy session — we are ready to dive in."
            primary={{ label: "Book A Call", href: "#book-a-call" }}
            secondary={{ label: "WhatsApp Now !", href: "https://wa.me/15555550123" }}
          />
          <ContactCard
            icon="comment-dots"
            title="Write to us"
            body="Got an idea brewing? We are all ears and ready to build something great together."
            primary={{ label: "Book A Call", href: "#book-a-call" }}
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, body, primary, secondary }) {
  return (
    <div className="rounded-3xl p-7 lg:p-8 bg-white/[0.06] border border-white/15 backdrop-blur-sm flex flex-col">
      <div className="text-white">
        <i className={`fa-solid fa-${icon} text-4xl`} />
      </div>

      {title && (
        <h3 className="mt-12 text-2xl font-semibold">{title}</h3>
      )}

      <p className={`text-white/85 leading-relaxed text-sm lg:text-base ${title ? "mt-3" : "mt-12"}`}>
        {body}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={primary.href}
          className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-redDark text-white px-5 py-2.5 rounded-full font-semibold transition"
        >
          {primary.label}
        </a>
        {secondary && (
          <a
            href={secondary.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-redDark text-white px-5 py-2.5 rounded-full font-semibold transition"
          >
            {secondary.label}
          </a>
        )}
      </div>
    </div>
  );
}
