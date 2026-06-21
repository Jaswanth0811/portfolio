"use client";

import { Section } from "./Section";
import { Sparkles } from "lucide-react";

export function Hobbies() {
  return (
    <Section id="hobbies">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Hobbies
        </h2>

        <div className="relative inline-flex flex-col w-full max-w-4xl rounded-[24px] cursor-pointer group transition-all duration-500 hover:-translate-y-2">
          {/* GLOW LAYER */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[12px] pointer-events-none">
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,var(--glow-1)_360deg)]" />
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,var(--glow-2)_360deg)]" />
              <div className="absolute inset-[2px] rounded-[24px] bg-background" />
            </div>
          </div>

          {/* MAIN BORDER LAYER */}
          <div className="absolute inset-0 overflow-hidden rounded-[24px] pointer-events-none">
            <div className="absolute inset-0 border border-border rounded-[24px] transition-opacity duration-500 group-hover:opacity-0" />
            <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,var(--glow-1)_360deg)] transition-opacity duration-500" />
            <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,var(--glow-2)_360deg)] transition-opacity duration-500" />
          </div>

          {/* INNER CONTENT */}
          <div className="relative z-10 m-[1.5px] flex flex-col justify-center h-[calc(100%-3px)] w-[calc(100%-3px)] bg-card rounded-[22.5px] p-8 md:p-12 overflow-hidden shadow-xl">
            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4 origin-left group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
              AI-Powered Development
            </h3>
            <p className="text-lg text-muted leading-relaxed">
              As a hobby, I love experimenting with artificial intelligence to develop complete applications and websites. It allows me to rapidly prototype ideas, explore the cutting edge of software creation, and bring complex concepts to life entirely through AI tools.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
