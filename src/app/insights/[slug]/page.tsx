import InstagramIcon from '@/components/ui/InstagramIcon';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import CalendlyButton from '@/components/calendly/CalendlyButton';
import BookingCTA from '@/components/sections/BookingCTA';
import StarField from '@/components/ui/StarField';
import { insights } from '@/data/insights';
import { services } from '@/data/services';
import { brand } from '@/data/brand';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.summary };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) notFound();

  const relatedService = article.relatedService
    ? services.find((s) => s.id === article.relatedService)
    : null;

  return (
    <>
      <section className="relative py-32 bg-gradient-to-b from-[#090A1A] to-[#181126] overflow-hidden">
        <StarField count={50} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {article.topics.map((t) => (
              <span key={t} className="text-[9px] tracking-[0.2em] uppercase text-[#CBAA68] border border-[#CBAA68]/25 px-3 py-1">
                {t}
              </span>
            ))}
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-[#F6F0E7] font-light mb-6"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            {article.title}
          </h1>
          <p className="text-[#B8A8C7] text-lg leading-relaxed mb-6">{article.summary}</p>
          <p className="text-[#4A3D5C] text-xs">
            By Sara Wigle · {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#090A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 prose prose-invert max-w-none prose-p:text-[#B8A8C7] prose-h2:text-[#E2C88C] prose-h3:text-[#E2C88C] prose-strong:text-[#E2C88C] prose-li:text-[#B8A8C7]">
            {article.body.split('\n\n').map((para, i) => {
              if (para.startsWith('**') || para.includes('\n')) {
                return (
                  <div key={i} className="mb-6 text-[#B8A8C7] leading-relaxed text-base">
                    {para.split('\n').map((line, j) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <h2 key={j} className="text-xl text-[#E2C88C] mb-3 mt-8" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{line.replace(/\*\*/g, '')}</h2>;
                      }
                      if (line.startsWith('- ')) {
                        return <p key={j} className="flex gap-2 text-[#B8A8C7] text-sm mb-2"><span className="text-[#CBAA68]">◈</span>{line.replace('- ', '')}</p>;
                      }
                      return line ? <p key={j} className="text-[#B8A8C7] leading-relaxed mb-4">{line}</p> : null;
                    })}
                  </div>
                );
              }
              return <p key={i} className="text-[#B8A8C7] leading-relaxed mb-6 text-base">{para}</p>;
            })}
          </article>

          <aside className="space-y-6">
            {relatedService && (
              <div className="border border-[#CBAA68]/15 bg-[#0D0D1F] p-6">
                <p className="text-[#4A3D5C] text-[10px] tracking-widest uppercase mb-3">Related Reading</p>
                <p className="text-2xl text-[#CBAA68] mb-2" aria-hidden="true">{relatedService.icon}</p>
                <h3 className="text-[#E2C88C] mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{relatedService.name}</h3>
                <p className="text-[#6B5A80] text-xs mb-4 leading-relaxed">{relatedService.tagline}</p>
                <CalendlyButton url={relatedService.calendlyUrl} className="w-full py-3 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[10px] tracking-widest uppercase font-semibold cursor-pointer hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all">
                  Book This Session
                </CalendlyButton>
              </div>
            )}
            <div className="border border-[#CBAA68]/15 bg-[#0D0D1F] p-6">
              <p className="text-[#4A3D5C] text-[10px] tracking-widest uppercase mb-3">Follow Sara</p>
              <p className="text-[#B8A8C7] text-sm mb-4 leading-relaxed">
                Daily astrology, practical reflections, and celestial guidance.
              </p>
              <Link href={brand.instagramUrl} target="_blank" rel="noopener noreferrer"
                className="w-full py-3 border border-[#CBAA68]/30 text-[#CBAA68] text-[10px] tracking-widest uppercase hover:bg-[#CBAA68]/10 transition-all flex items-center justify-center gap-2">
                <InstagramIcon size={13} />
                {brand.instagramHandle}
              </Link>
            </div>
            <div className="border border-[#CBAA68]/15 bg-[#0D0D1F] p-6">
              <p className="text-[#4A3D5C] text-[10px] tracking-widest uppercase mb-3">More Insights</p>
              <ul className="space-y-3">
                {insights.filter((a) => a.slug !== slug).map((a) => (
                  <li key={a.id}>
                    <Link href={`/insights/${a.slug}`} className="text-[#6B5A80] hover:text-[#B8A8C7] text-sm transition-colors leading-snug block">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
