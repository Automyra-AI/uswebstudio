import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import BookACall from "@/components/BookACall";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact — AdvertisingLab",
  description:
    "Drop us a message or book a 30-minute strategy call. We are ready to build something great with you.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      <Header />
      <ContactHero />
      <BookACall />
      <ContactSection showHeader />
      <Footer />
    </main>
  );
}
