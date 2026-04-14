"use client";
import { memo, useEffect, useRef } from "react";

/**
 * Lightweight canvas particle background.
 * Wrapped in React.memo so parent re-renders (e.g. word cycling in Hero)
 * never cause this component to re-mount or re-draw from scratch.
 */
function ParticleCanvasInner() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    // Fewer particles on smaller screens
    const getCount = () => (window.innerWidth < 768 ? 0 : window.innerWidth < 1024 ? 28 : 48);

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      const count = getCount();
      // Spawn particles well inside the canvas with padding from edges
      const padX = canvas.width * 0.08;
      const padY = canvas.height * 0.08;
      particles = Array.from({ length: count }, () => ({
        x: padX + Math.random() * (canvas.width - padX * 2),
        y: padY + Math.random() * (canvas.height - padY * 2),
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.28 + 0.1,
      }));
    };

    resize();
    createParticles();

    const onResize = () => {
      resize();
      createParticles();
    };
    window.addEventListener("resize", onResize);

    // Throttle to ~30 fps
    let last = 0;
    const DIST_THRESHOLD = 130;
    const DIST_SQ = DIST_THRESHOLD * DIST_THRESHOLD;

    const draw = (now) => {
      animId = requestAnimationFrame(draw);
      if (now - last < 33) return;
      last = now;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connection lines — batched into one path per frame
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < DIST_SQ) {
            const alpha = 0.04 * (1 - Math.sqrt(distSq) / DIST_THRESHOLD);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots — move and bounce off edges with padding
      const padX = 4;
      const padY = 4;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges instead of wrapping — prevents particles
        // from appearing out of thin air at screen edges on mobile
        if (p.x < padX || p.x > canvas.width - padX) p.vx *= -1;
        if (p.y < padY || p.y > canvas.height - padY) p.vy *= -1;
      }
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// React.memo prevents re-render when Hero's state (activeWord) changes
export const ParticleCanvas = memo(ParticleCanvasInner);