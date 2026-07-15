'use client';
import InstagramIcon from '@/components/ui/InstagramIcon';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { brand } from '@/data/brand';
import { trackEvent } from '@/lib/analytics';

export default function InstagramCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#090A1A] to-[#181126] overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#321D3E]/20 blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#321D3E] to-[#181126] border border-[#CBAA68]/20 flex items-center justify-center mx-auto mb-8">
            <InstagramIcon size={32} className="text-[#CBAA68]" />
          </div>

          <p className="text-[#CBAA68] tracking-[0.25em] uppercase text-xs mb-4">
            {brand.instagramHandle}
          </p>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#F6F0E7] mb-4"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Daily Astrology for Real Life
          </h2>

          <p className="text-[#B8A8C7] leading-relaxed mb-10 max-w-xl mx-auto">
            Follow Sara for celestial insights, practical reflections, current astrology, and a
            grounded look at where fate meets free will.
          </p>

          <Link
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('instagram_profile_clicked')}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[11px] tracking-[0.25em] uppercase font-semibold hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all shadow-[0_0_30px_rgba(203,170,104,0.2)] hover:shadow-[0_0_40px_rgba(203,170,104,0.4)]"
          >
            <InstagramIcon size={16} />
            Follow Sara on Instagram
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
