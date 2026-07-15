'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import CalendlyButton from '@/components/calendly/CalendlyButton';

const steps = [
  {
    number: '01',
    title: 'Choose Your Session',
    body: 'Select the type of astrology session that best fits your questions — whether you want to explore your natal chart, understand current transits, examine a relationship dynamic, or plan the year ahead.',
    icon: '○',
  },
  {
    number: '02',
    title: 'Schedule Through Calendly',
    body: "Choose an available date and time using Sara's online booking calendar. You'll receive a confirmation with everything you need to know before your session.",
    icon: '◎',
  },
  {
    number: '03',
    title: 'Meet With Sara',
    body: "Join your private session using the meeting instructions included with your Calendly confirmation. Bring your questions, your curiosity, and an openness to what the chart reveals.",
    icon: '✦',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#090A1A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionHeader
            eyebrow="The Process"
            heading="Your Session in Three Simple Steps"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-[#CBAA68]/20 to-transparent"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#CBAA68]/30 bg-[#0D0D1F] text-2xl text-[#CBAA68]">
                  {step.icon}
                </div>
              </div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#CBAA68]/60 mb-3">
                Step {step.number}
              </p>
              <h3
                className="text-xl text-[#E2C88C] mb-3"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {step.title}
              </h3>
              <p className="text-[#6B5A80] text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <CalendlyButton className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[11px] tracking-[0.25em] uppercase font-semibold hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all shadow-[0_0_30px_rgba(203,170,104,0.2)] hover:shadow-[0_0_40px_rgba(203,170,104,0.4)] cursor-pointer">
            Book a Session With Sara
          </CalendlyButton>
        </div>
      </div>
    </section>
  );
}
