import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata = {
  title: "Projects — US Web Studio",
  description:
    "A look at the brands we've helped grow — websites, ads, and campaigns built to drive real impact.",
};

export default function ProjectsPage() {
  return (
    <main className="relative">
      <Header />
      <ProjectsHero />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}
