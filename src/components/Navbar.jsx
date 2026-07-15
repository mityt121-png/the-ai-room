import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Courses", link: "#courses" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="bg-slate-950/90 backdrop-blur border-b border-cyan-400/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-bold text-xl text-cyan-300">
          <GraduationCap />
          <span>The AI Room</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-medium text-slate-300">
          {navLinks.map((item) => (
            <a key={item.name} href={item.link} className="hover:text-cyan-300">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block bg-cyan-400 text-slate-950 px-5 py-2 rounded-xl font-semibold hover:bg-cyan-300 transition"
        >
          Book Demo
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-cyan-400/20 px-5 py-5">
          <nav className="flex flex-col gap-4 text-slate-300 font-medium">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-300"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-cyan-400 text-slate-950 px-5 py-3 rounded-xl font-semibold text-center hover:bg-cyan-300 transition"
            >
              Book Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}