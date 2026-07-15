'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { zodiacSigns } from '@/data/zodiac';
import { trackEvent } from '@/lib/analytics';

const elementColors: Record<string, string> = {
  Fire: '#E2734A',
  Earth: '#6B8E5E',
  Air: '#7ABBE8',
  Water: '#6BAACB',
};

export default function ZodiacSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#090A1A] overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#CBAA68]/20" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionHeader
            eyebrow="The Twelve Signs"
            heading="Explore Your Zodiac Sign"
            subheading="Each sign carries its own themes, patterns, and elemental energy. Explore the one that resonates — or start with your sun, moon, or rising."
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {zodiacSigns.map((sign, i) => (
            <motion.div
              key={sign.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={`/zodiac/${sign.id}`}
                onClick={() => trackEvent('zodiac_selected', { sign: sign.id })}
                className="group flex flex-col items-center p-5 border border-[#CBAA68]/10 hover:border-[#CBAA68]/50 bg-[#0D0D1F] hover:bg-[#181126] transition-all duration-300 hover:shadow-[0_0_30px_rgba(203,170,104,0.12)] text-center"
              >
                <span
                  className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: elementColors[sign.element] }}
                  aria-hidden="true"
                >
                  {sign.symbol}
                </span>
                <span
                  className="text-sm text-[#E2C88C] mb-1 group-hover:text-[#F6F0E7] transition-colors"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {sign.name}
                </span>
                <span className="text-[9px] text-[#4A3D5C] tracking-wide leading-snug">
                  {sign.dates}
                </span>
                <span
                  className="mt-2 text-[9px] tracking-widest uppercase"
                  style={{ color: elementColors[sign.element] + '80' }}
                >
                  {sign.element}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/zodiac"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#CBAA68]/30 text-[#CBAA68] text-[10px] tracking-[0.25em] uppercase hover:bg-[#CBAA68]/10 transition-all"
          >
            Explore All Zodiac Signs
          </Link>
        </div>
      </div>
    </section>
  );
}
