import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Hobbies } from "@/components/Hobbies";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Internships } from "@/components/Internships";
import { Learning } from "@/components/Learning";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden selection:bg-accent/30">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hobbies />
      <Certifications />
      <Education />
      <Internships />
      <Learning />
      <Contact />
      <Footer />
    </main>
  );
}
