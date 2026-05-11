import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";
import ContactSection from "@/components/ContactSection";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/lib/projects-data";

export function generateStaticParams() {
  return getAllProjectSlugs();
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Case Study — AdvertisingLab`,
    description: project.short,
  };
}

export default function ProjectSlugPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="relative">
      <Header />
      <ProjectDetail project={project} />
      <ContactSection />
      <Footer />
    </main>
  );
}
