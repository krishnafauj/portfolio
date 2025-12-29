export const personalInfo = {
  name: "Krishna Faujdar",
  title: "Full-Stack Web Developer",
  subtitle: "Scalable Backend · Modern Frontend · Docker",
  email: "krishnafauj@gmail.com",
  phone: "+91 8619064840",
  location: "Raichur, Karnataka – 584101",
  linkedin: "https://linkedin.com/in/krishna-faujdar-0a2204279",
  github: "https://github.com/krishnafauj",
  bio: "Passionate full-stack developer specializing in building scalable web applications. Experienced in modern frameworks, cloud deployment, and real-time systems. Winner of Luminous Hackathon (2nd/100,000+).",
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
    title: "Web Developer",
    company: "Freelance Web Development Projects",
    period: "Jan 2025 – Present",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Vercel"],
    achievements: [
      "Developed and deployed two responsive websites for clients, focusing on brand identity and mobile-first design",
      "Delivered clean UIs and cross-browser compatibility with React.js and Tailwind CSS",
      "Hosted on Vercel with continuous deployment and seamless updates"
    ]
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
    id: 1,
    title: "SeatSwap Application",
    description: "IRCTC seat-swapping platform used by tens of thousands of passengers monthly",
    period: "Jul 2025 – Present",
    technologies: ["Node.js", "Kafka", "Multer", "WebSocket", "MongoDB"],
    highlights: [
      "Reduced berth mismatch and ticket cancellations significantly",
      "Designed efficient real-time matching algorithms with indexed filters, improving seat suggestions by 75%"
    ],
    links: {
      live: "#",
      github: "#"
    },
    featured: true
  },
  {
    id: 2,
    title: "Verdict Vault",
    description: "Automated decentralized legal document management—from police filing to jurisdiction",
    period: "Jul 2024 – Dec 2024",
    technologies: ["Ganache", "Hardhat", "React.js", "Node.js", "MongoDB", "IPFS", "EmailJS"],
    highlights: [
      "Secured over 10 legal documents on blockchain using smart contracts and IPFS"
    ],
    links: {
      github: "#"
    },
    featured: true
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
    featured: false
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
    period: "Oct 2024 – Present",
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
