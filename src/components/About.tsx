"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" className="py-24">
      <div className="space-y-16 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-muted text-lg tracking-wide">
            Driven by curiosity. Defined by precision.
          </p>
          <div className="w-12 h-1 bg-accent rounded-full mt-2" />
        </div>
        
        {/* Main Card */}
        <div className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
            
            {/* Left: Avatar/Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-background/50 rounded-3xl p-6 border border-white/5 shadow-inner flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent rounded-3xl" />
                <img 
                  src="https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/IMG-20260222-WA0005-EDIT_jejzt2.jpg" 
                  alt="Jaswanth Ganta" 
                  className="protected-photo w-full h-full object-cover rounded-2xl shadow-lg relative z-10"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Jaswanth Ganta</h3>
                <h4 className="text-accent text-sm font-bold tracking-widest uppercase">
                  Mechanical Engineering Student
                </h4>
              </div>

              <div className="space-y-6 text-muted/90 leading-relaxed font-light text-lg">
                <p>
                  I am a passionate <span className="text-white font-medium">Mechanical Engineering student</span> with a deep interest in software development, AI, coding, automation, and innovative technology solutions. My journey combines strong theoretical foundations with hands-on project experience.
                </p>
                <p>
                  I thrive at the intersection of mechanical design and technology — whether it's optimizing a system or building an autonomous project, I bring precision, creativity, and relentless problem-solving to every challenge.
                </p>
              </div>

              <div className="h-px w-full bg-border" />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-2">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-4xl font-black text-white">4</span>
                  <span className="text-xs tracking-widest text-muted uppercase font-semibold mt-1">Projects</span>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-4xl font-black text-white">5</span>
                  <span className="text-xs tracking-widest text-muted uppercase font-semibold mt-1">Tools Mastered</span>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-4xl font-black text-white">6</span>
                  <span className="text-xs tracking-widest text-muted uppercase font-semibold mt-1">Certifications</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
