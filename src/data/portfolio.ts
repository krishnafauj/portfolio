// 1. IMPORT THE IMAGE AT THE TOP
import projectImg from './image.jpeg'; 
import iconimage1 from './icon1.png';
import iconimage2 from './icon2.png';
import iconimage3 from './icon3.png';
export const personalInfo = {
  name: "Krishna Faujdar",
  title: "Full-Stack Web Developer",
  subtitle: "Scalable Backend · Modern Frontend · Docker",
  email: "krishnafauj@gmail.com",
  phone: "+91 8619064840",
  location: "Raichur, Karnataka – 584101",
  linkedin: "https://linkedin.com/in/krishna-faujdar-0a2204279",
  github: "https://github.com/krishnafauj",
  bio: "Specializing in building scalable web applications with experience in cloud deployment and real-time systems. Winner of Luminous Hackathon (2nd/100,000+). Full Stack Developer Intern at Soundverse.ai",
  cvPath: "/krishna_faujdar_cv.pdf"
};

export const education = [
  {
    id: 1,
    institution: "Indian Institute of Information Technology, Raichur",
    degree: "B.Tech, Computer Science and Engineering",
    period: "Aug 2023 – May 2027",
    type: "undergraduate"
  },
  {
    id: 2,
    institution: "Baba Sugriv Vidyapeeth Sr Sec School",
    degree: "Senior Secondary Education",
    period: "July 2020 – Mar 2021",
    type: "secondary"
  }
];

export const experience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Soundverse.ai",
    period: "Dec 2025 – Present", 
    technologies: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS", "TypeScript"],
    achievements: [
      "Developed key components for the AI Studio interface, including the real-time Audio Player and DnaBrowser",
      "Implemented global state management using Redux to handle user sessions and track generation flow efficiently",
      "Optimized the frontend performance for the 'What's New' carousel and dynamic UI alerts for token usage"
    ],
    links: {
      Website: "https://www.soundverse.ai",
      linkedin: "#" 
    }
  },
  {
    id: 2,
    title: "AI Chatbot Developer",
    company: "Bosch Power Tools Chatbot",
    period: "May 2024 – Mar 2025",
    technologies: ["Flask", "LangChain", "Sentence-Transformers", "Vite", "Render", "Vercel"],
    achievements: [
      "Built a Flask-based AI chatbot backend leveraging LangChain, boosting response accuracy by 30%",
      "Optimized vector retrieval, reducing response time by 40%"
    ],
    links: {
      demo: "#",
      certificate: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    company: "Luminous Hackathon (2nd/100,000+)",
    period: "Nov 2024 – Dec 2024",
    technologies: ["Grafana", "Neon Console", "PostgreSQL", "ReactJS"],
    achievements: [
      "Built real-time dashboards for solar analytics, improving visualization speed by 60%",
      "Integrated Neon Console & PostgreSQL, enabling faster decision making"
    ],
    links: {
      github: "#"
    }
  }
];

export const projects = [
  {
    id: 4, 
    title: "Linear Optimizer (COMA)",
    description: "Cross-platform mobile application for solving complex Linear Programming problems with step-by-step visualization.",
    period: "Oct 2024 – Present", 
    technologies: ["React Native", "Expo SDK", "TypeScript", "Expo Router", "Fraction.js"],
    highlights: [
      "Engineered 'Smart Routing Logic' to automatically detect problem types and switch between Standard Simplex and Two-Phase methods [cite: 67, 68]",
      "Built an interactive 'Step-by-Step Mode' that visualizes pivot operations and tableau iterations for educational use [cite: 31, 32]",
      "Implemented robust post-optimality tools including Sensitivity Analysis, Shadow Prices, and RHS ranging [cite: 28, 62]",
      "Developed a unified cross-platform UI (iOS, Android, Web) using Expo Router and gradient animations [cite: 83, 85]"
    ],
    links: {
      github: "#", // Add your repo link
      live: "#"    // Add live link if deployed
    },
    featured: true,
    image: iconimage1, 
  },
  {
    id: 1,
    title: "SeatSwap Application",
    description: "IRCTC seat-swapping platform used by tens of thousands of passengers monthly",
    period: "Jul 2025 – Present",
    technologies: ["Node.js", "Kafka", "Multer", "WebSocket", "MongoDB"],
    highlights: [
      "Reduced berth mismatch and ticket cancellations significantly",
      "Designed efficient real-time matching algorithms with indexed filters, improving seat suggestions"
    ],
    links: {
      live: "#",
      github: "#"
    },
    featured: true,
    image: iconimage2,
  },
  {
    id: 2,
    title: "Verdict Vault",
    description: "Automated decentralized legal document management—from police filing to jurisdiction",
    period: "Jul 2024 – Dec 2024",
    technologies: ["Ganache", "Hardhat", "React.js", "Node.js", "MongoDB", "IPFS", "EmailJS"],
    highlights: [
      "Secured multiple  legal documents on blockchain using smart contracts and IPFS"
    ],
    links: {
      github: "#"
    },
    featured: true,
    // 2. USE THE IMPORTED VARIABLE HERE
    image: iconimage3,
  },
  {
    id: 3,
    title: "PetAdopt Mobile APK",
    description: "Cross-platform mobile app facilitating pet adoption/donation",
    period: "Jul 2024 – Nov 2024",
    technologies: ["React Native", "Firebase", "OAuth 2.0", "UI/UX", "WebSocket"],
    highlights: [
      "Secure OAuth 2.0 authentication",
      "Integrated Firebase for real-time listings and seamless user data synchronization"
    ],
    links: {
      github: "#"
    },
    featured: false,
    // 2. USE THE IMPORTED VARIABLE HERE
    image: projectImg,
  }
];

export const skills = {
  languages: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  frameworks: ["React.js", "React Native", "Node.js", "Express.js", "Tailwind", "Bootstrap", "Redux", "Next.js"],
  databases: ["MySQL", "MongoDB", "Firebase", "PostgreSQL"],
  tools: ["Git", "GitHub", "VS Code", "Android Studio", "Vercel", "Render", "Docker", "Kafka", "Grafana"],
  other: ["Figma", "Canva", "Overleaf", "IPFS"]
};

export const positions = [
  {
    id: 1,
    title: "Coordinator",
    organization: "E-Cell",
    period: "Oct 2024 – Oct 2025",
    description: "Led startup workshops; organized campus-wide entrepreneurship events, and engaged students with industry leaders"
  },
  {
    id: 2,
    title: "Event Management Leader",
    organization: "Finesse Club",
    period: "Oct 2023 – Oct 2024",
    description: "Managed a team of 5 for cultural events, overseeing budgeting, logistics, and sponsorships for inter-college fests"
  }
];