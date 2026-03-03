import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joseph Nganga — Infrastructure Finance Architect & AI Systems Builder",
  description:
    "Joseph Nganga builds the intelligence systems at the intersection of Africa's clean energy transition, critical minerals race, AI dominance, and defense. Founder & CEO of AfCEN, Mission 300 Special Envoy, former Rockefeller Foundation.",
  keywords: [
    "Joseph Nganga",
    "AfCEN",
    "Infrastructure Finance",
    "Critical Minerals Africa",
    "AI Development Finance",
    "Mission 300",
    "African Development Bank",
    "Africa AI",
    "Defense Critical Minerals",
    "Agentic AI",
  ],
  authors: [{ name: "Joseph Nganga" }],
  openGraph: {
    title: "Joseph Nganga — Infrastructure Finance Architect & AI Systems Builder",
    description:
      "Connecting African infrastructure to global capital. Founder & CEO of AfCEN, Mission 300 Special Envoy, former Rockefeller Foundation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ngangaj",
    title: "Joseph Nganga — Infrastructure Finance & AI",
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
