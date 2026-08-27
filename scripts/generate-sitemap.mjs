// Regenerates public/sitemap.xml from the page list in
// src/content/navigation.js — the single source of truth for site
// structure — so a new top-level page (a new NAV entry) shows up in the
// sitemap automatically on the next build. Section anchors (#id) aren't
// separate documents, so only top-level page paths are listed.
//
// Run manually with `npm run sitemap`, or automatically before every
// `npm run build` (wired as the "prebuild" script in package.json).
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { NAV } from "../src/content/navigation.js";

const SITE_URL = "https://tutorial-fmc.vercel.app";
const today = new Date().toISOString().slice(0, 10);

const urls = NAV.map(
  (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.path === "/" ? "1.0" : "0.7"}</priority>
  </url>`
).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outPath = path.resolve(fileURLToPath(new URL("..", import.meta.url)), "public/sitemap.xml");
await writeFile(outPath, xml, "utf-8");
console.log(`sitemap.xml written with ${NAV.length} pages -> ${outPath}`);
