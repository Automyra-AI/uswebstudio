"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-x flex items-center justify-between py-6">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-white/95 text-sm xl:text-base font-medium">
          <a href="/services" className="hover:text-brand-red transition">Services</a>
          <a href="/platforms" className="hover:text-brand-red transition">Platforms</a>
          <a href="/amazon" className="hover:text-brand-red transition">Amazon</a>
          <a href="/industries" className="hover:text-brand-red transition">Industries</a>
          <a href="/locations" className="hover:text-brand-red transition">Locations</a>
          <a href="/projects" className="hover:text-brand-red transition">Projects</a>
          <a href="/blog" className="hover:text-brand-red transition">Blog</a>
          <a href="/about" className="hover:text-brand-red transition">About</a>
        </nav>

        <a
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 bg-white text-navy-900 px-6 py-3 rounded-full font-semibold hover:bg-brand-red hover:text-white transition"
        >
          Contact Us <i className="fa-solid fa-arrow-right" />
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-2xl"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-900/95 backdrop-blur-sm border-t border-white/10">
          <div className="container-x flex flex-col gap-4 py-6">
            <a href="/services" onClick={() => setOpen(false)}>Services</a>
            <a href="/platforms" onClick={() => setOpen(false)}>Platforms</a>
            <a href="/amazon" onClick={() => setOpen(false)}>Amazon</a>
            <a href="/industries" onClick={() => setOpen(false)}>Industries</a>
            <a href="/locations" onClick={() => setOpen(false)}>Locations</a>
            <a href="/projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
            <a href="/reviews" onClick={() => setOpen(false)}>Reviews</a>
            <a href="/about" onClick={() => setOpen(false)}>About Us</a>
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-white text-navy-900 px-6 py-3 rounded-full font-semibold w-fit"
            >
              Contact Us <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
