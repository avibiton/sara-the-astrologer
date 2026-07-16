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
          <p className="text-[#4A3D5C] text-sm mt-4">Last updated: January {year}</p>
        </div>
      </section>
      <section className="py-16 bg-[#090A1A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-p:text-[#B8A8C7] prose-h2:text-[#E2C88C] prose-li:text-[#B8A8C7] max-w-none">
          <p className="text-[#B8A8C7]">
            This Privacy Policy describes how Sara the Astrologer (&ldquo;we,&rdquo; &ldquo;Sara,&rdquo; or &ldquo;the website&rdquo;) collects, uses, and protects information about you when you use {brand.siteUrl}.
          </p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Information We Collect</h2>
          <p className="text-[#B8A8C7]">We collect information you voluntarily provide through the contact form, including:</p>
          <ul>
            <li>Your name and email address</li>
            <li>Phone number (optional)</li>
            <li>Instagram handle (optional)</li>
            <li>Birth date, birth time, and birth location — required for chart calculation</li>
            <li>The message or inquiry you submit</li>
          </ul>
          <p className="text-[#B8A8C7]">We do not collect payment information directly. All payments are processed securely through Calendly.</p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>How We Use Your Information</h2>
          <p className="text-[#B8A8C7]">Information you submit is used solely to:</p>
          <ul>
            <li>Respond to your inquiry</li>
            <li>Facilitate scheduling and booking of a session</li>
            <li>Prepare your astrological reading</li>
          </ul>
          <p className="text-[#B8A8C7]">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Third-Party Services</h2>
          <p className="text-[#B8A8C7]">This website uses the following third-party services, each governed by their own privacy policies:</p>
          <ul>
            <li><strong>Calendly</strong> — session scheduling and payment processing</li>
            <li><strong>Brevo</strong> — transactional email delivery for contact form submissions</li>
            <li><strong>Instagram</strong> — embedded profile feed</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Data Retention</h2>
          <p className="text-[#B8A8C7]">Contact form submissions are retained only as long as necessary to respond to your inquiry and conduct your session. Birth chart data is not stored beyond the scope of that session unless you request otherwise.</p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Cookies</h2>
          <p className="text-[#B8A8C7]">This website may use cookies to improve your browsing experience. No personally identifiable information is stored in cookies.</p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Your Rights</h2>
          <p className="text-[#B8A8C7]">You may request access to, correction of, or deletion of any personal information we hold about you at any time by contacting us directly.</p>

          <h2 style={{ fontFamily: 'var(--font-cormorant), serif' }}>Contact</h2>
          <p className="text-[#B8A8C7]">
            For privacy-related questions, please contact us at{' '}
            <a href={`mailto:${brand.email}`} className="text-[#CBAA68]">{brand.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
