import { Link } from 'react-router-dom'; // CHANGED: React Router
import { ExternalLink, Github, Star, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="mt-20 bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
             Click on any project to see the detailed architectural flow and case study.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 group/list">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 relative group/card flex flex-col h-full"
            >
              
              {/* Featured Star */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 drop-shadow-md">
                  <div className="bg-white/90 p-1.5 rounded-full backdrop-blur-sm">
                    <Star className="text-yellow-400 fill-yellow-400" size={20} />
                  </div>
                </div>
              )}

              {/* IMAGE SECTION */}
              <div className="relative h-56 group/image overflow-hidden bg-gray-100">
                <img 
                  src={typeof project.image === 'string' ? project.image : project.image.src} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/card:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm p-4">
                  <div className="flex gap-3 w-full justify-center">
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-all hover:scale-105">
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-bold hover:bg-gray-100 transition-all hover:scale-105">
                        <Github size={16} /> Code
                      </a>
                    )}
                  </div>
                  
                  {/* CHANGED: Link 'to' instead of 'href' */}
                  
                </div>
              </div>

              {/* CONTENT SECTION (Clickable) */}
              <Link to={`/project/${project.id}`} className="p-6 flex flex-col flex-grow group/text cursor-pointer">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover/text:text-purple-700 transition-colors">
                        {project.title}
                    </h3>
                    <ArrowRight className="text-gray-300 group-hover/text:text-purple-600 transform group-hover/text:translate-x-1 transition-all" size={20} />
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-semibold border border-blue-100">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-semibold border border-gray-200">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;