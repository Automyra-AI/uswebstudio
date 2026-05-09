import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
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
    title: `${post.title} — US Web Studio`,
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
        <section className="relative overflow-hidden bg-navy-950 pt-36 pb-20 lg:pt-44 lg:pb-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-10 w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
              opacity: 0.45,
              filter: "blur(20px)",
            }}
          />

          <div className="container-x relative z-10 max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6"
            >
              <i className="fa-solid fa-arrow-left" /> Back to Blog
            </Link>
            <p className="text-sm font-bold tracking-[0.25em] text-white/80">
              ARTICLE
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.1]">
              {post.title}
            </h1>
            <p className="mt-6 text-white/70">
              {post.author} · {formatDate(post.date)}
            </p>
          </div>
        </section>

        <section className="bg-white text-navy-900 -mt-px">
          <div className="container-x max-w-3xl">
            <div className="aspect-[16/9] -mt-12 lg:-mt-20 rounded-2xl overflow-hidden shadow-2xl bg-black/20">
              <img
                src={post.cover}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose-content py-14 space-y-6 text-navy-900/80 leading-relaxed text-base lg:text-lg">
              {post.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f7fb] text-navy-900 py-20 lg:py-24">
          <div className="container-x">
            <h2 className="text-3xl lg:text-4xl font-bold mb-10">
              More from the blog
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/blog/${o.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white border border-navy-900/10 hover:border-brand-red transition flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={o.cover}
                      alt={o.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-red transition">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-sm text-navy-900/60 line-clamp-2">
                      {o.excerpt}
                    </p>
                  </div>
                </Link>
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
