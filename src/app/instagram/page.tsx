import InstagramIcon from '@/components/ui/InstagramIcon';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import BookingCTA from '@/components/sections/BookingCTA';
import InstagramProfileEmbed from '@/components/instagram/InstagramProfileEmbed';
import { brand } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Instagram',
  description: 'Follow Sara the Astrologer on Instagram for daily astrology insights, celestial updates, and intuitive guidance.',
};

export default function InstagramPage() {
  return (
    <>
      <PageHero
        eyebrow={brand.instagramHandle}
        title="Astrology for Real Life"
        subtitle="Follow Sara for daily celestial insights, practical reflections, current astrology, and a grounded perspective on where fate meets free will."
        starCount={70}
      />

      <section className="py-24 bg-[#090A1A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <InstagramProfileEmbed />

          <div className="text-center mt-10">
            <Link
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#CBAA68]/30 text-[#CBAA68] text-[11px] tracking-[0.25em] uppercase hover:bg-[#CBAA68]/10 transition-all"
            >
              <InstagramIcon size={16} />
              See All Posts on Instagram
            </Link>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
