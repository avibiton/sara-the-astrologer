'use client';

import { useEffect, useRef } from 'react';

interface StarFieldProps {
  count?: number;
  className?: string;
}

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  alpha: number;
  phase: number;       // random starting phase in radians
  speed: number;       // twinkle speed (radians per ms)
  isGold: boolean;
}

export default function StarField({ count = 120, className = '' }: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];

    const buildStars = () => {
      stars = Array.from({ length: count }, () => {
        const baseAlpha = Math.random() * 0.6 + 0.15;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.2,
          baseAlpha,
          alpha: baseAlpha,
          phase: Math.random() * Math.PI * 2,
          // vary speed so stars pulse at different rates (0.4s – 4s cycle)
          speed: (Math.random() * 0.0045 + 0.0005),
          isGold: Math.random() < 0.1,
        };
      });
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildStars();
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        // sine wave twinkle: alpha oscillates ±40% around baseAlpha
        star.alpha = star.baseAlpha * (0.6 + 0.4 * Math.sin(star.phase + now * star.speed));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = star.isGold
          ? `rgba(203,170,104,${star.alpha})`
          : `rgba(246,240,231,${star.alpha})`;
        ctx.fill();

        // bright stars get a subtle halo at peak brightness
        if (star.r > 1.1 && star.alpha > star.baseAlpha * 0.9) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r * 2.5, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r * 2.5);
          grad.addColorStop(0, star.isGold ? `rgba(203,170,104,${star.alpha * 0.25})` : `rgba(246,240,231,${star.alpha * 0.2})`);
          grad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = grad;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
      suppressHydrationWarning
    />
  );
}
