export default function Footer() {
  return (
    <footer id="about" className="relative bg-white text-navy-900">
      {/* top diagonal stripe band */}
      <div
        aria-hidden="true"
        className="h-7 w-full diagonal-stripes"
      />

      <div className="container-x py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-brand-red">
              <span className="text-brand-red font-extrabold text-xl tracking-tight">
                US
              </span>
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-bold tracking-[0.25em] text-navy-900">
                WEB
              </span>
              <span className="block text-[11px] font-bold tracking-[0.25em] text-navy-900">
                STUDIO
              </span>
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:support@uswebstudio.com"
            className="text-navy-900/80 font-medium hover:text-brand-red transition"
          >
            support@uswebstudio.com
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-8 text-navy-900/85 font-medium">
            <a href="#services" className="hover:text-brand-red transition">Services</a>
            <a href="#projects" className="hover:text-brand-red transition">Projects</a>
            <a href="#about" className="hover:text-brand-red transition">About Us</a>
            <a href="#contact" className="hover:text-brand-red transition">Contact Us</a>
          </nav>

          {/* Social */}
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
