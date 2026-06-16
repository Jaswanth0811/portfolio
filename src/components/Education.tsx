"use client";

import { Section } from "./Section";
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
  },
];

export function Education() {
  return (
    <Section id="education">
      <div className="space-y-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Education
        </h2>

        <div className="relative border-l border-border ml-4 md:ml-6 space-y-12">
          {EDUCATION.map((item, index) => (
            <motion.div
              key={item.institution}
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
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-white">
                    {item.institution}
                  </h3>
                  {item.status && (
                    <span className="inline-flex text-[10px] sm:text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.status}
                    </span>
                  )}
                </div>
                <span className="text-sm font-medium text-accent/80 md:text-right mt-2 md:mt-0">
                  {item.period}
                </span>
              </div>
              
              <p className="text-lg text-muted">
                {item.degree}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
