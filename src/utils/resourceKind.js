// Classifies a resource URL so ResourceList can show a meaningful tag
// (video / sheet / doc / pdf / tool) without every content entry having to
// specify it by hand.
export function getResourceKind(url = "") {
  if (/youtube\.com|youtu\.be/.test(url)) return { kind: "video", label: "відео" };
  if (/docs\.google\.com\/spreadsheets/.test(url)) return { kind: "sheet", label: "таблиця" };
  if (/docs\.google\.com\/document/.test(url)) return { kind: "doc", label: "документ" };
  if (/docs\.google\.com\/drawings/.test(url)) return { kind: "doc", label: "схема" };
  if (/drive\.google\.com/.test(url) || /\.pdf(\?|$)/.test(url)) return { kind: "pdf", label: "PDF" };
  if (/speedsolving\.com|reddit\.com/.test(url)) return { kind: "thread", label: "форум" };
  return { kind: "tool", label: "сайт" };
}
