# Ahmad Ataya Portfolio

Responsive bilingual portfolio built with Angular and SCSS. It presents Ahmad Ataya's profile, skills, selected projects and colleague testimonials in German and English.

## Features

- Responsive single-page layout based on a Figma design
- German and English content with persisted language selection
- Project previews and accessible project dialogs
- Direct links to live projects and GitHub repositories
- Reactive contact form with validation and privacy consent
- Legal notice and privacy policy routes
- Keyboard navigation and reduced-motion support
- Custom metadata and favicon

## Technology

- Angular 22
- TypeScript
- SCSS with BEM-style component classes
- Angular signals and reactive forms
- Vitest

## Local development

```powershell
npm ci
npm start
```

Open `http://localhost:4200/`.

## Verification

```powershell
npm test -- --watch=false
npm run build
```

The production output is written to `dist/ahmad-ataya-portfolio/browser/`.

## Deployment

The production site will use `https://ahmad-ataya.de`. Hosting provisioning at netcup is currently pending. Until migration is complete, a temporary deployment is available at `https://ataya.uber.space/`.

Operational details are documented in [DEPLOYMENT.md](DEPLOYMENT.md). Credentials and private SSH keys must never be committed.

## Open work

- Connect the contact form to a real server endpoint
- Display success and error feedback returned by the endpoint
- Deploy to netcup after account provisioning
- Activate and verify the domain, SSL and `www` redirect
- Configure the portfolio mailbox and sender details
