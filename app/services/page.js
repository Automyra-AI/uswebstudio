import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServiceRow from "@/components/ServiceRow";
import { SERVICES } from "@/lib/services-data";

export const metadata = {
  title: "Services — US Web Studio",
  description:
    "AI SEO, design, development, paid ads, social, maintenance, migration, and Amazon — full-service growth for ambitious brands.",
};

export default function ServicesPage() {
  return (
    <main className="relative">
      <Header />
      <ServicesHero />
      <div>
        {SERVICES.map((s, i) => (
          <ServiceRow
            key={s.slug}
            service={{
              num: s.num,
              title: s.name,
              desc: s.short,
              href: `/services/${s.slug}`,
            }}
            variant={i % 2 === 0 ? "red" : "navy"}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}
