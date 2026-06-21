"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect if it's a touch device; if so, don't show the custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a clickable element
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

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Sharp Inner Dot so user knows exactly where the cursor is */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0,
        }}
      />

      {/* Glowing Neon Orb */}
      <motion.div
        className="fixed top-0 left-0 w-80 h-80 rounded-full pointer-events-none z-[9990] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0) 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.8,
        }}
      />
    </>
  );
}
