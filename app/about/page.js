import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutValues from "@/components/AboutValues";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "About — AdvertisingsLabs",
  description:
    "We turn neighbourhood businesses into digital powerhouses — websites, ads, and brand strategy made for ambitious local brands.",
};

export default function AboutPage() {
  return (
    <main className="relative">
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <ContactSection />
      <Footer />
    </main>
  );
}
