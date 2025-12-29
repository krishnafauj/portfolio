import { Code, Database, Wrench, Layers } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', items: skills.languages, icon: Code, color: 'blue' },
    { title: 'Frameworks', items: skills.frameworks, icon: Layers, color: 'green' },
    { title: 'Databases', items: skills.databases, icon: Database, color: 'purple' },
    { title: 'Tools', items: skills.tools, icon: Wrench, color: 'orange' }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', badge: 'bg-blue-50 text-blue-700' },
    green: { bg: 'bg-green-100', text: 'text-green-600', badge: 'bg-green-50 text-green-700' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', badge: 'bg-purple-50 text-purple-700' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', badge: 'bg-orange-50 text-orange-700' }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <div
                key={category.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${colors.bg} rounded-lg`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, index) => (
                    <span
                      key={index}
                      className={`px-3 py-2 ${colors.badge} rounded-lg text-sm font-medium hover:shadow-md transition-shadow`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {skills.other && skills.other.length > 0 && (
          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Other Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.other.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:shadow-md transition-shadow"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
