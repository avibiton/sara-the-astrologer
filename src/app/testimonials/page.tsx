import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BookingCTA from '@/components/sections/BookingCTA';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what clients say about working with Sara Wigle — intuitive astrology sessions for real-life questions.',
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Stories"
        title="What Clients Are Saying"
        subtitle="Real experiences from real sessions — in the words of clients who have worked with Sara."
      />
      <TestimonialsSection />
      <BookingCTA />
    </>
  );
}
