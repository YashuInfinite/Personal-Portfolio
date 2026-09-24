import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Skills } from './components/Skills';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-orange-500 selection:text-black overflow-x-hidden">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Testimonials />
        <Skills />
        <Connect />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

