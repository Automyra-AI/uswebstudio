import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Marquee />
      <Testimonials />
      <Services />
      <Process />
      <Work />
      <CTA />
      <Footer />
    </main>
  );
}
