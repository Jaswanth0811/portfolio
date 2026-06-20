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
                  className="flex items-start gap-4 bg-card border border-border rounded-[24px] p-6 hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="mt-1 bg-accent/10 p-2 rounded-full flex-shrink-0">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-white font-medium leading-snug">
                    {cert}
                  </p>
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
                  className="flex items-start gap-4 bg-card border border-border rounded-[24px] p-6 hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="mt-1 bg-yellow-500/10 p-2 rounded-full flex-shrink-0">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                  </div>
                  <p className="text-white font-medium leading-snug">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
