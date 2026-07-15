import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import BookingCTA from '@/components/sections/BookingCTA';
import { zodiacSigns } from '@/data/zodiac';

export const metadata: Metadata = {
  title: 'Zodiac Signs',
  description: 'Explore all 12 zodiac signs — their themes, elements, and patterns, through the lens of intuitive astrology.',
};

// Correct tropical zodiac dates
const zodiacDates: Record<string, string> = {
  aries:       'Mar 21 – Apr 19',
  taurus:      'Apr 20 – May 20',
  gemini:      'May 21 – Jun 20',
  cancer:      'Jun 21 – Jul 22',
  leo:         'Jul 23 – Aug 22',
  virgo:       'Aug 23 – Sep 22',
  libra:       'Sep 23 – Oct 22',
  scorpio:     'Oct 23 – Nov 21',
  sagittarius: 'Nov 22 – Dec 21',
  capricorn:   'Dec 22 – Jan 19',
  aquarius:    'Jan 20 – Feb 18',
  pisces:      'Feb 19 – Mar 20',
};

export default function ZodiacPage() {
  return (
    <>
      <PageHero
        eyebrow="The Twelve Signs"
        title="Choose Your Zodiac Sign"
        subtitle="Each sign carries its own themes, patterns, and elemental energy. Select a sign to explore — or start with your sun, moon, or rising."
        starCount={70}
      />

      <section className="py-20 bg-[#090A1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
            {zodiacSigns.map((sign) => (
              <Link
                key={sign.id}
                href={`/zodiac/${sign.id}`}
                className="group flex flex-col items-center text-center"
              >
                {/* Dark blob circle with zodiac symbol */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 flex items-center justify-center">
                  {/* Outer glow ring — appears on hover */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: '0 0 0 2px rgba(203,170,104,0.6), 0 0 30px 6px rgba(203,170,104,0.25)',
                    }}
                  />
                  {/* Ink blob background */}
                  <div
                    className="absolute inset-0 rounded-full scale-100 group-hover:scale-110 transition-all duration-300"
                    style={{
                      background: 'radial-gradient(ellipse 80% 85% at 50% 52%, #111118 55%, #1a1228 78%, #090A1A 100%)',
                      boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)',
                    }}
                  />
                  {/* Zodiac glyph */}
                  <span
                    className="relative z-10 select-none text-[#F6F0E7] group-hover:text-[#E2C88C] transition-all duration-300"
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                      lineHeight: 1,
                      fontWeight: 300,
                      textShadow: '0 0 20px rgba(246,240,231,0.15)',
                    }}
                    aria-hidden="true"
                  >
                    {sign.symbol}
                  </span>
                </div>

                {/* Name */}
                <h2
                  className="text-[#F6F0E7] font-bold text-base sm:text-lg mb-1 group-hover:text-[#E2C88C] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {sign.name}
                </h2>

                {/* Dates */}
                <p className="text-[#CBAA68] text-xs sm:text-sm tracking-wide group-hover:text-[#E2C88C]/80 transition-colors duration-300">
                  {zodiacDates[sign.id]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
