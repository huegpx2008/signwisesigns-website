# SignWise Signs Website

A responsive, modern rebuild of the SignWise Signs website that preserves the
company's clean white layout, teal and green palette, owl branding, and familiar
site structure.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Next.js Image and Font optimization

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run lint
npm run build
npm run start
```

## Structure

- `app/` contains the page, global styles, metadata, sitemap, and robots routes.
- `components/` contains reusable page sections and interface components.
- `public/` contains the SignWise logo and local placeholder project artwork.

The quote form currently opens the visitor's email client. Connect it to a form
provider or server action before production launch.
