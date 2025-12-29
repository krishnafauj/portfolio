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

          <h1 className="text-5xl md:text-7xl  text-gray-900 mb-4">
            Hello, I'm {personalInfo.name}
          </h1>

          {/* <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-3">
            {personalInfo.title}
          </p>

          <p className="text-lg text-gray-600 mb-8">
            {personalInfo.subtitle}
          </p> */}

          <p className="text-lg text-gray-700 max-w-3xl mt-2 mx-auto mb-12 leading-relaxed">
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Full Stack Developer Intern at Soundverse.ai. <br/>
              Winner of Luminous Hackathon (2nd/100,000+).<br/> 
    Specializing in building scalable web applications withreal-time systems.
  </p>
          </p>
          

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
