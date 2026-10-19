import Hero from "@/components/Hero";
import About from "@/components/About";
import Hackathons from "@/components/Hackathons";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Hackathons />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
