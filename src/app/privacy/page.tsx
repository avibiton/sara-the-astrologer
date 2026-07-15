import type { Metadata } from 'next';
import StarField from '@/components/ui/StarField';
import { brand } from '@/data/brand';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Sara the Astrologer.',
};

export default function PrivacyPage() {
  const year = new Date().getFullYear();
  return (
    <>
      <section className="relative py-24 bg-gradient-to-b from-[#090A1A] to-[#181126] overflow-hidden">
        <StarField count={40} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-[#F6F0E7] font-light" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Privacy Policy</h1>
          <p className="text-[#4A3D5C] text-sm mt-4">Last updated: {year}</p>
        </div>
      </section>
      <section className="py-16 bg-[#090A1A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-p:text-[#B8A8C7] prose-h2:text-[#E2C88C] prose-li:text-[#B8A8C7] max-w-none">
          <p className="text-[#B8A8C7]">
            This Privacy Policy describes how Sara the Astrologer (&quot;we,&quot; &quot;Sara,&quot; or &quot;the website&quot;) collects, uses, and shares information about you when you use this website.
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Information We Collect</h2>
          <p className="text-[#B8A8C7]">We may collect information you provide directly, including your name, email address, phone number, birth date and location, and any message content you submit through the contact form.</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>How We Use Your Information</h2>
          <p className="text-[#B8A8C7]">Information you submit is used solely to respond to your inquiry or to facilitate booking a session. We do not sell your personal information.</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Third-Party Services</h2>
          <p className="text-[#B8A8C7]">This website may use Calendly for scheduling, and analytics services such as Google Analytics. These services have their own privacy policies.</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Cookies</h2>
          <p className="text-[#B8A8C7]">This website may use cookies to improve your experience and to collect anonymized analytics data.</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Contact</h2>
          <p className="text-[#B8A8C7]">
            For privacy-related questions, please contact us at{' '}
            {brand.email ? <a href={`mailto:${brand.email}`} className="text-[#CBAA68]">{brand.email}</a> : '[contact email — to be added]'}.
          </p>
          <p className="text-[#4A3D5C] text-xs mt-8">[This is a placeholder Privacy Policy. Please review and update with your legal advisor before publishing.]</p>
        </div>
      </section>
    </>
  );
}
