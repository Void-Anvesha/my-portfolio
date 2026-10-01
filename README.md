# Anvesha — A Developer Original

A responsive Netflix-inspired React portfolio, built with Vite and plain CSS. Home contains four visitor profiles, a hero, an Explore My Portfolio section linking to dedicated pages, and a compact footer. Experience, project details, skills, awards, education, and contact information live on their corresponding pages rather than repeating beneath Home.

## Run

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

Import this directory into Vercel. The Vite preset uses `npm run build` and the `dist` output directory. No backend or environment variables are required.

## Edit the content

All portfolio content is in `src/data.js`. LinkedIn, LeetCode, Career Mentor, and Sentimental Analysis links come from your supplied original resume. Pantry AI and Store Intelligence are visibly marked as previews while still linking to their GitHub repositories. GitBOT's summary and Python language were verified against https://github.com/Void-Anvesha. The remaining metrics and qualifications come from the supplied brief.

`public/Anvesha-Rastogi-Resume.pdf` is your supplied original résumé (`Anvesha_Resume.pdf`), linked by the View Resume button. To update it, replace this PDF with your latest résumé. The optional `scripts/resume.mjs` generator writes a separate draft PDF and does not overwrite your original résumé.

Fonts load from Google Fonts, with local system-font fallbacks. Card photographs are stored in `public/images`; sources and license information are in `public/images/CREDITS.md`. Change the `photography` mapping in `src/data.js` to update them. The browser does not depend on an external image service. The selected profile persists for the browser session. The profile button returns to the entrance.

## Browser checks

```sh
npx playwright install chromium
npm run build
npx playwright test
```

Checks cover desktop and mobile entry, dedicated detail pages, direct links, browser history, persona persistence, resume delivery, responsive spacing, and the absence of duplicate detail sections on Home.

The selected visitor persona persists for the browser session and controls the navbar avatar. All five Explore My Portfolio cards open dedicated detail pages. Revised design styles are in `src/reference.css`.

## Detail pages

The navbar opens `/professional`, `/skills`, `/projects`, and `/hire-me`. Explore My Portfolio also includes `/certifications`. These pages work as direct links, preserve the selected profile, and support native browser Back/Forward navigation. `vercel.json` maps these routes to the React entry point on deployment. Page content is rendered by `src/DetailPage.jsx` with shared data from `src/data.js`.

Project details include category filters, expandable case studies, keyboard-accessible tabs, and an enlargeable ClinSight screenshot.
