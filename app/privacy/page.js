import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HexIcon from "@/components/HexIcon";

export const metadata = {
  title: "Privacy Policy — AdvertisingsLabs",
  description:
    "How AdvertisingsLabs collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="relative">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-16 sm:pb-20 lg:pt-44 lg:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, #e11d2a 0%, #5a0a12 40%, transparent 70%)",
            opacity: 0.4,
            filter: "blur(20px)",
          }}
        />

        <div className="container-x relative z-10 text-center">
          <Reveal variant="fade" duration={500}>
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="animate-spin-slow inline-block">
                <HexIcon size={28} />
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.35em] text-white/90">
                LEGAL
              </span>
            </div>
          </Reveal>
          <Reveal variant="up" delay={120} duration={700}>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.15]">
              Privacy Policy
            </h1>
          </Reveal>
          <Reveal variant="up" delay={250} duration={650}>
            <p className="mt-4 text-white/70 text-sm sm:text-base">
              Last updated: May 11, 2026
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white text-navy-900 py-16 sm:py-20 lg:py-24">
        <div className="container-x max-w-3xl space-y-8 leading-relaxed text-navy-900/80 text-base sm:text-lg">
          <Reveal variant="up" duration={650}>
            <p className="rounded-2xl border border-brand-red/20 bg-brand-red/5 p-5 text-sm text-navy-900/75">
              <strong className="text-brand-red">Placeholder notice — </strong>
              This is a template privacy policy. Have it reviewed by legal
              counsel and tailored to the data you actually collect, the
              third-party services you use, and the jurisdictions you operate
              in (GDPR, CCPA, etc.) before launch.
            </p>
          </Reveal>

          {[
            {
              h: "1. Information we collect",
              p: "We collect information you provide directly — such as your name, email, phone number, and project details — when you contact us, request a quote, or sign up to our newsletter. We may also collect technical information automatically (IP address, browser type, pages visited) through standard analytics.",
            },
            {
              h: "2. How we use information",
              p: "We use your information to respond to enquiries, deliver our services, send relevant updates, improve our website, and meet our legal obligations. We do not sell your personal information.",
            },
            {
              h: "3. Sharing",
              p: "We may share information with trusted service providers who help us operate the Site or deliver services (for example, email or analytics providers). Each one is bound by confidentiality obligations. We may also disclose information when required by law.",
            },
            {
              h: "4. Cookies",
              p: "We use cookies and similar technologies to operate the Site, remember preferences, and measure performance. You can disable cookies in your browser, though some features of the Site may not work as expected.",
            },
            {
              h: "5. Data retention",
              p: "We keep personal data only as long as necessary for the purposes described in this policy or as required by law. Project records may be retained for our business and compliance needs.",
            },
            {
              h: "6. Your rights",
              p: "Depending on where you live, you may have rights to access, correct, delete, or restrict use of your personal information. To exercise these rights, contact us at the email below and we will respond within a reasonable timeframe.",
            },
            {
              h: "7. Security",
              p: "We apply reasonable technical and organisational measures to protect your information. No method of transmission over the internet is 100% secure, so we cannot guarantee absolute security.",
            },
            {
              h: "8. Updates",
              p: "We may update this policy from time to time. The “Last updated” date at the top shows when the policy was last revised.",
            },
            {
              h: "9. Contact",
              p: "Questions about this policy or your data? Email hello@advertisingslabs.com.",
            },
          ].map((b, i) => (
            <Reveal key={b.h} variant="up" delay={i * 80} duration={650}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
                  {b.h}
                </h2>
                <p>{b.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
