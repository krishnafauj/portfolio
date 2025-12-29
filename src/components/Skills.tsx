import React from 'react';
import { Code, Database, Wrench, Layers, Terminal, Cpu, Globe, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
  const skillCategories = [
    { 
      title: 'Languages', 
      items: skills.languages, 
      icon: Code, 
      watermark: Terminal,
      color: 'indigo' 
    },
    { 
      title: 'Frameworks', 
      items: skills.frameworks, 
      icon: Layers, 
      watermark: Globe,
      color: 'blue' 
    },
    { 
      title: 'Databases', 
      items: skills.databases, 
      icon: Database, 
      watermark: Server,
      color: 'violet' 
    },
    { 
      title: 'Tools', 
      items: skills.tools, 
      icon: Wrench, 
      watermark: Cpu,
      color: 'emerald' 
    }
  ];

  // Mapping colors to specific tailwind classes to match the About page "Leadership" icon styles
  const colorStyles = {
    indigo: { text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100', pillText: 'text-indigo-700' },
    blue:   { text: 'text-blue-600',   bg: 'bg-blue-50',   border: 'border-blue-100',   pillText: 'text-blue-700' },
    violet: { text: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100', pillText: 'text-violet-700' },
    emerald:{ text: 'text-emerald-600',bg: 'bg-emerald-50',border: 'border-emerald-100',pillText: 'text-emerald-700' }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Dynamic Background Elements (Matched to About Page) */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 tracking-tight mb-6">
            Technical Proficiency
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            The languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const WatermarkIcon = category.watermark;
            const style =colorStyles.indigo;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm overflow-hidden group"
              >
                {/* Decorative Watermark Icon (Matched to Education Card) */}
                <WatermarkIcon 
                  className={`absolute -right-4 -bottom-4 opacity-[0.05] group-hover:scale-110 transition-transform duration-500 ${style.text}`}
                  size={140} 
                  strokeWidth={1.5}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl ${style.bg} ${style.text}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item, idx) => (
                      <span
                        key={idx}
                        className={`
                          inline-block px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300
                          bg-gray-50 text-gray-600 border border-gray-100
                          group-hover:border-transparent group-hover:${style.bg} group-hover:${style.pillText}
                        `}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Competencies (Optional Footer Section) */}
        {skills.other && skills.other.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
             <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">
               Other Competencies
             </p>
             <div className="flex flex-wrap justify-center gap-6 text-gray-500">
               {skills.other.map((item, idx) => (
                 <span key={idx} className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                   {item}
                 </span>
               ))}
             </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Skills;