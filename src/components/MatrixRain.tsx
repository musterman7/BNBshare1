"use client";

import { useEffect, useRef, useState } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    // Matrix configuration
    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops - start at different positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }

    setIsReady(true);
    console.log("MatrixRain started:", { width: canvas.width, height: canvas.height, columns, drops: drops.length });

    // Draw function with speed control
    let animationId: number;
    let lastTime = 0;
    const speed = 50; // milliseconds between updates (higher = slower)
    
    const draw = (currentTime: number) => {
      // Control speed
      if (currentTime - lastTime < speed) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastTime = currentTime;

      // Semi-transparent black for fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set font
      ctx.font = `bold ${fontSize}px monospace`;

      // Draw each column
      for (let i = 0; i < drops.length; i++) {
        // Random green shade
        const brightness = Math.random() * 100 + 155; // 155-255
        ctx.fillStyle = `rgb(16, ${brightness}, 129)`;

        const text = "4";
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Randomly reset drop to top
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    // Start animation
    animationId = requestAnimationFrame(draw);

    // Handle resize
    const handleResize = () => {
      setSize();
      // Reinitialize drops for new width
      const newColumns = Math.floor(canvas.width / fontSize);
      drops.length = newColumns;
      for (let i = 0; i < newColumns; i++) {
        if (drops[i] === undefined) {
          drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 opacity-25"
      style={{ 
        pointerEvents: "none",
        zIndex: -1,
        backgroundColor: "#000000"
      }}
      aria-hidden="true"
    />
  );
}
