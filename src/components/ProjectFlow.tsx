import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, Cpu, CheckCircle, Server, Globe, X } from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectDetail = () => {
  const { id } = useParams();
 const project = projects.find(
  (p) => p.id === Number(id)
);
  
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  // Helper to handle closing modal
  const closeImageModal = () => setSelectedImage(null);

  return (
    <main className="min-h-screen bg-white">
      

      {/* --- HERO SECTION --- */}
      <div className="bg-gray-50 border-b border-gray-200 pb-12 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-purple-600 mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {project.technologies && project.technologies[0] && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs  uppercase tracking-wide">
                    {project.technologies[0]}
                  </span>
                )}
                {project.period && (
                  <span className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" /> {project.period}
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl  text-gray-900 mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.links?.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg  hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                    <ExternalLink size={20} /> Launch Live Demo
                  </a>
                )}
                {project.links?.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg  hover:bg-gray-50 transition-all">
                    <Github size={20} /> View Source Code
                  </a>
                )}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-all duration-500">
              <img
                src={typeof project.image === 'string' ? project.image : project.image?.src || ''}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- ARCHITECTURE FLOW SECTION --- */}
      {project.flow && project.flow.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          
          {/* Header Part */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="text-center">
              <h2 className="text-4xl font-medium text-gray-900 mb-4 tracking-tight">
                System Architecture Flow
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
                A visual journey through our application's architecture and user experience flow
              </p>
            </div>
          </div>

          {/* Flow Diagram Part */}
          <div className="w-full px-0 relative">
              <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
              </div>

              <div className="relative flex flex-col items-center justify-center min-h-[400px] pb-10">
                <svg className="hidden lg:block absolute top-1/2 left-0 w-full h-64 -translate-y-1/2 -z-10" fill="none">
                  <path 
                    d="M 0% 50% C 15% 45%, 25% 40%, 35% 48% C 45% 56%, 55% 52%, 65% 48% C 75% 44%, 85% 52%, 100% 50%"
                    stroke="url(#gradient)" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" fill="none" className="opacity-50"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#EC4899" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-start w-full">
                  {project.flow.map((stage, index) => {
                    
                    // Helper to extract image URL with safety check
                    const imgSrc = typeof stage.image === 'string' 
                      ? stage.image 
                      : (stage.image?.src || '');

                    let positionClass = "";
                    if (index === 0) positionClass = "lg:self-end lg:translate-y-20"; 
                    else if (index === 1) positionClass = "lg:self-center lg:-translate-y-10";
                    else if (index === 2) positionClass = "lg:self-end lg:translate-y-20";
                    else if (index === 3) positionClass = "lg:self-center lg:-translate-y-10";
                    else if (index === 4) positionClass = "lg:self-end lg:translate-y-20";

                    return (
                      <div 
                        key={index}
                        className={`flex flex-col items-center transition-all duration-500 hover:z-10 group ${positionClass}`}
                        style={{ flex: '0 0 auto' }} 
                      >
                        <div className="relative mb-4">
                          <div className="absolute inset-0 bg-purple-200 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                          <div className="relative h-8 w-8 flex items-center justify-center bg-white rounded-full shadow-md border-2 border-white text-sm font-medium text-purple-600 group-hover:scale-110 transition-transform">
                            {stage.step}
                          </div>
                        </div>

                        <div className={`
                          relative w-56 transform transition-all duration-500 
                          group-hover:scale-105 group-hover:-translate-y-2
                          bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100
                          ${index === 0 || index === 4 ? 'lg:shadow-xl' : ''}
                        `}>
                          <div 
                              className="aspect-[4/3] overflow-hidden bg-gray-50 relative cursor-pointer"
                              onClick={() => setSelectedImage(imgSrc)}
                          >
                            {imgSrc && (
                              <img 
                                src={imgSrc}
                                alt={stage.title || 'Flow stage'}
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                              />
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                               <ExternalLink className="text-white drop-shadow-md" size={24} />
                            </div>

                             <div className="absolute top-2 right-2 pointer-events-none">
                               {stage.badge && (
                                 <span className="font-medium text-[10px] bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-purple-600 shadow-sm flex items-center gap-1 tracking-wide">
                                   {index === 0 && <Globe size={10} />}
                                   {index === 1 && <Layers size={10} />}
                                   {index === 2 && <Server size={10} />}
                                   {index === 3 && <Cpu size={10} />}
                                   {index === 4 && <CheckCircle size={10} />}
                                   {stage.badge}
                                 </span>
                               )}
                             </div>
                          </div>

                          <div className="p-6 bg-white min-h-[200px] flex flex-col">
                            <h3 className="font-medium text-gray-800 text-lg mb-3 tracking-wide leading-snug">
                              {stage.title || 'Untitled Stage'}
                            </h3>
                            <p className="text-gray-500 text-sm font-light leading-relaxed">
                              {stage.desc || ''}
                            </p>
                          </div>
                          <div className="h-0.5 w-full bg-purple-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-50"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                </div>
          </div>
        </section>
      )}

      {/* --- HIGHLIGHTS SECTION --- */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-2xl  text-gray-900 mb-8 text-center">Key Technical Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="mt-1 bg-green-100 p-2 rounded-full text-green-600">
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-gray-700 font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- IMAGE MODAL / DIALOG --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300"
          onClick={closeImageModal}
        >
          {/* Close Button */}
          <button 
            onClick={closeImageModal}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-10"
            aria-label="Close modal"
          >
            <X size={32} />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl max-h-[90vh] w-auto h-auto rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 scale-95 hover:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Full view" 
              className="w-full h-full object-contain max-h-[90vh]" 
            />
          </div>
        </div>
      )}

    </main>
  );
};

export default ProjectDetail;