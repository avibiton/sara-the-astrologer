import type { Metadata } from 'next';
import Link from 'next/link';
import StarField from '@/components/ui/StarField';
import BookingCTA from '@/components/sections/BookingCTA';
import { insights } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Astrology Insights',
  description: 'Explore Sara Wigle\'s astrology articles — birth charts, transits, relationships, fate and free will, and more.',
};

export default function InsightsPage() {
  return (
    <>
      <section className="relative py-32 bg-gradient-to-b from-[#090A1A] to-[#181126] overflow-hidden">
        <StarField count={60} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#CBAA68] tracking-[0.3em] uppercase text-xs mb-4">Astrology Insights</p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-[#F6F0E7] font-light mb-6"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Celestial Perspectives for Real Life
          </h1>
          <p className="text-[#B8A8C7] text-lg leading-relaxed">
            Original articles exploring astrology topics — patterns, timing, relationships, and the space where fate meets free will.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#090A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((article) => (
              <article key={article.id} className="group border border-[#CBAA68]/10 bg-[#0D0D1F] hover:border-[#CBAA68]/30 transition-all duration-300 flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.topics.slice(0, 2).map((t) => (
                      <span key={t} className="text-[9px] tracking-[0.15em] uppercase text-[#CBAA68]/60 border border-[#CBAA68]/15 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2
                    className="text-xl text-[#E2C88C] group-hover:text-[#F6F0E7] transition-colors mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-cormorant), serif' }}
                  >
                    {article.title}
                  </h2>
                  <p className="text-[#6B5A80] text-sm leading-relaxed mb-4 flex-1">{article.summary}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#CBAA68]/10">
                    <span className="text-[#3A2D4A] text-[10px]">{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="text-[#CBAA68] hover:text-[#E2C88C] text-[10px] tracking-[0.2em] uppercase transition-colors"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
