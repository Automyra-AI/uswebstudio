import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HexIcon from "@/components/HexIcon";

export const metadata = {
  title: "Terms of Use — AdvertisingLab",
  description: "Terms of Use governing your access to and use of the AdvertisingLab website and services.",
};

export default function TermsPage() {
  return (
    <main className="relative">
      <Header />

      <section className="relative overflow-hidden bg-navy-950 pt-32 sm:pt-36 pb-16 sm:pb-20 lg:pt-44 lg:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full animate-float-slow"
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
              Terms of Use
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
              This is template content. Before launch, replace each section
              with terms reviewed by your own legal counsel for your
              jurisdiction and business model.
            </p>
          </Reveal>

          {[
            {
              h: "1. Acceptance",
              p: "By accessing or using the AdvertisingLab website (the “Site”) or any service we provide, you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.",
            },
            {
              h: "2. Services",
              p: "We provide design, development, marketing, and consulting services as described on our Site. Specific scope, deliverables, timelines, and pricing for any engagement will be set out in a separate signed agreement or statement of work between you and us.",
            },
            {
              h: "3. Intellectual property",
              p: "All content on the Site — including text, graphics, logos, and code — is owned by AdvertisingLab or its licensors and is protected by applicable intellectual property laws. You may not reproduce or redistribute Site content without prior written permission.",
            },
            {
              h: "4. User submissions",
              p: "If you submit a project enquiry, message, or other information through the Site, you grant us a non-exclusive licence to use that information to respond to your enquiry and provide our services. We will handle personal data in line with our Privacy Policy.",
            },
            {
              h: "5. Third-party links",
              p: "The Site may link to third-party websites. We do not control those sites and are not responsible for their content or practices. Accessing them is at your own risk.",
            },
            {
              h: "6. Disclaimer and liability",
              p: "The Site is provided “as is” and “as available”. We do not warrant that the Site will be uninterrupted, error-free, or secure. To the maximum extent permitted by law, AdvertisingLab is not liable for any indirect, incidental, or consequential damages arising from your use of the Site.",
            },
            {
              h: "7. Changes",
              p: "We may update these Terms of Use from time to time. Continued use of the Site after changes are posted constitutes acceptance of the updated terms.",
            },
            {
              h: "8. Contact",
              p: "Questions about these terms? Email hello@advertisingslabs.com.",
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
