import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { reviews } from "../data/siteData";

export default function Reviews() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">
            Student <span className="text-cyan-300">Reviews</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Real learning, fewer confused faces, better project confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="border border-cyan-400/20 bg-slate-900 rounded-3xl p-6 shadow-sm"
            >
              <div className="flex gap-1 text-cyan-300">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
              </div>

              <p className="text-slate-300 mt-4">{review.text}</p>

              <h4 className="font-bold mt-4 text-white">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
