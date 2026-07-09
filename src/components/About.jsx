import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ---------------- LEFT SIDE: Animated Image/Card Setup ---------------- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 p-2 shadow-2xl">
              {/* Note: Aap emoji ki jagah yahan apna actual photo (<img> tag) laga sakte hain */}
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl flex items-center justify-center border border-slate-700/50 relative overflow-hidden">
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-9xl"
                >
                  👨‍💻
                </motion.div>
                
                {/* Hacker overlay scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
              </div>
            </div>

            {/* Funny Floating Badge */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-cyan-500 text-slate-950 font-bold py-3 px-6 rounded-2xl border-4 border-[#020617] shadow-[0_0_20px_rgba(34,211,238,0.4)] transform rotate-[-5deg]"
            >
              <span className="block text-xl">100%</span>
              <span className="text-sm">Boring-Free Zone</span>
            </motion.div>
          </motion.div>


          {/* ---------------- RIGHT SIDE: Content & Text ---------------- */}
          <motion.div 
            variants={{
              show: { transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-mono backdrop-blur-md">
              // THE MASTERMIND BEHIND THIS
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Hi, I'm your new <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Tech Best Friend
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-slate-400 leading-relaxed">
              Dekho yaar, coding aur AI koi rocket science nahi hai jisse darr lagne lage. Main yahan isliye hoon taaki tumhe real-world tech sikhau, wo bhi bina kisi boring PowerPoint presentation ke.
            </motion.p>

            {/* Cool Bullet Points */}
            <motion.ul variants={fadeUp} className="space-y-4 mt-6">
              {[
                { icon: "🚫", text: "No Ratta Maar: Hum logic samajhte hain, code nahi rat'te." },
                { icon: "🛠️", text: "Hands-on Projects: Khud ke AI models aur bots banao." },
                { icon: "😎", text: "Chill Vibe: Galtiyan karo, error lao, hum milkar solve karenge." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/30 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-slate-300 font-medium pt-1">{item.text}</span>
                </li>
              ))}
            </motion.ul>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}