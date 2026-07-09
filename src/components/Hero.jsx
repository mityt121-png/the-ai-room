import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform } from 'framer-motion';

export default function Hero() {
  // 1. Dynamic Text Array (Yeh ab wapas move karega!)
  const subjects = ["GenAI Expert", "Python Pro", "ML Master", "Deep Learning Don"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % subjects.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, [subjects.length]);

  // 2. Mouse Position Trackers for Interactive Spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 50 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const bgGlow = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(34, 211, 238, 0.12), transparent 80%)`;
  
  const parallaxLeft = useTransform(smoothX, [0, 1000], [0, -40]);
  const parallaxRight = useTransform(smoothX, [0, 1000], [0, 40]);

  return (
    <section  id="hero"
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#020617] overflow-hidden group"
    >
      {/* ---------------- 1. ANIMATED NEBULA BACKGROUND (Naya aur Achha BG) ---------------- */}
      {/* Yeh slow-moving gole background ko zinda aur premium banayenge */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          rotate: [0, 90, 0],
          x: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none z-0"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          rotate: [0, -90, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none z-0"
      />

      {/* ---------------- 2. INTERACTIVE MOUSE SPOTLIGHT & GRID ---------------- */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
        style={{ background: bgGlow }}
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Parallax Stars */}
      <motion.div style={{ x: parallaxLeft, y: parallaxRight }} className="absolute top-[25%] left-[15%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] pointer-events-none z-0 opacity-50 animate-pulse" />
      <motion.div style={{ x: parallaxRight, y: parallaxLeft }} className="absolute bottom-[25%] right-[20%] w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_20px_#a855f7] pointer-events-none z-0 opacity-40" />


      {/* ---------------- 3. MAIN CONTENT (Responsive & Moving Text) ---------------- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-6 mt-16 md:mt-0">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-mono backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.1)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse shadow-[0_0_10px_#22d3ee]" />
          System Online: Ready to Learn
        </motion.div>

        {/* Heading with Moving Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl flex flex-col items-center">
          Anpadh AI se <br className="hidden sm:block" />
          
          {/* Yeh span container text ko hilne ke liye space dega */}
          <span className="inline-block min-h-[1.2em] mt-2 overflow-visible">
            <motion.span 
              key={index} // Key change hone par Framer Motion naya animation trigger karta hai
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 pb-2"
            >
              {subjects[index]}
            </motion.span>
          </span>
          Tak! 🚀
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl px-2 leading-relaxed mt-2"
        >
          Python, Machine Learning, aur Deep Learning seekhein... Bina apna sir deewar par maare! Ekdum practical aur mazedarr tareeqe se.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-5 mt-6"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
            Sikhna Shuru Karo (Free)
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-600 hover:border-cyan-400 hover:bg-cyan-500/10 text-white font-bold transition-all transform hover:scale-105 active:scale-95 backdrop-blur-md">
            Hamein Tang Karein 💬
          </button>
        </motion.div>

      </div>
    </section>
  );
}