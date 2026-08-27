// Shared glossary of secondary FMC terms — things that come up in
// discussions but don't get their own explained section anywhere else
// (unlike EO/NISS/DR/HTR, which are full sections with their own links).
// Used both by the dedicated "Термінологія" section on the Domino page
// (src/content/domino.js) and by the inline tooltip pass in
// src/utils/inlineMarkup.jsx, which underlines these terms wherever they
// show up in prose and shows the definition on hover/focus/tap.
export const GLOSSARY_TERMS = [
  {
    term: "RZP",
    def: "Крок між EO та DR, на якому куб спрощується до чогось на кшталт DR-4e4c. З польської: ruch(y) zupełnie przypadkowy — «повністю випадковий(і) рух(и)».",
  },
  { term: "DRM", def: "Інша назва RZP. Означає «DR minus», тобто «doing random moves»." },
  {
    term: "QT",
    def: "Quarter turns — чверть-оберти (використовується в обговореннях кутових кейсів DR і HTR сабсетів). «4qt corners» означає, що кути потребують 4 чверть-оберти для збірки, не рахуючи подвійних рухів.",
  },
  {
    term: "Double Slice Reduction",
    def: "Залишити слайс DR і ще один слайс — зазвичай той, що може скоротитись з рухом на іншій стороні скрамблу за допомогою NISS.",
  },
  { term: "ABx", def: "«All But» — наприклад, AB3c означає «всі, крім 3 кутів»." },
  {
    term: "//x+y",
    def: "У реконструкції зазвичай означає: x = довжина DR, y = кількість QT у рішенні кутів. Наприклад, «U F2 U R //9+3» — це 9-ходовий DR із 3qt кутами.",
  },
  { term: "4x", def: "Скелетон, який «не збігається» на 4 центри." },
];
