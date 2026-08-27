import { PageHeader } from "../components/ui/PageHeader.jsx";
import { Section } from "../components/ui/Section.jsx";
import { MoveCounter } from "../components/ui/MoveCounter.jsx";
import { TOOLS } from "../content/tools.js";

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Інструменти"
        title="Інструменти"
        tagline="Маленькі помічники для практики — почнемо з лічильника ходів."
      />
      <Section {...TOOLS[0]}>
        <MoveCounter />
      </Section>
    </>
  );
}
