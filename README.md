# Blumen Schmid — Stuttgart-Süd

Conversion-focused static website prototype for **Blumen Schmid**, Böblinger Str. 5, Stuttgart-Süd.

## Live site

GitHub Pages target: https://prithiraj.github.io/blumenladen/

## Design / evidence plan

See [`DESIGN_PLAN.md`](DESIGN_PLAN.md). It documents:

- evidence-backed facts
- audience and conversion goals
- visual direction
- image licensing/replacement notes
- responsive/accessibility/performance strategy
- SEO and structured data
- acceptance criteria

## Stack

- semantic HTML
- modern CSS
- vanilla JavaScript
- optional Three.js decorative layer (dynamically loaded)
- no bundler
- no framework
- no analytics

## Local preview

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

`.github/workflows/pages.yml` deploys the repository root to GitHub Pages on every push to `main` and can also be triggered manually.

GitHub Pages must use **GitHub Actions** as its publishing source. The workflow uses the official `configure-pages`, `upload-pages-artifact`, and `deploy-pages` actions.

## Launch checks still requiring business input

- confirm definitive Friday/Saturday hours
- confirm legal proprietor/imprint data
- replace the Google User Content storefront reference with owner-controlled photography (or obtain explicit rights)
- confirm whether pre-order/pickup/delivery services should be promoted
- add verified social profiles only if confirmed
- legal review of Impressum/Datenschutz

## Image notes

The prototype uses:

- one actual Blumen Schmid storefront image currently labelled by the source as **Google User Content** — demo/editorial reference only
- supporting images marked free under the Unsplash License at research time

See `DESIGN_PLAN.md` for source links and rights notes.
