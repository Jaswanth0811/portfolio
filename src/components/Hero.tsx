"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import DotField from "@/components/DotField";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background Interactive DotField */}
      <DotField />
      
      {/* Overlay to dim the background slightly so text pops */}
      <div className="absolute inset-0 bg-background/40 pointer-events-none" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] opacity-50 mix-blend-screen pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-6"
        >
          <motion.h3 
            initial={{ opacity: 0, tracking: "0em" }}
            animate={{ opacity: 1, tracking: "0.2em" }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-accent font-bold uppercase text-xs md:text-sm tracking-[0.2em]"
          >
            Welcome to my portfolio
          </motion.h3>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
          >
            Jaswanth Ganta
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted font-light"
          >
            Mechanical Engineer & Software Developer
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="italic text-base md:text-lg text-muted/80 max-w-2xl mx-auto leading-relaxed pt-2"
          >
            "Building innovative solutions through Engineering, Software Development, AI, and Automation."
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <a
              href="https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/Jaswanth_Ganta_Resume_fhxbrn.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold w-full sm:w-auto hover:bg-accent/90 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 px-8 py-4 rounded-full font-semibold w-full sm:w-auto hover:bg-white/5 transition-colors duration-300"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator - Absolutely positioned so it doesn't push text up */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
