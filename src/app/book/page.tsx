import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import CalendlyEmbed from '@/components/calendly/CalendlyEmbed';
import { services } from '@/data/services';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Book a Session',
  description: 'Schedule an intuitive astrology session with Sara Wigle. Choose a time that works for you through Calendly.',
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Begin Here"
        title="Book a Session With Sara"
        subtitle="Choose a date and time below. You'll receive all session details and meeting instructions in your confirmation email."
        starCount={50}
      />

      <section className="py-12 bg-[#090A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Session type quick-select */}
          <div className="mb-10">
            <p className="text-[#CBAA68] text-xs tracking-[0.25em] uppercase mb-4 text-center">Choose a Reading Type</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={s.calendlyUrl || '#'}
                  target={s.calendlyUrl ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-[#CBAA68]/20 text-[#B8A8C7] hover:border-[#CBAA68]/50 hover:text-[#E2C88C] text-sm transition-all"
                >
                  <span>{s.icon}</span>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Calendly inline embed */}
          <CalendlyEmbed minHeight="700px" />

          <p className="text-center text-[#3A2D4A] text-xs mt-6">
            Can&apos;t see the calendar?{' '}
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CBAA68] hover:underline"
            >
              Open Calendly directly →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
