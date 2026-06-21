"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true); // Default true so it doesn't flash content before hydration

  useEffect(() => {
    // Check session storage on mount
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (!hasLoaded) {
      setIsFirstVisit(true);
      sessionStorage.setItem("hasLoaded", "true");
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsFirstVisit(false);
      setIsLoading(false);
    }
  }, []);

  if (!isFirstVisit) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
            style={{ pointerEvents: isLoading ? "auto" : "none" }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none text-foreground gap-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-muted tracking-[0.3em] text-sm uppercase animate-pulse"
              >
                Initializing...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 0 : 0.2 }}
        className="w-full h-full min-h-full"
      >
        {children}
      </motion.div>
    </>
  );
}
