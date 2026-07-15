'use client';

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

interface CalendlyEmbedProps {
  url?: string;
  minHeight?: string;
}

export default function CalendlyEmbed({ url, minHeight = '700px' }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const calendlyUrl = url || process.env.NEXT_PUBLIC_CALENDLY_URL || '';

  useEffect(() => {
    if (!calendlyUrl || !containerRef.current) return;

    trackEvent('calendly_embed_viewed');

    // Load Calendly inline widget script
    let script = document.getElementById('calendly-inline-script') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'calendly-inline-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Listen for scheduled event
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_scheduled') {
        trackEvent('calendly_event_scheduled');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [calendlyUrl]);

  if (!calendlyUrl) {
    return (
      <div className="rounded-xl border border-[#CBAA68]/20 bg-[#181126] p-12 text-center">
        <p className="text-[#B8A8C7] mb-4">Booking calendar coming soon.</p>
        <p className="text-[#6B5A80] text-sm">
          Set <code className="text-[#CBAA68]">NEXT_PUBLIC_CALENDLY_URL</code> in your environment to enable inline booking.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full rounded-xl overflow-hidden"
      data-url={calendlyUrl}
      style={{ minHeight }}
    />
  );
}
