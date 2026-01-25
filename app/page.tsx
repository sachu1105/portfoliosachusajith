import AboutMe from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Myworks from "@/components/Myworks";
import ScrollingText from "@/components/ScrollingText";
import MyServices from "@/components/Services";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  return (
    <div className="font-sans">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="tech" className="px-0 py-4">
        <TechMarquee />
      </section>

      <section id="about" className="px-0 py-4">
        <AboutMe />
      </section>

      <section id="works" className="px-0 py-4">
        <Myworks />
      </section>

      <section id="services" className="px-0 py-4">
        <MyServices />
      </section>

      <section id="scrolling" className="px-0 py-4">
        <ScrollingText />
      </section>
    </div>
  );
}

