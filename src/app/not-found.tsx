import Link from 'next/link';
import StarField from '@/components/ui/StarField';

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#090A1A] overflow-hidden">
      <StarField count={100} />
      <div className="relative z-10 text-center px-4">
        <p className="text-[#CBAA68] text-8xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>404</p>
        <h1 className="text-3xl md:text-4xl text-[#F6F0E7] font-light mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
          This page is lost in the cosmos
        </h1>
        <p className="text-[#B8A8C7] mb-10">The stars couldn&apos;t find what you were looking for.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="px-8 py-3.5 bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] text-[10px] tracking-[0.25em] uppercase font-semibold hover:from-[#E2C88C] hover:to-[#CBAA68] transition-all">
            Return Home
          </Link>
          <Link href="/readings" className="px-8 py-3.5 border border-[#CBAA68]/30 text-[#CBAA68] text-[10px] tracking-[0.25em] uppercase hover:bg-[#CBAA68]/10 transition-all">
            Explore Readings
          </Link>
        </div>
      </div>
    </section>
  );
}
