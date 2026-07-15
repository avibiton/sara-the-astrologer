'use client';
import InstagramIcon from '@/components/ui/InstagramIcon';

import { motion } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CalendlyButton from '@/components/calendly/CalendlyButton';
import ClientOnly from '@/components/ui/ClientOnly';
import StarField from '@/components/ui/StarField';
import { brand } from '@/data/brand';
import { trackEvent } from '@/lib/analytics';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#090A1A]">
      {/* Stars */}
      <StarField count={180} className="z-0" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#321D3E]/40 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#181126]/60 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#CBAA68]/5 blur-[80px]" />
      </div>

      {/* Celestial orrery — desktop decorative, client-only to avoid hydration mismatch */}
      <ClientOnly>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] opacity-20 sm:opacity-25 lg:opacity-50 xl:opacity-60" aria-hidden="true">
          {/* Outer moon-sphere ring — counter-rotates */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          >
            <Image
              src="/images/moon-sign-3.png"
              alt=""
              fill
              className="object-contain opacity-80"
            />
          </motion.div>
          {/* Central orrery — slow forward rotation */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 140, repeat: Infinity, ease: 'linear' }}
          >
            <Image
              src="/images/moon-inverse.png"
              alt=""
              fill
              className="object-contain opacity-70"
            />
          </motion.div>
        </div>
      </ClientOnly>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 pt-6 sm:py-16 sm:pt-12 lg:py-16 lg:pt-8">
        {/* Portrait placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mx-auto mb-8 w-28 h-28 rounded-full border-2 border-[#CBAA68]/40 shadow-[0_0_40px_rgba(203,170,104,0.2)] overflow-hidden"
        >
          <Image
            src="/images/sara-wigle.jpg"
            alt="Sara Wigle — Intuitive Astrologer"
            width={112}
            height={112}
            className="w-full h-full object-cover object-cover"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#CBAA68] tracking-[0.3em] uppercase text-xs mb-6"
        >
          Sara Wigle · Intuitive Astrologer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6"
          style={{ fontFamily: 'var(--font-cormorant), serif', color: '#F6F0E7' }}
        >
          Where Fate{' '}
          <span
            className="block italic"
            style={{
              background: 'linear-gradient(135deg, #CBAA68, #E2C88C, #CBAA68)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Meets Free Will
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-[#B8A8C7] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Intuitive astrology for real life — offering meaningful insight into your patterns,
          possibilities, relationships, timing, and personal choices.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <CalendlyButton className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[11px] tracking-[0.25em] uppercase font-semibold hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all shadow-[0_0_30px_rgba(203,170,104,0.3)] hover:shadow-[0_0_50px_rgba(203,170,104,0.5)] cursor-pointer">
            <Calendar size={15} />
            Book a Session
          </CalendlyButton>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#CBAA68]/40 text-[#CBAA68] text-[11px] tracking-[0.25em] uppercase hover:bg-[#CBAA68]/10 hover:border-[#CBAA68]/70 transition-all"
          >
            Explore Sara&apos;s Approach
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <Link
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('instagram_profile_clicked')}
            className="inline-flex items-center gap-2 text-[#6B5A80] hover:text-[#B8A8C7] text-sm transition-colors"
          >
            <InstagramIcon size={15} />
            Follow Sara on Instagram
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          {[
            'Private one-on-one sessions',
            'Online appointments available',
            'Personalized intuitive guidance',
          ].map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 text-[#4A3D5C] text-[11px] tracking-[0.15em] uppercase"
            >
              <span className="w-1 h-1 rounded-full bg-[#CBAA68]/50" aria-hidden="true" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#CBAA68]/40 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}

