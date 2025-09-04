import React from 'react'

function Home() {
  return (
    <div>
        {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
              {typedText}
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I craft beautiful, functional digital experiences that solve real-world problems. 
              Passionate about creating scalable applications with cutting-edge technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-blue-500 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-blue-500 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-blue-500 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
