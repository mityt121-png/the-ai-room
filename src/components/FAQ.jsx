import { motion } from "framer-motion";
import { faqs } from "../data/siteData";

export default function FAQ() {
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
            Questions Students Ask Before{" "}
            <span className="text-cyan-300">Joining</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Quick answers before you message "sir, doubt hai" on WhatsApp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-950 border border-cyan-400/20 rounded-3xl p-6"
            >
              <h3 className="text-xl font-bold text-cyan-300">
                {faq.question}
              </h3>
              <p className="text-slate-300 mt-3 leading-7">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
