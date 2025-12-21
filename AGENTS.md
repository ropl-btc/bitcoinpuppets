# AGENTS.md

## Project Overview

Bitcoin Puppets is a community-led hub for the Bitcoin Puppets Ordinals collection. The site embraces a chaotic retro desktop vibe while staying usable, fast, and deployable on Cloudflare via OpenNext.

## Tech Stack

- Next.js (App Router)
- React 19
- Tailwind CSS
- OpenNext Cloudflare adapter (`@opennextjs/cloudflare`)
- Cloudflare Workers + `wrangler.jsonc`
- `next/image` for images (Cloudflare Images binding enabled via `wrangler.jsonc`)

## Development Commands

- `pnpm dev` — Next.js dev server.
- `pnpm preview` — Local preview using Cloudflare `workerd` (tests OpenNext compatibility).
- `pnpm deploy` — Build + deploy to Cloudflare.

## Style Guide

- De-optimized retro aesthetic: Comic Sans (system fallback), heavy borders, pixel shadows, loud colors, and slightly chaotic layout.
- Keep code clean and consistent even if the visuals are intentionally messy.
- Prefer bold blocks, chunky buttons, and retro desktop panels.
- Disable antialiasing: no font smoothing, and keep images pixelated.

## Context (Lore)

- OPIUM is the original chaotic puppet HQ and a visual reference for tone and UI energy.
- Bitcoin Puppets are a free mint Ordinals collection, fully community-driven.
- The community greeting is “bj” (like “gm” in crypto), and the ethos is world peace and good vibes. 🌎☮️
