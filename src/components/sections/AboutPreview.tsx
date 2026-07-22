'use client';
import InstagramIcon from '@/components/ui/InstagramIcon';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import CalendlyButton from '@/components/calendly/CalendlyButton';
import { brand } from '@/data/brand';
import { trackEvent } from '@/lib/analytics';

export default function AboutPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#090A1A]">
      {/* Top gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#CBAA68]/40 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#CBAA68] tracking-[0.25em] uppercase text-xs mb-4">Meet Sara Wigle</p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#F6F0E7] font-light leading-tight mb-6"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              The Astrologer Behind the Insights
            </h2>
            <p className="text-[#B8A8C7] leading-relaxed mb-4">
              Enter a grounded, soul-centered space where Jewish wisdom, intuitive astrology, and depth psychology come together. These one-on-one sessions offer a unique blend of Torah-aligned astrology, Kabbalistic insight, and the teachings of Carl Jung — illuminating the patterns and potentials woven into your inner and outer world.
            </p>
            <p className="text-[#B8A8C7] leading-relaxed mb-4">
              We&apos;ll explore your natal chart through a spiritual and psychological lens, uncovering your strengths, challenges, timing windows, and soul themes. This work is not about prediction, but about self-awareness, meaning, and alignment with your higher purpose.
            </p>
            <p className="text-[#B8A8C7] leading-relaxed mb-4">
              If you&apos;re navigating change, seeking clarity, or wanting to understand yourself more deeply, this session offers a powerful, Jewish-rooted path to insight and growth. Please have your birth date, exact time, and location ready — and send this information when you book your session.
            </p>
            <p
              className="text-[#CBAA68]/70 text-lg italic mb-8"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              &ldquo;Where Fate Meets Free Will&rdquo;
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-6 py-3 border border-[#CBAA68]/40 text-[#CBAA68] text-[10px] tracking-[0.25em] uppercase hover:bg-[#CBAA68]/10 transition-all"
              >
                Read Sara&apos;s Story
              </Link>
              <Link
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('instagram_profile_clicked')}
                className="px-6 py-3 text-[#6B5A80] hover:text-[#B8A8C7] text-[10px] tracking-[0.25em] uppercase transition-colors flex items-center gap-2"
              >
                <InstagramIcon size={13} />
                Follow on Instagram
              </Link>
              <CalendlyButton className="px-6 py-3 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[10px] tracking-[0.25em] uppercase font-semibold cursor-pointer hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all">
                Book a Session
              </CalendlyButton>
            </div>
          </motion.div>

          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-80 h-96 border border-[#CBAA68]/15 overflow-hidden shadow-[0_0_60px_rgba(203,170,104,0.08)]">
              <Image
                src="/images/sara_about.png"
                alt="Sara Wigle — Intuitive Astrologer"
                fill
                className="object-cover object-top"
                sizes="320px"
              />
              <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#CBAA68]/30 z-10" aria-hidden="true" />
              <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#CBAA68]/30 z-10" aria-hidden="true" />
              <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#CBAA68]/30 z-10" aria-hidden="true" />
              <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#CBAA68]/30 z-10" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
