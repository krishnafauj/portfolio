import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Mail className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <p className="">Email</p>
                    <p className="text-sm">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Phone className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <p className="">Phone</p>
                    <p className="text-sm">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-700">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="">Location</p>
                    <p className="text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl text-gray-900 mb-6">
                Connect With Me
              </h3>
              <p className="text-gray-600 mb-6">
                Follow me on social media to stay updated with my latest projects and tech insights.
              </p>
              <div className="space-y-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-800 transition-colors">
                    <Github className="text-gray-800 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <p className="">GitHub</p>
                    <p className="text-sm">@krishnafauj</p>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Linkedin className="text-blue-600 group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <p className="">LinkedIn</p>
                    <p className="text-sm">Krishna Faujdar</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Send className="text-blue-600 mx-auto mb-4" size={48} />
            <h3 className="text-2xl text-gray-900 mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl "
            >
              <Mail size={20} />
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
