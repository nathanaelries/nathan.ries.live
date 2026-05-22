# Deploying and updating ries.live

This site is built with **Astro 5 + Tailwind**, hosted on **Netlify**, and
deployed from the [GitHub repo](https://github.com/nathanaelries/nathan.ries.live).
Every push to `main` triggers a build and a publish. Every PR against `main`
gets a Deploy Preview at a `deploy-preview-N--nathanrieslive.netlify.app` URL.

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Generator | Astro 5 | Ships fully-rendered HTML, zero JS at runtime. Crawlers, AI scrapers, and OG inspectors all see real content. |
| Styling | Tailwind CSS | Consistent design tokens; no custom CSS to maintain. |
| Content | Astro Content Collections | Blog posts are typed markdown (Zod schema in `src/content/config.ts`). |
| Forms | Netlify Forms | Server-side submission handling, honeypot spam filter, no JS required. |
| Host | Netlify | Branch-aware deploys, Deploy Previews on PRs, edge caching. |

## Build configuration

All build settings live in [`netlify.toml`](./netlify.toml) at the repo root.

| Setting | Value |
| --- | --- |
| Build command | `npm run build` (runs `astro build`) |
| Publish directory | `dist` |
| Node version | `22` |
| SPA redirect | `/* -> /index.html (200)` (vestigial; Astro emits real HTML at every route) |
| Asset cache | `1 year, immutable` for `/assets/*` and `/_astro/*` |
| Security headers | `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` |

If the Netlify dashboard has any of these set differently, **clear them from
the dashboard** so the toml is the single source of truth.

## Day-to-day: updating content

```powershell
# 1. Make your edits
# 2. Build locally to sanity-check
npm run build

# 3. Preview the production bundle
npm run preview
# opens at http://localhost:4321

# 4. Commit and push
git add <files>
git commit -m "Short description of the change"
git push origin main
```

Netlify will build and publish in ~20 seconds. Watch the build at
https://app.netlify.com/.

### Adding a blog post

Drop a markdown file into [`src/content/blog/`](./src/content/blog/) with
frontmatter matching the schema in [`src/content/config.ts`](./src/content/config.ts):

```markdown
---
title: My new post
date: 2026-05-22
image: /images/blog/my-post.jpg
excerpt: One-sentence summary that appears on the index and in OG cards.
---

# Body in markdown
```

Image goes in `public/images/blog/`. Push. Astro rebuilds the blog index and
generates the post URL at `/blog/<filename-without-extension>/`.

Set `draft: true` in the frontmatter to keep a post out of the build.

### Adding a project to the slate

Edit [`src/data/projects.js`](./src/data/projects.js). Add an object with
`name`, `tagline`, `description`, `stack` (array), `repo` (URL), `featured`
(boolean). Push.

### Updating Experience or Skills

[`src/data/experiences.js`](./src/data/experiences.js) and
[`src/data/skills.js`](./src/data/skills.js). Both are plain ES modules
imported by the corresponding `.astro` components.

### Updating the résumé

The Hero and Contact buttons link to `/Nathanael_Ries_Resume.pdf`.

1. Confirm placeholder text on the tailored PDF is filled in (no `[brackets]`).
2. Copy it into `public/` with the neutral filename:
   ```powershell
   Copy-Item .\Your_Tailored_Resume.pdf .\public\Nathanael_Ries_Resume.pdf
   ```
3. Commit and push.

The `.gitignore` excludes PDFs at the repo root so tailored versions
(e.g., `Nathanael_Ries_Resume_KLDiscovery.pdf`) don't get committed by
accident. Only the file at `public/` is published.

### Contact form submissions

The contact form on `/#contact` is a plain HTML form with
`data-netlify="true"`. Netlify intercepts the POST, runs spam filtering
(honeypot field + Akismet), stores the submission in the dashboard, and
emails you if notifications are configured.

- See submissions: **Netlify dashboard → Forms → contact**
- Email notifications: **Forms → Settings → Form notifications**
- Free tier: 100 submissions/month, then the form silently stops accepting.

If the form ever stops working after a code change: Netlify only registers
forms that exist as **static HTML at build time**. The form on
[`src/components/Contact.astro`](./src/components/Contact.astro) renders
statically, but [`src/pages/index.astro`](./src/pages/index.astro) also
includes a hidden duplicate as a safety net. Don't remove either.

## Branch deploys and Deploy Previews

```powershell
git checkout -b some-change
# make changes
git push -u origin some-change
# open a PR against main on GitHub
# Netlify will post a Deploy Preview link as a check on the PR
```

The Deploy Preview URL pattern is `https://deploy-preview-N--nathanrieslive.netlify.app/`
where `N` is the PR number. Share that URL for review; never share `localhost`.

Branch deploys (every push to a non-main branch) are **disabled** by default.
PRs trigger Deploy Previews. That's intentional: PRs give you a review surface
and a clean revert handle.

## Initial Netlify setup (reference, in case you ever need to recreate it)

1. New Site in Netlify dashboard, "Import an existing project".
2. Choose GitHub, authorize, pick `nathanaelries/nathan.ries.live`.
3. Netlify will detect `netlify.toml` and pre-fill build settings.
4. Add custom domain `ries.live` under Domain Management.
5. Let Netlify provision a Let's Encrypt cert (automatic).

DNS records:
- Apex `ries.live`: `A` record to `75.2.60.5` (Netlify load balancer), or use Netlify DNS.
- Optional `www`: `CNAME` to `<site-name>.netlify.app`.

### Primary domain

`ries.live` is set as the **Primary domain** in the Netlify dashboard
(Domain management → ries.live → Options → "Set as primary domain"). All
other domain aliases (e.g., `nathan.ries.live`) auto-301-redirect to it.

This setting lives in the Netlify dashboard, not in `netlify.toml`, because
Netlify needs it to provision SSL certs correctly. If the site is ever
recreated from scratch, re-apply it after initial setup.

## Local development

```powershell
npm install            # first time only
npm run dev            # astro dev server on http://localhost:4321 with HMR
npm run build          # production build to dist/
npm run preview        # serve dist/ on http://localhost:4321
```

## Things that have bitten me / will bite you

- **`dist/` was committed to git** historically. It is now in `.gitignore`.
  If you ever see it tracked again: `git rm -r --cached dist`.
- **Tailwind purge** only sees class names that appear in string form in your
  `.astro` files. Dynamic class names (`bg-${color}-500`) get stripped unless
  safelisted in `tailwind.config.js`.
- **Netlify Forms only register at build time.** If you conditionally render a
  form in JS, Netlify won't see it. The hidden static copy in
  [`src/pages/index.astro`](./src/pages/index.astro) prevents this.
- **Adding heavy runtime deps** (React, framer-motion, jQuery plugins) defeats
  the point of moving to Astro. If you need interactivity, use Astro islands
  (`client:visible` / `client:idle`) and only on the component that needs it.

## Quick sanity-check before pushing

```powershell
npm run build           # must succeed
git status              # no surprise files staged
git diff --staged       # read what you're about to push
```

If those three pass, push with confidence.
