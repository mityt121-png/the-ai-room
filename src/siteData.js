import { FaPython, FaBrain, FaRobot } from 'react-icons/fa';

export const courses = [
  {
    title: "Python Pro Basics",
    desc: "Boring theory nahi, seedha action. Python seekho games aur bots banate hue.",
    category: "Python",
    icon: FaPython,
    modalDesc: "Variables se lekar Discord bots banane tak ka poora safar.",
    stats: [
      { label: "Duration", value: "5 Weeks" },
      { label: "Level", value: "Absolute Beginner" },
      { label: "Projects", value: "3 Real Apps" }
    ],
    curriculum: [
      { week: "Week 1", title: "Syntax ka Postmortem 🔪", desc: "Python install karna, Variables, aur Loops." },
      { week: "Week 2", title: "Final Boss: Discord Bot 🤖", desc: "Apna khud ka Python bot banana." }
    ]
  },
  {
    title: "Deep Learning Don",
    desc: "Neural networks ka raaz aur Machine Learning ko practical tareeqe se samjho.",
    category: "Ml",
    icon: FaBrain,
    modalDesc: "Maths se darr lagna band! Machine Learning aur Deep Learning simple bhasha mein.",
    stats: [
      { label: "Duration", value: "8 Weeks" },
      { label: "Level", value: "Intermediate" },
      { label: "Projects", value: "5+ Real Models" }
    ],
    curriculum: [
      { week: "Week 1", title: "Data ki Safai 🧹", desc: "Pandas aur Numpy se data saaf karna." },
      { week: "Week 2", title: "Neural Networks 🧠", desc: "TensorFlow aur PyTorch basics." }
    ]
  },
  {
    title: "GenAI Expert",
    desc: "Prompt engineering, LLMs, aur ChatGPT/Gemini ki powers ko code karna.",
    category: "GenAI",
    icon: FaRobot,
    modalDesc: "ChatGPT aur Gemini ke API ko apne code mein lagana seekhein.",
    stats: [
      { label: "Duration", value: "6 Weeks" },
      { label: "Level", value: "Advanced" },
      { label: "Projects", value: "Custom AI Bots" }
    ],
    curriculum: [
      { week: "Week 1", title: "Prompt Engineering Pro 🗣️", desc: "AI se sahi jawab nikalwana." },
      { week: "Week 2", title: "LLMs & APIs 🔌", desc: "Apne code mein ChatGPT API lagana." }
    ]
  }
];