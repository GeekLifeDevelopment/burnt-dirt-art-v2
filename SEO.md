# SEO Implementation Notes

## What changed

### Central SEO configuration

- Added `src/config/seo.ts` with shared values:

  - `siteName = "Burnt Dirt Art"`
  - `siteUrl = "https://burntdirtart.com"`
  - default title/template/description
  - social profile links
  - default OG image path (`/og-default.svg`)

### Reusable SEO component

- Added `src/components/SEO.astro` and integrated into `src/layouts/Layout.astro`.
- The component now outputs:

  - Title + title template handling
  - Meta description
  - Canonical URL (absolute)
  - Robots meta (`index, follow` default)
  - Open Graph tags
  - Twitter card tags
  - Favicon link
  - JSON-LD for `Organization` and `WebSite` sitewide

### Page-level SEO integration

- Added unique title/description/canonical props on:

  - `src/pages/index.astro`
  - `src/pages/about.astro`
  - `src/pages/gallery.astro`
  - `src/pages/contact.astro`
  - `src/pages/shop.astro`
  - `src/pages/shop/[slug].astro`
- Added/ensured one clear H1 on each route.
- Added short intro copy blocks to Home, Gallery, and Shop for keyword/context clarity.

### Structured data

- Sitewide JSON-LD in `SEO.astro`:

  - `Organization`
  - `WebSite`

- Shop listing page (`src/pages/shop.astro`):

  - Adds `ItemList` JSON-LD when outbound item links exist in Contentful data.

- Shop detail page (`src/pages/shop/[slug].astro`):

  - Adds `VisualArtwork` JSON-LD with name/image/description/creator/medium/url.

### Sitemap and robots

- Sitemap integration is active via `@astrojs/sitemap` in `astro.config.mjs`.
- `site` is explicitly set to `https://burntdirtart.com` in `astro.config.mjs`.
- Added `public/robots.txt` with:

  - `User-agent: *`
  - `Allow: /`
  - `Sitemap: https://burntdirtart.com/sitemap-index.xml`

### Outbound links and image SEO

- Added `rel="noopener noreferrer sponsored"` for eBay outbound links:

  - Shop page
  - Shop detail page
  - Footer eBay link

- Added image `width`, `height`, `loading`, and `decoding` attributes where feasible:

  - Gallery/home art tiles
  - Shop listing images
  - Shop detail carousel images

### Performance-oriented cleanup

- Removed duplicate global CSS `@import` for fonts/icons to avoid redundant blocking requests.
- Existing Google Fonts URL already uses `display=swap`.

## Current route coverage

Static routes:

- `/`
- `/about`
- `/contact`
- `/gallery`
- `/shop`

Dynamic static-generated route:

- `/shop/[slug]` (built from Contentful `artProduct` entries with `inventoryCode`)

## What to configure

### Required production settings

1. Astro site URL (already set):

   - `astro.config.mjs` -> `site: "https://burntdirtart.com"`

2. Contentful env vars (required for shop content generation):

   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`

3. Optional social/profile updates:

   - Update values in `src/config/seo.ts` if profile URLs change.

### Optional brand tuning

- `src/config/seo.ts`:

  - `defaultTitle`
  - `defaultDescription`
  - `defaultOgImage`

- Default OG image file:

  - `public/og-default.svg`

## How to test / validate

1. Build and verify output:

   - Run `npm run build`

2. Confirm crawl endpoints:

   - `https://burntdirtart.com/robots.txt`
   - `https://burntdirtart.com/sitemap-index.xml`

3. Check rendered meta tags:

   - Open page source on key pages (`/`, `/about`, `/gallery`, `/shop`, `/contact`)
   - Verify title, description, canonical, og/twitter tags

4. Validate JSON-LD:

   - Test URLs with Google Rich Results Test

5. Validate technical SEO/performance:

   - Run Lighthouse (Performance + SEO categories)

6. Search Console:

   - Submit sitemap URL: `https://burntdirtart.com/sitemap-index.xml`

## Notes

- No LocalBusiness schema added because no public studio/business address is currently provided in site content.
- No breadcrumb schema added because breadcrumb UI is not currently implemented.
- No blog/content model changes were introduced to keep scope and design intact.
