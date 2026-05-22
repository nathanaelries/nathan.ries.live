# ries.live

Source for **[ries.live](https://ries.live)**, my portfolio site.

[Nathanael Ries](https://github.com/nathanaelries). Infrastructure & DevOps Engineer. eDiscovery Platform Specialist. 7+ years in systems administration, 13+ years in eDiscovery.

## Stack

| Layer | Choice |
| --- | --- |
| Generator | Astro 5 (fully static) |
| Styling | Tailwind CSS |
| Blog | Astro Content Collections with a Zod-typed schema |
| Contact form | Cloudflare Turnstile + Netlify Function + Netlify Forms |
| Hosting | Netlify, deployed from GitHub on push to `main` |
| Sitemap | `@astrojs/sitemap` (auto-generated) |

## Engineering choices worth knowing

- **Zero JavaScript at runtime on every page except the contact form.** The home page is `~30 KB` of HTML and `~40 KB` of CSS. No client framework, no hydration tax. Crawlers, AI scrapers, and OG inspectors all see real content. This site started life as a React SPA; the [migration commit](https://github.com/nathanaelries/nathan.ries.live/commit/b739ec2) is in the history.
- **The contact form is an Astro island.** Only the form hydrates client-side, only when scrolled into view. Loads Turnstile lazily; the rest of the site stays JS-free.
- **The form's POST is server-verified.** A [Netlify Function](./netlify/functions/contact.js) re-verifies the Turnstile token against Cloudflare's siteverify API, validates the email format, rejects ~5,000 disposable-email domains, then forwards to Netlify Forms. A client-side bypass of any of these checks fails server-side.
- **The disposable-email blocklist refreshes itself.** A [monthly GitHub Action](./.github/workflows/refresh-disposable-blocklist.yml) pulls the latest list from [`disposable-email-domains/disposable-email-domains`](https://github.com/disposable-email-domains/disposable-email-domains), opens a PR, and auto-merges if the build passes.
- **Operational config lives in [`netlify.toml`](./netlify.toml), not the Netlify dashboard.** Security headers, cache rules, functions directory, and Node version are all version-controlled. The dashboard is the single source of truth for nothing except domain and SSL setup.

## Local development

```sh
npm install
npm run dev       # astro dev server with HMR
npm run build     # production build to dist/
npm run preview   # serve dist/ locally
```

Requires Node 20+.

## Deployment

See [`DEPLOY.md`](./DEPLOY.md) for the full deploy workflow, build configuration, and Netlify setup notes.

## Contact

Email is best: **nathanael.ries at gmail dot com**. Or use the form on the site. Open to remote DevOps / Platform / Infrastructure roles.
