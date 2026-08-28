import type { ReactNode } from 'react'

const STARS = Array.from({ length: 60 }, () => ({
  size: 1 + Math.random() * 2,
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: 2 + Math.random() * 4,
  delay: Math.random() * 3,
}));

interface NightSkyProps {
  children: ReactNode;
  className?: string;
  stars?: boolean;
  aurora?: boolean;
}

export default function NightSky({
  children,
  className = '',
  stars = true,
  aurora = true,}: 
  NightSkyProps) {
  
  return (
    <div className={`relative overflow-hidden ${className}`}>

      {/* Mobile: static gradient, sometimes doesnt work with ios */}
      <div
        className="fixed inset-0 bottom-0 md:hidden pointer-events-none z-0"
        style={{
          top: '-5rem',
          background:
            'radial-gradient(ellipse at top right, rgba(152, 94, 109, 0.25), transparent 55%), ' +
            'radial-gradient(ellipse at bottom left, rgba(73, 78, 107, 0.4), transparent 55%), ' +
            '#192231',
        }}
      />

      {/* Desktop: aura blobs */}
      {aurora && (
        <div className="hidden md:block fixed inset-0 pointer-events-none z-0">
          <div
            className="absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-sunset opacity-20 blur-[140px] rounded-full"
            style={{ animation: 'drift-1 14s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[400px] bg-stormy opacity-30 blur-[120px] rounded-full"
            style={{ animation: 'drift-2 18s ease-in-out infinite' }}
          />
        </div>
      )}

      {/* Desktop: twinkling stars */}
      {stars && (
        <div className="hidden md:block fixed inset-0 pointer-events-none z-0">
          {STARS.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-moonlight"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content on top */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}