import type { Metadata } from 'next';
import StarField from '@/components/ui/StarField';
import FAQSection from '@/components/sections/FAQSection';
import BookingCTA from '@/components/sections/BookingCTA';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to frequently asked questions about Sara Wigle\'s intuitive astrology sessions.',
};

export default function FAQPage() {
  return (
    <>
      <section className="relative py-32 bg-gradient-to-b from-[#090A1A] to-[#181126] overflow-hidden">
        <StarField count={60} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#CBAA68] tracking-[0.3em] uppercase text-xs mb-4">Common Questions</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#F6F0E7] font-light mb-6" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-[#B8A8C7] text-lg leading-relaxed">
            Everything you need to know about working with Sara — from what to prepare to what to expect.
          </p>
        </div>
      </section>
      <FAQSection />
      <BookingCTA />
    </>
  );
}
