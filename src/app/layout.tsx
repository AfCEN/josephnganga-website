import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joseph Ng'ang'a — Infrastructure Finance Architect & AI Systems Builder",
  description:
    "Joseph Ng'ang'a connects African infrastructure to global capital. Founder & CEO of AfCEN, Mission 300 Special Envoy, former Rockefeller Foundation. Based between Nairobi and Washington, DC.",
  keywords: [
    "Joseph Nganga",
    "AfCEN",
    "Infrastructure Finance",
    "Africa Energy",
    "AI Development Finance",
    "Mission 300",
    "African Development Bank",
  ],
  authors: [{ name: "Joseph Ng'ang'a" }],
  openGraph: {
    title: "Joseph Ng'ang'a — Infrastructure Finance Architect & AI Systems Builder",
    description:
      "Connecting African infrastructure to global capital. Founder & CEO of AfCEN, Mission 300 Special Envoy, former Rockefeller Foundation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ngangaj",
    title: "Joseph Ng'ang'a — Infrastructure Finance & AI",
    description: "Connecting African infrastructure to global capital.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
