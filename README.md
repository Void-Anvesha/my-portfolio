<div align="center">

<br/>

```
 █████╗ ███╗   ██╗██╗   ██╗███████╗███████╗██╗  ██╗ █████╗ 
██╔══██╗████╗  ██║██║   ██║██╔════╝██╔════╝██║  ██║██╔══██╗
███████║██╔██╗ ██║██║   ██║█████╗  ███████╗███████║███████║
██╔══██║██║╚██╗██║╚██╗ ██╔╝██╔══╝  ╚════██║██╔══██║██╔══██║
██║  ██║██║ ╚████║ ╚████╔╝ ███████╗███████║██║  ██║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═══╝  ╚═══╝  ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
```

**A Developer Original.**

<br/>

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![CSS](https://img.shields.io/badge/Plain_CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

<br/>

[![Live Site](https://img.shields.io/badge/🚀%20Live%20Site-Visit%20Portfolio-00c853?style=for-the-badge)](https://my-portfolio-five-roan-hmovi5ii9u.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/⭐%20Star%20on%20GitHub-Source%20Code-24292e?style=for-the-badge&logo=github)](https://github.com/Void-Anvesha/my-portfolio)

<br/>

</div>

---

## 🎬 What is this?

This is the personal portfolio of **Anvesha Rastogi** — a **responsive React site** built with Vite and plain CSS.

> *Most portfolios are a wall of text. This one lets every visitor pick who they are and browse what matters to them.*

Visitors land on an entrance screen, choose one of **four visitor profiles**, and move through a clean, focused home page — a hero, an **Explore My Portfolio** row, and a compact footer. Everything deeper (experience, projects, skills, certifications, contact) lives on its own dedicated page, so nothing is repeated on Home.

---

## 🎯 Why it's built this way

| Problem with typical portfolios | How this one handles it |
|---|---|
| 📜 **One long scroll** | Home stays short; details live on dedicated pages |
| 🙋 **Same content for every visitor** | Four visitor profiles with a persistent, session-wide selection |
| 🔗 **Broken deep links** | Every page works as a direct link, with native Back / Forward support |
| 📱 **Desktop-first layouts** | Responsive on desktop and mobile, with automated checks for both |
| 🌐 **Heavy third-party dependencies** | No backend, no env vars, and no external image service |

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🎭 **Visitor Profiles** | Four personas on the entrance screen; the choice persists for the browser session and drives the navbar avatar |
| 🧭 **Explore My Portfolio** | Five cards on Home, each opening a dedicated detail page |
| 📄 **Dedicated Detail Pages** | Professional, Skills, Projects, Hire Me, and Certifications, each with its own route |
| 🗂️ **Project Case Studies** | Category filters, expandable case studies, and keyboard-accessible tabs |
| 🖼️ **Enlargeable Screenshots** | ClinSight screenshot opens in a larger view |
| 📥 **One-Click Résumé** | *View Resume* button serves the PDF directly from `public/` |
| 🔁 **Content in One File** | All text, links, and metrics are edited in `src/data.js` |
| 🧪 **End-to-End Tested** | Playwright covers navigation, personas, résumé delivery, and responsive spacing |
| ⚡ **Zero-Config Deploy** | Vercel-ready with no backend and no environment variables |
| ♿ **Accessible Navigation** | Keyboard-friendly tabs and native browser history |

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [React](https://react.dev/) | Component-based UI and routing between detail pages |
| **Build Tool** | [Vite](https://vite.dev/) | Fast dev server and optimized production builds |
| **Styling** | Plain CSS | Custom responsive design; revised styles live in `src/reference.css` |
| **Typography** | Google Fonts | Loaded with local system-font fallbacks |
| **Testing** | [Playwright](https://playwright.dev/) | Desktop and mobile browser checks |
| **Hosting** | [Vercel](https://vercel.com/) | Static deployment; `vercel.json` maps routes to the React entry |
| **Language** | JavaScript (ES modules) | Core application code |

---

## 🧭 Pages & Routes

The navbar opens four pages; **Explore My Portfolio** adds a fifth. All routes work as direct links, preserve the selected profile, and respect browser Back / Forward.

| Route | What you'll find |
|---|---|
| `/` | Entrance, hero, Explore My Portfolio, footer |
| `/professional` | Experience and education |
| `/skills` | Technical skills |
| `/projects` | Case studies with category filters |
| `/certifications` | Certifications and awards |
| `/hire-me` | Contact details and links |

Page content is rendered by `src/DetailPage.jsx` using shared data from `src/data.js`.

---

## ⚡ Installation & Setup

### Prerequisites

- **Node.js** 18 or higher
- `git` installed

### 1. Clone the Repository

```bash
git clone https://github.com/Void-Anvesha/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

---

## ▶️ How to Run

```bash
npm run dev
```

Vite prints a local URL (typically **`http://localhost:5173`**) — open it in your browser.

### Build & Preview

```bash
npm run build
npm run preview
```

---

## 🚀 Deploying to Vercel

1. Import this repository into [Vercel](https://vercel.com/new)
2. Keep the **Vite** preset — it uses `npm run build` with `dist` as the output directory
3. Deploy

No backend or environment variables are required. `vercel.json` rewrites the detail-page routes to the React entry point so direct links work in production.

---

## ✏️ Customizing the Content

| What to change | Where |
|---|---|
| Text, links, experience, projects, skills, metrics | `src/data.js` |
| Card photographs | `photography` mapping in `src/data.js` |
| Photo sources and licences | `public/images/CREDITS.md` |
| Résumé PDF | Replace `public/Anvesha-Rastogi-Resume.pdf` |
| Design styles | `src/reference.css` |
| Detail-page layout | `src/DetailPage.jsx` |

> 📌 The optional `scripts/resume.mjs` generator writes a **separate draft PDF** and never overwrites your original résumé.

> 📌 Card photographs are stored locally in `public/images`, so the site never depends on an external image service.

---

## 🧪 Browser Checks

End-to-end tests run on Playwright:

```bash
npx playwright install chromium
npm run build
npx playwright test
```

**Checks cover:**

- Desktop and mobile entry
- Dedicated detail pages and direct links
- Browser history (Back / Forward)
- Visitor profile persistence
- Résumé delivery
- Responsive spacing
- No duplicate detail sections on Home

---

## 📁 Project Structure

```
my-portfolio/
│
├── public/
│   ├── images/                     # Local card photographs + CREDITS.md
│   └── Anvesha-Rastogi-Resume.pdf  # Original résumé served by "View Resume"
├── scripts/
│   └── resume.mjs                  # Optional draft-résumé generator
├── src/
│   ├── data.js                     # All portfolio content in one place
│   ├── DetailPage.jsx              # Renders every dedicated detail page
│   └── reference.css               # Revised design styles
├── tests/                          # Playwright end-to-end checks
├── index.html                      # Vite entry
├── playwright.config.js
├── vercel.json                     # Route rewrites for deployment
├── package.json
├── .gitignore
└── README.md
```

---

## 🔭 Future Roadmap

- [ ] 🌙 **Theme Toggle** — Light and dark mode
- [ ] ✍️ **Blog / Writing Section** — Notes on projects and learnings
- [ ] 📬 **Contact Form** — Direct messages without leaving the site
- [ ] 🎞️ **Project Demo Reels** — Short walkthrough clips on case-study pages
- [ ] 🔎 **Portfolio Search** — Jump to any project, skill, or certification
- [ ] 📈 **Privacy-Friendly Analytics** — See which profiles and pages get the most attention
- [ ] 🌐 **Multi-language Support** — Hindi and other regional languages
- [ ] 🧼 **Lighthouse 100s** — Performance, accessibility, and SEO polish

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

<br/>

**Built to be browsed, not just scrolled.**

<br/>

[![Live Site](https://img.shields.io/badge/🚀%20Live%20Site-Visit%20Portfolio-00c853?style=for-the-badge)](https://my-portfolio-five-roan-hmovi5ii9u.vercel.app)
[![GitHub](https://img.shields.io/badge/⭐%20Star%20on%20GitHub-Source%20Code-24292e?style=for-the-badge&logo=github)](https://github.com/Void-Anvesha/my-portfolio)

<br/>

*If this portfolio inspired yours, give it a ⭐ on GitHub — it helps other developers find the project.*

</div>
