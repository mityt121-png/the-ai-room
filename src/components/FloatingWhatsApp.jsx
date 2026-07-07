import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/9198277664243?text=Hello%20sir,%20I%20want%20to%20book%20a%20free%20demo%20for%20The%20AI%20Room"
      target="_blank"
      rel="noopener noreferrer"
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-[9999]"
    >
      <FaWhatsapp size={34} />
    </motion.a>
  );
}
