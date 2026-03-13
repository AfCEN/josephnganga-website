import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
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
    images: [
      {
        url: "/headshots/joseph-nganga-hero.jpg",
        width: 850,
        height: 1134,
        alt: "Joseph Nganga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ngangaj",
    title: "Joseph Nganga — Infrastructure Finance & AI",
    description: "Connecting African infrastructure to global capital.",
    images: [
      {
        url: "/headshots/joseph-nganga-hero.jpg",
        width: 850,
        height: 1134,
        alt: "Joseph Nganga",
      },
    ],
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
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Joseph Ng'ang'a",
              alternateName: "Joseph Nganga",
              jobTitle: "CEO & Founder",
              worksFor: {
                "@type": "Organization",
                name: "AfCEN",
                description: "Africa Climate and Energy Nexus",
              },
              url: "https://josephnganga.com",
              sameAs: ["https://x.com/ngangaj"],
              image: "https://josephnganga.com/headshots/joseph-nganga-hero.jpg",
              knowsAbout: [
                "Africa energy policy",
                "critical minerals",
                "climate finance",
                "African development",
                "infrastructure investment",
                "AI systems",
              ],
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Queens University of Charlotte",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "Harvard Business School",
                },
              ],
              description:
                "Joseph Nganga is the Founder & CEO of the Africa Climate and Energy Nexus (AfCEN), former Mission 300 Special Envoy, former VP for Africa at GEAPP, and CEO of Kenya's inaugural Africa Climate Summit. A pioneer in Africa's energy transition, he has mobilised billions in climate and energy investment across the continent.",
            }),
          }}
        />
        {children}
        <Analytics />
        <script src="https://assets.calendly.com/assets/external/widget.js" async />
      </body>
    </html>
  );
}
