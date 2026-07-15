'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';

const topics = [
  {
    icon: '☽',
    title: 'Birth Charts',
    description: 'Your natal chart as a map of innate patterns, gifts, and life themes.',
    href: '/insights/understanding-your-birth-chart',
  },
  {
    icon: '♃',
    title: 'Planetary Transits',
    description: 'How current planetary movements interact with your chart and real life.',
    href: '/insights',
  },
  {
    icon: '♀',
    title: 'Relationships',
    description: 'The astrological dynamics between people — what clicks, what challenges.',
    href: '/insights/relationship-astrology-synastry',
  },
  {
    icon: '○',
    title: 'Fate & Free Will',
    description: 'How astrology honors both cosmic patterns and personal agency.',
    href: '/insights/fate-free-will-astrology',
  },
  {
    icon: '◉',
    title: 'New & Full Moons',
    description: 'The lunation cycle and how it creates rhythm in everyday life.',
    href: '/insights',
  },
  {
    icon: '☿',
    title: 'Mercury Retrograde',
    description: 'What retrogrades actually mean — and what to do during them.',
    href: '/insights',
  },
  {
    icon: '☉',
    title: 'Career & Purpose',
    description: 'What your chart reveals about vocation, direction, and meaningful work.',
    href: '/readings/year-ahead',
  },
  {
    icon: '✦',
    title: 'Timing & Transitions',
    description: 'Understanding astrological windows and significant life chapters.',
    href: '/readings/transit',
  },
];

export default function TopicsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#090A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionHeader
            eyebrow="Astrology Topics"
            heading="What Astrology Can Help You Explore"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={topic.href}
                className="group flex flex-col gap-3 p-6 border border-[#CBAA68]/10 bg-[#0D0D1F] hover:border-[#CBAA68]/35 hover:bg-[#181126] transition-all duration-300 h-full"
              >
                <span className="text-2xl text-[#CBAA68] group-hover:scale-110 transition-transform duration-300 inline-block" aria-hidden="true">
                  {topic.icon}
                </span>
                <h3
                  className="text-[#E2C88C] text-lg group-hover:text-[#F6F0E7] transition-colors"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {topic.title}
                </h3>
                <p className="text-[#6B5A80] text-sm leading-relaxed">{topic.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
