import ExperienceSwipe from "@/components/Experience";
import SkillsStack from "@/components/SkillsStack";
import StorySection from "@/components/StorySection";

export default function AboutPage() {
  return (
    <div className="font-sans py-14 md:py-24">
      {/* <SkillsVisionHero /> */}
      <StorySection />
      <ExperienceSwipe />
      <SkillsStack />
    </div>
  );
}