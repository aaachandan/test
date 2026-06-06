import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ray Web Services — Design. Develop. Dominate.",
    template: "%s | Ray Web Services",
  },
  description:
    "Professional website design, development, branding, landing pages and complete digital solutions — crafted for results. Based in Raipur, Chhattisgarh.",
  keywords: [
    "web design",
    "web development",
    "Raipur",
    "Chhattisgarh",
    "website design",
    "digital agency",
    "branding",
  ],
  authors: [{ name: "Ray Web Services" }],
  creator: "Ray Web Services",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Ray Web Services",
    title: "Ray Web Services — Design. Develop. Dominate.",
    description:
      "Professional website design, development, branding and digital solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ray Web Services — Design. Develop. Dominate.",
    description:
      "Professional website design, development, branding and digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ray Web Services",
              url: "https://rayservices.netlify.app",
              description:
                "Professional digital agency based in Raipur, Chhattisgarh",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Raipur",
                addressRegion: "Chhattisgarh",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7746969000",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
