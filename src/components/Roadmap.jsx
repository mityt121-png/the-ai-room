import { motion } from "framer-motion";
import { roadmap } from "../data/siteData";

export default function Roadmap() {
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
            From Confused to Confident{" "}
            <span className="text-cyan-300">Roadmap</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            A clear step-by-step path from "what is Python?" to "look, I built
            an AI project."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-5 mt-12">
          {roadmap.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="relative bg-slate-900 border border-cyan-400/20 rounded-3xl p-5"
            >
              <div className="bg-cyan-400 text-slate-950 font-bold w-fit px-3 py-1 rounded-full text-sm">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mt-5 text-white">
                {item.title}
              </h3>
              <p className="text-slate-300 mt-3 text-sm leading-6">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
