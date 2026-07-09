import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // 'idle' | 'sending' | 'sent'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    
    // Dummy delay to simulate network request
    setTimeout(() => {
      setFormState('sent');
      // Reset form after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-mono backdrop-blur-md mb-4">
            // SECURE CONNECTION ESTABLISHED
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Ask <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Sir</span> Anything
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Error aa raha hai? Code nahi chal raha? Ya sirf chai pe charcha karni hai? Ping me!
          </p>
        </motion.div>

        {/* Terminal Form UI */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="max-w-2xl mx-auto bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.1)] overflow-hidden"
        >
          {/* Terminal Top Bar */}
          <div className="bg-slate-800/80 px-4 py-3 flex items-center border-b border-slate-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="mx-auto text-xs font-mono text-slate-400">ask_sir_protocol.exe</div>
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              
              {/* Form Input State */}
              {formState === 'idle' && (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-cyan-400 font-mono text-sm mb-2">~ /name :</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Hacker" 
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono text-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyan-400 font-mono text-sm mb-2">~ /email :</label>
                    <input 
                      type="email" 
                      required
                      placeholder="student@college.edu" 
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-cyan-400 font-mono text-sm mb-2">~ /message :</label>
                    <textarea 
                      required
                      rows="4"
                      placeholder="Sir, Python environment setup nahi ho raha..." 
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono text-sm resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3.5 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(34,211,238,0.3)] mt-2"
                  >
                    Run script (Send)
                  </button>
                </motion.form>
              )}

              {/* Sending State */}
              {formState === 'sending' && (
                <motion.div 
                  key="sending"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 space-y-4"
                >
                  <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
                  <p className="text-cyan-400 font-mono animate-pulse">Compiling message...</p>
                </motion.div>
              )}

              {/* Success Sent State */}
              {formState === 'sent' && (
                <motion.div 
                  key="sent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 space-y-4 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-4xl mb-2">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Delivered!</h3>
                  <p className="text-slate-400 font-mono text-sm">Status: 200 OK. Sir will reply soon.</p>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}