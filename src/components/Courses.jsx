import { motion } from "framer-motion";
import { courses } from "../data/siteData";

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">
            Courses for{" "}
            <span className="text-cyan-300">Future Tech Careers</span>
          </h2>
          <p className="text-slate-300 mt-3">
            Students can choose course according to their level and career goal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, y: -8 }}
                className="border border-cyan-400/20 bg-slate-900 rounded-3xl p-6 shadow-sm hover:shadow-cyan-500/20 hover:shadow-xl transition"
              >
                <Icon className="text-cyan-300" />
                <h3 className="text-xl font-bold mt-4 text-white">
                  {course.title}
                </h3>
                <p className="text-slate-300 mt-3">{course.desc}</p>
                <a
                  href="#contact"
                  className="block text-center border border-cyan-400/50 text-cyan-300 rounded-xl py-3 mt-6 hover:bg-cyan-400/10 transition"
                >
                  Ask Details
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}