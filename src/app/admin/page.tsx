"use client";

import { useState } from "react";
import { Lock, FileText, Download } from "lucide-react";

const DOCUMENTS = [
  { title: "10th Marks (SSC)", subtitle: "Private certificate file", url: "https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/10th_Marks.pdf" },
  { title: "Diploma Marks", subtitle: "Private certificate file", url: "https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/Diploma_Marks.pdf" },
  { title: "B.Tech 2-1 Marks", subtitle: "Private certificate file", url: "https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/2-1.pdf" },
  { title: "B.Tech 2-2 Marks", subtitle: "Private certificate file", url: "https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/2-2.pdf" },
  { title: "B.Tech 3-1-1 Marks", subtitle: "Private certificate file", url: "https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/3-1-1.pdf" },
  { title: "B.Tech 3-1-2 Marks", subtitle: "Private certificate file", url: "https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/3-1-2.pdf" },
  { title: "B.Tech 3-2 Marks", subtitle: "Private certificate file", url: "https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/3-2.pdf" },
  { title: "SSC OD Certificate", subtitle: "Private certificate file", url: "https://res.cloudinary.com/dwxiibqcw/image/upload/v1781976682/OD_SSC.pdf" },
];

export default function AdminPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded passcode: "0811" (from username)
    if (passcode === "0811") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPasscode("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <form onSubmit={handleLogin} className="bg-card border border-border p-8 rounded-3xl shadow-2xl max-w-sm w-full flex flex-col items-center space-y-6">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-2">
            <Lock className="text-accent" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white">Restricted Access</h1>
          <p className="text-muted text-center text-sm">Enter your passcode to access the admin vault.</p>
          
          <div className="w-full space-y-4">
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Passcode"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-center tracking-[0.5em]"
              autoFocus
            />
            {error && <p className="text-red-500 text-xs text-center">Incorrect passcode</p>}
            <button
              type="submit"
              className="w-full bg-accent text-white font-bold py-3 rounded-xl hover:bg-accent/80 transition-colors"
            >
              Unlock
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8 md:p-20 pt-32">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <h1 className="text-4xl font-bold text-white">Admin Vault</h1>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="text-muted hover:text-white transition-colors text-sm font-medium"
          >
            Lock Vault
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOCUMENTS.map((doc, idx) => (
            <div key={idx} className="bg-card border border-border p-6 rounded-2xl flex items-start justify-between group hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <FileText className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{doc.title}</h3>
                  <p className="text-muted text-sm">{doc.subtitle}</p>
                </div>
              </div>
              <a 
                href={doc.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[40px] w-10 h-10 bg-background rounded-full flex items-center justify-center text-muted group-hover:text-accent transition-colors ml-4"
              >
                <Download size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

