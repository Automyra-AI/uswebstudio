"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-x flex items-center justify-between py-6">
        <Logo />

        <nav className="hidden lg:flex items-center gap-12 text-white/95 text-base font-medium">
          <a href="/services" className="hover:text-brand-red transition">Services</a>
          <a href="/projects" className="hover:text-brand-red transition">Projects</a>
          <a href="/about" className="hover:text-brand-red transition">About Us</a>
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
            <a href="/projects" onClick={() => setOpen(false)}>Projects</a>
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
