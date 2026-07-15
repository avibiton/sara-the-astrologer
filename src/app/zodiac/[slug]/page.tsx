import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CalendlyButton from '@/components/calendly/CalendlyButton';
import StarField from '@/components/ui/StarField';
import BookingCTA from '@/components/sections/BookingCTA';
import { zodiacSigns } from '@/data/zodiac';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return zodiacSigns.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sign = zodiacSigns.find((s) => s.id === slug);
  if (!sign) return {};
  return { title: `${sign.name} — Zodiac Sign`, description: sign.description };
}

const elementColors: Record<string, string> = {
  Fire: '#E2734A', Earth: '#6B8E5E', Air: '#7ABBE8', Water: '#6BAACB',
};

export default async function ZodiacSignPage({ params }: Props) {
  const { slug } = await params;
  const sign = zodiacSigns.find((s) => s.id === slug);
  if (!sign) notFound();
  const color = elementColors[sign.element];

  return (
    <>
      <section className="relative py-32 bg-gradient-to-b from-[#090A1A] to-[#181126] overflow-hidden">
        <StarField count={60} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-7xl block mb-6" style={{ color }} aria-hidden="true">{sign.symbol}</span>
          <p className="tracking-[0.3em] uppercase text-xs mb-2" style={{ color }}>{sign.element} · {sign.modality}</p>
          <h1 className="text-5xl md:text-6xl text-[#F6F0E7] font-light mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{sign.name}</h1>
          <p className="text-[#6B5A80] text-sm mb-4">{sign.dates}</p>
          <p className="text-[#B8A8C7] text-lg italic" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{sign.theme}</p>
        </div>
      </section>

      <section className="py-24 bg-[#090A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl text-[#E2C88C] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>About {sign.name}</h2>
              <p className="text-[#B8A8C7] leading-relaxed mb-8">{sign.description}</p>

              <h3 className="text-xl text-[#E2C88C] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Key Traits</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {sign.traits.map((t) => (
                  <span key={t} className="text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border" style={{ color, borderColor: `${color}40` }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="border border-[#CBAA68]/10 bg-[#0D0D1F] p-6">
                <p className="text-[#4A3D5C] text-xs italic leading-relaxed">
                  Note: Astrological descriptions reflect general themes associated with this sign and are intended as a starting point for reflection, not a definitive characterization of any individual. Every birth chart is unique — your sun sign is just one part of your full astrological picture.
                </p>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="border border-[#CBAA68]/10 bg-[#0D0D1F] p-5">
                <p className="text-[#4A3D5C] text-[9px] tracking-[0.3em] uppercase mb-4">Sign Data</p>
                {[
                  ['Dates', sign.dates],
                  ['Element', sign.element],
                  ['Modality', sign.modality],
                  ['Ruling Planet', sign.ruler],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-2 border-b border-[#CBAA68]/5 text-sm">
                    <span className="text-[#4A3D5C]">{label}</span>
                    <span className="text-[#B8A8C7]">{value}</span>
                  </div>
                ))}
              </div>
              <div className="border border-[#CBAA68]/10 bg-[#0D0D1F] p-5">
                <p className="text-[#B8A8C7] text-sm mb-3 leading-relaxed">Want to explore what {sign.name} means in your personal chart?</p>
                <CalendlyButton className="w-full py-3 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[10px] tracking-widest uppercase font-semibold cursor-pointer hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all">
                  Book a Reading
                </CalendlyButton>
              </div>
              <div className="border border-[#CBAA68]/10 bg-[#0D0D1F] p-5">
                <p className="text-[#4A3D5C] text-[9px] tracking-[0.3em] uppercase mb-3">All Signs</p>
                <div className="grid grid-cols-3 gap-1.5">
                  {zodiacSigns.map((s) => (
                    <Link key={s.id} href={`/zodiac/${s.id}`}
                      className={`flex flex-col items-center p-2 border text-center transition-all ${s.id === sign.id ? 'border-[#CBAA68]/40 bg-[#181126]' : 'border-[#CBAA68]/5 hover:border-[#CBAA68]/20'}`}>
                      <span className="text-lg mb-0.5" style={{ color: elementColors[s.element] }}>{s.symbol}</span>
                      <span className="text-[8px] text-[#4A3D5C]">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
