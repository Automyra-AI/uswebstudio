import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlatformDetail from "@/components/PlatformDetail";
import ContactSection from "@/components/ContactSection";
import {
  getPlatformBySlug,
  getAllPlatformSlugs,
} from "@/lib/platforms-data";

export function generateStaticParams() {
  return getAllPlatformSlugs();
}

export function generateMetadata({ params }) {
  const platform = getPlatformBySlug(params.slug);
  if (!platform) return { title: "Platform not found" };
  return {
    title: `${platform.name} — US Web Studio`,
    description: platform.short,
  };
}

export default function PlatformSlugPage({ params }) {
  const platform = getPlatformBySlug(params.slug);
  if (!platform) notFound();

  return (
    <main className="relative">
      <Header />
      <PlatformDetail platform={platform} />
      <ContactSection />
      <Footer />
    </main>
  );
}
