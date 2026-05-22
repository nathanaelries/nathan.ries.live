# Deploying and updating ries.live

This site is hosted on **Netlify**, connected to the [GitHub repo](https://github.com/nathanaelries/nathan.ries.live). Every push to `main` triggers a build and deploy.

## Build configuration

All build settings live in [`netlify.toml`](./netlify.toml) at the repo root, so the deploy is reproducible and version-controlled (no dashboard-only surprises).

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | `20` |
| SPA redirect | `/* -> /index.html (200)` |
| Asset cache | `1 year, immutable` for `/assets/*` |
| Security headers | `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` |

If the Netlify dashboard has any of these set differently, **delete them from the dashboard** so the toml is the single source of truth.

## Day-to-day: updating content

The whole workflow is one push:

```powershell
# 1. Make your edits (copy, blog post, project, photo, etc.)
# 2. Build locally to sanity-check
npm run build

# 3. Preview the production bundle
npm run preview
# opens at http://localhost:4173

# 4. Commit and push
git add <files>
git commit -m "Short description of the change"
git push origin main
```

Netlify will build and deploy in roughly 1 to 2 minutes. Watch the build at https://app.netlify.com/.

### Updating the résumé

The Hero and Contact buttons link to `/Nathanael_Ries_Resume.pdf`. To replace it:

1. Confirm placeholder text (`[2023]`, `[month/yr]`, `[field]`, `[college]`) is filled in on your tailored PDF.
2. Copy the PDF into `public/` with the neutral filename:
   ```powershell
   Copy-Item .\Your_Tailored_Resume.pdf .\public\Nathanael_Ries_Resume.pdf
   ```
3. `git add public/Nathanael_Ries_Resume.pdf && git commit -m "Update résumé" && git push`.

The `.gitignore` deliberately excludes PDFs at the repo root so tailored versions (e.g., `Nathanael_Ries_Resume_KLDiscovery.pdf`) don't get accidentally committed. Only the file at `public/` is published.

### Adding a project to the slate

Edit [`src/data/projects.js`](./src/data/projects.js). Add an object with `name`, `tagline`, `description`, `stack` (array), `repo` (URL), `featured` (boolean). Push. Done.

### Adding a blog post

Drop a markdown file into `public/articles/` (or wherever your existing blog loader expects). The 4 most recent commits show the pattern.

## Initial Netlify setup (reference, in case you ever need to recreate it)

If the site ever needs to be re-connected:

1. New Site in Netlify dashboard, "Import an existing project".
2. Choose GitHub, authorize, pick `nathanaelries/nathan.ries.live`.
3. Netlify will detect `netlify.toml` and pre-fill build settings. Confirm and deploy.
4. Add custom domain `ries.live` under Domain Management.
5. Let Netlify provision a Let's Encrypt cert (automatic).

DNS records on whoever holds the `ries.live` domain:
- Apex `ries.live`: `A` record pointing to `75.2.60.5` (Netlify's load balancer), or use Netlify DNS.
- Optional `www`: `CNAME` to `<site-name>.netlify.app`.

## Branch deploys and previews

Netlify automatically creates a deploy preview for every PR. Use this to share changes before merging:

```powershell
git checkout -b copy-tweak
# make changes
git push -u origin copy-tweak
# open a PR; Netlify will comment with a preview URL
```

Don't develop directly on `main` once anyone else is looking at the site or has the URL.

## Local development

```powershell
npm install            # first time only
npm run dev            # vite dev server on http://localhost:5173 with HMR
npm run build          # production build to dist/
npm run preview        # serve dist/ on http://localhost:4173
```

## Things that have bitten me / will bite you

- **`dist/` was committed to git** historically. It is now in `.gitignore`. To stop tracking the existing copy:
  ```powershell
  git rm -r --cached dist
  git commit -m "Stop tracking build output"
  ```
- **Netlify won't rebuild on a docs-only PR if all changed files are gitignored.** Push at least one tracked file.
- **Adding heavy runtime deps** (e.g., jQuery plugins) bloats the JS bundle and tanks Lighthouse scores. Check `npm run build` output for chunk sizes before committing a new dependency.
- **Tailwind purge** only sees class names that appear in string form in your JSX. Dynamic class names (`bg-${color}-500`) get stripped from the production CSS unless safelisted in `tailwind.config.js`.

## Quick sanity-check before pushing

```powershell
npm run build           # must succeed
git status              # no surprise files staged
git diff --staged       # read what you're about to push
```

If those three pass, push with confidence.
