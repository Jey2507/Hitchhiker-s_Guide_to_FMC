import { PageHeader } from "../components/ui/PageHeader.jsx";
import { Section } from "../components/ui/Section.jsx";
import { BLOCKBUILDING } from "../content/blockbuilding.js";

export default function BlockbuildingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Розділ 1"
        title="Блокбілдинг"
        tagline="Перше й найпростіше покращення над звичайним CFOP: блоки, орієнтація ребер, NISS і вставки кутиків. Реально зібрати саб30."
      />
      {BLOCKBUILDING.map((section) => (
        <Section key={section.id} {...section} />
      ))}
    </>
  );
}
