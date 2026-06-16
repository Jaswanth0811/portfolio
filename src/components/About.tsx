import { Section } from "./Section";

export function About() {
  return (
    <Section id="about">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          About Me
        </h2>
        
        <div className="bg-card border border-border rounded-[24px] p-8 md:p-12 hover:border-white/20 transition-colors duration-500 shadow-xl">
          <p className="text-lg md:text-2xl text-muted leading-relaxed font-light">
            <span className="text-white font-medium">Mechanical Engineering student</span> with a strong interest in software development, AI, coding, automation, and innovative technology solutions. Passionate about combining engineering principles with modern technologies to solve real-world problems. Skilled in teamwork, critical thinking, leadership, and continuous learning.
          </p>
        </div>
      </div>
    </Section>
  );
}
