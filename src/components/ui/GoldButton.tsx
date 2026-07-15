'use client';

import React from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface GoldButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  className?: string;
  trackAs?: Parameters<typeof trackEvent>[0];
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-medium tracking-widest uppercase text-xs transition-all duration-300 cursor-pointer';

const variants = {
  solid:
    'bg-gradient-to-r from-[#CBAA68] to-[#E2C88C] text-[#090A1A] hover:from-[#E2C88C] hover:to-[#CBAA68] shadow-[0_0_20px_rgba(203,170,104,0.3)] hover:shadow-[0_0_30px_rgba(203,170,104,0.5)]',
  outline:
    'border border-[#CBAA68] text-[#CBAA68] hover:bg-[#CBAA68]/10 hover:border-[#E2C88C] hover:text-[#E2C88C]',
  ghost:
    'text-[#CBAA68] hover:text-[#E2C88C] underline-offset-4 hover:underline',
};

const sizes = {
  sm: 'px-5 py-2 text-[10px]',
  md: 'px-7 py-3 text-xs',
  lg: 'px-10 py-4 text-xs',
};

export default function GoldButton({
  href,
  onClick,
  children,
  variant = 'solid',
  size = 'md',
  external = false,
  className = '',
  trackAs,
  type = 'button',
  disabled,
}: GoldButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const handleClick = () => {
    if (trackAs) trackEvent(trackAs);
    onClick?.();
  };

  if (href) {
    const props = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};
    return (
      <Link href={href} className={classes} onClick={handleClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
