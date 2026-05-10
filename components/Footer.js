import { SERVICES } from "@/lib/services-data";
import { PLATFORMS } from "@/lib/platforms-data";
import { LOCATIONS } from "@/lib/locations-data";
import { AMAZON_SERVICES } from "@/lib/amazon-data";

export default function Footer() {
  return (
    <footer id="about" className="relative bg-white text-navy-900">
      {/* top diagonal stripe band */}
      <div aria-hidden="true" className="h-7 w-full diagonal-stripes" />

      {/* MEGA LINKS */}
      <div className="container-x py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-navy-900 mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2 text-sm text-navy-900/75">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/services/${s.slug}`}
                    className="hover:text-brand-red transition"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-navy-900 mb-4">
              PLATFORMS
            </h4>
            <ul className="space-y-2 text-sm text-navy-900/75">
              {PLATFORMS.map((p) => (
                <li key={p.slug}>
                  <a
                    href={`/platforms/${p.slug}`}
                    className="hover:text-brand-red transition"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-navy-900 mb-4">
              AMAZON
            </h4>
            <ul className="space-y-2 text-sm text-navy-900/75">
              <li>
                <a href="/amazon" className="hover:text-brand-red transition font-semibold">
                  All Amazon Services
                </a>
              </li>
              {AMAZON_SERVICES.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/amazon/${s.slug}`}
                    className="hover:text-brand-red transition"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-navy-900 mb-4">
              LOCATIONS
            </h4>
            <ul className="space-y-2 text-sm text-navy-900/75">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <a
                    href={`/locations/${l.slug}`}
                    className="hover:text-brand-red transition"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/locations"
                  className="hover:text-brand-red transition font-semibold"
                >
                  All Locations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-navy-900 mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm text-navy-900/75">
              <li>
                <a href="/about" className="hover:text-brand-red transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-brand-red transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/industries" className="hover:text-brand-red transition">
                  Industries
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-brand-red transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/reviews" className="hover:text-brand-red transition">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-brand-red transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SLIM BAR (logo / email / social) */}
      <div className="border-t border-navy-900/10">
        <div className="container-x py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3">
            <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-brand-red">
              <span className="text-brand-red font-extrabold text-lg tracking-tight">
                AL
              </span>
            </span>
            <span className="leading-tight">
              <span className="block text-base font-extrabold tracking-tight text-navy-900">
                Advertising<span className="text-brand-red">Lab</span>
              </span>
              <span className="block text-[9px] font-bold tracking-[0.25em] text-navy-900/70">
                GROW · CONVERT · SCALE
              </span>
            </span>
          </a>

          <a
            href="mailto:hello@advertisinglab.com"
            className="text-navy-900/80 font-medium hover:text-brand-red transition"
          >
            hello@advertisinglab.com
          </a>

          <div className="flex items-center gap-3">
            {[
              { i: "linkedin-in", label: "LinkedIn" },
              { i: "instagram", label: "Instagram" },
              { i: "facebook-f", label: "Facebook" },
            ].map((s) => (
              <a
                key={s.i}
                href="#"
                aria-label={s.label}
                className="w-11 h-11 rounded-md bg-navy-900 text-white flex items-center justify-center hover:bg-brand-red transition"
              >
                <i className={`fa-brands fa-${s.i}`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* legal strip */}
      <div className="border-t border-navy-900/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-900/60">
          <p>© 2026 AdvertisingLab. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-brand-red transition">Terms of Use</a>
            <a href="#" className="hover:text-brand-red transition">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* bottom diagonal stripe band */}
      <div
        aria-hidden="true"
        className="h-5 w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #e6ecf5 0, #e6ecf5 8px, #cfd8e8 8px, #cfd8e8 16px)",
        }}
      />
    </footer>
  );
}
