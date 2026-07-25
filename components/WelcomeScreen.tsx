import React from 'react';

interface WelcomeScreenProps {
  onFinish: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onFinish }) => {
  React.useEffect(() => {
    const timer = window.setTimeout(onFinish, 900);
    return () => window.clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0F0F0F] text-primary animate-[welcome-exit_900ms_ease-in_forwards]">
      <div className="grid-bg absolute inset-0 opacity-20" />
      <p className="relative font-mono text-2xl font-bold tracking-[0.35em] sm:text-4xl">
        BIENVENIDO
      </p>
    </div>
  );
};

export default WelcomeScreen;
