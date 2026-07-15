'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { faqs } from '@/data/faqs';

export default function FAQSection({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<string | null>(null);
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="relative py-24 lg:py-32 bg-[#090A1A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionHeader
            eyebrow="Questions & Answers"
            heading="Frequently Asked Questions"
          />
        </div>

        <div className="space-y-2">
          {items.map((faq) => (
            <div key={faq.id} className="border border-[#CBAA68]/10 bg-[#0D0D1F]">
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                aria-expanded={open === faq.id}
                className="w-full flex items-start justify-between gap-4 p-6 text-left"
              >
                <span
                  className="text-[#E2C88C] text-base leading-snug"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-[#CBAA68] flex-shrink-0 mt-1 transition-transform duration-300 ${open === faq.id ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === faq.id && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-[#CBAA68]/10 pt-4">
                      <p className="text-[#B8A8C7] text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
