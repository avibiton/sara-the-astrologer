import InstagramIcon from '@/components/ui/InstagramIcon';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import StarField from '@/components/ui/StarField';
import BookingCTA from '@/components/sections/BookingCTA';
import { instagramPosts } from '@/data/instagram-posts';
import { brand } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Instagram',
  description: 'Follow Sara the Astrologer on Instagram for daily astrology insights, celestial updates, and intuitive guidance.',
};

export default function InstagramPage() {
  return (
    <>
      <section className="relative py-32 bg-gradient-to-b from-[#090A1A] to-[#181126] overflow-hidden">
        <StarField count={70} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <InstagramIcon size={40} className="text-[#CBAA68] mx-auto mb-6" />
          <p className="text-[#CBAA68] tracking-[0.3em] uppercase text-xs mb-4">{brand.instagramHandle}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#F6F0E7] font-light mb-6" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            Astrology for Real Life
          </h1>
          <p className="text-[#B8A8C7] text-lg leading-relaxed mb-8">
            Follow Sara for daily celestial insights, practical reflections, current astrology, and a grounded perspective on where fate meets free will.
          </p>
          <Link
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[11px] tracking-[0.25em] uppercase font-semibold hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all"
          >
            <InstagramIcon size={16} />
            Follow on Instagram
          </Link>
        </div>
      </section>

      <section className="py-24 bg-[#090A1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <p className="text-[#B8A8C7] text-center max-w-xl leading-relaxed mb-6">
              The posts below represent Sara&apos;s public Instagram content. Click any post to view it directly on Instagram.
            </p>
            <p className="text-[#4A3D5C] text-xs text-center">
              Update post data in <code className="text-[#CBAA68]">src/data/instagram-posts.ts</code> to keep the feed current.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square bg-[#0D0D1F] border border-[#CBAA68]/10 hover:border-[#CBAA68]/40 overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#181126] to-[#321D3E]">
                  <InstagramIcon size={20} className="text-[#CBAA68]/30" />
                  {post.topic && <span className="text-[8px] tracking-[0.2em] uppercase text-[#3A2D4A]">{post.topic}</span>}
                </div>
                <div className="absolute inset-0 bg-[#090A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3">
                  <ExternalLink size={16} className="text-[#CBAA68]" />
                  <p className="text-[#B8A8C7] text-[10px] text-center line-clamp-3 leading-snug">{post.caption}</p>
                </div>
              </a>
            ))}
          </div>

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
