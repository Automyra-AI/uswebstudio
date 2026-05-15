"use client";

import { useEffect, useState } from "react";

/**
 * FloatingWhatsApp — sticky bottom-right FAB that opens a WhatsApp
 * chat with a pre-filled message. Slides into view 1.5s after the
 * page mounts so it doesn't fight the hero animation.
 *
 * Props:
 *   phone   — E.164 without "+", e.g. "13205440303"
 *   message — pre-filled body text
 *   delay   — ms before the button appears
 */
export default function FloatingWhatsApp({
  phone = "13205440303",
  message = "Hi AdvertisingsLabs, I'd like to discuss a project.",
  delay = 1500,
}) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[60] transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="relative flex items-center justify-end gap-3">
        {/* Tooltip */}
        <span
          className={`hidden sm:inline-flex items-center bg-navy-900 text-white text-sm font-medium px-4 py-2 rounded-full shadow-xl whitespace-nowrap transition-all duration-300 ${
            hovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          Chat with us on WhatsApp
          <span
            aria-hidden="true"
            className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-navy-900"
          />
        </span>

        {/* Button */}
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          data-cursor="hover"
          className="relative inline-flex w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full bg-[#25D366] text-white items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.55)] hover:bg-[#1eb155] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          {/* Pulsing ring */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#25D366] animate-wa-pulse"
          />
          {/* Second slower ring for layered depth */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-[#25D366] animate-wa-pulse"
            style={{ animationDelay: "1.1s" }}
          />

          {/* Online dot */}
          <span
            aria-hidden="true"
            className="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white"
          />

          {/* WhatsApp icon */}
          <i className="fa-brands fa-whatsapp text-3xl sm:text-[32px] relative drop-shadow-sm" />
        </a>
      </div>
    </div>
  );
}
