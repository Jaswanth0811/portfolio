"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovering ? 0 : 1, // Dot disappears on hover
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* Mechanical Crosshair Reticle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          rotate: isHovering ? 45 : 0, // Snaps 45 degrees into an 'X' on hover
          scale: isHovering ? 1.4 : 1, // Expands slightly
        }}
        transition={{
          x: { type: "spring", stiffness: 800, damping: 28, mass: 0.5 },
          y: { type: "spring", stiffness: 800, damping: 28, mass: 0.5 },
          rotate: { type: "spring", stiffness: 300, damping: 20 },
          scale: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        {/* Subtle circular boundary */}
        <div className="absolute inset-0 rounded-full border border-accent/30" />
        
        {/* Top tick */}
        <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-[1.5px] h-3 bg-accent" />
        {/* Bottom tick */}
        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-[1.5px] h-3 bg-accent" />
        {/* Left tick */}
        <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-3 h-[1.5px] bg-accent" />
        {/* Right tick */}
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-3 h-[1.5px] bg-accent" />
      </motion.div>
    </>
  );
}
