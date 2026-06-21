"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // High-performance tracking for zero lag
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add a very tight spring so it feels fluid but instantly responsive
  const springX = useSpring(mouseX, { stiffness: 1000, damping: 40, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 1000, damping: 40, mass: 0.1 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
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
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000]"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 8 : 20, // Shrinks to a point
        height: isHovering ? 8 : 20,
        backgroundColor: isHovering ? "#000000" : "#FFFFFF", // Turns black
        border: isHovering ? "1px solid rgba(255,255,255,0.3)" : "0px solid transparent", // Faint border so you don't lose the black dot on a dark background
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 25,
        mass: 0.5,
      }}
    />
  );
}
