'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';

const benefits = [
  {
    icon: '◈',
    title: 'Intuitive and Personalized',
    body: "Every session is built around your chart and your actual questions — not a scripted reading of textbook meanings. Sara brings genuine attunement to what's alive for you.",
  },
  {
    icon: '◈',
    title: 'Grounded in Real-Life Questions',
    body: "Astrology becomes most useful when it meets real life directly. Sessions are structured around your actual situation, not abstract cosmic theory.",
  },
  {
    icon: '◈',
    title: 'Respectful of Free Will',
    body: "The chart describes patterns and timing — it doesn't make decisions for you. Sara's work honors your agency throughout, framing insight as information rather than verdict.",
  },
  {
    icon: '◈',
    title: 'Clear and Compassionate',
    body: "Accessible language, real conversation, and genuine care. The goal is always insight you can actually use — not complexity for its own sake.",
  },
  {
    icon: '◈',
    title: 'Focused on Self-Awareness',
    body: "Understanding your chart is ultimately about understanding yourself more fully — your patterns, your timing, the recurring themes that shape your experience.",
  },
  {
    icon: '◈',
    title: 'Practical and Reflective',
    body: "A session with Sara isn't just illuminating — it tends to be useful. You leave with perspective, language, and often a clearer sense of how to approach what you're navigating.",
  },
];

export default function WhyWorkWithSara() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#090A1A] via-[#181126] to-[#090A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionHeader
            eyebrow="Why Work With Sara"
            heading="Insight That Honors Both the Stars and Your Choices"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 border border-[#CBAA68]/10 bg-[#0D0D1F]"
            >
              <div className="absolute top-0 left-8 w-12 h-px bg-gradient-to-r from-[#CBAA68]/50 to-transparent" aria-hidden="true" />
              <span className="text-[#CBAA68] text-lg mb-4 block" aria-hidden="true">{b.icon}</span>
              <h3
                className="text-[#E2C88C] text-lg mb-3"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {b.title}
              </h3>
              <p className="text-[#6B5A80] text-sm leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
