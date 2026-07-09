import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CourseML() {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        {/* Back Button */}
        <motion.div variants={itemVariants} className="pt-8 pb-4">
          <Link to="/courses" className="inline-flex items-center text-slate-400 hover:text-purple-400 transition-colors font-mono text-sm border border-slate-800 hover:border-purple-500/50 px-4 py-2 rounded-lg bg-slate-900/50">
            <span className="mr-2">←</span> cd ../courses
          </Link>
        </motion.div>

        {/* Hero Section (No Video, Clean Centered Text) */}
        <motion.div variants={itemVariants} className="max-w-3xl mt-8 mb-20">
          <span className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono font-bold mb-6">
            // DATA TO PREDICTIONS
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Deep Learning <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
              Don Masterclass
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Neural networks ka raaz aur Machine Learning ko practical tareeqe se samjho. Maths se darr lagna band! Hum AI models ko itna simple kar denge ki aap khud aage ka future predict kar sakenge.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105">
              Enroll Now 🚀
            </Link>
            <div className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900 text-white font-bold flex items-center gap-2">
              ⏳ Duration: 8 Weeks
            </div>
          </div>
        </motion.div>

        {/* Deep Project Details Section (4 Heavy Projects) */}
        <motion.div variants={itemVariants} className="mb-24">
          <h2 className="text-3xl font-black text-white mb-10 border-b border-slate-800 pb-4">
            Kya Banayenge Hum? <span className="text-purple-400">(4 Heavy Projects)</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Project 1 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-white mb-2">Computer Vision Scanner</h3>
              <p className="text-slate-400 text-sm">Laptop camera ke through objects detect karna. Hum ek aisa AI model banayenge jo real-time image dekh kar bata dega ki usme kya hai (jaise face ya objects).</p>
            </div>
            
            {/* Project 2 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 transition-colors">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Stock Price Predictor</h3>
              <p className="text-slate-400 text-sm">Real-world data ko saaf karke uspar ML regression lagana. Hum pichle saalo ka data use karke aage ki prices predict karne wala engine banayenge.</p>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-rose-500/50 transition-colors">
              <div className="text-4xl mb-4">🤬</div>
              <h3 className="text-xl font-bold text-white mb-2">Toxic Comment Filter (NLP)</h3>
              <p className="text-slate-400 text-sm">Natural Language Processing (NLP) ka use karke ek aisi AI banayenge jo text padh kar bata degi ki comment positive hai, negative hai ya gaali (toxic) hai.</p>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-bold text-white mb-2">Fake News Detector</h3>
              <p className="text-slate-400 text-sm">Classification algorithms ka use karke ek fact-checking AI model. Ye news ka title aur text padh kar percentage me batayega ki khabar asli hai ya nakli.</p>
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
              { week: "Week 1-2", title: "Data ki Safai (Pandas & Numpy) 🧹", desc: "Kachra data ko saaf karna aur model ke liye ready karna." },
              { week: "Week 3-4", title: "ML Algorithms (Scikit-Learn) 📈", desc: "Regression, Classification aur Clustering bina heavy maths ke." },
              { week: "Week 5-6", title: "Neural Networks ka Jaadu 🧠", desc: "Deep Learning, TensorFlow aur PyTorch se pehla neural network banana." },
              { week: "Week 7-8", title: "Computer Vision & NLP 👁️", desc: "Image recognition aur text analysis wale real-world projects ko train aur test karna." }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 bg-slate-900/30 border border-slate-800 p-6 rounded-2xl">
                <div className="shrink-0 pt-1">
                  <span className="text-xs font-mono font-bold text-slate-950 bg-purple-400 px-3 py-1 rounded-md">
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