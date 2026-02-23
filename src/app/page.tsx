import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speaking from "@/components/Speaking";
import Advisory from "@/components/Advisory";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Speaking />
        <Advisory />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
