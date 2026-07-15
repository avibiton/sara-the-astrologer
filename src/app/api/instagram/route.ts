import { NextResponse } from 'next/server';
import { getInstagramPosts } from '@/lib/instagram/service';

export async function GET() {
  try {
    const posts = await getInstagramPosts();
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ posts: [], error: 'Failed to load posts' }, { status: 200 });
  }
}
