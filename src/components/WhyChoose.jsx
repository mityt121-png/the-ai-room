import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChoose() {
  const whyItems = [
    "Beginner-friendly teaching style",
    "Practical projects, not only notebook theory",
    "Small batch personal attention",
    "Online class support",
    "Free demo class available",
    "Career, resume and interview guidance",
  ];

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
            Why Students Like <span className="text-cyan-300">The AI Room?</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Simple explanations, practical coding and enough patience for every
            "sir, one more time please" moment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {whyItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, y: -6 }}
              className="bg-slate-950 border border-cyan-400/20 rounded-3xl p-6 shadow-lg shadow-cyan-500/5"
            >
              <CheckCircle className="text-cyan-300 mb-4" size={28} />
              <h3 className="text-lg font-bold text-white">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
