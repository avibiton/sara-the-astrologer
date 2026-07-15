'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Monitor } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import CalendlyButton from '@/components/calendly/CalendlyButton';
import { services } from '@/data/services';
import { trackEvent } from '@/lib/analytics';

export default function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#181126] to-[#090A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionHeader
            eyebrow="Work With Sara"
            heading="Intuitive Astrology Sessions for Real-Life Questions"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col bg-[#0D0D1F] border border-[#CBAA68]/15 hover:border-[#CBAA68]/40 transition-all duration-500 p-8 hover:shadow-[0_0_40px_rgba(203,170,104,0.1)]"
            >
              {/* Icon */}
              <div className="text-3xl mb-5 text-[#CBAA68]" aria-hidden="true">
                {service.icon}
              </div>

              <h3
                className="text-xl text-[#E2C88C] mb-2 leading-snug"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {service.name}
              </h3>
              <p className="text-[#6B5A80] text-xs tracking-wider italic mb-4">{service.tagline}</p>
              <p className="text-[#B8A8C7] text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-[#CBAA68]/10">
                <span className="flex items-center gap-1.5 text-[#6B5A80] text-xs">
                  <Clock size={11} />
                  {service.duration}
                </span>
                <span className="flex items-center gap-1.5 text-[#6B5A80] text-xs">
                  <Monitor size={11} />
                  {service.format}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#CBAA68] font-medium text-sm flex-1">{service.price}</span>
              </div>

              <div className="flex gap-3 mt-5">
                <Link
                  href={`/readings/${service.slug}`}
                  onClick={() => trackEvent('service_viewed', { service: service.id })}
                  className="text-[#6B5A80] hover:text-[#B8A8C7] text-[10px] tracking-widest uppercase transition-colors"
                >
                  Learn More
                </Link>
                <CalendlyButton
                  url={service.calendlyUrl}
                  className="flex-1 py-2.5 bg-gradient-to-r from-[#CBAA68]/80 to-[#E2C88C]/80 text-[#090A1A] text-[10px] tracking-widest uppercase font-semibold hover:from-[#CBAA68] hover:to-[#E2C88C] transition-all cursor-pointer text-center"
                >
                  Book This Session
                </CalendlyButton>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/readings"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#CBAA68]/30 text-[#CBAA68] text-[10px] tracking-[0.25em] uppercase hover:bg-[#CBAA68]/10 transition-all"
          >
            View All Readings
          </Link>
        </div>
      </div>
    </section>
  );
}
