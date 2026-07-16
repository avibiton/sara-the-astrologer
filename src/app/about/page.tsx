import InstagramIcon from '@/components/ui/InstagramIcon';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import CalendlyButton from '@/components/calendly/CalendlyButton';
import PageHero from '@/components/sections/PageHero';
import BookingCTA from '@/components/sections/BookingCTA';
import { brand } from '@/data/brand';

export const metadata: Metadata = {
  title: 'About Sara Wigle',
  description:
    'Meet Sara Wigle — the intuitive astrologer behind Sara the Astrologer. Learn about her approach, philosophy, and how she works with clients.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Sara Wigle"
        title="The Astrologer Behind the Insights"
        subtitle="An intuitive astrologer whose work begins with a simple belief: the chart reveals patterns, and what you do with those patterns is always yours to decide."
        starCount={80}
      />

      {/* About content */}
      <section className="py-24 bg-[#090A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Portrait */}
            <div className="flex items-center justify-center lg:sticky lg:top-24">
              <div className="relative w-full max-w-sm">
                <div className="aspect-[3/4] relative overflow-hidden border border-[#CBAA68]/15">
                  <Image
                    src="/images/sara-about.jpg"
                    alt="Sara Wigle — Intuitive Astrologer"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 384px"
                    priority
                  />
                  <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#CBAA68]/40 z-10" aria-hidden="true" />
                  <span className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#CBAA68]/40 z-10" aria-hidden="true" />
                  <span className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#CBAA68]/40 z-10" aria-hidden="true" />
                  <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#CBAA68]/40 z-10" aria-hidden="true" />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[#E2C88C] text-sm" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Sara Wigle</p>
                  <p className="text-[#4A3D5C] text-[10px] tracking-widest uppercase mt-1">Intuitive Astrologer</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <div className="prose prose-invert max-w-none">
                <h2
                  className="text-2xl text-[#E2C88C] mb-4 font-light"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  Where Fate Meets Free Will
                </h2>
                <p className="text-[#B8A8C7] leading-relaxed mb-4">
                  Raised in the San Francisco Bay Area and now based in New York, my fascination with astrology began at the age of 14 when a close friend gave me a book about the zodiac signs. What started as simple curiosity quickly became a lifelong passion. I found myself constantly recognizing patterns in people, relationships, and life events, and I wanted to understand why those patterns existed.
                </p>
                <p className="text-[#B8A8C7] leading-relaxed mb-4">
                  Before becoming a full-time astrologer, I spent many years working in creative fields, including interior design. Creativity has always been at the center of who I am, but my greatest passion has always been understanding people. Alongside astrology, I developed a deep interest in psychology, particularly the work of Carl Jung and the symbolic language of the unconscious. Today, my sessions combine both disciplines, using astrology as a psychological map to help people better understand themselves, their relationships, and the different seasons of their lives.
                </p>
                <p className="text-[#B8A8C7] leading-relaxed mb-4">
                  Judaism is also a central part of my life and my work. I practice astrology through a Jewish lens and strive to ensure my approach remains aligned with Torah values. I often incorporate Jewish teachings, Kabbalistic ideas, and timeless wisdom into my sessions, helping clients understand astrology not as something mystical or deterministic, but as a tool for self-awareness and personal growth. To me, astrology is part of the language of creation — a symbolic system that reflects the order of the universe established by God. It is not something to worship or blindly follow, but something to use wisely, with humility and discernment.
                </p>

                <h3
                  className="text-xl text-[#E2C88C] mt-8 mb-3 font-light"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  My Approach
                </h3>
                <p className="text-[#B8A8C7] leading-relaxed mb-4">
                  My approach is educational, practical, and deeply personal. I want every client to leave with not only a better understanding of their birth chart and current transits, but also a deeper understanding of themselves. Throughout each session, I explain what I&apos;m seeing and why, so astrology becomes something you can understand and apply in your own life.
                </p>
                <p className="text-[#B8A8C7] leading-relaxed mb-4">
                  For me, astrology has never been about predicting a fixed destiny. It is a tool that reveals patterns, timing, strengths, and challenges so we can make more conscious choices. It has transformed my own life, and I feel incredibly grateful to share that perspective with others.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <CalendlyButton className="px-8 py-4 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[10px] tracking-[0.25em] uppercase font-semibold cursor-pointer hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all">
                  Book a Private Session
                </CalendlyButton>
                <Link
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 border border-[#CBAA68]/30 text-[#CBAA68] text-[10px] tracking-[0.25em] uppercase hover:bg-[#CBAA68]/10 transition-all"
                >
                  <InstagramIcon size={13} />
                  Follow on Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
