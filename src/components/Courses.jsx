import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { courses } from "../data/siteData";


export default function Courses() {

  // 🔥 100% SAFE ROUTING (Category ka naam-o-nishan mita diya)
  // Ab yeh seedha Course ke TITLE se page ka pata lagayega
  const getCourseLink = (title) => {
    const lowerTitle = (title || "").toLowerCase();
    
    // Agar title mein 'deep' ya 'ml' hai -> ML page
    if (lowerTitle.includes("ml") || lowerTitle.includes("ml")) {
      return "/course/ml";
    }
    // Agar title mein 'genai' ya 'expert' hai -> GenAI page
    if (lowerTitle.includes("genai") || lowerTitle.includes("expert")) {
      return "/course/genai";
    }
    if (lowerTitle.includes("da") || lowerTitle.includes("expert")) {
      return "/course/da";
    }
    // Varna default Python page
  
  };

  return (
    <section id="courses" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Courses That Make <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Tech Less Scary
            </span>
          </h2>
        </div>

        {/* Course Cards (Bina kisi filter ke seedha Grid) */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              key={course.title}
              whileHover={{ y: -12, borderColor: "rgba(34, 211, 238, 0.4)" }}
              className="relative group flex flex-col justify-between border border-slate-800 bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8"
            >
              <div>
                <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed my-4">
                  {course.desc}
                </p>
              </div>
              
              {/* SEEDHA CONNECTION BINA CONFUSION KE */}
              <Link
                to={getCourseLink(course.title)}
                className="w-full bg-cyan-950/20 text-cyan-300 border border-cyan-400/30 py-3 rounded-2xl font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all text-center block"
              >
                View In-Depth Course 👁️
              </Link>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}