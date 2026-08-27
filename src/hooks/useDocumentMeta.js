import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NAV } from "../content/navigation.js";

const SITE_TITLE = "Путівник по FMC для космотуристів";
const SITE_URL = "https://tutorial-fmc.vercel.app";

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

// Keeps <title>, the description meta and the OG/canonical tags in sync
// with the current route. Reuses each page's `label`/`tagline` from
// src/content/navigation.js (the single source of truth for site structure)
// instead of duplicating per-page copy just for SEO.
export function useDocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = NAV.find((p) => p.path === pathname) ?? NAV[0];
    const isHome = page.path === "/";
    const title = isHome ? SITE_TITLE : `${page.label} — Путівник по FMC`;
    const description = page.tagline;
    const url = `${SITE_URL}${page.path}`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
  }, [pathname]);
}
