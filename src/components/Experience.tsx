import React from 'react';
import { Briefcase, ExternalLink, Calendar, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* 1. Cool Background Elements (Not Black, but Vibrant) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-100/50 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
         
          <h2 className="text-4xl md:text-5xl  text-gray-900 tracking-tight">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* 2. The Spine (A gradient line instead of plain gray) */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200" />

          <div className="space-y-12">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* --- THE CONNECTOR (The solution to your "floating" problem) --- */}
                  {/* The Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-blue-500 rounded-full z-10 mt-8 shadow-sm"></div>
                  
                  {/* The Arm (Connecting Line) - Visible only on desktop */}
                  <div className={`hidden md:block absolute top-10 h-[2px] bg-blue-100 w-16 -z-0
                    ${isEven ? 'right-1/2 mr-1' : 'left-1/2 ml-1'}
                  `} />

                  {/* --- DATE SECTION --- */}
                  <div className={`flex-1 md:pt-8 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    {/* Desktop Date - Aligned opposite the card */}
                    <div className="hidden md:block">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-100 shadow-sm text-gray-600 font-medium
                        ${isEven ? 'mr-auto' : 'ml-auto'}
                      `}>
                        <Calendar size={16} className="text-blue-500" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* --- CARD SECTION --- */}
                  <div className="flex-1 pl-16 md:pl-0">
                    <div className="relative bg-white p-8 rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1)] hover:border-blue-100 transition-all duration-300 group">
                      
                      {/* Mobile Date (Shows inside card only on mobile) */}
                      <div className="md:hidden flex items-center gap-2 text-sm text-gray-500 mb-4 bg-gray-50 w-fit px-3 py-1 rounded-full">
                        <Calendar size={14} />
                        {exp.period}
                      </div>

                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl  text-gray-900 group-hover:text-blue-600 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-gray-600 font-medium mt-1">
                            {exp.company}
                          </p>
                        </div>
                        {/* Links Top Right */}
                        {exp.links && (
                           <div className="flex gap-2">
                             {Object.entries(exp.links).map(([key, url]) => (
                               <a
                                 key={key}
                                 href={url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="p-2 bg-gray-50 text-gray-500 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
                                 title={key}
                               >
                                 <ExternalLink size={18} />
                               </a>
                             ))}
                           </div>
                        )}
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-3 mb-6">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-600 leading-relaxed">
                            <span className="mr-3 mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack - Bottom of Card */}
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-50">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-blue-50/50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;