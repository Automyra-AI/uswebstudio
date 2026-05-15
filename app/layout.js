import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "AdvertisingsLabs — Grow, Convert, Scale Your Brand",
  description:
    "Full-service digital agency — websites, social media, paid ads, SEO, and Amazon growth, all engineered to scale ambitious brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="bg-navy-950 text-white antialiased site-cursor">
        <SmoothScroll />
        <CustomCursor />
        {children}
        <GrainOverlay opacity={0.05} />
        <FloatingWhatsApp
          phone="13205440303"
          message="Hi AdvertisingsLabs, I'd like to discuss a project."
        />
      </body>
    </html>
  );
}
