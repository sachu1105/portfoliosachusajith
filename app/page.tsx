import AboutMe from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Myworks from "@/components/Myworks";
import ScrollingText from "@/components/ScrollingText";
import MyServices from "@/components/Services";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <TechMarquee />
      <AboutMe  />
      <Myworks />
      <MyServices />
      <ScrollingText />
    </div>
  );
}
