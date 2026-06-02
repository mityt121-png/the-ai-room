import { Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/siteData";

export default function Projects() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">
            Projects Students <span className="text-cyan-300">Will Build</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Practical projects help students understand real-world use cases and
            build a strong portfolio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, y: -8 }}
              className="bg-slate-900 border border-cyan-400/20 rounded-3xl p-6 shadow-sm hover:shadow-cyan-500/20 hover:shadow-xl transition"
            >
              <Cpu className="text-cyan-300 mb-4" size={30} />
              <h3 className="text-xl font-bold text-white">{project}</h3>
              <p className="text-slate-300 mt-3">
                A practical mini project to improve coding, logic and AI/ML
                understanding.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}