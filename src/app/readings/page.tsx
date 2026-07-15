import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Monitor } from 'lucide-react';
import CalendlyButton from '@/components/calendly/CalendlyButton';
import PageHero from '@/components/sections/PageHero';
import BookingCTA from '@/components/sections/BookingCTA';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Astrology Readings',
  description:
    'Explore Sara Wigle\'s intuitive astrology readings — birth chart, relationship, transit, year-ahead, and follow-up sessions.',
};

export default function ReadingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Work With Sara"
        title="Astrology Readings"
        subtitle="Private one-on-one sessions exploring your chart, your patterns, your timing, and the questions you're actually living with."
        starCount={80}
      />

      <section className="py-24 bg-[#090A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="border border-[#CBAA68]/15 bg-[#0D0D1F] p-8 md:p-10 hover:border-[#CBAA68]/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="text-4xl text-[#CBAA68]" aria-hidden="true">{service.icon}</div>
                <div className="flex-1">
                  <h2
                    className="text-2xl text-[#E2C88C] mb-1"
                    style={{ fontFamily: 'var(--font-cormorant), serif' }}
                  >
                    {service.name}
                  </h2>
                  <p className="text-[#6B5A80] text-xs italic mb-4">{service.tagline}</p>
                  <p className="text-[#B8A8C7] text-sm leading-relaxed mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-6 mb-6">
                    <span className="flex items-center gap-1.5 text-[#6B5A80] text-xs">
                      <Clock size={11} /> {service.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#6B5A80] text-xs">
                      <Monitor size={11} /> {service.format}
                    </span>
                    <span className="text-[#CBAA68] text-sm font-medium">{service.price}</span>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={`/readings/${service.slug}`}
                      className="px-5 py-2.5 border border-[#CBAA68]/30 text-[#CBAA68] text-[10px] tracking-[0.2em] uppercase hover:bg-[#CBAA68]/10 transition-all"
                    >
                      Learn More
                    </Link>
                    <CalendlyButton
                      url={service.calendlyUrl}
                      className="px-5 py-2.5 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[10px] tracking-[0.2em] uppercase font-semibold cursor-pointer hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all"
                    >
                      Book This Session
                    </CalendlyButton>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
