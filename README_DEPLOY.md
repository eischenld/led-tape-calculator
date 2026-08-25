# LED Tape Project Calculator — Cloudflare Pages package

Version: 0.3.19-beta (2026-08-24)

## What is included
- `guides.html` — guide library landing page
- 8 SEO-oriented LED tape guide pages
- `guide.css` — shared guide styling
- `sitemap.xml` — custom-domain sitemap
- `index.html` — calculator app
- `dip.html` — DMX DIP calculator, served by Cloudflare Pages at `/dip`
- `about.html` — beta/about page
- `privacy.html` — current no-account/no-project-storage privacy notice
- `404.html` — not-found page
- `favicon.png` and `og-image.png` — browser/social assets
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
- `dmx_dip_tool_used` (once per page load, on the first meaningful DIP-tool interaction)
- `dmx_dip_address_calculated`
- `dmx_dip_switch_toggled`
- `dmx_dip_full_page_toggled`

Event properties are intentionally limited to non-identifying product-usage information such as unit system, voltage, tape category/type, and (for IC tape PDF export) calculated pixel-group count. DMX DIP events use interaction type, decoder layout, representability, and a coarse address range instead of the exact address. Project names, personally identifying information, cookies, persistent IDs, and detailed calculator inputs are not intentionally sent with custom events.

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

## New in 0.3.1-beta
- Added interactive DMX DIP Switch Calculator.
- Converts DMX start addresses to DIP switch settings and vice versa.
- Defaults to switches 1–9 as address bits; switch 10 is manufacturer-specific.
- Optional switch-10-as-512 layout when the decoder manual specifies it.
- Added Zaraz events for DMX DIP usage.
- Expanded voltage guide to 5V vs 12V vs 24V.
- Added a 301 redirect from the old 12V-vs-24V guide URL.

## New in 0.3.2-beta
- Added `dmx_dip_tool_used`, which fires only once per page load after the first meaningful DIP-calculator interaction.
- Preserved the address-calculated, switch-toggled, and layout-changed events.
- Replaced exact DMX addresses in analytics with coarse address ranges and added non-sensitive interaction type, layout, and representability properties.
- Kept analytics failure-safe when Zaraz is unavailable or blocked.
- Did not add a redundant tool-opened event; normal pageview analytics already measures page opens.
- Retained the dependency-free, touch-friendly architecture for future PWA and mobile-app packaging.

## New in 0.3.3-beta
- Moved the address controls and interactive DIP bank directly beneath the compact page introduction.
- Removed instructional content from the primary calculator panels.
- Preserved the quick guide, switch-value table, addressing explanation, decoder cautions, and planning link in two collapsed disclosure sections below the tool.
- Kept the supporting content accessible by keyboard and available in the page for search engines.
- Preserved all calculator behavior and privacy-conscious analytics from 0.3.2-beta.

## New in 0.3.4-beta
- Kept all ten DIP switches in one row at every viewport width for direct comparison with a physical decoder.
- Made the DIP controls, labels, spacing, and switch tracks scale fluidly with the available window width.
- Combined the entered and calculated DMX address into one shared field.
- Entering an address updates the switch bank; manually toggling a switch immediately updates the same address field.
- Preserved the collapsed help sections and privacy-conscious analytics.

## New in 0.3.5-beta
- Removed the decoder-layout selector and standardized the tool on the common switches-1–9 address layout.
- Kept switch 10 visible as a disabled manufacturer-specific function switch for physical comparison.
- Moved the single “Switches ON” summary directly beneath the DIP bank.
- Removed the repeated switch list from the status message.
- Removed the obsolete layout-changed analytics event while retaining the fixed layout property on usage events.

## New in 0.3.6-beta
- Removed the routine “address is representable” status note; valid addresses now leave the tool uncluttered.
- Allowed the address field to be cleared and replaced naturally without forcing it back to 1 while the user types.
- Accepted whole-number entries from 1 through 512 and continued to update the DIP bank immediately for valid values.
- Left invalid input visible for correction and added clear errors for blank, zero, non-integer, over-512, and longer-than-three-digit entries.
- Preserved the special warning for address 512, which cannot be represented by address switches 1–9.

## New in 0.3.7-beta
- Treated an all-off address-switch bank as the common decoder default of DMX address 1.
- When switches are manually turned all off, the shared address field now displays 1 instead of 0.
- Added a concise note that decoder behavior can vary and the manufacturer manual remains authoritative.
- Kept typed address 1 represented conventionally with switch 1 ON.

## New in 0.3.8-beta
- Added an address increment control that defaults to 4 for common RGBW decoder workflows.
- Added Last and Next buttons that subtract or add the selected increment.
- Updated the shared address field and DIP bank together after every successful step.
- Kept the current address unchanged and displayed a correction message when a step would leave the 1–512 range.
- Recorded stepped calculations through the existing privacy-conscious event using `last_address` or `next_address` interaction types.

## New in 0.3.9-beta
- Added an accessible Full page on/off switch for focused mobile use.
- Full-page mode hides the site header, breadcrumb, introductory copy, help sections, related guides, and footer.
- Expanded the calculator wrapper to the full available device viewport while keeping the mode switch visible for immediate exit.
- Preserved responsive DIP scaling, address increments, validation, and all existing calculator behavior.
- Added a non-sensitive analytics event containing only the enabled state.

## New in 0.3.10-beta
- Added the short canonical DMX DIP calculator URL `https://ledtapecalculator.com/dip`.
- Updated navigation, related links, canonical metadata, Open Graph metadata, and the sitemap to use `/dip`.
- Added permanent redirects from both legacy long-form DIP calculator paths to `/dip`.
- Retained the legacy source file in the review package as a redirect-safe fallback while `dip.html` is the canonical page.

## New in 0.3.11-beta
- Replaced the text-filled Full page button with a familiar horizontal left-to-right toggle.
- Placed the “Full page” label to the left of the toggle.
- Moved the control directly above the DMX address and DIP switch section.
- Preserved accessible switch labeling and a keyboard-visible focus indicator.

## New in 0.3.12-beta
- Moved the Increment, Last, and Next controls out of the address field.
- Placed the complete stepping section below the DIP switches and Switches ON summary.
- Preserved the existing increment validation, address updates, DIP updates, and privacy-conscious analytics.

## New in 0.3.13-beta
- Removed a visible escaped newline marker between the first two cards on the Guides page.
- Removed the same visible escaped newline problem from the DMX control guide and verified the complete review package contains no others.

## New in 0.3.14-beta
- Right-aligned the Full page label and toggle without changing its height.
- Reduced the DIP-bank outer padding so the ten switches have slightly more room, especially on mobile.
- Added a prominent DMX DIP Switch Calculator card to the main calculator page while retaining the footer link.
- Added failure-safe, privacy-conscious tracking for main-page DIP link placement and coarse increment changes.
- Enriched the existing Full page toggle event with layout, representability, interaction type, and coarse address range—never an exact DMX address.

## New in 0.3.15-beta
- Requested an Enter action instead of Next on mobile keyboards for the DMX address and increment fields.
- Made Enter finish the current edit and remove focus from either field, dismissing the mobile number pad.
- Preserved live address-to-switch updates, validation, stepping behavior, and analytics.

## New in 0.3.16-beta
- Changed both numeric keyboard action hints from Enter to Done because some mobile keyboards continued rendering Enter as Next.
- Pressing the action key still removes focus and dismisses the number pad.
- Retained the calculator’s separate Last and Next buttons for stepping through decoder addresses.

## New in 0.3.17-beta
- Changed the DMX Address field’s Android keyboard action to Go after some devices continued showing Next.
- Kept the working Increment field action on Done.
- Go and Done both finish the edit and dismiss the mobile number pad.

## New in 0.3.18-beta
- Changed Address and Increment from browser-managed number fields to numeric-keypad text fields so Android is less likely to override Go/Done with Next.
- Preserved strict whole-number and range validation in the calculator.
- Added a coarse-pointer fallback: if Android advances from Address to Increment without a deliberate tap, the Increment field immediately releases focus and the number pad closes.
- Deliberately tapping the Increment field continues to work normally.

## New in 0.3.19-beta
- Requested Done for the Address field instead of Go.
- Temporarily removed Increment from Android’s keyboard focus sequence only while Address is being edited, preventing the keyboard from treating Increment as the next field.
- Restored Increment to the normal focus sequence immediately after address entry.
- Preserved deliberate touch access to Increment and normal desktop keyboard navigation.
