import { Code, ExternalLink, Github } from 'lucide-react';
import React from 'react'
function Project() {
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
        <div>
            <section id="projects" className="py-20 px-4 bg-slate-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
                        <Code className="mr-3 text-blue-400" /> Projects
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.title} className="bg-slate-900 rounded-xl shadow-md overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="bg-slate-800 px-3 py-1 rounded-full text-sm">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a href={project.liveUrl} className="flex items-center text-blue-400 hover:underline">
                                            <ExternalLink className="mr-1" size={16} /> Live
                                        </a>
                                        <a href={project.githubUrl} className="flex items-center text-gray-400 hover:underline">
                                            <Github className="mr-1" size={16} /> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project
