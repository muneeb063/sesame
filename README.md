# Sesame Website (React + Tailwind)

A mobile-first restaurant website designed for QR menu scanning:
- Elegant homepage
- Readable, filterable menu
- Branch selection (multiple locations)
- Call-to-reserve flow (no Foodpanda / no backend)

## Run locally

```bash
npm install
npm run dev
```

## Update content (easy)

### Branches
Edit: `src/data/branches.ts`

Update:
- `name`
- `phone` (used for the Call button)
- `addressLine`
- `hours`
- `mapsUrl`

### Menu items
Edit: `src/data/menu.ts`

- Categories: `MENU_CATEGORIES`
- Items: `MENU_ITEMS` (name, description, tags, and PKR price)

## PDF fallback
The menu PDF is stored at `public/menu.pdf` and is linked from Home + Menu pages.

## GitHub Pages hosting

This project uses **HashRouter** so routes work on GitHub Pages.
Your QR link should look like:

`https://<username>.github.io/<repo>/#/menu`

### Deploy
1) Create a GitHub repo and push this project.
2) Install dependencies:
```bash
npm install
```
3) Deploy:
```bash
npm run deploy
```

If your repo name is not root, you may optionally set `base` in `vite.config.ts` to `/repo-name/`.

## Notes on `npm audit`
- This project does **not** include `xlsx` (avoids the SheetJS advisory for now).
- Some `vite`/`esbuild` advisories target the dev server. Production builds are static files.
  If you want to suppress or address them, upgrade Vite to the latest major version when convenient.
