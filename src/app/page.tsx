import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Introduction from '@/components/sections/Introduction';
import InstagramSection from '@/components/sections/InstagramSection';
import TopicsSection from '@/components/sections/TopicsSection';
import ZodiacSection from '@/components/sections/ZodiacSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyWorkWithSara from '@/components/sections/WhyWorkWithSara';
import AboutPreview from '@/components/sections/AboutPreview';
import HowItWorks from '@/components/sections/HowItWorks';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import InstagramCTA from '@/components/sections/InstagramCTA';
import BookingCTA from '@/components/sections/BookingCTA';

export const metadata: Metadata = {
  title: 'Sara the Astrologer | Intuitive Astrology for Real Life',
  description:
    'Explore intuitive astrology with Sara Wigle, where fate meets free will. Discover personalized insight for real-life questions and schedule a private session.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <InstagramSection />
      <TopicsSection />
      <ZodiacSection />
      <ServicesSection />
      <WhyWorkWithSara />
      <AboutPreview />
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection limit={6} />
      <InstagramCTA />
      <BookingCTA />
    </>
  );
}
