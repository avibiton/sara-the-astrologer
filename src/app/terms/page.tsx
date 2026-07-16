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
          <h1 className="text-4xl md:text-5xl text-[#F6F0E7] font-light" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Terms &amp; Conditions</h1>
          <p className="text-[#4A3D5C] text-sm mt-4">Last updated: January {year}</p>
        </div>
      </section>
      <section className="py-16 bg-[#090A1A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-p:text-[#B8A8C7] prose-h2:text-[#E2C88C] max-w-none">
          <p className="text-[#B8A8C7]">
            By using this website and booking sessions with Sara the Astrologer, you agree to the following terms and conditions. Please read them carefully.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Nature of Services</h2>
          <p className="text-[#B8A8C7]">
            Astrology readings provided by Sara the Astrologer are for informational and personal reflection purposes. They do not constitute professional advice of any kind — including medical, legal, financial, or psychological advice. You are responsible for your own decisions and choices.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Booking</h2>
          <p className="text-[#B8A8C7]">
            Sessions are booked through Calendly. Your session is confirmed only upon receipt of payment. By completing a booking you agree to provide accurate birth information (date, time, and location) as required for chart preparation.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Cancellation & Rescheduling</h2>
          <p className="text-[#B8A8C7]">
            You may reschedule your session with at least 24 hours&apos; notice at no charge. Cancellations made within 24 hours of the scheduled session are non-refundable. No-shows are non-refundable.
          </p>
          <p className="text-[#B8A8C7]">
            If Sara needs to cancel or reschedule a session, you will be offered a full refund or an alternative time.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Session Recordings</h2>
          <p className="text-[#B8A8C7]">
            Sessions are not recorded by Sara. If you wish to record your session for personal use, you must inform Sara at the start of the session and obtain her consent.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Confidentiality</h2>
          <p className="text-[#B8A8C7]">
            All session content is treated as confidential. Personal details shared during a reading will not be disclosed to third parties without your consent.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Intellectual Property</h2>
          <p className="text-[#B8A8C7]">
            All content on this website — including text, design, graphics, and astrology interpretations — is the property of Sara the Astrologer and may not be reproduced or distributed without written permission.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Limitation of Liability</h2>
          <p className="text-[#B8A8C7]">
            Sara the Astrologer is not liable for any decisions made based on astrological readings. Readings are intended to support self-reflection and personal awareness. The stars illuminate possibilities — the choices remain yours.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Contact</h2>
          <p className="text-[#B8A8C7]">
            For questions about these terms, contact us at{' '}
            <a href={`mailto:${brand.email}`} className="text-[#CBAA68]">{brand.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
