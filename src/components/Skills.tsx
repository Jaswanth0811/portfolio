"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Technical Skills",
    skills: ["Auto CAD", "Solidworks", "CATIA V5", "Java (Basic)", "3D Designing"],
  },
  {
    title: "Professional Skills",
    skills: [
      "Management Skills",
      "Creativity",
      "Teamwork",
      "Communication",
      "Critical Thinking",
      "Leadership",
      "Strength",
      "Meeting deadlines",
    ],
  },
  {
    title: "Languages",
    skills: ["Telugu", "English"],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-[24px] p-8 shadow-lg hover:border-white/10 transition-colors duration-300"
            >
              <h3 className="text-xl font-medium text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.1 },
                    }}
                    className="relative inline-flex overflow-hidden rounded-full p-[1.5px] cursor-pointer group"
                  >
                    {/* Default Border (visible when not hovered) */}
                    <div className="absolute inset-0 bg-white/10 transition-opacity duration-300 group-hover:opacity-0" />
                    
                    {/* First Revolving Glow Border (Clockwise) */}
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[300%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)] transition-opacity duration-300" />
                    
                    {/* Second Revolving Glow Border (Also Clockwise, starting at 180deg) */}
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[300%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)] transition-opacity duration-300" />
                    
                    {/* Inner Pill */}
                    <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-[#0a0a0a] px-4 py-2 text-sm font-medium transition-colors duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                      <span className="text-muted transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
