import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import Skills from './pages/Skills';
import Project from './pages/Project';
import LeetCodeIcon from './assets/Leetcodeicon';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import HeroSection from './pages/HeroSection';

const App = () => {



  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };



  return (
    <div className="min-h-screen w-screen bg-slate-900 text-white">
      {/* ✅ Navigation */}
      <Navbar />

      {/* ✅ Hero Section */}
     <HeroSection />
    

      {/* ✅ Skills Section */}
      <Skills />
      {/* ✅ Projects Section */}
      <Project></Project>

      {/* ✅ Contact Section */}
      <Contact />
      {/* ✅ Contact Section */}
      <About></About>
      {/* ✅ Footer */}
      <footer className="bg-slate-800 py-6 px-4 text-center text-gray-400 border-t border-slate-700">
        <p>&copy; {new Date().getFullYear()} Krishna Faujdar. All rights reserved.</p>
      </footer>


    </div>
  );
};

export default App;
