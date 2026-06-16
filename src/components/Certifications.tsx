import { Section } from "./Section";
import { Award } from "lucide-react";

const CERTIFICATIONS = [
  "Siemens Mobility – Project Manager Job Simulation",
  "EY – Technology Risk Job Simulation",
  "Deloitte Australia – Data Analytics Job Simulation",
  "Deloitte Australia – Cyber Job Simulation",
  "Infosys Springboard – Introduction to JVM Languages",
  "3D Printing Certification",
];

export function Certifications() {
  return (
    <Section id="certifications">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert}
              className="flex items-start gap-4 bg-card border border-border rounded-[24px] p-6 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="mt-1 bg-accent/10 p-2 rounded-full">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <p className="text-white font-medium leading-snug">
                {cert}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
