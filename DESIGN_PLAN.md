# Blumen Schmid — Website Design Plan

Status: **implemented as a public prototype**  
Repository: `Prithiraj/blumenladen`  
Primary language: German

This document is the implementation source of truth. It intentionally separates verified facts from assumptions and keeps unresolved business/rights items visible.

## 1. Evidence baseline

### Verified / strongly corroborated facts

- Business: **Blumen Schmid / Blumen-Schmid**
- Current proprietor name appearing in Fleurop and current directory data: **Sabine Schmid-Kiesel**
- Address: **Böblinger Str. 5, 70178 Stuttgart**
- Phone: **+49 711 609184**
- Category: florist / flower shop
- Fleurop partner listing: https://www.fleurop.de/partnerfloristen/fleurop-filialen/70178-stuttgart/blumen-schmid-boeblinger-str-5
- Current directory listings support the following products/services:
  - Blumensträuße
  - florale Arrangements
  - Schnittblumen
  - Fleurop-Gutscheine
- Location is near Marienplatz; Unilocal places the public transport stop at roughly 130 m.
- Historical customer reviews repeatedly mention friendly/professional advice, time for customer wishes, and individually bound bouquets.

### Opening hours used in the prototype

The implementation uses the Fleurop/Cylex combination:

| Day | Hours |
| --- | --- |
| Monday | 10:00–13:00, 15:00–18:00 |
| Tuesday | 10:00–13:00, 15:00–18:00 |
| Wednesday | Closed |
| Thursday | 10:00–13:00, 15:00–18:00 |
| Friday | 10:00–13:00, 15:00–18:00 |
| Saturday | 09:30–16:00 |
| Sunday | Closed |

**Important:** SchickBlumen currently differs for Friday/Saturday. The live prototype therefore tells visitors to confirm hours by phone for longer journeys. Before commercial launch, the owner should confirm the definitive schedule and the structured data should be updated to match.

### Facts intentionally not claimed

No claim is made for:

- same-day delivery by Blumen Schmid
- online ordering
- weddings
- funeral floristry
- subscriptions
- specific flower varieties always in stock
- prices
- returns/refunds/guarantees
- verified Instagram/Facebook profiles

These should only be added after direct owner confirmation.

### Research sources

- Fleurop: https://www.fleurop.de/partnerfloristen/fleurop-filialen/70178-stuttgart/blumen-schmid-boeblinger-str-5
- Cylex: https://web2.cylex.de/firma-home/schmid-werner-blumenfachgeschaeft-6662282.html
- SchickBlumen: https://www.schickblumen.de/blumenladen/08111000-stuttgart/jfbieecicijbfdhcaae.htm
- Unilocal: https://unilocal.de/deutschland/stuttgart/schmid-kiesel-sabine
- Das Örtliche / Telefonbuch entries for third-party review context
- Stuttgarter Zeitung archive identifies Sabine Schmid-Kiesel as proprietor of Blumen Schmid at Marienplatz.

## 2. Audience

Primary audiences:

1. Local Stuttgart-Süd customers looking for flowers nearby.
2. Gift buyers who want a bouquet or floral arrangement.
3. Customers who value personal advice rather than an anonymous e-commerce selection.

High-intent questions the page must answer quickly:

- Is this the florist I am looking for?
- What can I get here?
- How do I call?
- Where is it?
- When is it open?

## 3. Conversion goals

Primary actions:

1. **Call** — `tel:+49711609184`
2. **Directions** — direct Google Maps route to Böblinger Str. 5

Secondary actions:

- scan product/service range
- inspect opening hours
- open Fleurop partner profile
- view source-backed customer context

No `Jetzt bestellen` button is used because a direct ordering workflow has not been verified.

## 4. Creative direction

Direction: **Warm Stuttgart floral atelier**

Keywords:

- classic
- warm
- editorial
- quietly premium
- local
- human-scale

The design pulls visual cues from the actual storefront:

- dark aged awning
- hand-scripted shop name
- warm stone façade
- muted plum/lilac entrance
- flowers supplying most of the vivid colour

It deliberately avoids generic pastel florist-template styling.

## 5. Color system

| Token | Value | Role |
| --- | --- | --- |
| Botanical Ink | `#243029` | primary text / actions |
| Deep Ink | `#17201B` | immersive craft section |
| Schmid Plum | `#69495F` | brand accent derived from storefront |
| Warm Stone | `#E7DED1` | architectural / secondary background |
| Florist Paper | `#FBF8F2` | main canvas |
| Leaf | `#66745F` | supporting botanical accent |
| Charcoal | `#292927` | footer / awning cue |

These are implementation colors inspired by the storefront; they are not presented as an official existing brand palette.

## 6. Typography

The production prototype uses a privacy/performance-friendly system stack:

- display: Iowan Old Style / Palatino / Georgia fallbacks
- UI/body: system sans stack

This keeps the site dependency-free for fonts. If the owner supplies/approves a house typeface, it should be self-hosted later.

## 7. Image strategy

### Actual business photography

The prototype includes the real Blumen Schmid storefront photo surfaced by SchickBlumen and explicitly labelled there as **Google User Content**:

https://www.schickblumen.de/poipics/jfbieecicijbfdhcaae.jpg

This is used only as a **demo/editorial reference**. It should be replaced with owner-controlled photography before commercial launch unless explicit usage permission is obtained.

### Licensed editorial photography

The supporting flower imagery comes from photos specifically marked **Free to use under the Unsplash License** at research time:

- Volodymyr Lymariev — https://unsplash.com/photos/a-hand-holding-a-bouquet-of-pink-and-white-flowers-cpYD2MQ1DMI
- Esra Afşar — https://unsplash.com/photos/vibrant-floral-arrangements-displayed-in-a-shop-V3TtgXboqCc
- Masha — https://unsplash.com/photos/a-vibrant-flower-shop-filled-with-colorful-blooms-and-greenery-6dVYB4l2ggk

The page identifies these as editorial imagery so they are not misrepresented as Blumen Schmid inventory/interior.

### Production replacement shoot

Recommended owner-controlled shot list:

1. storefront/exterior
2. awning and entrance detail
3. wide shop interior
4. daily flower buckets/display
5. hands binding a bouquet
6. completed bouquet close-ups
7. wrapping/finishing
8. current proprietor/team if desired
9. window display
10. Marienplatz neighbourhood context

## 8. Information architecture

Single-page core:

- Hero
- Local value proposition
- Floristik / Sortiment
- Handwerk & Beratung
- Customer-context / differentiators
- Gallery
- Location / contact / hours
- Strong final CTA

Supporting pages:

- `impressum.html`
- `datenschutz.html`

No empty shop/blog/news pages.

## 9. Section-by-section layout

### Header
Fixed, compact, with Floristik / Handwerk / Galerie / Besuch and a direct call action.

### Hero
Large editorial floral image plus an inset of the **actual storefront**. Headline: `Blumen, persönlich gebunden.` Primary actions are Call and Directions.

### Local value proposition
Explains the Marienplatz/Böblinger Straße context without manufacturing a company-history story.

### Floristik
Four evidence-backed service cards:
- Blumensträuße
- Florale Arrangements
- Schnittblumen
- Fleurop-Gutscheine

### Handwerk & Beratung
Dark immersive editorial section. Historical review themes are paraphrased and explicitly framed as historical customer context.

### Customer context
Three recurring themes:
- personal advice
- time for customer wishes
- individually bound bouquets

No invented contemporary testimonial copy.

### Gallery
Asymmetric editorial image grid, mixing licensed photography and the actual storefront reference.

### Location / contact / hours
Address, phone, route CTA, Marienplatz proximity, and current listed hours with a disclosure about Friday/Saturday source differences.

### Final CTA
High-contrast call-first conversion block.

## 10. Three.js / animation plan

Three.js is used only as a **subtle decorative atmospheric layer** in the dark Handwerk section:

- sparse pollen-like points
- faint elliptical/petal line forms
- slow movement
- low-power renderer
- dynamic CDN import only when motion is allowed

It never replaces images or content.

Fallback behaviour:

- section remains complete without JavaScript
- canvas is decorative (`aria-hidden`)
- no Three.js is loaded when `prefers-reduced-motion: reduce`
- import failure silently leaves the static section intact

Other motion:
- modest reveal transitions
- header state change
- small hover shifts

No scroll-jacking, particle explosions, custom cursor, game-like interaction, or autoplay media.

## 11. Responsive behavior

### Mobile first
- one-column hero
- real storefront inset remains visible
- service cards stack
- gallery becomes vertical
- minimum comfortable touch sizes
- persistent `Anrufen` + `Route` action bar

### Tablet
- two-column service grid
- editorial image/text sections rebalance

### Desktop
- asymmetrical split hero
- maximum content width ~1240 px
- generous negative space
- stronger editorial scale

## 12. Accessibility

Target: WCAG 2.2 AA.

Implemented:

- semantic landmarks
- skip link
- meaningful heading hierarchy
- keyboard-operable navigation
- visible focus states
- descriptive alt text
- no hover-only essential information
- reduced-motion support
- mobile touch targets
- no autoplay
- text remains available without JS
- decorative WebGL canvas is hidden from assistive tech

## 13. Performance

Architecture:
- static HTML
- one CSS file
- one small local JS file
- no framework
- no bundler
- no analytics
- no map iframe
- system fonts
- responsive/lazy images below the fold

Three.js is dynamically imported only on capable/non-reduced-motion clients.

Performance goals:
- LCP < 2.5 s
- CLS < 0.1
- INP < 200 ms

## 14. SEO / local discovery

Implemented:
- German SEO title and meta description
- canonical project URL
- Open Graph metadata
- semantic local contact details
- `Florist` Schema.org JSON-LD
- address, phone, geo coordinates
- current listed opening hours
- Fleurop `sameAs`
- `robots.txt`
- `sitemap.xml`

Primary local terms are used naturally:
- Blumen Schmid
- Florist Stuttgart-Süd
- Marienplatz
- Böblinger Straße

No keyword stuffing and no self-serving `AggregateRating` schema.

## 15. Rights / licensing notes

Before commercial launch:

1. Replace the Google User Content storefront image with owner-controlled photography, or obtain explicit reuse permission.
2. Retain Unsplash source/license records for editorial images that remain.
3. Do not reuse Stuttgarter Zeitung photography without a licence.
4. Do not use competitor imagery.
5. Use Fleurop logos only if brand-usage permission is confirmed; the prototype uses plain text links.
6. Confirm legal proprietor/imprint requirements with the business.
7. Have `datenschutz.html` reviewed for the production hosting/third-party setup.

## 16. Implementation sequence

Completed in this prototype:

1. research and evidence lock
2. visual direction
3. semantic page structure
4. conversion-first hero
5. services and evidence-backed copy
6. actual storefront reference + licensed photography
7. location / hours / CTA
8. responsive styling
9. accessibility/reduced motion
10. subtle Three.js enhancement
11. SEO/JSON-LD
12. legal-prototype pages
13. GitHub Pages workflow

Next owner-dependent steps:

1. confirm Friday/Saturday hours
2. confirm legal proprietor/contact data
3. confirm any delivery/preorder workflow
4. replace storefront reference with owner-controlled images
5. add verified social profiles if they exist
6. legal review
7. Lighthouse / real-device QA after final images

## 17. Acceptance criteria

### Business accuracy
- [x] no invented prices
- [x] no invented delivery promise
- [x] no invented online ordering
- [x] no invented wedding/funeral/subscription claims
- [x] phone/address source-backed
- [x] Fleurop voucher claim source-backed
- [x] opening-hours discrepancy disclosed
- [ ] definitive Fri/Sat hours owner-confirmed
- [ ] legal identity owner-confirmed

### Visual quality
- [x] actual storefront visually anchors the brand
- [x] plum/stone/charcoal cues come from the location
- [x] real photography dominates the interface
- [x] responsive layout feels intentionally designed
- [x] Three.js complements rather than replaces photography

### Conversion
- [x] call action visible in hero/header/mobile bar
- [x] directions action visible in hero/location/mobile bar
- [x] phone/address/hours easy to scan
- [x] strong final CTA

### Rights
- [x] editorial images linked to license/source pages
- [x] actual storefront image clearly documented as demo/editorial
- [ ] storefront image replaced or explicitly licensed before commercial launch

### Accessibility
- [x] keyboard nav
- [x] visible focus
- [x] reduced motion
- [x] meaningful alt text
- [x] no JS required for core content

### Performance
- [x] no app framework
- [x] no font dependency
- [x] lazy images below the fold
- [x] Three.js dynamically loaded
- [x] static GitHub Pages output

### Search
- [x] title/meta
- [x] canonical
- [x] Open Graph
- [x] `Florist` JSON-LD
- [x] geo coordinates
- [x] sitemap/robots
