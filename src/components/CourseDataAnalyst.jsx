import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CourseDataAnalyst() {
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
      {/* Background Glowing Effects (Amber/Rose Theme for Data) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-amber-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* Back Button */}
        <motion.div variants={itemVariants} className="pt-8 pb-4">
          <Link to="/courses" className="inline-flex items-center text-slate-400 hover:text-amber-400 transition-colors font-mono text-sm border border-slate-800 hover:border-amber-500/50 px-4 py-2 rounded-lg bg-slate-900/50">
            <span className="mr-2">←</span> cd ../courses
          </Link>
        </motion.div>

        {/* Hero Section (No Video, Clean Centered Text) */}
        <motion.div variants={itemVariants} className="max-w-3xl mt-8 mb-20">
          <span className="inline-block px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono font-bold mb-6">
            // RAW DATA TO DECISIONS
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Data Analyst <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500">
              Pro Masterclass
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Boring Excel sheets se azaadi! Real-world data ko clean karna, SQL se database queries nikalna, aur Tableau/PowerBI se aisi interactive reports banana seekho jo companies ko decisions lene mein madad karein.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105">
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
            Kya Banayenge Hum? <span className="text-amber-400">(4 Heavy Data Projects)</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Project 1 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Zomato Sales Dashboard</h3>
              <p className="text-slate-400 text-sm">Zomato/Swiggy ke real dataset ko clean karke PowerBI ya Tableau mein ek interactive dashboard banayenge, jisme revenue, top cities aur customer trends dikhenge.</p>
            </div>
            
            {/* Project 2 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-xl font-bold text-white mb-2">SQL Business Analyzer</h3>
              <p className="text-slate-400 text-sm">Ek dummy E-commerce company ka database banayenge. Complex SQL queries (JOINs, Subqueries) likhkar profit margins aur loss-making products nikalenge.</p>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-rose-500/50 transition-colors">
              <div className="text-4xl mb-4">🐍</div>
              <h3 className="text-xl font-bold text-white mb-2">Python EDA Script</h3>
              <p className="text-slate-400 text-sm">Pandas aur Matplotlib ka use karke ek Python script likhenge jo hazaron rows ke kachre (dirty) data ko automatically clean karegi aur missing values theek karegi.</p>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">Automated Excel Reporter</h3>
              <p className="text-slate-400 text-sm">Python aur Excel ko jodna. Ek aisi script jo har hafte apne aap data read karegi, charts banayegi aur boss ko PDF report mail kar degi!</p>
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
              { week: "Week 1", title: "Excel on Steroids 🟢", desc: "Advanced Excel, Pivot tables, VLOOKUP aur data cleaning ke wo raaz jo companies use karti hain." },
              { week: "Week 2", title: "SQL Mastery (Databases se Baatcheet) 🗄️", desc: "SQL databases setup karna, tables banana, aur complex JOINs laga kar asli insight nikalna." },
              { week: "Week 3-4", title: "Python for Data Analytics 🐼", desc: "Pandas aur Numpy ka use karke gigabytes data ko seconds mein process aur analyze karna." },
              { week: "Week 5", title: "Data Storytelling & Visualization 📈", desc: "PowerBI aur Tableau ka use karke boring numbers ko khubsurat charts aur dashboards mein badalna." },
              { week: "Week 6", title: "Final Capstone Project 🚀", desc: "Apne resume ke liye ek full-fledged business dashboard banakar portfolio live karna." }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 bg-slate-900/30 border border-slate-800 p-6 rounded-2xl">
                <div className="shrink-0 pt-1">
                  <span className="text-xs font-mono font-bold text-slate-950 bg-amber-400 px-3 py-1 rounded-md">
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