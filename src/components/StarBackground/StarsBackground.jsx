

import React, { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const stars = [];
    const numStars = 350;

    for (let i = 0; i < numStars; i++) {
      const sideBias = Math.random();

      let x;
      if (sideBias < 0.4) {
        // LEFT side density
        x = Math.random() * canvas.width * 0.25;
      } else if (sideBias > 0.6) {
        // RIGHT side density
        x = canvas.width * 0.75 + Math.random() * canvas.width * 0.25;
      } else {
        x = Math.random() * canvas.width;
      }

      stars.push({
        baseY: Math.random() * canvas.height,
        x,
        speed: 0.3 + Math.random() * 1.2,
        amplitude: 10 + Math.random() * 30,
        frequency: 0.002 + Math.random() * 0.004,
        phase: Math.random() * Math.PI * 2,
        size: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.8 + 0.2
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(5, 0, 20, 0.85)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        // Move left ➜ right
        star.x += star.speed;

        // Wave motion
        const y =
          star.baseY +
          Math.sin(star.x * star.frequency + star.phase) * star.amplitude;

        // Reset star when off screen
        if (star.x > canvas.width + 50) {
          star.x = -50;
          star.baseY = Math.random() * canvas.height;
        }

        // Purple glow gradient
        const gradient = ctx.createRadialGradient(
          star.x,
          y,
          0,
          star.x,
          y,
          star.size * 5
        );

        gradient.addColorStop(
          0,
          `rgba(200, 160, 255, ${star.alpha})`
        );
        gradient.addColorStop(
          0.4,
          `rgba(150, 100, 255, ${star.alpha * 0.8})`
        );
        gradient.addColorStop(1, "rgba(150, 100, 255, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(star.x, y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

 return (
  <div className="fixed inset-0 -z-10 pointer-events-none">
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
    />
  </div>
);

}
