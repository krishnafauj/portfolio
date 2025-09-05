import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Database,
  Server,
  Smartphone,
  Globe,
  User,
  Briefcase,
  Send,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, icon: Code },
    { name: 'React/Next.js', level: 90, icon: Globe },
    { name: 'Node.js/Express', level: 85, icon: Server },
    { name: 'Database Design', level: 80, icon: Database },
    { name: 'UI/UX Design', level: 75, icon: Palette },
    { name: 'Mobile Development', level: 70, icon: Smartphone },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform with interactive charts and reports",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Vue.js", "D3.js", "Python", "Flask"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* ✅ Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ✅ Hero Section */}
    

      {/* ✅ About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <User className="mr-3 text-blue-400" /> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Profile" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div>
              <p className="text-gray-300 mb-6">
                I'm a full-stack developer with a strong background in web technologies. I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-gray-300">
                My focus is on building responsive, accessible, and performant web applications. I'm always eager to learn new technologies and improve my skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Skills Section */}
      

      {/* ✅ Projects Section */}


      {/* ✅ Contact Section */}
      

      {/* ✅ Footer */}
      <footer className="bg-slate-800 py-6 px-4 text-center text-gray-400 border-t border-slate-700">
        <p>&copy; {new Date().getFullYear()} Krishna Faujdar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
