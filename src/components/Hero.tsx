import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import profileImg from '../data/image.jpeg';
import Projects from './Projects';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 mt-0">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-xl relative ">
              <img
                src={profileImg}
                alt="Profile"

                className="w-full h-full object-cover scale-150 mt-7"
              />
            </div>
          </div>

          <div className="w-full px-4 text-center"> {/* Container to handle padding on mobile */}

            {/* 1. HEADING: 
      - text-4xl: Default (Mobile) 
      - sm:text-5xl: Small Tablets
      - md:text-7xl: Desktop 
  */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl  text-gray-900 mb-4 transition-all duration-300">
              Hello, I'm {personalInfo.name}
            </h1>

            {/* 2. PARAGRAPH: 
      - Removed the invalid nested <p> tag.
      - text-sm: Default (Mobile)
      - sm:text-base: Small Tablets
      - md:text-lg: Desktop
  */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Full Stack Developer Intern at Soundverse.ai. <br />
              Winner of Luminous Hackathon (2nd/100,000+).<br />
            </p>

          </div>
        <div className='flex justify-center'>
          <img
  src="https://ghchart.rshah.org/krishnafauj"
  alt="GitHub contribution graph"
  style={{ maxWidth: "100%", height: "auto" }}
/>
        </div>




          <Projects />
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a
              href={personalInfo.cvPath}
              download
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl"
            >
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Phone size={20} />
              <span className="hidden sm:inline">{personalInfo.phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className="hidden sm:inline">{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
