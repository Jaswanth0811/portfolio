import { Section } from "./Section";
import { Lightbulb } from "lucide-react";

const LEARNING_TOPICS = [
  "Artificial Intelligence",
  "Software Development",
  "Web Technologies",
  "Automation Systems",
  "Emerging Engineering Solutions",
  "Designing",
];

export function Learning() {
  return (
    <Section id="learning">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Currently Learning
        </h2>

        <div className="bg-card border border-border rounded-[24px] p-8 md:p-12 shadow-xl hover:border-white/10 transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEARNING_TOPICS.map((topic) => (
              <div
                key={topic}
                className="relative inline-flex flex-col w-full rounded-2xl cursor-pointer group transition-all duration-500 hover:-translate-y-2"
              >
                {/* GLOW LAYER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[12px] pointer-events-none">
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)]" />
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)]" />
                    <div className="absolute inset-[2px] rounded-2xl bg-black" />
                  </div>
                </div>

                {/* MAIN BORDER LAYER */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 border border-border/50 transition-opacity duration-500 group-hover:opacity-0" />
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)] transition-opacity duration-500" />
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)] transition-opacity duration-500" />
                </div>

                {/* INNER CONTENT */}
                <div className="relative z-10 m-[1.5px] flex items-center gap-4 h-[calc(100%-3px)] w-[calc(100%-3px)] bg-[#0a0a0a] rounded-[14.5px] p-4 overflow-hidden">
                  <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-white font-medium origin-left group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
                    {topic}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
