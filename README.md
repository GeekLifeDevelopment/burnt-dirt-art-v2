# Burnt Dirt Art v2

Astro site for Burnt Dirt Art.

## Setup

1. Install dependencies:
	- `npm install`
2. Add environment variables (required for shop product data):
	- `CONTENTFUL_SPACE_ID`
	- `CONTENTFUL_ACCESS_TOKEN`
	- `SITE_URL` (required for sitemap URL generation)
3. Run locally:
	- `npm run dev`

You can place environment variables in a local `.env` file:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
SITE_URL=https://your-domain.com
```

## Netlify deploy configuration

In Netlify, set the same variables in:

- Site settings → Build & deploy → Environment variables

Required keys:

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`
- `SITE_URL` (for example `https://your-domain.com`)

After adding them, trigger a new deploy.

If these keys are missing, the build now completes but product-driven shop pages will not be generated.

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Build production site
- `npm run preview` - Preview production build
