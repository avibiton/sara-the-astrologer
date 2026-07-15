'use client';
import InstagramIcon from '@/components/ui/InstagramIcon';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import CalendlyButton from '@/components/calendly/CalendlyButton';
import ClientOnly from '@/components/ui/ClientOnly';
import SectionHeader from '@/components/ui/SectionHeader';
import ZodiacWheel from '@/components/ui/ZodiacWheel';
import { brand } from '@/data/brand';
import { trackEvent } from '@/lib/analytics';

const themes = [
  { icon: '◈', text: 'Greater self-awareness and clarity' },
  { icon: '◈', text: 'Context for recurring life patterns' },
  { icon: '◈', text: 'Insight into your relationships' },
  { icon: '◈', text: 'Perspective on transitions and change' },
  { icon: '◈', text: 'Awareness of timing and opportunity' },
  { icon: '◈', text: 'Language for experiences that are hard to name' },
];

export default function Introduction() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#090A1A] to-[#181126]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative flex items-center justify-center"
          >
            {/* Sara's portrait */}
            <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full border border-[#CBAA68]/20 shadow-[0_0_60px_rgba(203,170,104,0.15)] overflow-hidden">
              <Image
                src="/images/sara-wigle.jpg"
                alt="Sara Wigle — Intuitive Astrologer"
                fill
                className="object-cover object-cover"
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
            {/* Orbiting wheel — client-only to avoid hydration mismatch */}
            <ClientOnly>
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
                aria-hidden="true"
              >
                <ZodiacWheel className="w-full h-full opacity-20" />
              </motion.div>
            </ClientOnly>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <SectionHeader
              eyebrow="Astrology for Real Life"
              heading="The Stars Reveal Patterns. You Decide What Comes Next."
              align="left"
            />
            <p className="text-[#B8A8C7] leading-relaxed mt-6 mb-6">
              Sara&apos;s approach to astrology begins with a simple premise: the chart is a map, not
              a verdict. Planetary patterns illuminate what&apos;s in motion — recurring themes,
              natural gifts, the timing of significant chapters. What you do with that information
              always belongs to you.
            </p>
            <p className="text-[#B8A8C7] leading-relaxed mb-8">
              Working with Sara means bringing your actual life into the conversation — the questions
              you&apos;re sitting with, the patterns you keep encountering, the decisions that feel
              weighty. Astrology becomes a language for making sense of it all with more awareness
              and intention.
            </p>

            <ul className="space-y-3 mb-10">
              {themes.map((t) => (
                <li key={t.text} className="flex items-start gap-3">
                  <span className="text-[#CBAA68] text-xs mt-1" aria-hidden="true">{t.icon}</span>
                  <span className="text-[#B8A8C7] text-sm">{t.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-6 py-3 border border-[#CBAA68]/40 text-[#CBAA68] text-[10px] tracking-[0.25em] uppercase hover:bg-[#CBAA68]/10 transition-all"
              >
                Meet Sara
              </Link>
              <CalendlyButton className="px-6 py-3 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[10px] tracking-[0.25em] uppercase font-semibold cursor-pointer hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all">
                Book a Session
              </CalendlyButton>
              <Link
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('instagram_profile_clicked')}
                className="px-6 py-3 text-[#6B5A80] hover:text-[#B8A8C7] text-[10px] tracking-[0.25em] uppercase transition-colors flex items-center gap-2"
              >
                <InstagramIcon size={14} />
                Follow on Instagram
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
