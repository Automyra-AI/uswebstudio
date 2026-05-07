"use client";

import { useState } from "react";

export default function ContactSection({ showHeader = true }) {
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Replace with your real endpoint or email service
    console.log("Contact form submitted:", form);
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative text-white py-20 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #6a1428 0%, #8a1a2c 45%, #5a1023 100%)",
      }}
    >
      <div className="container-x">
        {showHeader && (
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold">Let&apos;s Connect</h2>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <p className="text-white/95 lg:text-right leading-snug">
                We are here to serve you &amp; solve
                <br />
                all your problems
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-white text-navy-900 px-6 py-3 rounded-md font-semibold w-fit hover:bg-navy-900 hover:text-white transition"
              >
                Contact Us <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        )}

        {sent ? (
          <div className="bg-white/10 border border-white/20 rounded-xl p-10 text-center">
            <h3 className="text-2xl font-bold">Thanks — we&apos;ve got it.</h3>
            <p className="mt-2 text-white/85">
              We will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form
            id="contact-form"
            onSubmit={submit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <input
              required
              placeholder="Last Name"
              value={form.lastName}
              onChange={handle("lastName")}
              className="bg-transparent border border-white/30 rounded-md px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white"
            />
            <input
              required
              placeholder="First Name"
              value={form.firstName}
              onChange={handle("firstName")}
              className="bg-transparent border border-white/30 rounded-md px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handle("email")}
              className="bg-transparent border border-white/30 rounded-md px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white"
            />
            <input
              placeholder="Phone Number"
              value={form.phone}
              onChange={handle("phone")}
              className="bg-transparent border border-white/30 rounded-md px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white"
            />
            <textarea
              placeholder="Got an idea brewing? We&apos;re all ears and ready to build something great together."
              rows={6}
              value={form.message}
              onChange={handle("message")}
              className="bg-transparent border border-white/30 rounded-md px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white lg:col-span-2 resize-none"
            />
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-white text-navy-900 px-7 py-3 rounded-md font-semibold hover:bg-navy-900 hover:text-white transition"
              >
                Contact Now <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
