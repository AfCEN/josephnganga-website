import type { Metadata } from "next";
import AdvisoryPageContent from "@/components/AdvisoryPageContent";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Advisory — Joseph Nganga",
  description:
    "Strategic advisory for African infrastructure and technology companies. DFI market access, institutional positioning, and capital mobilization strategy.",
  openGraph: {
    title: "Advisory — Joseph Nganga",
    description:
      "Helping founders and leadership teams navigate Africa\u2019s institutional capital landscape — from DFIs and multilateral banks to sovereign initiatives and policy frameworks.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function AdvisoryPage() {
  return (
    <>
      <Nav />
      <main>
        <AdvisoryPageContent />
      </main>
      <Footer />
    </>
  );
}
