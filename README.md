# Malaravan R — Portfolio (React)

This is the React + Vite conversion of your portfolio, with scroll/entrance animations
(via `framer-motion`), updated skills, a reworked Projects section, and a new
certificate.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL. For a production build:

```bash
npm run build
npm run preview
```

## What changed from the original HTML site

- **Framework**: whole site rebuilt as React components (`src/components/*.jsx`),
  data-driven from `src/data/*.js`, instead of static HTML.
- **Animations**: sections fade/slide in on scroll, skill bars fill when they enter
  view, cards lift on hover, and the hero text staggers in on load — all via
  `framer-motion`.
- **Skills** (`src/data/skills.js`): JavaScript 90%, React 90%, Python 95%,
  Django 85%, MySQL 93% (others unchanged).
- **Projects** (`src/data/projects.js`):
  - Removed: Portfolio Website, Hospital Management System.
  - Kept: News Aggregator, Internship Management System.
  - Added: **Employee Management System** (uses the HR photo you uploaded —
    swap in real screenshots later at `src/assets/project-employee-mgmt.jpg`,
    and add your GitHub repo link in `projects.js`, the `github` field is
    currently empty so the button is hidden until you add one).
  - Renamed: **RetinaScan — Diabetic Retinopathy Detection Platform**
    (was "Diabetic Retinopathy"), now tagged Full Stack + Deep Learning with
    feature bullets describing the Django/React/MySQL stack. Adjust the
    feature list in `projects.js` if your actual stack differs.
  - Every project card now shows a short feature list — edit these in
    `src/data/projects.js`.
- **Certificates** (`src/data/certificates.js`): added your HackerRank
  **SQL (Basic)** certificate as a third card.
- **Filter bar**: the Frontend/Backend/Database/Deep Learning/Full Stack nav
  on the Projects section is now functional — it filters the grid.
- **Contact form**: front-end only for now (no email is actually sent). Wire it
  up to a service like Formspree or EmailJS, or your own backend, inside
  `src/components/Contact.jsx`.

## Folder structure

```
src/
  components/   Navbar, Hero, About, Skills, Projects, Certificates, Contact
  data/         skills.js, projects.js, certificates.js — edit content here
  assets/       images + resume
  App.jsx       composes all sections
  App.css       all styling (ported from your original style.css)
public/
  Malaravan-Resume.pdf   served at /Malaravan-Resume.pdf
```

## Deploying

This is a standard Vite app — `npm run build` produces a `dist/` folder you
can deploy to Vercel, Netlify, GitHub Pages, etc.
