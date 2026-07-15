import InstagramIcon from '@/components/ui/InstagramIcon';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { brand } from '@/data/brand';
import { mainNav } from '@/data/navigation';
import { services } from '@/data/services';
import CalendlyButton from '@/components/calendly/CalendlyButton';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060813] border-t border-[#CBAA68]/10 overflow-hidden">
      {/* Subtle star decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-[#CBAA68]/20 to-transparent" />
        <div className="absolute top-6 right-1/3 w-px h-24 bg-gradient-to-b from-transparent via-[#CBAA68]/15 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p
                className="text-xl text-[#E2C88C] leading-none mb-1 font-light tracking-[0.1em]"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                Sara the Astrologer
              </p>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#6B5A80]">Sara Wigle</p>
            </div>
            <p className="text-[#6B5A80] text-xs leading-relaxed mb-2 italic" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              &ldquo;Where Fate Meets Free Will&rdquo;
            </p>
            <p className="text-[#4A3D5C] text-[11px] leading-relaxed mb-6">
              Intuitive Astrology for Real Life
            </p>
            <Link
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#CBAA68] hover:text-[#E2C88C] transition-colors text-sm"
            >
              <InstagramIcon size={16} />
              {brand.instagramHandle}
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#CBAA68] mb-5">Navigate</h3>
            <ul className="space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#6B5A80] hover:text-[#B8A8C7] text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#CBAA68] mb-5">Readings</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/readings/${s.slug}`} className="text-[#6B5A80] hover:text-[#B8A8C7] text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book & Contact */}
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#CBAA68] mb-5">Book a Session</h3>
            <p className="text-[#4A3D5C] text-xs leading-relaxed mb-5">
              Private one-on-one sessions available online. Book your appointment through Calendly.
            </p>
            <CalendlyButton className="w-full py-3 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[10px] tracking-widest uppercase font-semibold hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all cursor-pointer mb-6">
              Schedule Now
            </CalendlyButton>
            {brand.email && (
              <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-[#6B5A80] hover:text-[#B8A8C7] text-sm transition-colors mb-2">
                <Mail size={13} />
                {brand.email}
              </a>
            )}
            {brand.phone && (
              <a href={`tel:${brand.phone}`} className="flex items-center gap-2 text-[#6B5A80] hover:text-[#B8A8C7] text-sm transition-colors">
                <Phone size={13} />
                {brand.phone}
              </a>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#CBAA68]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#3A2D4A] text-xs">
            &copy; {year} Sara the Astrologer · Sara Wigle · All rights reserved
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[#3A2D4A] hover:text-[#6B5A80] text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#3A2D4A] hover:text-[#6B5A80] text-xs transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Dev credit */}
        <div className="mt-6 text-center">
          <p className="text-[#2A1E36] text-[10px] tracking-[0.15em]">
            Crafted by{' '}
            <span className="text-[#3A2D4A]">Bitcom Solutions</span>
            {' '}·{' '}
            <span className="italic" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              Building digital constellations, one site at a time
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
