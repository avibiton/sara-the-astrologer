'use client';
import InstagramIcon from '@/components/ui/InstagramIcon';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import InstagramProfileEmbed from '@/components/instagram/InstagramProfileEmbed';
import { brand } from '@/data/brand';
import { trackEvent } from '@/lib/analytics';

export default function InstagramSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#181126] to-[#090A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            eyebrow="@sara_the_astrologer"
            heading="From Sara's Instagram"
            subheading="Explore Sara's latest astrology insights, reflections, celestial updates, and guidance for navigating real life."
          />
        </motion.div>

        {/* Live Instagram embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-10"
        >
          <InstagramProfileEmbed />
        </motion.div>

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
