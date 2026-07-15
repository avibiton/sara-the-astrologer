import type { Metadata } from 'next';
import StarField from '@/components/ui/StarField';
import { brand } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Sara the Astrologer.',
};

export default function TermsPage() {
  const year = new Date().getFullYear();
  return (
    <>
      <section className="relative py-24 bg-gradient-to-b from-[#090A1A] to-[#181126] overflow-hidden">
        <StarField count={40} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-[#F6F0E7] font-light" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Terms & Conditions</h1>
          <p className="text-[#4A3D5C] text-sm mt-4">Last updated: {year}</p>
        </div>
      </section>
      <section className="py-16 bg-[#090A1A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-p:text-[#B8A8C7] prose-h2:text-[#E2C88C] max-w-none">
          <p className="text-[#B8A8C7]">By using this website and booking sessions with Sara the Astrologer, you agree to the following terms.</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Nature of Services</h2>
          <p className="text-[#B8A8C7]">Astrology readings provided by Sara the Astrologer are for informational and entertainment purposes. They do not constitute professional advice of any kind, including medical, legal, financial, or psychological advice.</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Booking & Cancellation</h2>
          <p className="text-[#B8A8C7]">[Sara to confirm booking, cancellation, and rescheduling policy. This section will be updated accordingly.]</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Intellectual Property</h2>
          <p className="text-[#B8A8C7]">All website content, including text, design, and graphics, is the property of Sara the Astrologer and may not be reproduced without written permission.</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Limitation of Liability</h2>
          <p className="text-[#B8A8C7]">Sara the Astrologer is not liable for any decisions made based on astrological readings. Readings are intended to support self-reflection and awareness, not to direct life choices.</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Contact</h2>
          <p className="text-[#B8A8C7]">
            For questions about these terms, contact us at{' '}
            {brand.email ? <a href={`mailto:${brand.email}`} className="text-[#CBAA68]">{brand.email}</a> : '[contact email — to be added]'}.
          </p>
          <p className="text-[#4A3D5C] text-xs mt-8">[This is a placeholder Terms document. Please review and update with your legal advisor before publishing.]</p>
        </div>
      </section>
    </>
  );
}
