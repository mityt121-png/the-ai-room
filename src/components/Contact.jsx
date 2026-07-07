import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        course: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();

        const whatsappMessage = `Hello sir, I want to join The AI Room coaching.

Name: ${formData.name}
Mobile: ${formData.mobile}
Course: ${formData.course}
Message: ${formData.message}`;

        const whatsappURL = `https://wa.me/9198277664243?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white"
        >
            <div className="max-w-4xl mx-auto px-5">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <p className="text-cyan-300 font-semibold tracking-wide">FREE DEMO</p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Book a Demo Before Your Brain Says "Later"
                    </h2>

                    <p className="text-slate-300 mt-4 max-w-2xl mx-auto leading-7">
                        Fill the form and your enquiry will open directly on WhatsApp.
                        Fast, simple and assignment-deadline friendly.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 border border-cyan-400/20 rounded-3xl p-6 md:p-10 shadow-2xl shadow-cyan-500/10"
                >
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="bg-slate-950 border border-cyan-400/20 rounded-2xl p-5 text-center">
                            <Phone className="text-cyan-300 mx-auto mb-3" />
                            <p className="text-sm text-slate-400">Phone</p>
                            <p className="font-bold mt-1">+91 9827664243</p>
                        </div>

                        <div className="bg-slate-950 border border-cyan-400/20 rounded-2xl p-5 text-center">
                            <Mail className="text-cyan-300 mx-auto mb-3" />
                            <p className="text-sm text-slate-400">Email</p>
                            <p className="font-bold mt-1 break-all">mityt121@gmail.com</p>
                        </div>
                    </div>

                    <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full bg-slate-950 border border-slate-700 text-white px-4 py-4 rounded-xl placeholder:text-slate-500 outline-none focus:border-cyan-300"
                            placeholder="Student name"
                            required
                        />

                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="block w-full bg-slate-950 border border-slate-700 text-white px-4 py-4 rounded-xl placeholder:text-slate-500 outline-none focus:border-cyan-300"
                            placeholder="Mobile number"
                            required
                        />

                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="block w-full bg-slate-950 border border-slate-700 text-white px-4 py-4 rounded-xl outline-none focus:border-cyan-300"
                            required
                        >
                            <option value="">Select course</option>
                            <option value="Python Programming">Python Programming</option>
                            <option value="AI / Machine Learning">AI / Machine Learning</option>
                            <option value="GenAI">GenAI</option>
                            <option value="Data Analysis">Data Analysis</option>
                            <option value="Data Scientist">Data Scientist</option>
                            <option value="Computer Vision">Computer Vision</option>
                            <option value="Math & Communication Skills">
                                Math & Communication Skills
                            </option>
                        </select>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full bg-slate-950 border border-slate-700 text-white px-4 py-4 rounded-xl placeholder:text-slate-500 outline-none focus:border-cyan-300 min-h-32 resize-none"
                            placeholder="Message, doubt or current coding fear"
                        ></textarea>

                        <motion.button
                            type="submit"
                            whileHover={{
                                scale: 1.05,
                                y: -4,
                                boxShadow: "0px 0px 35px rgba(34, 197, 94, 0.8)",
                            }}
                            whileTap={{ scale: 0.94 }}
                            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-2xl font-bold text-lg border border-green-300/40 shadow-lg shadow-green-500/30"
                        >
                            <FaWhatsapp size={28} />
                            <span>Send Enquiry on WhatsApp</span>
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
