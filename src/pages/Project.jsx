import { Code, ExternalLink, Github } from 'lucide-react';
import React from 'react'

function Project() {
  const projects = [
   
    {
      title: "Train Ticket Swapping App",
      description:
        "Real-time chat & ticket swap platform with friendship-based chat threads and Socket.IO messaging.",
      image:
        "https://upload.wikimedia.org/wikipedia/hi/7/7b/Indian_Railways_logo.png",
      technologies: ["React.js", "Express.js", "MongoDB", "Socket.IO"],
      githubUrl: "https://github.com/krishnafauj/trainticketswap",
      liveUrl: "https://trainticketswap.vercel.app/"
    },
    
      
    {
      title: "AI Chatbot with RAG",
      description:
        "Flask-based chatbot using Mistral AI, Redis vector store, and embeddings with SentenceTransformer.",
      image:
        "https://images.pexels.com/photos/1181343/pexels-photo-1181343.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Flask", "Mistral AI", "Redis", "React.js"],
      liveUrl: "https://boschchatbot-git-main-krishnafaujs-projects.vercel.app/",
      githubUrl: "https://github.com/krishnafauj/bosch-langchain_repo"
    },
    {
        title: "Verdict Vault",
        description:
          "Blockchain-based court document management system ensuring secure storage with IPFS and smart contracts.",
        image:
          "https://blog.geetauniversity.edu.in/wp-content/uploads/2024/01/360_F_613425025_gd2GVW9SOVEdg3bNJYWFZQ5FX9mEMnzT.jpg",
        technologies: ["React.js", "Truffle", "Ganache", "IPFS", "MongoDB"],
        
        githubUrl: "https://github.com/krishnafauj/code_kshetra_Automated_Jurisdiction"
    },
    
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
              <div
                key={project.title}
                className="bg-slate-900 rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-blue-400 hover:underline"
                    >
                      <ExternalLink className="mr-1" size={16} /> Live
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-gray-400 hover:underline"
                    >
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
