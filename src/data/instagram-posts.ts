import type { InstagramPost } from '@/types';

/**
 * Manual Instagram feed data.
 * Populate with Sara's approved public post URLs and captions.
 * Images should be downloaded locally to /public/images/instagram/
 *
 * USAGE: Set INSTAGRAM_FEED_PROVIDER=manual in .env to use this file.
 */
export const instagramPosts: InstagramPost[] = [
  {
    id: 'post-1',
    url: 'https://www.instagram.com/sara_the_astrologer/',
    imagePath: '/images/instagram/post-placeholder-1.svg',
    caption: '[Add Sara\'s Instagram caption here. Copy from her public post.]',
    altText: 'Astrology insight from Sara the Astrologer',
    date: '2025-01-01',
    mediaType: 'IMAGE',
    featured: true,
    topic: 'Birth Charts',
  },
  {
    id: 'post-2',
    url: 'https://www.instagram.com/sara_the_astrologer/',
    imagePath: '/images/instagram/post-placeholder-2.svg',
    caption: '[Add Sara\'s Instagram caption here.]',
    altText: 'Astrology insight from Sara the Astrologer',
    date: '2025-01-01',
    mediaType: 'IMAGE',
    featured: false,
    topic: 'Planetary Transits',
  },
  {
    id: 'post-3',
    url: 'https://www.instagram.com/sara_the_astrologer/',
    imagePath: '/images/instagram/post-placeholder-3.svg',
    caption: '[Add Sara\'s Instagram caption here.]',
    altText: 'Astrology insight from Sara the Astrologer',
    date: '2025-01-01',
    mediaType: 'IMAGE',
    featured: false,
    topic: 'Relationships',
  },
  {
    id: 'post-4',
    url: 'https://www.instagram.com/sara_the_astrologer/',
    imagePath: '/images/instagram/post-placeholder-4.svg',
    caption: '[Add Sara\'s Instagram caption here.]',
    altText: 'Astrology insight from Sara the Astrologer',
    date: '2025-01-01',
    mediaType: 'IMAGE',
    featured: false,
    topic: 'Full Moon',
  },
  {
    id: 'post-5',
    url: 'https://www.instagram.com/sara_the_astrologer/',
    imagePath: '/images/instagram/post-placeholder-5.svg',
    caption: '[Add Sara\'s Instagram caption here.]',
    altText: 'Astrology insight from Sara the Astrologer',
    date: '2025-01-01',
    mediaType: 'IMAGE',
    featured: false,
    topic: 'Timing',
  },
  {
    id: 'post-6',
    url: 'https://www.instagram.com/sara_the_astrologer/',
    imagePath: '/images/instagram/post-placeholder-6.svg',
    caption: '[Add Sara\'s Instagram caption here.]',
    altText: 'Astrology insight from Sara the Astrologer',
    date: '2025-01-01',
    mediaType: 'IMAGE',
    featured: false,
    topic: 'Free Will',
  },
];
