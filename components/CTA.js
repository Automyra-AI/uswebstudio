export default function CTA() {
  return (
    <section id="contact" className="bg-navy-950 py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0e2150] via-navy-800 to-navy-900 border border-white/10 p-10 lg:p-16 text-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 w-80 h-80 rounded-full opacity-40 blur-2xl"
            style={{
              background:
                "radial-gradient(circle, #e11d2a 0%, transparent 70%)",
            }}
          />

          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Ready to Elevate Your Brand?
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base lg:text-lg">
            Let&apos;s build something extraordinary together. Tell us about your
            project and we&apos;ll get back within 24 hours.
          </p>
          <a
            href="mailto:hello@uswebstudio.com"
            className="mt-8 inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-redDark transition"
          >
            Get In Touch <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
