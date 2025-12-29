import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, ArrowUpRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { education, positions } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl  text-gray-900 tracking-tight mb-6">
            Beyond the Code
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            My academic foundation and how I lead communities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* --- LEFT COLUMN: EDUCATION (Takes up 5 columns) --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl  text-gray-900">Education</h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm overflow-hidden group"
              >
                {/* Decorative Watermark Icon */}
                <GraduationCap 
                  className="absolute -right-4 -bottom-4 text-indigo-50 opacity-50 group-hover:scale-110 transition-transform duration-500" 
                  size={120} 
                  strokeWidth={1}
                />

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs  uppercase tracking-wider rounded-full mb-4">
                    {edu.period}
                  </span>
                  <h4 className="text-xl  text-gray-900 mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-indigo-600 font-medium mb-4 flex items-center gap-2">
                    {edu.degree}
                  </p>
                  
                  {/* Optional: Add location or grades if available in your data */}
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Raichur, India
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- RIGHT COLUMN: LEADERSHIP (Takes up 7 columns) --- */}
          <div className="lg:col-span-7 space-y-8">
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <Award size={24} />
              </div>
              <h3 className="text-2xl  text-gray-900">Leadership & Voluntering</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {positions.map((pos, index) => (
                <motion.div
                  key={pos.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between group
                    ${/* Make the first item span full width for visual variety */
                      index === 0 ? 'sm:col-span-2 bg-gradient-to-br from-white to-blue-50/50' : ''
                    }
                  `}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Users size={20} />
                      </div>
                      <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">
                        {pos.period}
                      </span>
                    </div>

                    <h4 className="text-lg  text-gray-900 mb-1">
                      {pos.title}
                    </h4>
                    <p className="text-blue-600 text-sm font-medium mb-3">
                      {pos.organization}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {pos.description}
                    </p>
                  </div>

                  {/* Hover "Read More" Arrow */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} className="text-blue-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;