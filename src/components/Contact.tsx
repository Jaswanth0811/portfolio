"use client";

import { Section } from "./Section";
import { Mail, Globe, Code, Download, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

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
                href="mailto:jaswanthganta2005@outlook.com"
                className="relative inline-flex flex-col w-full rounded-2xl cursor-pointer group transition-all duration-500 hover:-translate-y-2"
              >
                {/* GLOW LAYER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[12px] pointer-events-none">
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)]" />
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)]" />
                    <div className="absolute inset-[2px] rounded-2xl bg-black" />
                  </div>
                </div>

                {/* MAIN BORDER LAYER */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 border border-border transition-opacity duration-500 group-hover:opacity-0" />
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)] transition-opacity duration-500" />
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)] transition-opacity duration-500" />
                </div>

                {/* INNER CONTENT */}
                <div className="relative z-10 m-[1.5px] flex items-center gap-4 h-[calc(100%-3px)] w-[calc(100%-3px)] bg-[#111111] rounded-[14.5px] p-4 overflow-hidden">
                  <div className="bg-background p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium text-white origin-left group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">Email Me</span>
                </div>
              </a>
              
              <a
                href="https://linkedin.com/in/jaswanthganta"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex flex-col w-full rounded-2xl cursor-pointer group transition-all duration-500 hover:-translate-y-2"
              >
                {/* GLOW LAYER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[12px] pointer-events-none">
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)]" />
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)]" />
                    <div className="absolute inset-[2px] rounded-2xl bg-black" />
                  </div>
                </div>

                {/* MAIN BORDER LAYER */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 border border-border transition-opacity duration-500 group-hover:opacity-0" />
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)] transition-opacity duration-500" />
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)] transition-opacity duration-500" />
                </div>

                {/* INNER CONTENT */}
                <div className="relative z-10 m-[1.5px] flex items-center gap-4 h-[calc(100%-3px)] w-[calc(100%-3px)] bg-[#111111] rounded-[14.5px] p-4 overflow-hidden">
                  <div className="bg-background p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Globe className="text-white w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium text-white origin-left group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">LinkedIn</span>
                </div>
              </a>
              
              <a
                href="https://github.com/jaswanth0811"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex flex-col w-full rounded-2xl cursor-pointer group transition-all duration-500 hover:-translate-y-2"
              >
                {/* GLOW LAYER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[12px] pointer-events-none">
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)]" />
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)]" />
                    <div className="absolute inset-[2px] rounded-2xl bg-black" />
                  </div>
                </div>

                {/* MAIN BORDER LAYER */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 border border-border transition-opacity duration-500 group-hover:opacity-0" />
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)] transition-opacity duration-500" />
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)] transition-opacity duration-500" />
                </div>

                {/* INNER CONTENT */}
                <div className="relative z-10 m-[1.5px] flex items-center gap-4 h-[calc(100%-3px)] w-[calc(100%-3px)] bg-[#111111] rounded-[14.5px] p-4 overflow-hidden">
                  <div className="bg-background p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Code className="text-white w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium text-white origin-left group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">GitHub</span>
                </div>
              </a>

              <a
                href="https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/Jaswanth_Ganta_Resume_fhxbrn.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex flex-col w-full rounded-2xl cursor-pointer group transition-all duration-500 hover:-translate-y-2"
              >
                {/* GLOW LAYER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[12px] pointer-events-none">
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)]" />
                    <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)]" />
                    <div className="absolute inset-[2px] rounded-2xl bg-black" />
                  </div>
                </div>

                {/* MAIN BORDER LAYER */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 border border-accent/20 transition-opacity duration-500 group-hover:opacity-0" />
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#3b82f6_360deg)] transition-opacity duration-500" />
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0_270deg,#60a5fa_360deg)] transition-opacity duration-500" />
                </div>

                {/* INNER CONTENT */}
                <div className="relative z-10 m-[1.5px] flex items-center gap-4 h-[calc(100%-3px)] w-[calc(100%-3px)] bg-[#0f172a] rounded-[14.5px] p-4 overflow-hidden">
                  <div className="bg-accent text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Download className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium text-accent origin-left group-hover:scale-105 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">Download Resume</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-[24px] p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get("name") as string;
              const subject = formData.get("subject") as string;
              const message = formData.get("message") as string;
              
              setIsSending(true);

              setTimeout(() => {
                setIsSending(false);
                setIsSent(true);

                const body = `Name: ${name}\n\nMessage:\n${message}`;
                const mailtoUrl = `mailto:jaswanthganta2005@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                window.location.href = mailtoUrl;

                setTimeout(() => setIsSent(false), 3000);
              }, 1500);
            }}>
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
                <label htmlFor="subject" className="text-sm font-medium text-muted">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  placeholder="Subject of your message"
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
                disabled={isSending || isSent}
                className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium py-4 rounded-xl hover:bg-white/90 transition-colors mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Opening Mail Client...
                  </>
                ) : isSent ? (
                  <>
                    <CheckCircle2 size={18} className="text-green-600" />
                    Opening...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
