import type { MetadataRoute } from 'next';
import { zodiacSigns } from '@/data/zodiac';
import { services } from '@/data/services';
import { insights } from '@/data/insights';
import { brand } from '@/data/brand';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.siteUrl;
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1 },
    { url: `${base}/about`, priority: 0.9 },
    { url: `${base}/readings`, priority: 0.9 },
    { url: `${base}/insights`, priority: 0.8 },
    { url: `${base}/zodiac`, priority: 0.8 },
    { url: `${base}/instagram`, priority: 0.7 },
    { url: `${base}/testimonials`, priority: 0.7 },
    { url: `${base}/faq`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.8 },
    { url: `${base}/book`, priority: 0.9 },
    { url: `${base}/privacy`, priority: 0.3 },
    { url: `${base}/terms`, priority: 0.3 },
  ];

  const servicePages = services.map((s) => ({
    url: `${base}/readings/${s.slug}`,
    priority: 0.8,
  }));

  const zodiacPages = zodiacSigns.map((s) => ({
    url: `${base}/zodiac/${s.id}`,
    priority: 0.6,
  }));

  const insightPages = insights.map((a) => ({
    url: `${base}/insights/${a.slug}`,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...zodiacPages, ...insightPages].map((p) => ({
    ...p,
    lastModified: now,
    changeFrequency: 'weekly' as const,
  }));
}
