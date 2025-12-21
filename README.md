# Bitcoin Puppets Community Site

A community-led hub for the Bitcoin Puppets Ordinals collection. This site embraces the chaotic, retro, and playful vibe of the Puppets while keeping the codebase clean, fast, and deployable on Cloudflare Workers via OpenNext.

## Stack

- Next.js (App Router)
- Tailwind CSS
- OpenNext adapter for Cloudflare Workers
- pnpm

## Local Development

```bash
pnpm dev
```

Open http://localhost:3000.

## Cloudflare Preview (workerd)

Run the site using the Cloudflare runtime to catch Workers-specific issues early:

```bash
pnpm preview
```

## Deploy (Cloudflare Workers)

```bash
pnpm deploy
```

## Project Notes

- Design is intentionally “de-optimized”: bold borders, loud colors, and chaotic layout.
- Typography favors Comic Sans-style fonts for the full degen vibe.
- Global rendering disables antialiasing to preserve pixelated assets.
- Background image is fixed and fills the full viewport.

## Repository Layout

- `src/app/page.tsx`: single-page home layout and content.
- `src/app/layout.tsx`: metadata and favicon wiring.
- `src/app/globals.css`: global styles, cursor rules, and pixelated rendering.
- `public/`: puppets assets, stickers, favicons, videos.

## Content Context

Bitcoin Puppets is a community-driven, free-and-fair mint Ordinals collection. The broader lore stems from OPIUM (Ord Puppet Inu Undoxxed Millionaire) and a shared ethos of world peace, memes, and experimental art. This site is designed to celebrate the culture rather than sell a roadmap.
