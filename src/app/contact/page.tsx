'use client';
import InstagramIcon from '@/components/ui/InstagramIcon';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import { brand } from '@/data/brand';
import { services } from '@/data/services';
import { trackEvent } from '@/lib/analytics';

const SERVICE_OPTIONS = ['Not sure yet', ...services.map((s) => s.name)];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [unknownTime, setUnknownTime] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    trackEvent('contact_form_submitted');
    // TODO: Connect to Resend / Brevo / Formspree
    // Replace with your chosen email provider API route
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Sara"
        subtitle="Have a question before booking? Reach out below."
      />

      <section className="py-24 bg-[#090A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <aside className="space-y-6 order-2 lg:order-1">
            <div className="border border-[#CBAA68]/15 bg-[#0D0D1F] p-6">
              <h2 className="text-[#E2C88C] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Connect With Sara</h2>
              {brand.email && (
                <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-[#B8A8C7] hover:text-[#E2C88C] text-sm mb-3 transition-colors">
                  <Mail size={14} className="text-[#CBAA68]" />{brand.email}
                </a>
              )}
              <Link href={brand.instagramUrl} target="_blank" rel="noopener noreferrer"
                onClick={() => trackEvent('instagram_profile_clicked')}
                className="flex items-center gap-2 text-[#B8A8C7] hover:text-[#E2C88C] text-sm transition-colors">
                <InstagramIcon size={14} className="text-[#CBAA68]" />{brand.instagramHandle}
              </Link>
              {!brand.email && !brand.phone && (
                <p className="text-[#3A2D4A] text-xs mt-3">[Contact details — to be added by Sara]</p>
              )}
            </div>
            <div className="border border-[#CBAA68]/15 bg-[#0D0D1F] p-6">
              <h3 className="text-[#E2C88C] mb-3 text-lg" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Ready to Book?</h3>
              <p className="text-[#B8A8C7] text-sm mb-4">Skip the form and book your session directly through Calendly.</p>
              <Link href="/book" className="w-full py-3 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[10px] tracking-widest uppercase font-semibold flex items-center justify-center hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all">
                Book a Session
              </Link>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            {submitted ? (
              <div className="border border-[#CBAA68]/20 bg-[#0D0D1F] p-12 text-center">
                <p className="text-4xl text-[#CBAA68] mb-4">✦</p>
                <h2 className="text-2xl text-[#E2C88C] mb-3" style={{ fontFamily: 'var(--font-cormorant), serif' }}>Message Sent</h2>
                <p className="text-[#B8A8C7] text-sm">Thank you for reaching out. Sara will be in touch with you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" onClick={() => trackEvent('contact_form_started')} noValidate>
                {/* Honeypot */}
                <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} />

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" required />
                  <Field label="Email Address" name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone (Optional)" name="phone" type="tel" />
                  <Field label="Instagram Username (Optional)" name="instagram" placeholder="@yourhandle" />
                </div>
                <div className="grid sm:grid-cols-3 gap-5">
                  <Field label="Birth Date" name="birthdate" type="date" required />
                  <Field label="Birth Time" name="birthtime" type="time" disabled={unknownTime} />
                  <div className="flex flex-col justify-end pb-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={unknownTime}
                        onChange={(e) => setUnknownTime(e.target.checked)}
                        className="accent-[#CBAA68]"
                      />
                      <span className="text-[#6B5A80] text-xs">I don&apos;t know my birth time</span>
                    </label>
                  </div>
                </div>
                <Field label="Birth City & Country" name="birthplace" required placeholder="e.g. Chicago, USA" />
                <div>
                  <label className="block text-[#B8A8C7] text-xs tracking-widest uppercase mb-2">Service of Interest</label>
                  <select name="service" className="w-full bg-[#0D0D1F] border border-[#CBAA68]/20 text-[#B8A8C7] text-sm px-4 py-3 focus:outline-none focus:border-[#CBAA68]/50">
                    {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[#B8A8C7] text-xs tracking-widest uppercase mb-2">Preferred Contact Method</label>
                  <select name="contact_method" className="w-full bg-[#0D0D1F] border border-[#CBAA68]/20 text-[#B8A8C7] text-sm px-4 py-3 focus:outline-none focus:border-[#CBAA68]/50">
                    {['Email', 'Instagram DM'].map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#B8A8C7] text-xs tracking-widest uppercase mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-[#0D0D1F] border border-[#CBAA68]/20 text-[#B8A8C7] text-sm px-4 py-3 focus:outline-none focus:border-[#CBAA68]/50 resize-none"
                    placeholder="Share what you'd like to explore or any questions you have..."
                  />
                </div>
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1 accent-[#CBAA68]" />
                    <span className="text-[#6B5A80] text-xs leading-relaxed">
                      I agree to the{' '}
                      <Link href="/privacy" className="text-[#CBAA68] hover:underline">Privacy Policy</Link>
                      {' '}and{' '}
                      <Link href="/terms" className="text-[#CBAA68] hover:underline">Terms & Conditions</Link>.
                      I understand that the information I submit will be used to respond to my inquiry.
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[11px] tracking-[0.25em] uppercase font-semibold hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = 'text', required, placeholder, disabled,
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; disabled?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[#B8A8C7] text-xs tracking-widest uppercase mb-2">
        {label}{required && <span className="text-[#CBAA68] ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full bg-[#0D0D1F] border border-[#CBAA68]/20 text-[#B8A8C7] text-sm px-4 py-3 focus:outline-none focus:border-[#CBAA68]/50 disabled:opacity-40 placeholder:text-[#3A2D4A]"
      />
    </div>
  );
}
