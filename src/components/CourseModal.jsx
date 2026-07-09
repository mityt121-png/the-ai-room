import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CourseModal({ isOpen, onClose, course }) {
  // Agar modal open nahi hai ya course data nahi hai, toh kuch render mat karo
  if (!isOpen || !course) return null;

  const curriculum = course.curriculum || [];
  const stats = course.stats || [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        
        {/* Background Blur Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Top Hacker Bar */}
          <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500 cursor-pointer" onClick={onClose}></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <span className="text-xs font-mono text-cyan-400">/sys/{course.category?.replace(/\s+/g, '').toLowerCase() || 'course'}_details.sh</span>
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
              ✕
            </button>
          </div>

          {/* Scrollable Content Area */}
          <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
            
            {/* Header Info */}
            <div className="flex flex-col md:flex-row gap-6 md:items-center mb-10">
              {/* Dynamic Icon */}
              <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 shrink-0 text-cyan-300 text-4xl">
                {course.icon ? <course.icon /> : "🚀"}
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  {course.title}
                </h2>
                <p className="text-slate-400 mt-2 text-lg">
                  {course.modalDesc || course.desc}
                </p>
              </div>
            </div>

            {/* Dynamic Stats Grid */}
            {stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 text-center">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="text-cyan-300 font-mono font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Dynamic Curriculum Timeline */}
            {curriculum.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">
                  Course Timeline (Kya-Kya Seekhoge)
                </h3>
                <div className="space-y-6">
                  {curriculum.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      {/* Timeline Line */}
                      <div className="flex flex-col items-center mt-1">
                        <div className="w-4 h-4 rounded-full border-2 border-cyan-500 bg-slate-900 z-10"></div>
                        {index !== curriculum.length - 1 && <div className="w-0.5 h-full bg-slate-800 my-1"></div>}
                      </div>
                      {/* Content */}
                      <div className="pb-6">
                        <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md">
                          {item.week}
                        </span>
                        <h4 className="text-lg font-bold text-slate-200 mt-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom Action Bar */}
          <div className="bg-slate-950 p-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm font-mono text-center sm:text-left">
              Seats limit: <span className="text-rose-400 font-bold animate-pulse">Only 5 left!</span>
            </p>
            <div className="flex gap-4 w-full sm:w-auto">
              <button onClick={onClose} className="px-6 py-3 rounded-xl border border-slate-700 text-white font-bold hover:bg-slate-800 transition-colors w-full sm:w-auto">
                Baad Mein
              </button>
              <button 
                onClick={() => {
                  onClose();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] w-full sm:w-auto"
              >
                Enroll Now 🚀
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}