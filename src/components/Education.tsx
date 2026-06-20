"use client";

import { Section } from "./Section";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const EDUCATION = [
  {
    institution: "NSRIET",
    degree: "Bachelor of Technology – Mechanical Engineering",
    period: "2024–2027",
    status: "Currently Pursuing",
  },
  {
    institution: "Behara Subhakar Polytechnic",
    degree: "Diploma in Mechanical Engineering",
    period: "2021–2024",
  },
  {
    institution: "Sri Suryodaya High School",
    degree: "SSC",
    period: "2020–2021",
    link: "https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/10th_Marks.pdf"
  },
];

export function Education() {
  return (
    <Section id="education">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Education
        </h2>

        <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12 pb-4">
          {EDUCATION.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2 top-2 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center">
              </div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {item.institution}
                  </h3>
                  {item.status && (
                    <span className="text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                      {item.status}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-1 md:mt-0">
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                      title="Download Certificate"
                    >
                      <Download size={18} />
                    </a>
                  )}
                  <span className="text-sm md:text-base text-accent font-medium">
                    {item.period}
                  </span>
                </div>
              </div>
              
              <p className="text-muted text-base md:text-lg">
                {item.degree}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
