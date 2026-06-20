"use client";

import { Section } from "./Section";

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
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background border border-border text-muted rounded-full text-sm font-medium hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300 cursor-default md:cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
