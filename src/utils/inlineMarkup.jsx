import { Link } from "react-router-dom";

// Tiny inline-markup parser used across all content copy, so the content
// data files can stay plain, readable strings instead of JSX.
// Supported: **bold**, `code`, [label](url) — internal (starting with "/")
// links use react-router's <Link>, everything else opens in a new tab.
const TOKEN_RE = /\*\*(.+?)\*\*|`(.+?)`|\[(.+?)\]\((.+?)\)/g;

export function renderInline(text) {
  if (!text) return null;

  const nodes = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
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
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
