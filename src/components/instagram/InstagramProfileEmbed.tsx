'use client';

import { useEffect, useRef } from 'react';
import { brand } from '@/data/brand';

export default function InstagramProfileEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If embed.js is already loaded, re-process embeds
    if ((window as Window & { instgrm?: { Embeds: { process: () => void } } }).instgrm) {
      (window as Window & { instgrm?: { Embeds: { process: () => void } } }).instgrm!.Embeds.process();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // leave script in DOM — removing it breaks subsequent embeds
    };
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={brand.instagramUrl}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: '99.375%',
        }}
      />
    </div>
  );
}
