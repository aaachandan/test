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
    default: "NexGen Digital — AI Digital Marketing Agency",
    template: "%s | NexGen Digital",
  },
  description:
    "NexGen Digital is a leading AI-driven digital marketing company in Raipur, Chhattisgarh, dedicated to transforming businesses with smart, data-powered strategies.",
  keywords: [
    "digital marketing", "AI marketing", "web development", "SEO",
    "social media marketing", "branding", "Raipur", "Chhattisgarh",
  ],
  authors: [{ name: "NexGen Digital" }],
  creator: "NexGen Digital",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "NexGen Digital",
    title: "NexGen Digital — AI Digital Marketing Agency",
    description: "Leading AI-driven digital marketing company transforming businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexGen Digital — AI Digital Marketing Agency",
    description: "Leading AI-driven digital marketing company transforming businesses.",
  },
  robots: { index: true, follow: true },
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
              name: "NexGen Digital",
              url: "https://nexgendigital.in",
              description: "AI-driven digital marketing company in Raipur, Chhattisgarh",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Raipur",
                addressRegion: "Chhattisgarh",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9407170994",
                contactType: "customer service",
              },
              sameAs: [
                "https://facebook.com/nexgendigital",
                "https://twitter.com/nexgendigital",
                "https://linkedin.com/company/nexgendigital",
                "https://instagram.com/nexgendigital",
              ],
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
