import { useState, useEffect, useCallback } from 'react';
import { ParticleSystem } from './components/ParticleSystem';
import { Scene } from './components/Scene';
import { Typewriter } from './components/Typewriter';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const NARRATIONS = [
  "The deepest vision is often the one turned inward. To heal the adult, one must first embrace the light of the inner child.",
  "A silent conversation between the self she is and the self she was meant to be. A reunification of pure radiance.",
  "But the soul seeks connection beyond itself, reaching into the ancient sands where time began...",
  "A bridge across millennia. The compassion of the divine meeting the stone-cold wisdom of the ages."
];

export default function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextScene = useCallback(() => {
    setCurrentScene((prev) => (prev + 1) % NARRATIONS.length);
  }, []);

  const prevScene = useCallback(() => {
    setCurrentScene((prev) => (prev - 1 + NARRATIONS.length) % NARRATIONS.length);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(nextScene, 8000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, nextScene]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevScene();
      if (e.key === 'ArrowRight') nextScene();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextScene, prevScene]);

  return (
    <div className="relative w-full h-screen bg-[#05050a] overflow-hidden">
      <ParticleSystem />

      {NARRATIONS.map((_, index) => (
        <Scene key={index} index={index} isActive={currentScene === index} />
      ))}

      <div className="fixed bottom-[15%] w-full flex justify-center z-50">
        <Typewriter text={NARRATIONS[currentScene]} />
      </div>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 z-[101]">
        <button
          onClick={() => { setIsPlaying(false); prevScene(); }}
          className="p-2 text-white/70 hover:text-white transition-colors border border-white/30 rounded-full hover:bg-white/10"
          aria-label="Previous scene"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-4">
          {NARRATIONS.map((_, index) => (
            <button
              key={index}
              onClick={() => { setIsPlaying(false); setCurrentScene(index); }}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                currentScene === index 
                  ? 'bg-white scale-150 shadow-[0_0_10px_#fff]' 
                  : 'bg-white/20'
              }`}
              aria-label={`Go to scene ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 text-white/70 hover:text-white transition-colors border border-white/30 rounded-full hover:bg-white/10"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <button
          onClick={() => { setIsPlaying(false); nextScene(); }}
          className="p-2 text-white/70 hover:text-white transition-colors border border-white/30 rounded-full hover:bg-white/10"
          aria-label="Next scene"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="fixed top-10 left-1/2 -translate-x-1/2 font-display text-white/50 tracking-[0.3em] text-sm uppercase pointer-events-none">
        The Journey Within
      </div>
    </div>
  );
}
