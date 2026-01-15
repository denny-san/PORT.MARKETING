import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const bootLines = [
    "INITIALIZING KERNEL...",
    "LOADING SECURITY MODULES...",
    "BYPASSING FIREWALLS...",
    "DECRYPTING ASSETS...",
    "OPTIMIZING NEURAL NETWORKS...",
    "ESTABLISHING SECURE UPLINK...",
    "System Red:", // Just random tech jargon
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    // Add lines one by one
    let lineIndex = 0;
    const lineInterval = setInterval(() => {
      if (lineIndex < bootLines.length) {
        setLines(prev => {
          // Keep only last 8 lines to prevent overflow if list grows, though here it's fixed
          const newLines = [...prev, bootLines[lineIndex]];
          return newLines.slice(-8);
        });
        lineIndex++;
      } else {
        clearInterval(lineInterval);
      }
    }, 350); // Slower text

    // Update progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1; // Much smoother, slower progress
      });
    }, 30); // 3s total

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0F0F0F] text-primary font-mono overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

      {/* Content Container */}
      <div className="z-10 w-full max-w-lg p-6 relative">

        {/* Terminal Window */}
        <div className="bg-black/80 border border-primary/30 p-6 rounded-lg shadow-[0_0_30px_rgba(255,215,0,0.15)] backdrop-blur-md min-h-[320px] flex flex-col relative overflow-hidden">
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-10"></div>

          {/* Header */}
          <div className="border-b border-primary/20 pb-3 mb-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm animate-spin-slow">settings</span>
              <span className="text-xs tracking-widest text-primary/70">BOOT_SEQUENCE_V9.2</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="flex-1 font-mono text-sm space-y-1.5 overflow-hidden flex flex-col justify-end z-10">
            {lines.map((line, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-primary/40 text-xs shrink-0">{`[${(Math.random() * 1000).toFixed(2)}]`}</span>
                <span className={`tracking-wide ${index === lines.length - 1 ? "text-primary font-bold shadow-[0_0_5px_rgba(255,215,0,0.5)]" : "text-primary/70"}`}>
                  {line}
                </span>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-primary animate-pulse font-bold text-lg">{`_`}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar Component */}
        <div className="mt-8 relative">
          <div className="flex justify-between text-[10px] text-primary/60 mb-2 uppercase tracking-[0.2em] font-bold">
            <span>System Initialization</span>
            <span>{progress}%</span>
          </div>

          <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden border border-primary/20">
            <div
              className="h-full bg-primary shadow-[0_0_15px_#FFD700] relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/50 blur-[1px]"></div>
            </div>
          </div>

          {/* Decorative Tech Bits */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-primary/20"></div>
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-primary/20"></div>
        </div>

        {/* Final Big Reveal Text */}
        {progress === 100 && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tighter drop-shadow-[0_0_25px_rgba(255,215,0,0.8)] animate-pulse scale-110 transform">
              ACCESS<br />GRANTED
            </h1>
          </div>
        )}

      </div>

      <style>{`
            .animate-spin-slow {
                animation: spin 3s linear infinite;
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `}</style>

    </div>
  );
};

export default LoadingScreen;
