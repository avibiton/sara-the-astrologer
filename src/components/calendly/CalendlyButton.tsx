'use client';

import { useEffect } from 'react';
import { brand } from '@/data/brand';
import { trackEvent } from '@/lib/analytics';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export default function CalendlyButton({ url, children, className = '' }: CalendlyButtonProps) {
  const calendlyUrl = url || brand.calendlyUrl;

  useEffect(() => {
    if (document.getElementById('calendly-css')) return;
    const link = document.createElement('link');
    link.id = 'calendly-css';
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    if (document.getElementById('calendly-js')) return;
    const script = document.createElement('script');
    script.id = 'calendly-js';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const handleClick = () => {
    trackEvent('calendly_cta_clicked');
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button onClick={handleClick} className={className} type="button">
      {children}
    </button>
  );
}
