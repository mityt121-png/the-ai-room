import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Rahul C.",
    role: "School Student",
    text: "Pehle Python ka naam sunke darr lagta tha. Ab apna khud ka Discord bot bana liya hai! Sir ki class ekdum OP hai.",
    avatar: "👦"
  },
  {
    name: "Sneha M.",
    role: "College Fresher",
    text: "Bina boring PPTs ke ML seekhna is the best. The projects actually make sense for real-world interviews.",
    avatar: "👩‍🎓"
  },
  {
    name: "Aman K.",
    role: "AI Enthusiast",
    text: "GenAI prompts ko itne simple tareeqe se samjhaya ki ab main khud ke AI models fine-tune kar raha hoon. 10/10!",
    avatar: "👨‍💻"
  }
];

export default function Reviews() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section id="reviews" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-mono backdrop-blur-md mb-4">
            // STUDENT_TESTIMONIALS.log
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Vouches from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Matrix</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, borderColor: "rgba(34,211,238,0.4)" }}
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl relative group"
            >
              <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-4xl mb-4">{review.avatar}</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="border-t border-slate-800 pt-4">
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-cyan-400 text-xs font-mono mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}