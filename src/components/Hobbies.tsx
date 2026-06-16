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

        <div className="bg-card border border-border rounded-[24px] p-8 md:p-12 shadow-xl hover:border-white/10 transition-colors duration-300 flex flex-col justify-center max-w-4xl">
          <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            AI-Powered Development
          </h3>
          <p className="text-lg text-muted leading-relaxed">
            As a hobby, I love experimenting with artificial intelligence to develop complete applications and websites. It allows me to rapidly prototype ideas, explore the cutting edge of software creation, and bring complex concepts to life entirely through AI tools.
          </p>
        </div>
      </div>
    </Section>
  );
}
