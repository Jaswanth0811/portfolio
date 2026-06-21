"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverBox, setHoverBox] = useState<{ x: number, y: number, w: number, h: number, r: number } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest("a") || target.closest("button") || target.closest("[role='button']");
      
      if (clickable) {
        const rect = clickable.getBoundingClientRect();
        const style = window.getComputedStyle(clickable);
        const radius = parseFloat(style.borderRadius) || 8;
        
        setHoverBox({
          x: rect.left,
          y: rect.top,
          w: rect.width,
          h: rect.height,
          r: radius
        });
      } else {
        setHoverBox(null);
      }
    };

    const handleScroll = () => {
      setHoverBox(null);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver, { capture: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver, { capture: true });
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny solid dot that always follows exactly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: hoverBox ? 0 : 1 
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* The Magnetic Bubble */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9990] backdrop-invert-[0.1]"
        style={{
          background: hoverBox ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.3)",
          border: hoverBox ? "1px solid rgba(59, 130, 246, 0.5)" : "0px solid rgba(59, 130, 246, 0)",
        }}
        animate={
          hoverBox
            ? {
                x: hoverBox.x - 6, 
                y: hoverBox.y - 6,
                width: hoverBox.w + 12,
                height: hoverBox.h + 12,
                borderRadius: hoverBox.r + 6,
              }
            : {
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                width: 32,
                height: 32,
                borderRadius: 16,
              }
        }
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5,
        }}
      />
    </>
  );
}
