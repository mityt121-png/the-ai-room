import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CourseGenAI() {
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#020617] relative overflow-hidden pb-24"
    >
      {/* Background Glowing Effects (Emerald/Cyan Theme for GenAI) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-emerald-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* Back Button */}
        <motion.div variants={itemVariants} className="pt-8 pb-4">
          <Link to="/courses" className="inline-flex items-center text-slate-400 hover:text-emerald-400 transition-colors font-mono text-sm border border-slate-800 hover:border-emerald-500/50 px-4 py-2 rounded-lg bg-slate-900/50">
            <span className="mr-2">←</span> cd ../courses
          </Link>
        </motion.div>

        {/* Hero Section (No Video, Clean Centered Text) */}
        <motion.div variants={itemVariants} className="max-w-3xl mt-8 mb-20">
          <span className="inline-block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold mb-6">
            // AI SUPERPOWERS
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            GenAI Expert <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Masterclass
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            ChatGPT aur Gemini ki shaktiyan apne code mein daalna seekhein. Prompt engineering se lekar khud ke custom AI apps banane tak ka poora safar. AI tools chalana nahi, AI tools banana seekho!
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105">
              Enroll Now 🚀
            </Link>
            <div className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900 text-white font-bold flex items-center gap-2">
              ⏳ Duration: 6 Weeks
            </div>
          </div>
        </motion.div>

        {/* Deep Project Details Section (4 Heavy Projects) */}
        <motion.div variants={itemVariants} className="mb-24">
          <h2 className="text-3xl font-black text-white mb-10 border-b border-slate-800 pb-4">
            Kya Banayenge Hum? <span className="text-emerald-400">(4 Heavy SaaS Projects)</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Project 1 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-2">Custom ChatGPT Clone</h3>
              <p className="text-slate-400 text-sm">OpenAI API ka use karke apni khud ki AI chat website banayenge. Isme memory hogi aur aap AI ki personality bhi apne hisab se change kar sakenge.</p>
            </div>
            
            {/* Project 2 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-white mb-2">PDF/Book Chatbot (RAG)</h3>
              <p className="text-slate-400 text-sm">Apni khud ki PDF ya kitaab upload karke uspar AI ko train karna. Phir AI aapke school/college ke notes mein se padh kar direct answers dega!</p>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 transition-colors">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Image Generator</h3>
              <p className="text-slate-400 text-sm">DALL-E ya Stable Diffusion APIs ko integrate karke ek aisi website banayenge jahan user text likhega aur AI uski HD image bana kar dega.</p>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-rose-500/50 transition-colors">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Auto-Blogger SaaS</h3>
              <p className="text-slate-400 text-sm">Ek fully automated content generation tool. User sirf ek topic dalega, aur AI uska poora SEO-friendly blog post aur hashtags likh kar de dega.</p>
            </div>

          </div>
        </motion.div>

        {/* Detailed Syllabus/Curriculum */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-black text-white mb-10 border-b border-slate-800 pb-4">
            In-Depth Syllabus 📚
          </h2>
          <div className="space-y-6">
            {[
              { week: "Week 1", title: "Prompt Engineering Ninja 🗣️", desc: "AI se sahi aur accurate jawab nikalwane ki advanced techniques aur jailbreaks." },
              { week: "Week 2-3", title: "LLMs & APIs (OpenAI/Gemini) 🔌", desc: "Apne Python/React code mein AI models aur APIs ko seamlessly connect karna." },
              { week: "Week 4", title: "LangChain & RAG 🧠", desc: "Apne personal data aur PDFs par AI ko train karna (bina expensive fine-tuning ke)." },
              { week: "Week 5-6", title: "AI SaaS Launch 🚀", desc: "AI ko integrate karke ek poori full-stack web app banana aur use duniya ke liye live karna." }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 bg-slate-900/30 border border-slate-800 p-6 rounded-2xl">
                <div className="shrink-0 pt-1">
                  <span className="text-xs font-mono font-bold text-slate-950 bg-emerald-400 px-3 py-1 rounded-md">
                    {item.week}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-200 mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}