import { PageHeader } from "../components/ui/PageHeader.jsx";
import { Section } from "../components/ui/Section.jsx";
import { ContestList } from "../components/ui/ContestList.jsx";
import { DOMINO } from "../content/domino.js";

export default function DominoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Розділ 2"
        title="Domino Reduction"
        tagline="Метод, яким збирають світові топи: не поступова збірка елементів, а поступове спрощення куба — DR → HTR → вставки слайсу, за 21–22 рухи."
      />
      {DOMINO.map((section) => (
        <Section key={section.id} {...section}>
          {section.contests && <ContestList />}
        </Section>
      ))}
    </>
  );
}
