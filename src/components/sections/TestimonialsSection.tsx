'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  const current = testimonials[idx];

  if (testimonials.every((t) => t.isPlaceholder)) {
    return (
      <section className="py-24 bg-gradient-to-b from-[#181126] to-[#090A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader eyebrow="Client Stories" heading="What Clients Are Saying" />
          <div className="mt-10 p-10 border border-[#CBAA68]/15 bg-[#0D0D1F]">
            <p className="text-[#4A3D5C] text-sm">
              Testimonials will appear here. Please replace the placeholders in{' '}
              <code className="text-[#CBAA68] text-xs">src/data/testimonials.ts</code>{' '}
              with genuine client feedback that Sara has publicly shared or received permission to publish.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#181126] to-[#090A1A] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionHeader eyebrow="Client Stories" heading="What Clients Are Saying" />
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4"
            >
              <p
                className="text-[#B8A8C7] text-xl md:text-2xl leading-relaxed mb-8 italic"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                &ldquo;{current.text}&rdquo;
              </p>
              <footer>
                <p className="text-[#CBAA68] text-sm tracking-wider">{current.name}</p>
                {current.service && (
                  <p className="text-[#4A3D5C] text-xs mt-1">{current.service}</p>
                )}
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {/* Controls */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 border border-[#CBAA68]/20 flex items-center justify-center text-[#CBAA68] hover:border-[#CBAA68]/50 hover:bg-[#CBAA68]/10 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-[#CBAA68]' : 'bg-[#CBAA68]/20'}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 border border-[#CBAA68]/20 flex items-center justify-center text-[#CBAA68] hover:border-[#CBAA68]/50 hover:bg-[#CBAA68]/10 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
