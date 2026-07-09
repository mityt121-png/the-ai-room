import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  // Smooth scroll logic for quick links
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#020617] pt-16 pb-8 border-t border-cyan-900/40 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-cyan-600/5 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-between">

          {/* 1. Brand Section */}
          <div className="text-center md:text-left">
            <span 
              className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 cursor-pointer" 
              onClick={() => scrollToSection('hero')}
            >
              AI Academy 🤖
            </span>
            <p className="mt-3 text-slate-400 text-sm max-w-xs mx-auto md:mx-0">
              Demystifying Python, ML, and GenAI for the next generation of tech ninjas. Bina kisi boring slides ke.
            </p>
          </div>

          {/* 2. Quick Terminal Links */}
          <div className="flex justify-center gap-6">
            <button onClick={() => scrollToSection('courses')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-mono">
              /courses
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-purple-400 transition-colors text-sm font-mono">
              /about
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-mono">
              /ping_sir
            </button>
          </div>

          {/* 3. Socials & Connect */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-4">
              {['Twitter', 'GitHub', 'LinkedIn'].map((platform, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ y: -3, borderColor: '#22d3ee', color: '#22d3ee' }}
                  href="#" 
                  className="px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 text-xs font-bold transition-colors shadow-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Line with Easter Egg */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 text-center">
          <p className="text-slate-500 text-xs font-mono">
            © {new Date().getFullYear()} AI Academy. Built with 💻, Framer Motion, aur bohot saari ☕. <br className="md:hidden mt-1" />
            <span className="text-slate-600">No AIs were harmed in the making of this site.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}