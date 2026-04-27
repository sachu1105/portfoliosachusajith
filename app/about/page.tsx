import ExperienceSwipe from "@/components/Experience";
import SkillsStack from "@/components/SkillsStack";
import SkillsVisionHero from "@/components/SkillsVisionHero";

export default function AboutPage() {
  return (
    <div className="font-sans py-24">
      <SkillsVisionHero />
      {/* <ExperienceSwipe /> */}
      <SkillsStack />
    </div>
  );
}