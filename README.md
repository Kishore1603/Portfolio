# Kishore Kumar — Personal Portfolio

A modern, responsive personal portfolio website built for a data professional. Showcases skills, experience, certifications, GitHub projects, and blog posts.

**Live site:** https://kishore1603.github.io/Portfolio/

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Routing | React Router v7 |
| Build tool | Vite |
| Deployment | GitHub Pages (GitHub Actions) |

---

## Features

- **Hero** — Animated intro with floating data icons and live status badge
- **About** — Bio with quick-info cards (role, location, availability)
- **Skills** — Animated skill cards (SQL, Power BI, Microsoft Fabric, Excel, Business Analysis)
- **Education** — Timeline of academic background
- **Certifications** — Microsoft Fabric certification cards with optional links
- **Projects** — Auto-fetched live from the GitHub API (`Kishore1603`)
- **Blog** — JSON-based blog system with full detail pages + LinkedIn link
- **Contact** — Email, phone, LinkedIn, GitHub with a contact form

---

## Project Structure

```
src/
├── components/       # One file per section
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Certifications.tsx
│   ├── Projects.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── pages/
│   ├── Home.tsx      # Assembles all sections
│   └── BlogDetail.tsx
├── data/
│   └── blogs.json    # Add/edit blog posts here
├── utils/
│   ├── githubAPI.ts  # GitHub REST API integration
│   └── blogLoader.ts # Blog data helpers
└── types/
    └── index.ts      # Shared TypeScript interfaces
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server — open http://localhost:5173
npm run dev

# Production build
npm run build
```

---

## Adding a Blog Post

Open `src/data/blogs.json` and add a new entry:

```json
{
  "id": "unique-slug",
  "title": "Your Post Title",
  "date": "2026-03-17",
  "preview": "One or two sentence summary shown on the blog card.",
  "content": "## Heading\n\nFull markdown content here.\n\n- Bullet one\n- Bullet two",
  "tags": ["Tag1", "Tag2"],
  "source": "manual"
}
```

For a LinkedIn post, set `"source": "linkedin"` and add `"linkedinUrl": "https://..."`.

---

## Adding a Certification Link

Open `src/components/Certifications.tsx` and update the `link` field for the relevant certification.

---

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via GitHub Actions.

```bash
git add .
git commit -m "your update"
git push
```

The workflow file is at `.github/workflows/deploy.yml`.
