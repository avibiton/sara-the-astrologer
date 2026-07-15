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
            <div className="flex items-center justify-center sticky top-24">
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
                  Sara Wigle is an intuitive astrologer offering private one-on-one sessions online.
                  Her work is grounded in the positioning that fate and free will are not opposites —
                  they are in ongoing conversation, and astrology is one of the most powerful tools for
                  understanding how that conversation plays out in a real life.
                </p>
                <p className="text-[#B8A8C7] leading-relaxed mb-4">
                  [
                  <em className="text-[#4A3D5C] not-italic">
                    Full biography to be added here. Please update this file with Sara&apos;s actual story,
                    training, background, and approach using her verified public content.
                  </em>
                  ]
                </p>

                <h3
                  className="text-xl text-[#E2C88C] mt-8 mb-3 font-light"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  Sara&apos;s Approach
                </h3>
                <p className="text-[#B8A8C7] leading-relaxed mb-4">
                  Sessions with Sara are built around your actual questions, not a scripted tour of
                  astrological theory. The chart is the starting point — your life is the conversation.
                  Sara brings genuine attunement and clear language to what can sometimes feel like an
                  overwhelming amount of information.
                </p>
                <p className="text-[#B8A8C7] leading-relaxed mb-4">
                  The goal is always insight you can actually use — perspective that helps you
                  understand what&apos;s in motion, what tends to repeat, what&apos;s being called forward right
                  now — and what you might do with any of that.
                </p>

                {/* Editable fields */}
                <div className="mt-8 border border-[#CBAA68]/10 p-6 bg-[#0D0D1F] space-y-4">
                  <p className="text-[#4A3D5C] text-xs tracking-widest uppercase">Placeholder Fields — Edit in src/app/about/page.tsx</p>
                  {[
                    'Training & Education',
                    'Qualifications & Certifications',
                    'Years of Study',
                    'Specialties',
                    'Session Format',
                    'Languages',
                  ].map((field) => (
                    <div key={field}>
                      <p className="text-[#CBAA68] text-xs tracking-widest uppercase mb-1">{field}</p>
                      <p className="text-[#2A1E36] text-sm">[{field} — to be confirmed by Sara]</p>
                    </div>
                  ))}
                </div>
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
