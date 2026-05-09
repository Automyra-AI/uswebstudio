"use client";

import { useState } from "react";

const DEFAULT_ITEMS = [
  {
    q: "How do I get started with you?",
    a: "Reach out through the contact form, drop us a quick email, or book a 30-minute call. We will run a free discovery session to understand your goals and scope a plan that fits your stage.",
  },
  {
    q: "What services do you offer?",
    a: "Web design, development, SEO, paid ads, social media, maintenance, migrations, AI search optimisation, and Amazon channel management. Most clients start with one service and add others as they grow.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Every build includes 30 days of complimentary support to address any post-launch issues. After that we offer flexible monthly retainers tuned to your store size.",
  },
  {
    q: "Which ecommerce platforms do you work with?",
    a: "Shopify, BigCommerce, Magento, WooCommerce, Volusion, OpenCart, Shift4Shop, Zen Cart, and headless builds. We are platform-agnostic and recommend the right one for your stage.",
  },
  {
    q: "Can you help with consulting or strategy?",
    a: "Yes. We offer standalone strategy and audit engagements — useful if you want a clear plan before you commit to a build, or a second opinion on an existing roadmap.",
  },
];

export default function FAQ({ items = DEFAULT_ITEMS, title = "Frequently asked" }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#f5f7fb] text-navy-900 py-20 lg:py-24">
      <div className="container-x max-w-4xl">
        <p className="text-brand-red font-semibold">FAQ</p>
        <h2 className="mt-2 text-3xl lg:text-5xl font-bold leading-[1.1]">
          {title}
        </h2>

        <div className="mt-10 divide-y divide-navy-900/10 border-y border-navy-900/10">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-lg lg:text-xl font-semibold text-navy-900">
                    {it.q}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full bg-navy-900 text-white flex items-center justify-center transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <i className="fa-solid fa-plus text-sm" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden text-navy-900/70 leading-relaxed text-base lg:text-lg">
                    {it.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
