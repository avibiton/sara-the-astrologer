'use client';
import InstagramIcon from '@/components/ui/InstagramIcon';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { instagramPosts } from '@/data/instagram-posts';
import { brand } from '@/data/brand';
import { trackEvent } from '@/lib/analytics';

export default function InstagramSection() {
  const posts = instagramPosts.slice(0, 6);

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#181126] to-[#090A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <SectionHeader
            eyebrow="@sara_the_astrologer"
            heading="From Sara's Instagram"
            subheading="Explore Sara's latest astrology insights, reflections, celestial updates, and guidance for navigating real life."
          />
        </div>

        {/* Feed grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('instagram_post_clicked', { post: post.id })}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-square bg-[#181126] border border-[#CBAA68]/10 hover:border-[#CBAA68]/40 overflow-hidden transition-all duration-300"
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#181126] to-[#321D3E]">
                <InstagramIcon size={24} className="text-[#CBAA68]/30" />
                {post.topic && (
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#4A3D5C]">
                    {post.topic}
                  </span>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#090A1A]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                <InstagramIcon size={18} className="text-[#CBAA68]" />
                <p className="text-[#B8A8C7] text-xs text-center leading-snug line-clamp-4">
                  {post.caption}
                </p>
                <span className="flex items-center gap-1 text-[#CBAA68] text-[10px] tracking-wider">
                  View on Instagram <ExternalLink size={10} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('instagram_profile_clicked')}
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#CBAA68]/30 text-[#CBAA68] text-[11px] tracking-[0.25em] uppercase hover:bg-[#CBAA68]/10 hover:border-[#CBAA68]/60 transition-all"
          >
            <InstagramIcon size={16} />
            Follow @sara_the_astrologer
          </Link>
        </div>
      </div>
    </section>
  );
}
