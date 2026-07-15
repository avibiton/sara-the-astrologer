# Sara the Astrologer

Production-ready Next.js website for **Sara Wigle** — [@sara_the_astrologer](https://www.instagram.com/sara_the_astrologer/)

*"Where Fate Meets Free Will" · Intuitive Astrology for Real Life*

---

## Quick Start

```bash
npm install
cp .env.example .env.local   # then edit .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 1. Install Dependencies

```bash
npm install
```

## 2. Development Server

```bash
npm run dev
```

## 3. Configure Calendly

1. Log into [calendly.com](https://calendly.com) and copy your profile or event URL.
2. Set it in `.env.local`:
   ```
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-calendar-url
   ```
3. For **service-specific** Calendly links, edit the `calendlyUrl` field for each service in `src/data/services.ts`.

## 4. Connect Services to Calendly Events

In `src/data/services.ts`, each service has a `calendlyUrl` property. Set it to the specific Calendly event type URL for that session (e.g. `https://calendly.com/your-name/birth-chart`). If left empty, it falls back to `NEXT_PUBLIC_CALENDLY_URL`.

## 5. Configure the Official Instagram API

1. Convert to a **Professional Instagram account** and link it to a Facebook Page.
2. Create a Meta App at [developers.facebook.com](https://developers.facebook.com).
3. Add the Instagram Graph API product and generate a long-lived access token.
4. Set in `.env.local`:
   ```
   INSTAGRAM_ACCESS_TOKEN=your_token_here
   INSTAGRAM_USER_ID=your_instagram_user_id
   INSTAGRAM_API_VERSION=v18.0
   INSTAGRAM_FEED_PROVIDER=api
   ```
5. **IMPORTANT:** Never use `NEXT_PUBLIC_` for the access token — keep it server-side only.

## 6. Store the Instagram Access Token Safely

- Store `INSTAGRAM_ACCESS_TOKEN` only in `.env.local` (local) or Vercel environment variables (production).
- Never commit it to git — `.env.local` is in `.gitignore`.
- Never prefix it with `NEXT_PUBLIC_`.

## 7. Obtain and Refresh Instagram Credentials

- Long-lived tokens expire after **60 days**. Refresh using Meta's token refresh endpoint before expiry.
- To refresh: `GET https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_TOKEN`
- Consider automating this with a Vercel cron function.

## 8. Switch Between Feed Modes

Set `INSTAGRAM_FEED_PROVIDER` in `.env.local`:

| Value | Description |
|-------|-------------|
| `manual` | Uses `src/data/instagram-posts.ts` (default — no API needed) |
| `api` | Fetches from the official Instagram API |

## 9. Add Curated Instagram Post URLs

Edit `src/data/instagram-posts.ts`. Each entry:
```ts
{
  id: 'unique-id',
  url: 'https://www.instagram.com/p/POST_ID/',
  imagePath: '/images/instagram/filename.jpg',
  caption: 'Sara\'s actual caption...',
  altText: 'Descriptive alt text for accessibility',
  date: '2025-06-01',
  mediaType: 'IMAGE',
  featured: true,
  topic: 'Birth Charts',
}
```

## 10. Update the Manual Instagram Feed

1. Copy post URLs from Sara's Instagram.
2. Download images to `/public/images/instagram/`.
3. Add entries to `src/data/instagram-posts.ts`.

## 11. Replace Sara's Portrait

1. Save the approved photo as `/public/images/sara-portrait.jpg`.
2. Replace the placeholder `<div>` in these files with a Next.js `<Image>` component:
   - `src/components/sections/Hero.tsx` (hero portrait)
   - `src/components/sections/AboutPreview.tsx` (about section)
   - `src/app/about/page.tsx` (about page)

```tsx
import Image from 'next/image';
// Replace placeholder div with:
<Image
  src="/images/sara-portrait.jpg"
  alt="Sara Wigle — Intuitive Astrologer"
  fill
  className="object-cover"
  priority
/>
```

## 12. Add Approved Instagram Images

Download images to `/public/images/instagram/` and reference them in `src/data/instagram-posts.ts` using the `imagePath` field. Do not hotlink Instagram CDN URLs.

## 13. Edit Services and Prices

Edit `src/data/services.ts`:
- `name` — service name
- `price` — update when Sara confirms pricing
- `duration` — session length
- `description` — session description
- `calendlyUrl` — specific booking URL for this service

## 14. Insert Genuine Testimonials

Edit `src/data/testimonials.ts`. Replace placeholder entries with real client feedback. Set `isPlaceholder: false` for real testimonials. Use only testimonials Sara has publicly shared or received explicit permission to publish.

## 15. Connect the Contact Form

The form is in `src/app/contact/page.tsx`. Create a server-side API route at `src/app/api/contact/route.ts` using your preferred email provider.

**Resend example:**
```ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({ from: '...', to: '...', subject: '...', html: '...' });
```

Set `RESEND_API_KEY` and `RESEND_FROM_EMAIL` in `.env.local`.

## 16. Configure Analytics

Add any of these to `.env.local`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXXXX
```

Then add the corresponding script tags to `src/app/layout.tsx`. Events are pre-wired in `src/lib/analytics.ts`.

## 17. Deploy to Vercel

1. Push to a GitHub repository.
2. Import at [vercel.com/new](https://vercel.com/new).
3. Add all environment variables from `.env.example` in Vercel's project settings.
4. Deploy.

## 18. Test After Deployment

- Test all CTA buttons open Calendly correctly.
- Test on mobile at 375px width (especially in Instagram's in-app browser).
- Verify the Instagram feed loads (if using the API mode).
- Check all internal links and page routes work.
- Run Lighthouse on the homepage and readings pages.

---

## Project Structure

```
src/
  app/                    # Next.js App Router pages
    api/instagram/        # Server-side Instagram API route
  components/
    layout/               # Header, Footer, MobileBookingBar
    sections/             # Homepage and shared page sections
    calendly/             # CalendlyButton, CalendlyEmbed
    ui/                   # StarField, ZodiacWheel, SectionHeader, GoldButton
  data/                   # All editable content (edit these!)
  lib/
    analytics.ts          # Event tracking
    instagram/service.ts  # Instagram feed logic
  types/index.ts          # TypeScript types
public/
  images/                 # Add Sara's photos here
```

## Key Content Files

| File | Purpose |
|------|---------|
| `src/data/brand.ts` | Name, tagline, URLs |
| `src/data/services.ts` | Readings, prices, durations |
| `src/data/testimonials.ts` | Client testimonials |
| `src/data/faqs.ts` | FAQ answers |
| `src/data/instagram-posts.ts` | Manual Instagram feed |
| `src/data/insights.ts` | Astrology articles |
| `src/app/about/page.tsx` | Sara's biography |

---

## Important Notes

- Testimonials are all placeholders until Sara confirms real ones.
- Service prices and durations are placeholders.
- Privacy Policy and Terms are placeholders — have a legal advisor review.
- Sara's portrait must be added separately.
- Instagram images must be downloaded locally — do not hotlink CDN URLs.
