import ExperienceSwipe from "@/components/Experience";
import SkillsStack from "@/components/SkillsStack";
import SkillsVisionHero from "@/components/SkillsVisionHero";
import StorySection from "@/components/StorySection";

export default function AboutPage() {
  return (
    <div className="font-sans py-24">
      {/* <SkillsVisionHero /> */}
      <StorySection />
      <ExperienceSwipe />
      <SkillsStack />
    </div>
  );
}