# LED Tape Project Calculator — Cloudflare Pages package

Version: 0.1.0-beta (2026-08-23)

## What is included
- `index.html` — calculator app
- `about.html` — beta/about page
- `privacy.html` — current no-account/no-project-storage privacy notice
- `404.html` — not-found page
- `favicon.svg` and `og-image.png` — browser/social assets
- `site.webmanifest` — installable-site metadata
- `robots.txt` — allows indexing
- `_headers` — Cloudflare Pages security headers

## Recommended Cloudflare setup
Because this calculator will be updated frequently, use a Git-integrated Cloudflare Pages project if practical. Direct Upload is fine for a same-day launch, but Cloudflare currently states that a Direct Upload Pages project cannot later be converted to Git integration; you would need to create a new project to switch.

### Git-connected deployment
1. Put the contents of this folder at the root of a GitHub repository.
2. In Cloudflare: Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository.
4. Framework preset: None / Static HTML.
5. Build command: `exit 0`.
6. Build output directory: `.` (repository root).
7. Deploy.

### Direct Upload deployment
Cloudflare: Workers & Pages → Create application → Get started → Drag and drop your files. Upload this folder or the included zip file contents.

## After the first deployment
- Enable Cloudflare Web Analytics from the Pages project's Metrics area if desired. Cloudflare Pages can inject the analytics beacon automatically on the next deployment.
- Add a custom domain when ready.
- Once the final custom domain is known, add an absolute canonical URL / sitemap if desired. The current canonical link is relative and works without knowing the launch hostname.
- Add a dedicated feedback email or feedback form before broad promotion. No public email address was embedded in this package.

## Important before charging for it
- Validate the electrical assumptions and recommendations with representative 5V, 12V, and 24V projects.
- Review the privacy page if analytics, affiliate tracking, accounts, or cloud project storage are added.
- Keep the beta disclaimer until calculation logic and edge cases have been independently tested.
