import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SceneProps {
  index: number;
  isActive: boolean;
}

export const Scene: React.FC<SceneProps> = ({ index, isActive }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center z-2"
        >
          {index === 0 && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2d1b4d_0%,_#05050a_100%)] flex items-center justify-center">
              <div className="w-[280px] h-[350px] relative flex justify-center items-center">
                <div className="w-[160px] h-[220px] bg-white/15 rounded-[50%_50%_30%_30%] backdrop-blur-sm shadow-[0_0_50px_rgba(138,43,226,0.3)] relative animate-breathe">
                  <div className="absolute w-[40px] h-[40px] bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_30px_#ffd700,0_0_60px_#fff] animate-heart-beat" />
                </div>
              </div>
            </div>
          )}

          {index === 1 && (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="w-[200px] h-[200px] bg-white rounded-full shadow-[0_0_100px_#fff,0_0_200px_#ffd700] animate-super-radiance" />
            </div>
          )}

          {index === 2 && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#8b4513] to-black flex items-center justify-center">
              <div 
                className="absolute inset-0 opacity-10 animate-shimmer"
                style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(%23noise)" opacity="0.1"/></svg>')`
                }}
              />
              <div className="w-[80px] h-[180px] bg-black/80 rounded-[40%_40%_5%_5%] shadow-[10px_0_20px_rgba(242,153,74,0.2)] z-5" />
            </div>
          )}

          {index === 3 && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a2e_0%,_#000_100%)] flex items-center justify-center">
              <div className="absolute top-[20%] w-[200px] h-[200px] bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_transparent_70%)] animate-pulse-slow" />
              <div 
                className="w-[300px] h-[150px] bg-[#332211] opacity-60 blur-[2px]"
                style={{ clipPath: 'polygon(10% 100%, 20% 70%, 40% 70%, 45% 40%, 55% 40%, 60% 70%, 80% 70%, 90% 100%)' }}
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
