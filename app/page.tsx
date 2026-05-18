import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Work from "@/components/Work";
import Path from "@/components/Path";
import OffDuty from "@/components/OffDuty";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Work />
        <Path />
        <OffDuty />
        <Contact />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
