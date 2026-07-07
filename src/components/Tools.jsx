import { motion } from "framer-motion";
import { tools } from "../data/siteData";

export default function Tools() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">
            Tools You Will Actually{" "}
            <span className="text-cyan-300">Use</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Industry tools for AI, ML and data work, explained in student
            language first and professional language second.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="bg-slate-950 border border-cyan-400/30 text-cyan-300 px-5 py-3 rounded-full font-semibold shadow-lg shadow-cyan-500/5"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
