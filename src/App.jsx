import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Sabhi components import kar rahe hain
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoursePython from './components/CoursePython'; // Yeh import hona chahiye
// Upar imports ke section mein yeh add karein:
import CourseML from './components/CourseML';
import CourseGenAI from './components/CourseGenAI';
import CourseDataAnalyst from  './components/CourseDataAnalyst';



export default function App() {
  return (
    <Router>
      <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col">

        {/* Navbar har page par upar dikhega */}
        <Navbar />

        {/* Main content area jahan pages change honge */}
        <main className="flex-grow pt-20"> {/* pt-20 navbar ke space ke liye */}
          <Routes>
            {/* Jab URL '/' hoga, toh Hero (Home) dikhega */}
            <Route path="/" element={<Hero />} />

            {/* Alag-alag URLs ke liye alag pages */}
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course/ml" element={<CourseML />} />
            <Route path="/course/python" element={<CoursePython />} />
            <Route path="/course/genai" element={<CourseGenAI />} />
            <Route path="/course/da" element={<CourseDataAnalyst />} />


            {/* In-depth pages hum yahan add karenge (Example) */}
            {/* <Route path="/course/python" element={<PythonInDepth />} /> */}
          </Routes>
        </main>

        {/* Footer har page par niche dikhega */}
        <Footer />

      </div>
    </Router>
  );
}