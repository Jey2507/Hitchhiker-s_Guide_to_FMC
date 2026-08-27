import { renderInline } from "../../utils/inlineMarkup.jsx";
import { Note } from "./Note.jsx";
import { Quote } from "./Quote.jsx";
import { GuideLink } from "./GuideLink.jsx";
import { Steps } from "./Steps.jsx";
import { CycleTable } from "./CycleTable.jsx";
import { CommutatorTable } from "./CommutatorTable.jsx";
import { Glossary } from "./Glossary.jsx";
import { Schedule } from "./Schedule.jsx";
import { FigureImage } from "./FigureImage.jsx";
import styles from "./Prose.module.css";

// Renders an array of content blocks (see src/content/*.js) into markup.
// Adding a new block type only means adding a case here and a small
// component next to this file — the content data stays plain objects.
export function Prose({ blocks = [] }) {
  return (
    <div className={styles.prose}>
      {blocks.map((block, i) => {
        switch (block.t) {
          case "p":
            return <p key={i}>{renderInline(block.c)}</p>;
          case "list":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case "note":
            return <Note key={i} {...block} />;
          case "quote":
            return <Quote key={i} lines={block.lines} />;
          case "guideLink":
            return <GuideLink key={i} {...block} />;
          case "steps":
            return <Steps key={i} items={block.items} />;
          case "cycleTable":
            return <CycleTable key={i} rows={block.rows} footnote={block.footnote} />;
          case "commutatorTable":
            return <CommutatorTable key={i} rows={block.rows} />;
          case "glossary":
            return <Glossary key={i} items={block.items} />;
          case "schedule":
            return <Schedule key={i} title={block.title} items={block.items} />;
          case "image":
            return <FigureImage key={i} {...block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
