"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  // useMotionValue allows us to track the mouse outside of React's render cycle
  // This provides buttery smooth 144hz tracking with zero lag or jitter.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
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
  }, [isVisible, mouseX, mouseY]);

  // Create a high-performance string template for the spotlight gradient
  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(59,130,246,0.12), transparent 80%)`;
  
  // Calculate the dot position
  const dotX = useMotionTemplate`calc(${mouseX}px - 4px)`;
  const dotY = useMotionTemplate`calc(${mouseY}px - 4px)`;

  if (!isVisible) return null;

  return (
    <>
      {/* Precise Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
        }}
      />

      {/* Interactive Spotlight Overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[9990]"
        style={{ background }}
      />
    </>
  );
}
