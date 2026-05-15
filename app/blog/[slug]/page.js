import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import {
  POSTS,
  getPostBySlug,
  getAllPostSlugs,
  formatDate,
} from "@/lib/blog-data";

export function generateStaticParams() {
  return getAllPostSlugs();
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — AdvertisingsLabs`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="relative">
      <Header />

      <article>
        <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-16 sm:pb-20 lg:pt-44 lg:pb-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-10 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full animate-float-slow"
            style={{
              background:
                "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
              opacity: 0.45,
              filter: "blur(20px)",
            }}
          />

          <div className="container-x relative z-10 max-w-3xl">
            <Reveal variant="fade" duration={500}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-5 sm:mb-6 group"
              >
                <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>
            </Reveal>

            <Reveal variant="up" delay={100} duration={650}>
              <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white/80">
                ARTICLE
              </p>
            </Reveal>

            <Reveal variant="up" delay={200} duration={800}>
              <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.1]">
                {post.title}
              </h1>
            </Reveal>

            <Reveal variant="up" delay={350} duration={650}>
              <p className="mt-5 sm:mt-6 text-white/70 text-sm sm:text-base">
                {post.author} · {formatDate(post.date)}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white text-navy-900 -mt-px">
          <div className="container-x max-w-3xl">
            <Reveal variant="zoom" duration={700}>
              <div className="aspect-[16/9] -mt-10 sm:-mt-12 lg:-mt-20 rounded-2xl overflow-hidden shadow-2xl bg-black/20 group">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>

            <div className="prose-content py-10 sm:py-14 space-y-5 sm:space-y-6 text-navy-900/80 leading-relaxed text-sm sm:text-base lg:text-lg">
              {post.body.map((p, i) => (
                <Reveal key={i} variant="up" delay={i * 80} duration={650}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fb] text-navy-900 py-16 sm:py-20 lg:py-24">
          <div className="container-x">
            <Reveal variant="up" duration={600}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10">
                More from the blog
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {others.map((o, i) => (
                <Reveal key={o.slug} variant="up" delay={i * 100} duration={650}>
                  <TiltCard max={5} scale={1.02} className="h-full">
                    <Link
                      href={`/blog/${o.slug}`}
                      className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-navy-900/10 hover:border-brand-red hover:shadow-xl transition-all duration-500 h-full"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img
                          src={o.cover}
                          alt={o.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5 sm:p-6">
                        <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-brand-red transition">
                          {o.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-navy-900/60 line-clamp-2">
                          {o.excerpt}
                        </p>
                      </div>
                    </Link>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </article>

      <ContactSection />
      <Footer />
    </main>
  );
}
