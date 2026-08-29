# Hitchhiker's Guide to FMC

A Ukrainian-language tutorial site for **FMC (Fewest Moves Challenge)** —
the Rubik's Cube discipline where the goal is to find the shortest solution
rather than the fastest one.

The guide walks through the full path from fundamentals to advanced play:
blockbuilding, EO, NISS, Domino Reduction, HTR, slice-move insertions, and
bonus advanced topics (JEO, JZP, ARM), plus a tool/resource library and a
community hub.

## Tech stack

- [React](https://react.dev/) 18 + [Vite](https://vitejs.dev/) 5
- [React Router](https://reactrouter.com/) for client-side routing
- Plain CSS Modules for styling — no CSS framework
- Fully static: no backend, no database, all content is bundled at build time

## Project structure

```
src/
├── content/        # All guide text as plain JS data (source of truth)
├── components/
│   ├── ui/         # Small reusable content-rendering blocks
│   └── layout/     # Page shell: AppShell, Sidebar, Topbar, Footer
├── pages/          # One page per guide section
├── hooks/          # useScrollToHash, useActiveSection (scrollspy), etc.
└── utils/          # inlineMarkup — mini **bold**/`code`/[link]() parser
```

Content (paragraphs, tables, resource lists) is kept entirely separate from
JSX in `src/content/*.js`. `navigation.js` is the single source of truth for
site structure — the sidebar, mobile menu, and scrollspy all read from it.

See [CLAUDE.md](./CLAUDE.md) for a more detailed breakdown of the
architecture and conventions used across the codebase.

## Getting started

```bash
npm install
npm run dev       # start the local dev server
```

## Available scripts

| Command           | Description                                  |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Start the Vite dev server with HMR            |
| `npm run build`    | Generate the sitemap, then build to `dist/`   |
| `npm run preview`  | Preview the production build locally          |
| `npm run lint`     | Run ESLint across the project                 |

## Deployment

The site is a static SPA and deploys as-is to [Vercel](https://vercel.com/)
(see [vercel.json](./vercel.json)) or any static host, provided all routes
are rewritten to `index.html`.

## Content source

The original, more detailed guide (including in-depth DR/HTR walkthroughs)
lives in a Google Doc owned by the project maintainer and isn't stored in
this repository. If content needs to be verified or expanded, ask the
maintainer for the current document link.

## Language

The guide's content is written in Ukrainian, as it targets the
Ukrainian-speaking speedcubing community.
