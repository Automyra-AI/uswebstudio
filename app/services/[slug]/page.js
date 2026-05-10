import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import ContactSection from "@/components/ContactSection";
import {
  SERVICES,
  getServiceBySlug,
  getAllSlugs,
} from "@/lib/services-data";

export function generateStaticParams() {
  return getAllSlugs();
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.name} — AdvertisingLab`,
    description: service.short,
  };
}

export default function ServiceSlugPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <main className="relative">
      <Header />
      <ServiceDetail service={service} />
      <ContactSection />
      <Footer />
    </main>
  );
}
