'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollTop > 300);
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const size = 56;
  const stroke = 2.5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-4 lg:bottom-8 lg:right-8 z-50 transition-all duration-300 group"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {/* Progress ring */}
      <svg
        width={size}
        height={size}
        className="absolute inset-0 -rotate-90"
        aria-hidden="true"
      >
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke="rgba(203,170,104,0.15)" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none"
          stroke="#CBAA68" strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - circumference * progress}
          style={{ transition: 'stroke-dashoffset 0.1s linear' }}
        />
      </svg>

      {/* Moon image background */}
      <div className="absolute inset-1 rounded-full overflow-hidden"
        style={{ background: 'radial-gradient(circle at 40% 35%, #1a1228, #090A1A)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/moon-inverse.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
          style={{ filter: 'sepia(1) saturate(0.6) hue-rotate(10deg) brightness(1.2)' }}
        />
      </div>

      {/* Astrological arrow SVG */}
      <svg
        viewBox="0 0 24 24"
        className="absolute inset-0 m-auto w-6 h-6"
        aria-hidden="true"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }}
      >
        {/* Vertical shaft */}
        <line x1="12" y1="18" x2="12" y2="6" stroke="#CBAA68" strokeWidth="1.5" strokeLinecap="round" />
        {/* Arrow head left */}
        <line x1="12" y1="6" x2="7" y2="11" stroke="#CBAA68" strokeWidth="1.5" strokeLinecap="round" />
        {/* Arrow head right */}
        <line x1="12" y1="6" x2="17" y2="11" stroke="#CBAA68" strokeWidth="1.5" strokeLinecap="round" />
        {/* Small circle at base — astrological symbol detail */}
        <circle cx="12" cy="19" r="1.5" fill="none" stroke="#CBAA68" strokeWidth="1" />
        {/* Horizontal tick at midpoint */}
        <line x1="9.5" y1="13" x2="14.5" y2="13" stroke="#CBAA68" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </svg>
    </button>
  );
}
