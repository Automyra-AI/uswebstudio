export default function BookACall({ calendlyUrl = "https://calendly.com/d/cnwq-9wj-tqw/30min" }) {
  return (
    <section
      id="book-a-call"
      className="relative text-white py-20 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #6a1428 0%, #8a1a2c 45%, #5a1023 100%)",
      }}
    >
      {/* top diagonal stripe band */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-[1px] h-6 diagonal-stripes opacity-90 z-10"
      />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold">Book a Call!</h2>
          <p className="mt-5 text-white/90 leading-relaxed text-base lg:text-lg">
            Book a 30-minute strategy call with our team — no fluff, no
            pressure, just clarity and next steps.
          </p>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl bg-white">
          <iframe
            src={calendlyUrl}
            title="Schedule a meeting"
            className="w-full"
            style={{ height: "720px", border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
