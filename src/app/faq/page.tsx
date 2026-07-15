import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import FAQSection from '@/components/sections/FAQSection';
import BookingCTA from '@/components/sections/BookingCTA';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to frequently asked questions about Sara Wigle\'s intuitive astrology sessions.',
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Common Questions"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with Sara — from what to prepare to what to expect."
      />
      <FAQSection />
      <BookingCTA />
    </>
  );
}
