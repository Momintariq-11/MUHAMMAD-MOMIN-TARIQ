# Muhammad Momin Tariq — Portfolio

A single-page developer portfolio built with React + Vite. Dark theme with a
red / white / grey / black palette, styled around a "systems console" motif
to match a background spanning iOS, Java desktop, and full-stack development.

## Before you deploy — read this

Two things in `src/data.js` are **placeholders**, not real data:

1. **`education`** — I could not access your LinkedIn profile page. LinkedIn
   blocks automated tools from reading individual profile URLs (yours sits
   behind a login wall), so nothing on the internet has your actual
   education history indexed publicly. Open `src/data.js`, find the
   `education` array, and replace every `REPLACE ME` field with your real
   degree, institution, dates, and details.
2. **`experience`** — same situation. Replace the `experience` array with
   your real work/internship history from LinkedIn.
3. **Email** — in `socials`, replace `REPLACE_ME@example.com` with your
   real email address (in both the `href` and `handle` fields).

Everything else — your name, photo, GitHub projects, and the skills you
specified (iOS App Development, Java Desktop Development, Full-Stack
Development) — is already filled in. The six projects in `projects` were
pulled directly from your public repositories at
[github.com/Momintariq-11](https://github.com/Momintariq-11).

If you add new repos later, just add a new object to the `projects` array
in `src/data.js` — no other file needs to change.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploying to Vercel

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
    Skills.jsx
    Projects.jsx       ← pulls from data.js → projects (from GitHub)
    Experience.jsx     ← pulls from data.js → experience (PLACEHOLDER)
    Education.jsx      ← pulls from data.js → education (PLACEHOLDER)
    Contact.jsx         ← socials + footer
public/
  images/profile.png   ← your photo
```
