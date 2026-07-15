'use client';
import InstagramIcon from '@/components/ui/InstagramIcon';

import { Calendar} from 'lucide-react';
import Link from 'next/link';
import CalendlyButton from '@/components/calendly/CalendlyButton';
import { brand } from '@/data/brand';
import { trackEvent } from '@/lib/analytics';

export default function MobileBookingBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#060813]/95 backdrop-blur-md border-t border-[#CBAA68]/15 safe-area-pb"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex items-center h-14">
        <CalendlyButton className="flex-1 flex items-center justify-center gap-2 h-full bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[11px] tracking-widest uppercase font-semibold cursor-pointer">
          <Calendar size={15} />
          Book a Session
        </CalendlyButton>
        <Link
          href={brand.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('instagram_profile_clicked')}
          className="w-14 h-full flex items-center justify-center border-l border-[#CBAA68]/20 text-[#CBAA68] hover:text-[#E2C88C] transition-colors"
          aria-label="Follow Sara on Instagram"
        >
          <InstagramIcon size={20} />
        </Link>
      </div>
    </div>
  );
}
