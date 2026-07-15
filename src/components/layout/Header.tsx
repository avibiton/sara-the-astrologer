'use client';
import InstagramIcon from '@/components/ui/InstagramIcon';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar } from 'lucide-react';
import { mainNav } from '@/data/navigation';
import { brand } from '@/data/brand';
import CalendlyButton from '@/components/calendly/CalendlyButton';
import { trackEvent } from '@/lib/analytics';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Info bar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-2 bg-[#090A1A] border-b border-[#CBAA68]/10 text-[10px] tracking-widest uppercase text-[#6B5A80]">
        <span>Intuitive Astrology for Real Life</span>
        <div className="flex items-center gap-6">
          <span>Online sessions available</span>
          <Link
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#CBAA68] hover:text-[#E2C88C] transition-colors"
            onClick={() => trackEvent('instagram_profile_clicked')}
          >
            <InstagramIcon size={12} />
            {brand.instagramHandle}
          </Link>
          <CalendlyButton className="text-[#CBAA68] hover:text-[#E2C88C] transition-colors cursor-pointer">
            Schedule a Session
          </CalendlyButton>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090A1A]/95 backdrop-blur-md border-b border-[#CBAA68]/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-24 lg:h-40">
          {/* Logo — left */}
          <Link href="/" className="shrink-0" aria-label="Sara the Astrologer — Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/sara-wigle-logo.png"
              alt="Sara the Astrologer"
              className="object-contain"
              style={{ height: 'clamp(90px, 13vw, 150px)', width: 'auto' }}
            />
          </Link>

          {/* Desktop nav — centered */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-[11px] tracking-[0.15em] uppercase text-[#B8A8C7] hover:text-[#E2C88C] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Book button — right */}
          <div className="hidden lg:flex shrink-0">
            <CalendlyButton
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[10px] tracking-widest uppercase font-semibold hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all shadow-[0_0_20px_rgba(203,170,104,0.25)] hover:shadow-[0_0_30px_rgba(203,170,104,0.4)] cursor-pointer"
            >
              <Calendar size={13} />
              Book a Session
            </CalendlyButton>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2 ml-auto">
            <CalendlyButton
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[10px] tracking-widest uppercase font-semibold cursor-pointer"
            >
              <Calendar size={11} />
              Book
            </CalendlyButton>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="p-2 text-[#B8A8C7] hover:text-[#E2C88C] transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#090A1A]/98 backdrop-blur-xl flex flex-col pt-20 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-1 flex-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3.5 border-b border-[#CBAA68]/10 text-[#F6F0E7] text-lg tracking-[0.1em]"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-8">
            <CalendlyButton className="w-full py-4 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] font-semibold tracking-widest uppercase text-sm cursor-pointer">
              Book a Session
            </CalendlyButton>
            <Link
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { setOpen(false); trackEvent('instagram_profile_clicked'); }}
              className="w-full py-3.5 border border-[#CBAA68]/30 text-[#CBAA68] text-center text-sm tracking-widest uppercase flex items-center justify-center gap-2"
            >
              <InstagramIcon size={16} />
              Follow on Instagram
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
