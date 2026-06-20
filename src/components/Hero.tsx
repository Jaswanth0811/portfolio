"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="space-y-2">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium tracking-wide uppercase text-sm md:text-base"
            >
              Mechanical Engineer & Software Developer
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white"
            >
              Jaswanth Ganta
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Building innovative solutions through Engineering, Software Development, AI, and Automation.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/Jaswanth_Ganta_Resume_fhxbrn.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-medium w-full sm:w-auto hover:scale-105 transition-transform duration-300"
            >
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-card text-white border border-border px-8 py-4 rounded-2xl font-medium w-full sm:w-auto hover:bg-white/5 transition-colors duration-300"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-purple-500/20 rounded-full animate-pulse blur-3xl" />
            <div className="absolute inset-4 bg-card border border-border rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/IMG-20260222-WA0005-EDIT_jejzt2.jpg" 
                alt="Jaswanth Ganta" 
                className="w-full h-full object-cover pointer-events-none select-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
