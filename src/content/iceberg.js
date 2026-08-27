// Data for the homepage "iceberg" roadmap — a nod to the classic community
// meme that maps FMC knowledge from "surface" (CFOP) to the "abyss" (nobody
// really knows). Items with a `to` are covered on this site and link there;
// items without one are deep-cut terms mentioned only in resource links.
export const ICEBERG = [
  {
    depth: 0,
    title: "Поверхня",
    items: [
      { label: "CFOP", to: "/#cfop" },
      { label: "Блокбілдинг", to: "/blockbuilding#blockbuilding" },
    ],
  },
  {
    depth: 1,
    items: [{ label: "EO", to: "/blockbuilding#eo" }],
  },
  {
    depth: 2,
    items: [
      { label: "NISS", to: "/blockbuilding#niss" },
      { label: "Вставки кутів", to: "/blockbuilding#insertions" },
    ],
  },
  {
    depth: 3,
    title: "Занурення",
    items: [
      { label: "Вставки ребер", to: "/blockbuilding#insertions" },
      { label: "Domino Reduction", to: "/domino#dr" },
    ],
  },
  {
    depth: 4,
    items: [
      { label: "HTR", to: "/domino#htr" },
      { label: "NISS tracing", to: "/domino#dr" },
    ],
  },
  {
    depth: 5,
    items: [
      { label: "Hyperparity", to: "/domino#after-htr" },
      { label: "Floppy Reduction", to: "/domino#after-htr" },
      { label: "Вставки слайсу", to: "/domino#slice-insertions" },
    ],
  },
  {
    depth: 6,
    title: "Безодня",
    items: [
      { label: "Radek DR" },
      { label: "DR flipping" },
      { label: "Full sub6 triggers" },
    ],
  },
  {
    depth: 7,
    items: [
      { label: "JZP", to: "/bonus#jzp" },
      { label: "JEO", to: "/bonus#jeo" },
      { label: "ARM", to: "/bonus#arm" },
    ],
  },
  {
    depth: 8,
    items: [{ label: "…просто вивчити всі рішення куба", joke: true }],
  },
];
