import Link from "next/link";
import HexIcon from "./HexIcon";
import { PLATFORMS } from "@/lib/platforms-data";

export default function PlatformDetail({ platform }) {
  const others = PLATFORMS.filter((p) => p.slug !== platform.slug).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
            opacity: 0.7,
            filter: "blur(2px)",
          }}
        />

        <div className="container-x relative z-10 max-w-4xl">
          <Link
            href="/platforms"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6"
          >
            <i className="fa-solid fa-arrow-left" /> Back to Platforms
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <HexIcon size={28} />
            <span className="text-sm font-bold tracking-[0.25em] text-white/90">
              PLATFORM
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
            {platform.name}
          </h1>
          <p className="mt-6 text-xl lg:text-2xl text-white/85 max-w-2xl">
            {platform.tagline}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-full font-semibold hover:bg-brand-red hover:text-white transition"
          >
            Get a Free Consultation <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#f5f7fb] text-navy-900 py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-brand-red font-semibold">Overview</p>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold leading-[1.1]">
              Why brands trust us with {platform.name}.
            </h2>
          </div>
          <div className="space-y-5 text-navy-900/75 leading-relaxed text-base lg:text-lg">
            {platform.long.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-navy-950 text-white py-20 lg:py-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -bottom-32 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 75%)",
            opacity: 0.45,
            filter: "blur(2px)",
          }}
        />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <p className="text-white/70 font-semibold tracking-[0.25em] text-sm">
              WHAT WE BUILD
            </p>
            <h2 className="mt-3 text-3xl lg:text-5xl font-bold leading-[1.1]">
              Capabilities on {platform.name}.
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platform.features.map((f) => (
              <div
                key={f}
                className="rounded-2xl p-[1px] bg-gradient-to-b from-white/30 via-white/10 to-transparent"
              >
                <div className="rounded-[15px] h-full p-6 bg-gradient-to-b from-[#0e2a55] via-navy-800 to-navy-900 flex items-start gap-3">
                  <span className="mt-1 inline-flex w-8 h-8 rounded-full bg-brand-red items-center justify-center shrink-0">
                    <i className="fa-solid fa-check text-sm" />
                  </span>
                  <span className="text-white/90 leading-snug">{f}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER PLATFORMS */}
      <section className="bg-[#f5f7fb] text-navy-900 py-20 lg:py-24">
        <div className="container-x">
          <h2 className="text-3xl lg:text-4xl font-bold mb-10">
            Explore other platforms
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/platforms/${o.slug}`}
                className="group block rounded-2xl border border-navy-900/10 bg-white p-6 hover:border-brand-red transition"
              >
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-red transition">
                  {o.name}
                </h3>
                <p className="mt-2 text-sm text-navy-900/65 line-clamp-3">
                  {o.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-navy-900 font-semibold text-sm">
                  Learn more <i className="fa-solid fa-arrow-right text-xs" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
