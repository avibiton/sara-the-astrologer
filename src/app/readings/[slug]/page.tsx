import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Clock, Monitor, CheckCircle2 } from 'lucide-react';
import CalendlyButton from '@/components/calendly/CalendlyButton';
import FAQSection from '@/components/sections/FAQSection';
import BookingCTA from '@/components/sections/BookingCTA';
import StarField from '@/components/ui/StarField';
import { services } from '@/data/services';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-b from-[#090A1A] to-[#181126] overflow-hidden">
        <StarField count={60} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl text-[#CBAA68] mb-6" aria-hidden="true">{service.icon}</div>
          <p className="text-[#CBAA68] tracking-[0.3em] uppercase text-xs mb-4">Astrology Reading</p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-[#F6F0E7] font-light mb-4"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            {service.name}
          </h1>
          <p className="text-[#B8A8C7] text-lg italic mb-8" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            {service.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-xs text-[#6B5A80]">
            <span className="flex items-center gap-1.5"><Clock size={12} />{service.duration}</span>
            <span className="flex items-center gap-1.5"><Monitor size={12} />{service.format}</span>
            <span className="text-[#CBAA68] font-medium">{service.price}</span>
          </div>
          <CalendlyButton
            url={service.calendlyUrl}
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[11px] tracking-[0.25em] uppercase font-semibold cursor-pointer hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all shadow-[0_0_30px_rgba(203,170,104,0.25)]"
          >
            Book This Session
          </CalendlyButton>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#090A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <h2
                className="text-2xl text-[#E2C88C] mb-4"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                About This Reading
              </h2>
              <p className="text-[#B8A8C7] leading-relaxed">{service.description}</p>
            </div>

            {/* Who it's for */}
            <div>
              <h2 className="text-2xl text-[#E2C88C] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                Who This Reading Is For
              </h2>
              <p className="text-[#B8A8C7] leading-relaxed">{service.forWhom}</p>
            </div>

            {/* Questions */}
            {service.questions.length > 0 && (
              <div>
                <h2 className="text-2xl text-[#E2C88C] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                  Questions This Session Can Explore
                </h2>
                <ul className="space-y-3">
                  {service.questions.map((q) => (
                    <li key={q} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-[#CBAA68] mt-0.5 flex-shrink-0" />
                      <span className="text-[#B8A8C7] text-sm">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Session FAQs */}
            {service.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl text-[#E2C88C] mb-6" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                  Session FAQs
                </h2>
                <div className="space-y-6">
                  {service.faqs.map((faq) => (
                    <div key={faq.q}>
                      <p className="text-[#CBAA68] text-sm font-medium mb-2">{faq.q}</p>
                      <p className="text-[#B8A8C7] text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="border border-[#CBAA68]/15 bg-[#0D0D1F] p-6">
              <h3 className="text-[#E2C88C] text-lg mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                Session Details
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-[#4A3D5C] text-[10px] tracking-widest uppercase mb-1">Duration</p>
                  <p className="text-[#B8A8C7]">{service.duration}</p>
                </div>
                <div>
                  <p className="text-[#4A3D5C] text-[10px] tracking-widest uppercase mb-1">Format</p>
                  <p className="text-[#B8A8C7]">{service.format}</p>
                </div>
                <div>
                  <p className="text-[#4A3D5C] text-[10px] tracking-widest uppercase mb-1">Investment</p>
                  <p className="text-[#CBAA68] font-medium">{service.price}</p>
                </div>
                <div>
                  <p className="text-[#4A3D5C] text-[10px] tracking-widest uppercase mb-1">Cancellation Policy</p>
                  <p className="text-[#B8A8C7] text-xs">Cancellations within 24 hours of your session are non-refundable. Rescheduling with 24+ hours notice is always welcome.</p>
                </div>
              </div>
              <CalendlyButton
                url={service.calendlyUrl}
                className="w-full mt-6 py-3.5 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[10px] tracking-widest uppercase font-semibold cursor-pointer hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all"
              >
                Book This Session
              </CalendlyButton>
            </div>

            <div className="border border-[#CBAA68]/15 bg-[#0D0D1F] p-6">
              <h3 className="text-[#E2C88C] text-lg mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                What to Prepare
              </h3>
              <ul className="space-y-2">
                {service.whatToPrepare.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#B8A8C7]">
                    <span className="text-[#CBAA68] mt-0.5" aria-hidden="true">◈</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#CBAA68]/15 bg-[#0D0D1F] p-6">
              <h3 className="text-[#E2C88C] text-lg mb-3" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                Other Readings
              </h3>
              <ul className="space-y-2">
                {services.filter((s) => s.id !== service.id).map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/readings/${s.slug}`}
                      className="text-[#6B5A80] hover:text-[#B8A8C7] text-sm transition-colors flex items-center gap-2"
                    >
                      <span aria-hidden="true">{s.icon}</span>
                      {s.name}
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
