import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="mt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title (Added a title for context) */}
        <div className="text-center mb-16">
           <h2 className="text-3xl  text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* 1. THE SPOTLIGHT EFFECT CONTAINER
           We add 'group/list' to the parent grid. 
           When this entire grid is hovered, we will tell the children to shrink.
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 group/list">
          {projects.map((project) => (
            <div
              key={project.id}
              // 2. CARD STYLING & INTERACTION
              // - transition-all duration-500: Smooth movements.
              // - group-hover/list:scale-[0.85] group-hover/list:opacity-50: When the parent grid is hovered, shrink THIS card and fade it out.
              // - hover:!scale-105 hover:!opacity-100: BUT, if THIS specific card is hovered, override (!) the shrinking and make it bigger and fully visible.
              className=" rounded-2xl overflow-hidden  transition-all duration-500 border relative "
            >
              
              {/* Featured Star - Kept outside the image group so it's always visible */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 drop-shadow-lg">
                  <Star className="text-yellow-400 fill-yellow-400" size={24} />
                </div>
              )}

              {/* 3. IMAGE AND OVERLAY SECTION 
                 We define a new group 'group/image' here to trigger the overlay.
              */}
              <div className="relative h-56 group/image overflow-hidden bg-gray-200">
                 {/* The Project Image */}
                 <img 
                   src={project.image} 
                   alt={project.title}
                   className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                 />

                 {/* THE LINK OVERLAY 
                    - absolute inset-0: Covers the image area entirely.
                    - bg-black/70: Dark semi-transparent background.
                    - opacity-0: Hidden by default.
                    - group-hover/image:opacity-100: Shows when holding over the image container.
                 */}
                 <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        // Styling the buttons inside the overlay
                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors transform hover:-translate-y-1"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                         // Styling the buttons inside the overlay
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors transform hover:-translate-y-1"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}
                 </div>
              </div>

              {/* 4. CONTENT SECTION (Below the image) */}
              <div className="p-6">
                 {/* Removed the icon header, just using title now for cleaner look with image */}
                <h3 className="text-xl  text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{project.description}</p>
                
                {/* Technologies Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs "
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs ">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                 {/* Simplified Highlights (Optional - uncomment if you still want them, but it gets crowded) */}
                {/* <ul className="space-y-2 border-t pt-4 border-gray-100">
                  {project.highlights.slice(0,2).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-blue-500 mt-0.5 text-xs">●</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul> 
                */}

              </div>
              {/* Removed the old links section from the bottom */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;