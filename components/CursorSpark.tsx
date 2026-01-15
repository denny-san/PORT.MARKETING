import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    life: number;
    color: string;
}

const CursorSpark: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const requestRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const createParticle = (x: number, y: number) => {
            // Yellow/Gold shades
            const colors = ['#FFD700', '#FFC107', '#FFB300', '#FDB813', '#E6C200'];
            const color = colors[Math.floor(Math.random() * colors.length)];

            particles.current.push({
                x,
                y,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 2,
                speedY: (Math.random() - 0.5) * 2,
                life: 1,
                color
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            for (let i = 0; i < 3; i++) {
                createParticle(e.clientX, e.clientY);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.current.length; i++) {
                const p = particles.current[i];

                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.life;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                p.x += p.speedX;
                p.y += p.speedY;
                p.life -= 0.02;

                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                    i--;
                }
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999]"
        />
    );
};

export default CursorSpark;
