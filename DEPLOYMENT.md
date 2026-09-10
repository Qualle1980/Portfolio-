# Deployment

## Migration status

- netcup Webhosting 1000 NUE ordered on 2026-09-10
- Domain selected: `ahmad-ataya.de`
- Location: Nürnberg, Germany
- Price: €2.69/month, billed every 12 months (€32.27 first invoice)
- Minimum term: 12 months
- Provisioning status: awaiting manual order review by netcup
- Uberspace remains the temporary live host until the netcup deployment is verified

## Temporary website

- Future domain: `ahmad-ataya.de`
- Future alternative domain: `www.ahmad-ataya.de`
- Temporary hosting: Uberspace 8
- Uberspace address: `https://ataya.uber.space/`

## Temporary Uberspace server

- SSH alias: `uberspace-ataya`
- SSH host: `nix.uberspace.de`
- SSH user: `ataya`
- Document root: `/home/ataya/www/html`
- Public-key label: `ataya-deployment`

The private SSH key is stored outside this repository in the local `.ssh` directory. Never commit or share it.

## Build

```powershell
npm ci
npm run build
```

Deploy the contents of `dist/ahmad-ataya-portfolio/browser/` to the document root. The `.htaccess` file provides the Angular SPA fallback for direct route access.

```powershell
scp -r "dist/ahmad-ataya-portfolio/browser/." "uberspace-ataya:/home/ataya/www/html/"
ssh uberspace-ataya "find /home/ataya/www/html -type d -exec chmod 755 {} +; find /home/ataya/www/html -type f -exec chmod 644 {} +"
```

Current deployment: `https://ataya.uber.space/` (verified with HTTP 200 on 2026-09-10).

## Temporary Uberspace DNS values

The root domain needs Uberspace's A and AAAA records. `www` should be configured for the same Uberspace account. Add both domains to Uberspace before changing DNS so that HTTPS certificates can be issued automatically.

- A record: `185.139.158.52`
- AAAA record: `2a0b:20c0:2000:62:be24:11ff:fe0a:964`

Both domains were prepared at Uberspace before the decision to migrate. Do not configure these DNS records after netcup provisioning; use the DNS and web-hosting configuration supplied by netcup instead.

## Remaining netcup setup

- Wait for order approval and hosting provisioning
- Record CCP, WCP/Plesk and SFTP access details without storing passwords in Git
- Deploy the production build to the netcup document root
- Enable SSL for `ahmad-ataya.de` and `www.ahmad-ataya.de`
- Redirect `www` consistently to the preferred canonical domain
- Create the portfolio mailbox
- Connect and verify the contact-form backend
- Verify the home page, legal routes, assets and mobile layout on the public domain
- Retire Uberspace only after all netcup checks pass
