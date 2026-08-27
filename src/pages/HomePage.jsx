import { Hero } from "../components/ui/Hero.jsx";
import { Section } from "../components/ui/Section.jsx";
import { Iceberg } from "../components/ui/Iceberg.jsx";
import { CommunityLinks } from "../components/ui/CommunityLinks.jsx";
import { HOME } from "../content/home.js";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section {...HOME.intro} />

      <Section {...HOME.roadmapIntro}>
        <Iceberg />
      </Section>

      <Section {...HOME.cfop} />

      <Section {...HOME.community}>
        <CommunityLinks />
      </Section>
    </>
  );
}
