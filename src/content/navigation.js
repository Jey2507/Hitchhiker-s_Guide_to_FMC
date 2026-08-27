// Single source of truth for site structure: sidebar nav, mobile menu and
// in-page scrollspy all read from this file. Each top-level entry is a page
// (route); each `sections` entry is an <section id="..."> rendered on that
// page, used both for the sidebar sub-links and the "on this page" scrollspy.
// A section can optionally have `children` — sections nested one level
// deeper in the sidebar (e.g. HTR sub-topics under "Half Turn Reduction").
// They're still plain top-level `<section id="...">`s in the content file.

export const NAV = [
  {
    path: "/",
    label: "Початок",
    tagline: "Що таке FMC і з чого почати",
    sections: [
      { id: "what-is-fmc", label: "Що таке FMC" },
      { id: "roadmap", label: "Карта техніки" },
      { id: "cfop", label: "CFOP і поради" },
      { id: "community", label: "Спільнота" },
    ],
  },
  {
    path: "/blockbuilding",
    label: "Blockbuilding",
    tagline: "Блоки, EO, NISS і вставки — саб30",
    sections: [
      { id: "blockbuilding", label: "Blockbuilding" },
      { id: "eo", label: "EO" },
      { id: "niss", label: "NISS" },
      { id: "insertions", label: "Вставки кутів" },
    ],
  },
  {
    path: "/domino",
    label: "Domino Reduction",
    tagline: "DR + HTR — метод світових топів",
    sections: [
      {
        id: "dr",
        label: "Domino Reduction",
        children: [
          { id: "eo-advanced", label: "Просунутий EO" },
          { id: "rzp-advanced", label: "RZP — просунуто" },
          { id: "dr-triggers", label: "DR-тригери" },
        ],
      },
      {
        id: "htr",
        label: "Half Turn Reduction",
        children: [
          { id: "htr-recognize", label: "Як розпізнати HTR" },
          { id: "htr-solve", label: "Як вирішити HTR" },
          { id: "htr-advanced", label: "Просунутий HTR" },
          { id: "after-htr", label: "Після HTR" },
        ],
      },
      { id: "slice-insertions", label: "Вставки слайсу" },
      { id: "closing", label: "І наостанок" },
      { id: "glossary", label: "Термінологія" },
      { id: "contests", label: "Змагання й практика" },
    ],
  },
  {
    path: "/bonus",
    label: "Бонусна глава",
    tagline: "JEO, JZP, ARM — для дуже допитливих",
    sections: [
      { id: "jeo", label: "JEO" },
      { id: "jzp", label: "JZP" },
      { id: "arm", label: "ARM" },
    ],
  },
  // Довідкові сторінки нижче — не частина навчальної послідовності гайду
  // (Початок → Blockbuilding → Domino → Бонус), тому в сайдбарі йдуть після
  // роздільника. `groupStart: "reference"` на першій із них каже Sidebar,
  // де його намалювати.
  {
    path: "/library",
    label: "Бібліотека",
    tagline: "Усі відео, таблиці, документи й сайти гайду в одному місці",
    groupStart: "reference",
    sections: [
      { id: "video", label: "Відео" },
      { id: "sheet", label: "Таблиці" },
      { id: "doc", label: "Документи й схеми" },
      { id: "pdf", label: "PDF" },
      { id: "tool", label: "Сайти й інструменти" },
      { id: "thread", label: "Форуми" },
      { id: "community", label: "Спільнота й контести" },
    ],
  },
  {
    path: "/tools",
    label: "Інструменти",
    tagline: "Лічильник ходів для запису рішень",
    sections: [{ id: "move-counter", label: "Лічильник ходів" }],
  },
];
