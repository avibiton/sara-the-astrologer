import type { NavItem } from '@/types';

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Sara', href: '/about' },
  {
    label: 'Readings',
    href: '/readings',
    children: [
      { label: 'All Readings', href: '/readings' },
      { label: 'Birth Chart Reading', href: '/readings/birth-chart' },
      { label: 'Relationship Reading', href: '/readings/relationship' },
      { label: 'Transit Reading', href: '/readings/transit' },
      { label: 'Year-Ahead Reading', href: '/readings/year-ahead' },
      { label: 'Follow-Up Session', href: '/readings/follow-up' },
    ],
  },
  { label: 'Astrology Insights', href: '/insights' },
  { label: 'Instagram', href: '/instagram' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];
