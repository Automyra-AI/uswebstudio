import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HexIcon from "@/components/HexIcon";
import ContactSection from "@/components/ContactSection";
import { POSTS, formatDate } from "@/lib/blog-data";

export const metadata = {
  title: "Blog — US Web Studio",
  description:
    "Insights on ecommerce, AI search, paid media, and growth — from the team at US Web Studio.",
};

export default function BlogIndexPage() {
  const [featured, ...rest] = POSTS;

  return (
    <main className="relative">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.55,
            filter: "blur(20px)",
          }}
        />

        <div className="container-x relative z-10 text-center">
          <div className="flex items-center gap-3 justify-center">
            <HexIcon size={28} />
            <span className="text-sm font-bold tracking-[0.35em] text-white/90">
              BLOG
            </span>
          </div>
          <h1 className="mt-8 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15] max-w-4xl mx-auto">
            Insights on ecommerce, AI search, and growth.
          </h1>
        </div>
      </section>

      <section className="bg-[#f5f7fb] text-navy-900 py-20 lg:py-28">
        <div className="container-x">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block rounded-3xl overflow-hidden bg-white border border-navy-900/10 hover:border-brand-red transition mb-12"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-xs font-bold tracking-[0.2em] text-brand-red">
                  FEATURED
                </span>
                <h2 className="mt-3 text-2xl lg:text-4xl font-bold text-navy-900 group-hover:text-brand-red transition leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-4 text-navy-900/65 leading-relaxed">
                  {featured.excerpt}
                </p>
                <p className="mt-6 text-sm text-navy-900/50">
                  {featured.author} · {formatDate(featured.date)}
                </p>
              </div>
            </div>
          </Link>

          {/* Rest */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-navy-900/10 hover:border-brand-red transition flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-red transition leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-navy-900/65 leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-navy-900/50 mt-auto pt-4">
                    {p.author} · {formatDate(p.date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
