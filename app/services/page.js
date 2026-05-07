import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServiceRow from "@/components/ServiceRow";

const SERVICES = [
  {
    num: "01",
    title: "Branding & Creative Design",
    desc:
      "We help businesses look sharp and stand out. From logos to packaging, our designs speak your brand's language and leave a lasting impression.",
  },
  {
    num: "02",
    title: "Website Design & Development",
    desc:
      "Your website should do more than look good — it should work beautifully. We build fast, responsive sites that turn visitors into loyal customers.",
  },
  {
    num: "03",
    title: "Social Media Marketing",
    desc:
      "Turn followers into fans. We craft scroll-stopping content and consistent strategies that grow real, engaged communities around your brand.",
  },
  {
    num: "04",
    title: "Paid Ads & Performance Marketing",
    desc:
      "Smart, data-driven ad campaigns across Meta, Google, and TikTok — designed to reach the right audience and deliver real, measurable results.",
  },
  {
    num: "05",
    title: "SEO & Content Strategy",
    desc:
      "We get your brand found. With SEO-driven content, on-page optimization, and search-friendly structure, we help you rank, attract, and convert.",
  },
  {
    num: "06",
    title: "Video Production & Photography",
    desc:
      "Visual storytelling that sticks. From product shoots to ad creatives and brand videos, we capture content that's built to perform across every platform.",
  },
  {
    num: "07",
    title: "Email Marketing & Automation",
    desc:
      "We turn subscribers into repeat customers. From welcome flows to retention campaigns, our email and automation systems keep your business top of mind.",
  },
  {
    num: "08",
    title: "Virtual Consulting & Strategy",
    desc:
      "Need a plan or a push? We guide businesses with tailored marketing strategies, brand clarity, and expert audits that uncover growth opportunities.",
  },
];

export const metadata = {
  title: "Services — US Web Studio",
  description:
    "Branding, websites, social, paid ads, SEO, video, email, and consulting — full-service growth for ambitious local brands.",
};

export default function ServicesPage() {
  return (
    <main className="relative">
      <Header />
      <ServicesHero />
      <div>
        {SERVICES.map((s, i) => (
          <ServiceRow
            key={s.num}
            service={s}
            variant={i % 2 === 0 ? "red" : "navy"}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}
