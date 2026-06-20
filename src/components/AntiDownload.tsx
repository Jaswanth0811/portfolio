"use client";

import { useEffect } from "react";

export function AntiDownload() {
  useEffect(() => {
    // 1. Prevent Right Click (Save As)
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    
    // 2. Prevent Ctrl+S (Save Page) & Ctrl+P (Print)
    const preventSave = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'p')) {
        e.preventDefault();
      }
    };

    // 3. Attempt to block Screenshots (turns photo black when window loses focus, e.g. opening Snipping Tool)
    const handleBlur = () => {
      document.body.classList.add('hide-protected-images');
    };
    const handleFocus = () => {
      document.body.classList.remove('hide-protected-images');
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("keydown", preventSave);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("keydown", preventSave);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
}

