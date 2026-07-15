import type { InstagramPost } from '@/types';
import { instagramPosts } from '@/data/instagram-posts';

const CACHE_DURATION = 3600 * 1000 * 4; // 4 hours
let cachedPosts: InstagramPost[] | null = null;
let cacheTimestamp = 0;

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  const provider = process.env.INSTAGRAM_FEED_PROVIDER || 'manual';

  if (provider === 'api') {
    const now = Date.now();
    if (cachedPosts && now - cacheTimestamp < CACHE_DURATION) {
      return cachedPosts;
    }
    try {
      const posts = await fetchFromApi();
      cachedPosts = posts;
      cacheTimestamp = now;
      return posts;
    } catch {
      if (cachedPosts) return cachedPosts;
      return instagramPosts;
    }
  }

  return instagramPosts;
}

async function fetchFromApi(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  const version = process.env.INSTAGRAM_API_VERSION || 'v18.0';

  if (!token || !userId) {
    throw new Error('Instagram API credentials not configured');
  }

  const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
  const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${token}&limit=12`;

  const res = await fetch(url, { next: { revalidate: 14400 } });
  if (!res.ok) throw new Error(`Instagram API error: ${res.status}`);

  const data = await res.json();

  return (data.data || []).map((item: Record<string, string>) => ({
    id: item.id,
    url: item.permalink,
    imagePath: item.media_url || item.thumbnail_url,
    caption: item.caption || '',
    altText: 'Post from Sara the Astrologer',
    date: item.timestamp,
    mediaType: item.media_type as InstagramPost['mediaType'],
    featured: false,
  }));
}
