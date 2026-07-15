'use client';

import { motion } from 'framer-motion';
import ClientOnly from '@/components/ui/ClientOnly';
import StarField from '@/components/ui/StarField';
import ZodiacWheel from '@/components/ui/ZodiacWheel';
import CalendlyButton from '@/components/calendly/CalendlyButton';

export default function BookingCTA() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-[#181126] via-[#090A1A] to-[#060813]">
      <StarField count={100} />

      {/* Orbiting wheel — client-only to avoid hydration mismatch */}
      <ClientOnly>
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        >
          <ZodiacWheel className="w-[800px] h-[800px]" />
        </motion.div>
      </ClientOnly>

      {/* Gradient orb */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#321D3E]/30 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[#CBAA68] tracking-[0.3em] uppercase text-xs mb-6">
            Begin Your Session
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#F6F0E7] font-light leading-[1.1] mb-6"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Discover What the Stars{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #CBAA68, #E2C88C)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Are Bringing Into Focus
            </span>
          </h2>
          <p className="text-[#B8A8C7] text-lg leading-relaxed mb-10">
            Schedule an intuitive astrology session with Sara and explore the patterns, possibilities,
            and choices shaping your next chapter.
          </p>
          <CalendlyButton className="inline-flex items-center gap-2 px-12 py-5 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[11px] tracking-[0.3em] uppercase font-semibold hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all shadow-[0_0_40px_rgba(203,170,104,0.3)] hover:shadow-[0_0_60px_rgba(203,170,104,0.5)] cursor-pointer">
            Book a Session With Sara
          </CalendlyButton>
        </motion.div>
      </div>
    </section>
  );
}
