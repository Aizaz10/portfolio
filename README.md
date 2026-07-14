# Aizaz Ahmed — Portfolio

Personal portfolio site. Built with Next.js 14 (App Router) + Tailwind CSS.
This is a **separate project from Bright Mart** — no shared repo, no shared Supabase project.

## Before you run it

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

## Things to fill in before deploying

**1. Contact form (Formspree)**
This site's contact form uses [Formspree](https://formspree.io) so you don't need a backend or database.
- Create a free Formspree account, create a new form, and copy your form endpoint.
- Open `components/Contact.tsx` and replace:
  ```ts
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
  ```
  with your real endpoint.

**2. Direct contact links**
In the same file (`components/Contact.tsx`), replace these placeholders:
```ts
const EMAIL = "your.email@example.com";
const WHATSAPP = "https://wa.me/92XXXXXXXXXX";
const LINKEDIN = "https://linkedin.com/in/your-profile";
const GITHUB = "https://github.com/your-username";
```

**3. Resume**
Add your resume PDF as `public/resume.pdf`. The "Download Resume" button in the Contact
section already links to `/resume.pdf` — it will work automatically once the file is added.

## Deploying to Vercel

1. Push this project to a **new GitHub repo** (separate from Bright Mart's repo).
2. Go to [vercel.com](https://vercel.com) → New Project → import the new repo.
3. No environment variables are required (Formspree handles form submissions directly from
   the browser). Deploy.
4. Optional: add a custom domain under Project Settings → Domains.

## Project structure

```
app/
  layout.tsx      — fonts, metadata
  page.tsx         — assembles all sections
  globals.css      — base styles, design tokens
components/
  Nav.tsx
  Hero.tsx         — signature terminal element
  About.tsx
  Skills.tsx
  Projects.tsx     — Bright Mart (flagship) + FYP
  Services.tsx
  Contact.tsx      — form + direct links + resume button
  Footer.tsx
```
