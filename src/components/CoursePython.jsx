import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CoursePython() {
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
      {/* Background Glowing Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-cyan-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* Back Button */}
        <motion.div variants={itemVariants} className="pt-8 pb-4">
          <Link to="/courses" className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors font-mono text-sm border border-slate-800 hover:border-cyan-500/50 px-4 py-2 rounded-lg bg-slate-900/50">
            <span className="mr-2">←</span> cd ../courses
          </Link>
        </motion.div>

        {/* Hero Section (No Video, Clean Centered Text) */}
        <motion.div variants={itemVariants} className="max-w-3xl mt-8 mb-20">
          <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold mb-6">
            // NOOB TO PRO SERIES
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Python Pro <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Basics Masterclass
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            School aur college ki boring text-book wali coding se azaadi! Hum Python aise seekhenge jaise hackers seekhte hain. Boring theory nahi, seedha action aur dher saare projects.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-105">
              Enroll Now 🚀
            </Link>
            <div className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900 text-white font-bold flex items-center gap-2">
              ⏳ Duration: 5 Weeks
            </div>
          </div>
        </motion.div>

        {/* Deep Project Details Section (Now 4 Projects instead of 2) */}
        <motion.div variants={itemVariants} className="mb-24">
          <h2 className="text-3xl font-black text-white mb-10 border-b border-slate-800 pb-4">
            Kya Banayenge Hum? <span className="text-cyan-400">(4 Heavy Projects)</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Project 1 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 transition-colors">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">Discord Server Bot</h3>
              <p className="text-slate-400 text-sm">Apna khud ka Python bot banakar apne doston ke Discord server par deploy karna seekhein. Commands, jokes aur auto-replies sab kuch khud code karenge.</p>
            </div>
            
            {/* Project 2 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors">
              <div className="text-4xl mb-4">👾</div>
              <h3 className="text-xl font-bold text-white mb-2">Terminal RPG Game</h3>
              <p className="text-slate-400 text-sm">If-Else aur Loops ka use karke ek text-based game banayenge jahan player choices lega aur enemy ko defeat karega. Logic building on steroids!</p>
            </div>

            {/* Project 3 (NEW) */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-rose-500/50 transition-colors">
              <div className="text-4xl mb-4">🕷️</div>
              <h3 className="text-xl font-bold text-white mb-2">Automated Web Scraper</h3>
              <p className="text-slate-400 text-sm">Internet se data churana (legal wala!). Ek aisi script jo automatic websites par jayegi aur aapke liye news, prices ya data nikal kar Excel mein save karegi.</p>
            </div>

            {/* Project 4 (NEW) */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors">
              <div className="text-4xl mb-4">🌤️</div>
              <h3 className="text-xl font-bold text-white mb-2">Real-time Weather AI</h3>
              <p className="text-slate-400 text-sm">APIs ka use karna seekhein. Ek aisa program jisme aap duniya ke kisi bhi sheher ka naam daalenge aur woh wahan ka live mausam aur time nikal kar dega.</p>
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
              { week: "Week 1", title: "Syntax ka Postmortem 🔪", desc: "Python install karna, Variables, Data Types, aur basic Loops. Sab kuch ekdum layman terms mein." },
              { week: "Week 2", title: "Logic Building Engine 🧠", desc: "If-Else, Functions, aur Error handling. Hum banayenge apna pehla text-based terminal game." },
              { week: "Week 3", title: "Data Manipulation Matrix 📊", desc: "Lists, Dictionaries, aur Tuples. Asli data ke sath khelna aur usko manipulate karna seekhenge." },
              { week: "Week 4", title: "Web Automation & APIs 🌐", desc: "Internet se data nikalna (Web Scraping) aur APIs ka use karke real-time weather ya jokes mangwana." },
              { week: "Week 5", title: "Final Boss: Discord Bot 🤖", desc: "Code ko structure karna aur final bot banakar server par live karna." }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 bg-slate-900/30 border border-slate-800 p-6 rounded-2xl">
                <div className="shrink-0 pt-1">
                  <span className="text-xs font-mono font-bold text-slate-950 bg-cyan-400 px-3 py-1 rounded-md">
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