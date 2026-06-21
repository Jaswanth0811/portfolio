"use client";

import { useEffect } from "react";

export function AntiDownload() {
  useEffect(() => {
    // 1. Prevent Right Click (Save As)
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    
    // 2. Prevent Keyboard Shortcuts for Save, Print, View Source, and DevTools
    const preventShortcuts = (e: KeyboardEvent) => {
      // Ctrl+S (Save), Ctrl+P (Print), Ctrl+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'p' || e.key.toLowerCase() === 'u')) {
        e.preventDefault();
      }
      // F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (DevTools / Inspect)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'j' || e.key.toLowerCase() === 'c')) {
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
    document.addEventListener("keydown", preventShortcuts);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("keydown", preventShortcuts);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
}

