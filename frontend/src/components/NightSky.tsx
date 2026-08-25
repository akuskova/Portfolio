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
  stars?: boolean;    // show star field (default true)
  aurora?: boolean;   // show aurora blobs (default true)
}

export default function NightSky({
  children,
  className = '',
  stars = true,
  aurora = true,
}: NightSkyProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>

      {aurora && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div
            className="absolute top-1/4 right-1/4 w-150 h-125 bg-sunset opacity-20 blur-[140px] rounded-full"
            style={{ animation: 'drift-1 14s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-125 h-100 bg-stormy opacity-30 blur-[120px] rounded-full"
            style={{ animation: 'drift-2 18s ease-in-out infinite' }}
          />
        </div>
      )}

      {stars && (
        <div className="absolute inset-0 pointer-events-none z-0">
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

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}