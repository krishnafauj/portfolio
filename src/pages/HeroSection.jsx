import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import React, { useState } from 'react'
import LeetCodeIcon from '../assets/Leetcodeicon';

function HeroSection() {
    const [typedText, setTypedText] = useState('');

    const fullText = "Full Stack Developer , Devops Engineer";
  return (
    <div>
       <section id="home" className=" h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Hi, I'm Krishna Faujdar👋</h1>
          <h2 className="text-2xl md:text-4xl text-blue-400 h-12 mb-6">{typedText}</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-8">
            Passionate about building modern web applications, crafting clean UI/UX, and solving real-world problems with code.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/krishnafauj" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>

            <a href="https://www.linkedin.com/in/krishna-faujdar-0a2204279/" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>

            <a href="mailto:krishnafauj@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>

            <a href="http://leetcode.com/krishnafauj" className="hover:text-blue-400 transition-colors">
              <LeetCodeIcon />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center mx-auto"
          >
            View My Work <ChevronDown className="ml-2" />
          </button>
        </div>

      </section>
    </div>
  )
}

export default HeroSection
