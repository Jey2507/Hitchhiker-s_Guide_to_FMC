// Single source of truth for site structure: sidebar nav, mobile menu and
// in-page scrollspy all read from this file. Each top-level entry is a page
// (route); each `sections` entry is an <section id="..."> rendered on that
// page, used both for the sidebar sub-links and the "on this page" scrollspy.

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
    label: "Блокбілдинг",
    tagline: "Блоки, EO, NISS і вставки — саб30",
    sections: [
      { id: "blockbuilding", label: "Блокбілдинг" },
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
      { id: "dr", label: "Domino Reduction" },
      { id: "eo-advanced", label: "Просунутий EO" },
      { id: "rzp-advanced", label: "RZP — просунуто" },
      { id: "dr-triggers", label: "DR-тригери" },
      { id: "htr", label: "Half Turn Reduction" },
      { id: "htr-recognize", label: "Як розпізнати HTR" },
      { id: "htr-solve", label: "Як вирішити HTR" },
      { id: "htr-advanced", label: "Просунутий HTR" },
      { id: "after-htr", label: "Після HTR" },
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
];
