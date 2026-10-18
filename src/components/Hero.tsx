import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo, experience } from '../data/portfolio';
import profileImg from '../data/image.jpeg';
import Projects from './Projects';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-16 text-center lg:text-left">

            {/* LEFT: Photo + intro */}
            <div className="lg:col-span-3 flex flex-col items-center text-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mb-8 overflow-hidden shadow-xl ring-4 ring-white">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover scale-[1.08] translate-y-[8%]"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-4">
                Hello, I'm {personalInfo.name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
                Full Stack Developer at Rezolve.ai, Kolkata. <br />
                President, Student Council – IIIT Raichur.<br />
                Runner-up, Luminous Hackathon (2nd/100,000+).
              </p>
            </div>

            {/* RIGHT: Compact career timeline */}
            <div className="lg:col-span-2 w-full max-w-md mx-auto text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Journey</p>
              <ol className="relative border-l-2 border-blue-100 ml-2">
                {experience.map((exp, i) => (
                  <li key={exp.id} className="ml-5 mb-4 last:mb-0">
                    <span className={`absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full border-2 border-white ${i === 0 ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-blue-300'}`} />
                    <Link
                      to="/experience"
                      className="block rounded-lg px-3 py-2 -ml-3 hover:bg-white hover:shadow-sm transition-all group"
                    >
                      <p className="text-xs text-gray-400">{exp.period}</p>
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{exp.title}</p>
                      <p className="text-sm text-gray-500">{exp.company}</p>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
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
