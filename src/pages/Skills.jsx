import { 
    FaReact, FaNodeJs, FaAws, FaPython, FaJava 
  } from "react-icons/fa";
  import { 
    SiMongodb, SiMysql, SiFirebase, SiTailwindcss, SiTypescript, SiJavascript, 
    SiHtml5, SiCss3, SiBootstrap, SiExpress, SiGit, SiGithub, SiNextdotjs, 
    SiFlask, SiFastapi, SiCplusplus, SiSelenium, SiDigitalocean, SiFlutter, 
    SiPhp, SiReact, SiJenkins, SiNginx, SiApachekafka, SiDocker,  
  } from "react-icons/si";
  
  export default function Skills() {
    const skills = [
      { name: "React Native", icon: <FaReact size={40} className="text-cyan-400" /> },
     
      { name: "React.js", icon: <FaReact size={40} className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
      { name: "NodeJS", icon: <FaNodeJs size={40} className="text-green-500" /> },
      { name: "ExpressJS", icon: <SiExpress size={40} className="text-gray-300" /> },
  
      { name: "Firebase", icon: <SiFirebase size={40} className="text-yellow-400" /> },
      { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql size={40} className="text-blue-500" /> },
  
      { name: "AWS", icon: <FaAws size={40} className="text-orange-400" /> },
      { name: "Docker", icon: <SiDocker size={40} className="text-blue-400" /> },
      { name: "Jenkins", icon: <SiJenkins size={40} className="text-red-500" /> },
      { name: "Nginx", icon: <SiNginx size={40} className="text-green-500" /> },
      { name: "Kafka", icon: <SiApachekafka size={40} className="text-black" /> },
  
      { name: "Git VCS", icon: <SiGit size={40} className="text-red-500" /> },
      { name: "GitHub", icon: <SiGithub size={40} className="text-white" /> },
  
      { name: "HTML5", icon: <SiHtml5 size={40} className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 size={40} className="text-blue-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap size={40} className="text-purple-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-500" /> },
  
      { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-500" /> },
      { name: "PHP", icon: <SiPhp size={40} className="text-indigo-400" /> },
  
      { name: "Python", icon: <FaPython size={40} className="text-blue-400" /> },
      { name: "Flask", icon: <SiFlask size={40} className="text-gray-400" /> },
      { name: "FastAPI", icon: <SiFastapi size={40} className="text-teal-400" /> },
  
      { name: "C++", icon: <SiCplusplus size={40} className="text-blue-500" /> },
     
    ];
  
    return (
      <section id="skills" className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & Abilities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-slate-800 p-6 rounded-xl shadow hover:scale-105 transition-transform"
              >
                {skill.icon}
                <p className="mt-2 text-sm font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  