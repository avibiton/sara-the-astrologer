export interface Service {
  id: string;
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  duration: string;
  price: string;
  format: string;
  calendlyUrl?: string;
  forWhom: string;
  questions: string[];
  whatToPrepare: string[];
  whatSaraNeed: string[];
  faqs: { q: string; a: string }[];
}

export interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  dates: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  modality: 'Cardinal' | 'Fixed' | 'Mutable';
  ruler: string;
  traits: string[];
  description: string;
  theme: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  service?: string;
  text: string;
  date?: string;
  isPlaceholder?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: string;
  publishedAt: string;
  topics: string[];
  relatedSigns?: string[];
  relatedService?: string;
  instagramUrl?: string;
}

export interface InstagramPost {
  id: string;
  url: string;
  imagePath?: string;
  caption: string;
  altText: string;
  date: string;
  mediaType: 'IMAGE' | 'CAROUSEL_ALBUM' | 'VIDEO';
  featured?: boolean;
  topic?: string;
  relatedService?: string;
  relatedArticle?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
