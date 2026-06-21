"use client";

import { Section } from "./Section";
import { Mail, Globe, Code, Download, Send } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="bg-background p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <span className="text-lg font-medium text-white">Email Me</span>
              </a>
              
              <a
                href="https://linkedin.com/in/jaswanthganta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="bg-background p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Globe className="text-white w-6 h-6" />
                </div>
                <span className="text-lg font-medium text-white">LinkedIn</span>
              </a>
              
              <a
                href="https://github.com/jaswanth0811"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl hover:border-accent hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="bg-background p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Code className="text-white w-6 h-6" />
                </div>
                <span className="text-lg font-medium text-white">GitHub</span>
              </a>

              <a
                href="https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/Jaswanth_Ganta_Resume_fhxbrn.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-accent/10 border border-accent/20 rounded-2xl hover:bg-accent/20 transition-all duration-300 group"
              >
                <div className="bg-accent text-white p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Download className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium text-accent">Download Resume</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-[24px] p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-4" action="mailto:contact@example.com" method="POST" encType="text/plain">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium py-4 rounded-xl hover:bg-white/90 transition-colors mt-4"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
