"use client";

import React, { useRef, useEffect } from "react";

interface DotFieldProps {
  dotSize?: number;
  dotSpacing?: number;
  dotColor?: string;
  hoverRadius?: number;
  hoverScale?: number;
  className?: string;
}

export default function DotField({
  dotSize = 1.5,
  dotSpacing = 30,
  dotColor = "rgba(255, 255, 255, 0.2)",
  hoverRadius = 250, 
  hoverScale = 6,    
  className = "",
}: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dots: { x: number; y: number; currentX: number; currentY: number; baseSize: number; targetSize: number; currentSize: number }[] = [];
    
    let lastMoveTime = Date.now();
    let effectMultiplier = 0;

    const initDots = () => {
      dots = [];
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          dots.push({
            x,
            y,
            currentX: x,
            currentY: y,
            baseSize: dotSize,
            targetSize: dotSize,
            currentSize: dotSize,
          });
        }
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initDots();
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      lastMoveTime = Date.now();
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      effectMultiplier = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mouseX, y: mouseY } = mouseRef.current;
      const timeSinceMove = Date.now() - lastMoveTime;

      // Cool down effect: fade out if cursor is stable for 100ms
      if (timeSinceMove > 100) {
        effectMultiplier = Math.max(0, effectMultiplier - 0.05);
      } else {
        effectMultiplier = Math.min(1, effectMultiplier + 0.1);
      }

      dots.forEach((dot) => {
        const dx = dot.x - mouseX;
        const dy = dot.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = dot.x;
        let targetY = dot.y;

        if (dist < hoverRadius) {
          // Multiply intensity by effectMultiplier to "cool down" when stable
          const intensity = (1 - dist / hoverRadius) * effectMultiplier;
          
          dot.targetSize = dot.baseSize + intensity * hoverScale;
          
          const repelDist = 35 * Math.pow(intensity, 1.5); 
          if (dist > 0) {
            targetX = dot.x + (dx / dist) * repelDist;
            targetY = dot.y + (dy / dist) * repelDist;
          }
        } else {
          dot.targetSize = dot.baseSize;
        }

        dot.currentSize += (dot.targetSize - dot.currentSize) * 0.15;
        dot.currentX += (targetX - dot.currentX) * 0.15;
        dot.currentY += (targetY - dot.currentY) * 0.15;

        const brightness = Math.min(1, 0.2 + (dot.currentSize - dot.baseSize) * 0.15);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;

        ctx.beginPath();
        ctx.arc(dot.currentX, dot.currentY, dot.currentSize, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotSize, dotSpacing, dotColor, hoverRadius, hoverScale]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
