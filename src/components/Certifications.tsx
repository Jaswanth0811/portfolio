import { Section } from "./Section";
import { Award, Trophy } from "lucide-react";

const CERTIFICATIONS = [
  "Siemens Mobility • Project Manager Job Simulation",
  "EY • EY Technology Risk Job Simulation",
  "Deloitte Australia • Data Analytics Job Simulation",
  "Deloitte Australia - Cyber Job Simulation",
  "Infosys Springboard • Introduction to JVM Languages • JVM, Java. Scala",
  "3D Printing",
];

const ACHIEVEMENTS = [
  "Best Java Learner Appreciation Award - iGenuine",
  "Best CATIA Learner Appreciation Award - iGenuine",
];

export function Certifications() {
  return (
    <Section id="certifications">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Certifications & Achievements
        </h2>

        <div className="space-y-8">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert}
                  className="relative inline-flex flex-col w-full rounded-[24px] cursor-pointer group transition-all duration-500 hover:-translate-y-2"
                >
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
                  <div className="relative z-10 m-[1.5px] flex items-start gap-4 h-[calc(100%-3px)] w-[calc(100%-3px)] bg-card rounded-[22.5px] p-6 overflow-hidden">
                    <div className="mt-1 bg-accent/10 p-2 rounded-full flex-shrink-0">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground font-medium leading-snug origin-left group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
                      {cert}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACHIEVEMENTS.map((achievement) => (
                <div
                  key={achievement}
                  className="relative inline-flex flex-col w-full rounded-[24px] cursor-pointer group transition-all duration-500 hover:-translate-y-2"
                >
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
                  <div className="relative z-10 m-[1.5px] flex items-start gap-4 h-[calc(100%-3px)] w-[calc(100%-3px)] bg-card rounded-[22.5px] p-6 overflow-hidden">
                    <div className="mt-1 bg-yellow-500/10 p-2 rounded-full flex-shrink-0">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                    </div>
                    <p className="text-foreground font-medium leading-snug origin-left group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
                      {achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
