import "./globals.css";

export const metadata = {
  title: "AdvertisingLab — Grow, Convert, Scale Your Brand",
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
      <body className="bg-navy-950 text-white antialiased">{children}</body>
    </html>
  );
}
