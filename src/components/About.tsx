import { GraduationCap, Award } from 'lucide-react';
import { education, positions } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={32} className="text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {edu.institution}
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">{edu.degree}</p>
                  <p className="text-gray-600">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award size={32} className="text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Leadership</h3>
            </div>
            <div className="space-y-6">
              {positions.map((position) => (
                <div
                  key={position.id}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {position.title}
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">
                    {position.organization}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">{position.period}</p>
                  <p className="text-gray-700">{position.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
