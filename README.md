# Muhammad Momin Tariq — Portfolio

A single-page developer portfolio built with React + Vite. Dark theme with a
red / white / grey / black palette, styled around a "systems console" motif,
with a dedicated section for SOLVIQX (solviqx.com), the software company
Muhammad founded.

All editable content lives in `src/data.js`: profile, skills, projects,
experience, education, socials and the SOLVIQX founder block.

## Animation

- **Hero**: staggered entrance on load.
- **Scroll reveal**: section headings and timeline rows slide in as they enter the screen.
- **Assemble**: cards (SOLVIQX services, skills, projects, education, contact)
  fly in from different directions and snap together, and replay when you
  scroll back. Implemented with an `IntersectionObserver` in `App.jsx` and
  the `.assemble` / `.asm` classes in `App.css`.
- A scroll-progress bar runs along the top.
- Everything respects `prefers-reduced-motion`.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploying to Cloudflare (momin.solviqx.com)

`wrangler.jsonc` is included. In Cloudflare: Workers & Pages, create from this
GitHub repo, build command `npm run build`, deploy command `npx wrangler deploy`.
Then add the custom domain `momin.solviqx.com` to the Worker. Every push to
`main` redeploys automatically.

## Deploying to Vercel (alternative)

**Option A — via GitHub (recommended)**

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repo.
3. Vercel auto-detects Vite. Framework preset: **Vite**. Build command:
   `npm run build`. Output directory: `dist`. Click **Deploy**.

**Option B — via Vercel CLI**

```bash
npm i -g vercel
vercel
```

Follow the prompts; it will detect the Vite config automatically.

A `vercel.json` is already included so client-side routing (scrolling to
section anchors) works correctly on refresh.

## Project structure

```
src/
  data.js              ← ALL editable content lives here
  App.jsx              ← assembles the page sections
  App.css              ← all component styling
  index.css            ← design tokens (colors, fonts, base layout)
  components/
    Navbar.jsx
    Hero.jsx           ← intro section with your photo
    Founder.jsx        ← SOLVIQX founder section (logo + service tiles)
    Skills.jsx
    Projects.jsx       ← pulls from data.js → projects (from GitHub)
    Experience.jsx     ← pulls from data.js → experience
    Education.jsx      ← pulls from data.js → education
    Contact.jsx        ← socials + "Made by SOLVIQX" footer
public/
  images/profile.png   ← your photo
  images/solviqx-*.png ← SOLVIQX logo, wordmark and mark
```
