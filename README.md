# Trueline Technologies — Website Clone + TrueConnect (local demo)

A Next.js rebuild of **truelinetechnologies.com** (23 pages) with an integrated, fully
client-side enquiry chatbot, the **TrueConnect**. This is for internal review only:
it is not deployed, and nothing is sent anywhere.

## Run it

Requires Node.js 18.18+ (tested on Node 24).

```bash
npm install
npm run dev          # http://localhost:3000  (development)

# or the production build
npm run build
npm start            # http://localhost:3000
```

Other scripts: `npm run lint`, `npx tsc --noEmit`.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion (scroll reveals,
menus, FAQ) · Swiper (hero, partners, testimonials, industries) · Lucide React (UI icons)
· Font Awesome 6.5.1 from npm (content icons, the same set the live site uses) · Sora via `next/font`.

## Structure

```
app/
  layout.tsx            top bar, header, footer, floating socials, chatbot, metadata
  page.tsx              Home
  about-us/ contact-us/ hand-built pages
  [slug]/page.tsx       the 20 service pages (statically generated from data/services)
  sitemap.ts robots.ts not-found.tsx
components/
  layout/               TopBar, Header (dropdowns + mobile accordion + sticky), Footer, FloatingSocial
  home/                 homepage sections (hero slider, partners, services tabs, stats/testimonials, …)
  sections/             service-page blocks + BlockRenderer
  ui/                   Button, Reveal, SectionHead, Counter, ContactForm
  chatbot/              TrueConnect (see below)
data/
  site.ts               contact details, navigation, socials, stats, testimonials
  home.ts               homepage content
  services/*.json       service page content (one file per page) + index.ts types/loader
public/images/          all images, downloaded from the live site
```

### Content source

Service page JSON was extracted directly from the live HTML of each page and mapped to
15 block types (hero, intro, cards, icon list, process, dark cards, FAQ, comparison, …).
To change a service page, edit its JSON file. No code changes are needed.

Obvious copy-paste errors on the live site were corrected (see "Live-site issues" below).

## TrueConnect (chatbot)

`components/chatbot/` uses the TruGuide (TrueSoft) architecture with TrueLine branding and content.

| File | Purpose |
| --- | --- |
| `config.ts` | **Edit this for content.** Categories, sub-services, questions, industries, all bot copy |
| `flow.ts` | Pure state machine + validation (no React, no I/O) |
| `ChatbotWidget.tsx` | Launcher, panel, derived transcript |
| `steps/*` `parts/*` | Step UIs and shared controls |
| `chatbot.module.css` | Scoped styles (TrueLine navy / cyan / green) |

Flow: **service areas** (multi-select, 5) → **sub-services** (grouped, multi-select, "Select all") →
**main need** + optional note → **2–3 follow-up questions** chosen by category (sites, AMC plan,
support model, current system, users, timeline) → **company & industry** → **name / email / phone**
→ **optional extra details** → **summary** (with Edit and Start new).

Header refresh restarts the conversation. Close and Escape collapse it. Back keeps earlier
answers. The transcript is derived from state, so going back rewinds cleanly.

All sub-services and hints come from the live site's pages. The places where content was
merged or kept are documented at the top of `config.ts`.

**Demo limits:** no AI/API, no database, no email. The summary says plainly that nothing was sent.
`flow.ts` marks where a real submission would plug in.

## Live-site issues found (and how the clone handles them)

- IT AMC cards titled "Our Gate Barrier Solutions" → **"What Our IT AMC Covers"**
- Google Ads cards titled "Our Odoo Services" → **"Our Google Ads Services"**
- Acronis "Why Google Acronis?" → **"Why Acronis?"**
- Odoo "Why ERPNext" tag on the Odoo section → **"Why Odoo"**
- Microsoft 365 "Why True Line for Cloud" → **"Why True Line for Microsoft 365"**
- Homepage industry "Logisitics" → **"Logistics"**
- Google Ads CTA background image returns 404 on the live site → replaced with another marketing image from the site
- Several CTA buttons link to `#` on the live site → linked to `/contact-us` (Odoo "Compare ERPNext vs Odoo" → `/erpnext`)
- Instagram / YouTube links are `#` placeholders on the live site → kept as placeholders

## Not included / differences

- The live "About Us" Team section is hidden (`d-none`, placeholder names), so it was not rebuilt.
- The live bottom-right scroll-to-top button was left out, because that corner is now the chatbot launcher.
- The homepage "Explore more" play badge has no video on the live site. It links to About Us.
- The contact page map is a Google Maps embed, the only third-party request the pages make.
- `robots` is set to `noindex` because this is a local demo.
