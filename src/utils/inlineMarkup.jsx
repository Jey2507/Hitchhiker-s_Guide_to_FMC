import { Link } from "react-router-dom";
import { GlossaryTerm } from "../components/ui/GlossaryTerm.jsx";
import { GLOSSARY_MATCH_RE, lookupGlossaryTerm } from "./glossaryMatch.js";

// Tiny inline-markup parser used across all content copy, so the content
// data files can stay plain, readable strings instead of JSX.
// Supported: **bold**, `code`, [label](url) — internal (starting with "/")
// links use react-router's <Link>, everything else opens in a new tab.
// Plain-text runs (i.e. not inside bold/code/link — those are already
// explicit enough) also get scanned for glossary terms (src/content/glossary.js)
// and wrapped in a hover/tap tooltip via <GlossaryTerm>.
const TOKEN_RE = /\*\*(.+?)\*\*|`(.+?)`|\[(.+?)\]\((.+?)\)/g;

function withGlossaryTerms(text, keyPrefix) {
  GLOSSARY_MATCH_RE.lastIndex = 0;
  if (!GLOSSARY_MATCH_RE.test(text)) return [text];
  GLOSSARY_MATCH_RE.lastIndex = 0;

  const parts = [];
  let last = 0;
  let m;
  let i = 0;
  while ((m = GLOSSARY_MATCH_RE.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const entry = lookupGlossaryTerm(m[0]);
    parts.push(
      <GlossaryTerm key={`${keyPrefix}-${i++}`} term={entry.term} def={entry.def}>
        {m[0]}
      </GlossaryTerm>
    );
    last = GLOSSARY_MATCH_RE.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function renderInline(text) {
  if (!text) return null;

  const nodes = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(...withGlossaryTerms(text.slice(lastIndex, match.index), `g${key++}`));
    }

    const [, bold, code, linkLabel, linkUrl] = match;
    if (bold !== undefined) {
      nodes.push(<strong key={key++}>{bold}</strong>);
    } else if (code !== undefined) {
      nodes.push(
        <code className="inline-code" key={key++}>
          {code}
        </code>
      );
    } else if (linkLabel !== undefined) {
      if (linkUrl.startsWith("/")) {
        nodes.push(
          <Link key={key++} to={linkUrl} className="inline-link">
            {linkLabel}
          </Link>
        );
      } else {
        nodes.push(
          <a key={key++} href={linkUrl} className="inline-link" target="_blank" rel="noreferrer">
            {linkLabel}
          </a>
        );
      }
    }

    lastIndex = TOKEN_RE.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(...withGlossaryTerms(text.slice(lastIndex), `g${key++}`));
  }

  return nodes;
}
