'use client';

type EventName =
  | 'calendly_cta_clicked'
  | 'calendly_embed_viewed'
  | 'calendly_event_scheduled'
  | 'instagram_profile_clicked'
  | 'instagram_post_clicked'
  | 'instagram_feed_viewed'
  | 'instagram_reel_clicked'
  | 'service_viewed'
  | 'service_booking_clicked'
  | 'contact_form_started'
  | 'contact_form_submitted'
  | 'zodiac_selected'
  | 'phone_clicked'
  | 'email_clicked';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: EventName, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', name, params);
  }

  // Google Tag Manager
  if (window.dataLayer) {
    window.dataLayer.push({ event: name, ...params });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('trackCustom', name, params);
  }
}
