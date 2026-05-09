import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Reviews — US Web Studio",
  description:
    "What our clients say — real reviews from the brands we have helped grow.",
};

// Placeholder reviews — replace with real client testimonials after collecting them.
// Required for FTC compliance: only use endorsements from actual customers,
// with their permission, and accurately attributed.
const REVIEWS = [
  {
    rating: 5,
    name: "Your Client Name",
    company: "Their company / website",
    body:
      "Replace this with a real, attributed testimonial from one of your clients. Quote it accurately and link to their real business.",
  },
  {
    rating: 5,
    name: "Your Client Name",
    company: "Their company / website",
    body:
      "Replace this with a real, attributed testimonial from one of your clients. Quote it accurately and link to their real business.",
  },
  {
    rating: 5,
    name: "Your Client Name",
    company: "Their company / website",
    body:
      "Replace this with a real, attributed testimonial from one of your clients. Quote it accurately and link to their real business.",
  },
  {
    rating: 5,
    name: "Your Client Name",
    company: "Their company / website",
    body:
      "Replace this with a real, attributed testimonial from one of your clients. Quote it accurately and link to their real business.",
  },
  {
    rating: 5,
    name: "Your Client Name",
    company: "Their company / website",
    body:
      "Replace this with a real, attributed testimonial from one of your clients. Quote it accurately and link to their real business.",
  },
  {
    rating: 5,
    name: "Your Client Name",
    company: "Their company / website",
    body:
      "Replace this with a real, attributed testimonial from one of your clients. Quote it accurately and link to their real business.",
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} className="fa-solid fa-star text-brand-red" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const overall = (
    REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length
  ).toFixed(1);

  return (
    <main className="relative">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.5,
            filter: "blur(20px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -bottom-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.5,
            filter: "blur(20px)",
          }}
        />

        <div className="container-x relative z-10 text-center">
          <div className="flex items-center gap-3 justify-center">
            <HexIcon size={28} />
            <span className="text-sm font-bold tracking-[0.35em] text-white/90">
              REVIEWS
            </span>
          </div>
          <h1 className="mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-4xl mx-auto">
            Customer voices — hear what they are saying.
          </h1>
          <div className="mt-8 inline-flex items-center gap-3 bg-white/10 border border-white/15 rounded-full px-5 py-2">
            <Stars />
            <span className="text-white font-semibold">
              {overall} average · {REVIEWS.length} reviews
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] text-navy-900 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <article
                key={i}
                className="rounded-2xl bg-white border border-navy-900/10 p-7 flex flex-col"
              >
                <Stars count={r.rating} />
                <p className="mt-4 text-2xl font-bold text-navy-900">
                  {r.rating.toFixed(1)}
                </p>
                <p className="mt-3 text-navy-900/75 leading-relaxed text-sm flex-1">
                  {r.body}
                </p>
                <div className="mt-6 pt-6 border-t border-navy-900/10">
                  <p className="font-semibold text-navy-900">{r.name}</p>
                  <p className="text-sm text-navy-900/60">{r.company}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 max-w-2xl mx-auto rounded-2xl bg-white border border-navy-900/10 p-8 text-center">
            <h2 className="text-xl font-bold text-navy-900">
              Worked with us? We would love your review.
            </h2>
            <p className="mt-2 text-navy-900/70">
              Leave a review on Google, Trustpilot, or send us a few sentences
              and we will add it here with your permission.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-red transition"
            >
              Send your review <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
