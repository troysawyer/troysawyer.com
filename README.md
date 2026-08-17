# troysawyer.com

Personal website for Troy Sawyer, built with Next.js and exported as a static
site for Azure Static Web Apps.

## Local development

```bash
npm install
npm run dev
```

The development site runs at `http://localhost:3000`.

## Production build

```bash
npm test
```

This creates the deployable site in `out/` and checks the rendered content,
metadata, and public assets.

## Deployment

Pushes to `main` are deployed through GitHub Actions to an Azure Static Web App
on the Free plan. Azure serves `www.troysawyer.com`; the apex domain forwards to
the canonical `www` address through GoDaddy.
