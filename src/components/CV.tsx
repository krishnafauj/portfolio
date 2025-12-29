import { FileText, Download, ExternalLink } from 'lucide-react';
import { personalInfo, education, experience, projects, skills, positions } from '../data/portfolio';

const CV = () => {
  return (
    <section id="cv" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Curriculum Vitae
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-600 rounded-lg">
                  <FileText className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {personalInfo.name}
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    {personalInfo.title}
                  </p>
                </div>
              </div>
              <a
                href={personalInfo.cvPath}
                download
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold">Phone:</span>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold">Location:</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold">Links:</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <span>|</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded"></span>
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="pl-4">
                    <p className="font-semibold text-gray-900">{edu.institution}</p>
                    <p className="text-gray-700">{edu.degree}</p>
                    <p className="text-sm text-gray-600">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded"></span>
                Experience Summary
              </h4>
              <div className="space-y-4">
                <p className="text-gray-700 pl-4">
                  <span className="font-semibold">{experience.length}</span> professional experiences including freelance projects, AI chatbot development, and hackathon victories
                </p>
                <p className="text-gray-700 pl-4">
                  <span className="font-semibold">{projects.length}</span> major projects with real-world impact
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded"></span>
                Key Technologies
              </h4>
              <div className="pl-4">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Languages:</span> {skills.languages.join(', ')}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Frameworks:</span> {skills.frameworks.slice(0, 6).join(', ')}...
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Databases:</span> {skills.databases.join(', ')}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded"></span>
                Leadership Roles
              </h4>
              <div className="space-y-4">
                {positions.map((position) => (
                  <div key={position.id} className="pl-4">
                    <p className="font-semibold text-gray-900">
                      {position.title} - {position.organization}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">{position.period}</p>
                    <p className="text-gray-700">{position.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-6">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Detailed Projects
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
