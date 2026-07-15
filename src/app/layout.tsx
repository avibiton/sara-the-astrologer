import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBookingBar from '@/components/layout/MobileBookingBar';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { brand } from '@/data/brand';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: 'Sara the Astrologer | Intuitive Astrology for Real Life',
    template: '%s | Sara the Astrologer',
  },
  description:
    'Explore intuitive astrology with Sara Wigle, where fate meets free will. Discover personalized insight for real-life questions and schedule a private session.',
  keywords: [
    'Sara the Astrologer',
    'Sara Wigle',
    'intuitive astrology',
    'birth chart reading',
    'astrology session',
    'relationship astrology',
    'transit reading',
    'where fate meets free will',
  ],
  authors: [{ name: 'Sara Wigle' }],
  creator: 'Sara Wigle',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: brand.siteUrl,
    siteName: 'Sara the Astrologer',
    title: 'Sara the Astrologer | Intuitive Astrology for Real Life',
    description:
      'Explore intuitive astrology with Sara Wigle, where fate meets free will. Personalized insight for real-life questions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sara the Astrologer | Intuitive Astrology for Real Life',
    description: 'Intuitive astrology for real life — where fate meets free will.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#090A1A] text-[#F6F0E7]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#CBAA68] focus:text-[#090A1A] focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <MobileBookingBar />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
