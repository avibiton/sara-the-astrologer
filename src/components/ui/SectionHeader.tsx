interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const headingColor = light ? 'text-[#F6F0E7]' : 'text-[#E2C88C]';

  return (
    <div className={`${alignClass} max-w-3xl`}>
      {eyebrow && (
        <p className="text-[#CBAA68] tracking-[0.25em] uppercase text-xs font-medium mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading ${headingColor} text-3xl md:text-4xl lg:text-5xl leading-tight mb-4`}
        style={{ fontFamily: 'var(--font-cormorant), serif' }}
      >
        {heading}
      </h2>
      {subheading && (
        <p className="text-[#B8A8C7] text-base md:text-lg leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
}
