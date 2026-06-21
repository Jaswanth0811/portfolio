"use client";

import { useState, useEffect } from "react";
import { Section } from "./Section";
import { Wrench, Cpu, Zap, Calendar, X, ExternalLink, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  github?: string;
  tags?: string[];
  longDescription?: string;
};

const PROJECTS: Project[] = [
  {
    title: "AttendX",
    description: "A smart Attendance Tracker for college students that intelligently handles substituted classes and absent faculty.",
    longDescription: "A smart Attendance Tracker for college students. Unlike typical apps, AttendX intelligently handles substituted classes—when a faculty member is absent and another subject is taught in their place, the app dynamically asks which class was actually taken and allocates your attendance to the correct subject.",
    tech: ["AI-Powered Development", "Prompt Engineering"],
    tags: ["Created entirely using AI"],
    github: "https://github.com/jaswanth0811/AttendX",
    icon: <Calendar className="w-8 h-8 text-accent" />,
  },
  {
    title: "Automatic Braking System Using Sensors and Pneumatics",
    description: "Developed a vehicle safety system using sensors and pneumatic mechanisms to automatically apply brakes and reduce collision risks.",
    tech: ["Sensors", "Pneumatics", "Engineering Design"],
    icon: <Wrench className="w-8 h-8 text-accent" />,
  },
  {
    title: "RC Car Using Arduino UNO",
    description: "Designed and built an Arduino-powered remote-controlled vehicle demonstrating embedded systems and automation concepts.",
    tech: ["Arduino UNO", "Electronics", "Embedded Systems"],
    icon: <Cpu className="w-8 h-8 text-accent" />,
  },
  {
    title: "Electricity Generation Using Piezoelectric Plates",
    description: "Created an energy-harvesting system that converts mechanical pressure into electrical energy using piezoelectric materials.",
    tech: ["Piezoelectric Technology", "Renewable Energy"],
    icon: <Zap className="w-8 h-8 text-accent" />,
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  return (
    <Section id="projects">
      <div className="space-y-12 relative z-0">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              whileHover="hover"
              initial="rest"
              animate="rest"
              onClick={() => setSelectedProject(project)}
              className="relative inline-flex flex-col w-full rounded-[24px] cursor-pointer group transition-all duration-500 hover:-translate-y-2"
            >
              {/* GLOW LAYER (Hollow Ring with Blur) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[12px] pointer-events-none">
                <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)]" />
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)]" />
                  <div className="absolute inset-[2px] rounded-[24px] bg-black" />
                </div>
              </div>

              {/* MAIN BORDER LAYER (Crisp) */}
              <div className="absolute inset-0 overflow-hidden rounded-[24px] pointer-events-none">
                {/* Default Border */}
                <div className="absolute inset-0 border border-border transition-opacity duration-500 group-hover:opacity-0" />
                
                {/* Spinning Borders */}
                <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)] transition-opacity duration-500" />
                <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)] transition-opacity duration-500" />
              </div>

              {/* INNER CARD CONTENT */}
              <div className="relative z-10 m-[1.5px] flex flex-col justify-between h-[calc(100%-3px)] w-[calc(100%-3px)] bg-[#111111] rounded-[22.5px] p-8 overflow-hidden shadow-lg">
                <div>
                {/* Abstract background gradient */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700"></div>
                
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-16 h-16 bg-background/50 border border-border backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-accent/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
                    {project.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-5 h-5 text-accent" />
                  </div>
                </div>

                <div className="relative z-10">
                  {project.tags?.includes("Created entirely using AI") && (
                    <div className="mb-4">
                      <span className="ai-badge inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(59,130,246,0.15)]">
                        <span className="animate-sparkle">✨</span> Created entirely using AI
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300 pr-8">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-8 relative z-10">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-block text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full transition-colors duration-300 group-hover:text-white group-hover:bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-card border border-border rounded-[32px] shadow-2xl p-8 sm:p-10 overflow-y-auto max-h-[90vh] z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-background border border-border rounded-full hover:bg-white/10 hover:text-white transition-colors text-muted"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                {selectedProject.icon}
              </div>
              
              {selectedProject.tags?.includes("Created entirely using AI") && (
                <div className="mb-6">
                  <span className="ai-badge inline-flex items-center gap-1.5 text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full uppercase tracking-wider">
                    <span className="animate-sparkle">✨</span> Created entirely using AI
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                {selectedProject.title}
              </h3>
              
              <p className="text-lg sm:text-xl text-muted leading-relaxed mb-10 font-light">
                {selectedProject.longDescription || selectedProject.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm font-medium text-white/80 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-medium hover:bg-white/90 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  View Source <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
