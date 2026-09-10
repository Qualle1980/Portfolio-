# Deployment

## Migration status

- netcup Webhosting 1000 NUE ordered on 2026-09-10
- Domain selected: `ahmad-ataya.de`
- Location: Nürnberg, Germany
- Price: €2.69/month, billed every 12 months (€32.27 first invoice)
- Minimum term: 12 months
- Provisioning status: web-hosting tariff provisioned and `ahmad-ataya.de` added to Hosting248318 on 2026-09-10; CCP still shows the domain as processing
- Preliminary hosting domain: `http://hosting248318.ae9bd.netcup.net`
- Administration: `https://www.customercontrolpanel.de`
- Secure IMAP/POP3 server: `mxe9bf.netcup.net`
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

- Wait for public DNS propagation of `ahmad-ataya.de`
- Retry Let's Encrypt for `ahmad-ataya.de` and `www.ahmad-ataya.de` after DNS resolves
- Redirect `www` consistently to the preferred canonical domain
- Create the portfolio mailbox
- Connect and verify the contact-form backend
- Verify the home page, legal routes, assets and mobile layout on the public domain
- Retire Uberspace only after all netcup checks pass

## Current netcup deployment

- Document root: `/ahmad-ataya.de/httpdocs`
- Production build uploaded and extracted on 2026-09-10
- Server-side verification with the domain host header: HTTP 200 and title `Ahmad Ataya Portfolio`
- Public DNS status: not yet resolvable while the new domain is processing
- SSL status: issuance attempted for the root domain and `www`; pending DNS propagation

## Final website structure

- Portfolio: `https://ahmad-ataya.de/`
- Join: `https://ahmad-ataya.de/join/`
- El Pollo Loco: `https://ahmad-ataya.de/el-pollo-loco/`
- Contact endpoint: `https://ahmad-ataya.de/api/contact.php`
- Contact recipient: `ahmad-ataya@hotmail.de`

Run `npm run build:hosting` in the portfolio project to build and collect all three
projects. Upload the complete contents of `.deploy/httpdocs` to
`/ahmad-ataya.de/httpdocs` on the hosting server.
