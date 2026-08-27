import { PageHeader } from "../components/ui/PageHeader.jsx";
import { Section } from "../components/ui/Section.jsx";
import { BONUS } from "../content/bonus.js";

export default function BonusPage() {
  return (
    <>
      <PageHeader
        eyebrow="Бонус"
        title="Бонусна глава"
        tagline="Дуже просунуті й не до кінця досліджені теми — JEO, JZP та ARM. Не обов'язково для старту, але цікаво для дуже допитливих."
      />
      {BONUS.map((section) => (
        <Section key={section.id} {...section} />
      ))}
    </>
  );
}
