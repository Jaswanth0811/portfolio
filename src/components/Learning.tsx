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
                className="flex items-center gap-4 bg-background p-4 rounded-2xl border border-border/50"
              >
                <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
