import React from 'react';

interface WelcomeScreenProps {
  onFinish: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onFinish }) => {
  React.useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(onFinish, reduce ? 0 : 1300);
    return () => window.clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-ink text-paper"
      style={{ animation: 'intro-out 1300ms ease-in forwards' }}
      aria-hidden
    >
      <div className="overflow-hidden">
        <p
          className="font-display font-semibold tracking-display text-[clamp(2.5rem,7vw,5.5rem)] leading-none"
          style={{ animation: 'intro-line 800ms cubic-bezier(.16,1,.3,1) both' }}
        >
          Denny Sánchez<span className="text-accent">.</span>
        </p>
      </div>
      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
        Portafolio — {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default WelcomeScreen;
