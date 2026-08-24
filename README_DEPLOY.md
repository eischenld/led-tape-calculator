# LED Tape Project Calculator — Cloudflare Pages package

Version: 0.3.0-beta (2026-08-23)

## What is included
- `guides.html` — guide library landing page
- 8 SEO-oriented LED tape guide pages
- `guide.css` — shared guide styling
- `sitemap.xml` — custom-domain sitemap
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
- Public feedback/contact email is set to `eischenld@gmail.com`.

## Important before charging for it
- Validate the electrical assumptions and recommendations with representative 5V, 12V, and 24V projects.
- Review the privacy page if analytics, affiliate tracking, accounts, or cloud project storage are added.
- Keep the beta disclaimer until calculation logic and edge cases have been independently tested.


## Usage analytics: GA4 through Cloudflare Zaraz

GA4 Measurement ID:

`G-28ZMLY8PWQ`

Configure Google Analytics 4 in Cloudflare Zaraz for `ledtapecalculator.com` using the Measurement ID above.

The calculator is instrumented for these custom events:

- `calculate_project`
- `export_pdf`
- `unit_changed`
- `tape_type_changed`
- `feedback_clicked`

Event properties are intentionally limited to non-identifying product-usage information such as unit system, voltage, tape category/type, and (for IC tape PDF export) calculated pixel-group count. Project names and detailed calculator inputs are not intentionally sent.

The event code checks for `window.zaraz.track()` before sending, so the calculator continues to work normally if analytics is blocked or Zaraz is unavailable.


## New in 0.2.0-beta
Eight public guide pages were added:
- 5V vs 12V vs 24V LED Tape
- Power Supply Sizing
- Voltage Drop
- Power Injection
- RGB vs RGBW vs RGB+CCT
- WS2811 vs WS2812B vs WS2815
- LED Tape Wire Size
- DMX / sACN / Art-Net Control

The homepage now links into the guide library. Canonical URLs and the sitemap use `https://ledtapecalculator.com`.

\n## New in 0.3.0-beta
- Added interactive DMX DIP Switch Calculator.
- Converts DMX start addresses to DIP switch settings and vice versa.
- Defaults to switches 1–9 as address bits; switch 10 is manufacturer-specific.
- Optional switch-10-as-512 layout when the decoder manual specifies it.
- Added Zaraz events for DMX DIP usage.
- Expanded voltage guide to 5V vs 12V vs 24V.
- Added a 301 redirect from the old 12V-vs-24V guide URL.
