import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  size: string;
  left: string;
  duration: string;
  delay: string;
}

export const ParticleSystem: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 4 + 'px',
        left: Math.random() * 100 + 'vw',
        duration: (Math.random() * 10 + 5) + 's',
        delay: (Math.random() * 5) + 's',
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-1 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-white/50 rounded-full blur-[1px] animate-float-up"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            bottom: '-10px'
          }}
        />
      ))}
    </div>
  );
};
