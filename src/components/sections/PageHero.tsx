'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import StarField from '@/components/ui/StarField';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  starCount?: number;
}

export default function PageHero({ eyebrow, title, subtitle, starCount = 60 }: PageHeroProps) {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#090A1A] to-[#181126] overflow-hidden">
      <StarField count={starCount} />

      {/* Orrery */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[520px] lg:h-[520px] opacity-15 sm:opacity-20 lg:opacity-35"
        aria-hidden="true"
      >
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        >
          <Image src="/images/moon-sign-3.png" alt="" fill className="object-contain opacity-80" />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 140, repeat: Infinity, ease: 'linear' }}
        >
          <Image src="/images/moon-inverse.png" alt="" fill className="object-contain opacity-70" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#CBAA68] tracking-[0.3em] uppercase text-xs mb-4">{eyebrow}</p>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl text-[#F6F0E7] font-light mb-6"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#B8A8C7] text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
