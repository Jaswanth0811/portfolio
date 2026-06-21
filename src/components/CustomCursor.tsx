"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function CustomCursor() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let particleId = 0;
    let lastX = 0;
    let lastY = 0;
    
    // Premium glowing colors (blue, light blue, white)
    const colors = ["#3B82F6", "#60A5FA", "#93C5FD", "#FFFFFF"];

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Calculate distance from last particle
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      
      // Only generate a sparkle if moved by a certain distance (performance optimization)
      if (dist > 15) {
        lastX = e.clientX;
        lastY = e.clientY;

        const newSparkle: Sparkle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          color: colors[Math.floor(Math.random() * colors.length)],
        };

        setSparkles((prev) => [...prev, newSparkle]);

        // Remove the sparkle after 600ms
        setTimeout(() => {
          setSparkles((prev) => prev.filter((p) => p.id !== newSparkle.id));
        }, 600);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Default sharp pointer so they can click properly */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* Trailing sparkles */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 1, scale: Math.random() * 0.5 + 0.5, x: sparkle.x - 4, y: sparkle.y - 4 }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              // Add a slight random float/drift effect to the particles as they fade
              x: sparkle.x - 4 + (Math.random() * 20 - 10), 
              y: sparkle.y - 4 + (Math.random() * 20 - 5) 
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998]"
            style={{ 
              backgroundColor: sparkle.color, 
              boxShadow: `0 0 10px ${sparkle.color}, 0 0 20px ${sparkle.color}` 
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
