import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { features } from "../data/siteData";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">
            About <span className="text-cyan-300">Me</span>
          </h2>

          <p className="text-slate-300 mt-5 leading-8">
            Hi, I am Mitesh Rengar, founder of The AI Room. I have 3 years of
            experience in AI/ML and teaching. I have worked in Machine Learning,
            Data Science and AI-related projects, and I also teach students in a
            simple, practical and beginner-friendly way.
          </p>

          <p className="text-slate-300 mt-4 leading-8">
            My goal is to help students move from basic coding to job-level
            skills through real examples, assignments, projects and career
            guidance.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {features.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-slate-950 border border-cyan-400/20 rounded-2xl p-4 flex gap-3 items-center"
              >
                <CheckCircle className="text-cyan-300" />
                <span className="text-slate-200">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-slate-950 border border-cyan-400/20 rounded-3xl shadow-xl shadow-cyan-500/10 p-8"
        >
          <h3 className="text-2xl font-bold text-cyan-300">Class Details</h3>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between border-b border-cyan-400/20 pb-3">
              <span className="text-slate-300">Mode</span>
              <b>Online + Offline</b>
            </div>

            <div className="flex justify-between border-b border-cyan-400/20 pb-3">
              <span className="text-slate-300">Location</span>
              <b>Ratlam, MP</b>
            </div>

            <div className="flex justify-between border-b border-cyan-400/20 pb-3">
              <span className="text-slate-300">Language</span>
              <b>Hindi + English</b>
            </div>

            <div className="flex justify-between border-b border-cyan-400/20 pb-3">
              <span className="text-slate-300">Batch</span>
              <b>Small Batch</b>
            </div>

            <div className="flex justify-between border-b border-cyan-400/20 pb-3">
              <span className="text-slate-300">Fees</span>
              <b>Contact for fees</b>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-300">Demo</span>
              <b>Free demo available</b>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}