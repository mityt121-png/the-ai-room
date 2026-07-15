import { Brain, Video, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 inline-block px-4 py-2 rounded-full shadow-sm mb-5">
            AI • Machine Learning • GenAI • Data Science
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your Career in{" "}
            <span className="text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]">
              AI, ML & Data Science
            </span>
          </h1>

          <p className="text-slate-300 text-lg mt-6 leading-8">
            At The AI Room, I help students learn Python, AI/ML, GenAI, Data
            Analysis, Data Science and Computer Vision with practical projects,
            real examples and career-focused guidance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-xl hover:bg-cyan-300 transition text-center"
            >
              Connect With Me
            </a>

            <a
              href="#courses"
              className="border border-cyan-400/50 text-cyan-300 px-6 py-3 rounded-xl hover:bg-cyan-400/10 transition text-center"
            >
              View Courses
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-slate-900/80 border border-cyan-400/20 rounded-3xl shadow-2xl shadow-cyan-500/10 p-8"
        >
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-3xl p-8">
            <Brain size={50} />
            <h2 className="text-3xl font-bold mt-5">
              AI Skills for Future Jobs
            </h2>
            <p className="text-cyan-50 mt-3">
              Learn practical AI tools, coding, ML models and real-world
              projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="bg-slate-800 border border-cyan-400/20 p-5 rounded-2xl">
              <Video className="text-cyan-300" />
              <h3 className="font-bold mt-3 text-white">Online Class</h3>
              <p className="text-sm text-slate-300">Learn from anywhere</p>
            </div>

            <div className="bg-slate-800 border border-cyan-400/20 p-5 rounded-2xl">
              <Users className="text-cyan-300" />
              <h3 className="font-bold mt-3 text-white">Small Batch</h3>
              <p className="text-sm text-slate-300">Better attention</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}