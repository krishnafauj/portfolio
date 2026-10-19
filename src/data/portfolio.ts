import { StaticImageData } from 'next/image';

// 1. GENERIC ICONS / PLACEHOLDERS (Restored)

import iconimage1 from './icon1.png';
import iconimage2 from './icon2.png';
import iconimage3 from './icon3.png';
import iconimage5 from './icon5.png';
import agentStudyImg from './agentstudy.svg';
import p7_img1 from './7/image1.png';
import p7_img2 from './7/image2.png';
import p7_img3 from './7/image3.png';
import p7_img4 from './7/image4.png';
import p7_img5 from './7/image5.png';  

// 2. SPECIFIC PROJECT IMAGES (Folder 4)
import p4_img1 from './4/image1.jpeg';
import p4_img2 from './4/image2.jpeg'; 
import p4_img3 from './4/image3.jpeg'; 
import p4_img4 from './4/image4.jpeg'; 
import p4_img5 from './4/image5.jpeg'; 

import p5_img1 from './5/image1.jpeg';
import p5_img2 from './5/image2.jpeg'; 
import p5_img3 from './5/image3.jpeg'; 
import p5_img4 from './5/image4.jpeg'; 
import p5_img5 from './5/image5.jpeg'; 

import p1_img1 from './1/image1.png';
import p1_img2 from './1/image2.png'; 
import p1_img3 from './1/image3.png'; 
import p1_img4 from './1/image4.png'; 
import p1_img5 from './1/image5.png'; 

// --- TYPES ---
export interface FlowStep {
  step: number;
  title: string;
  desc: string;
  badge: string;
  image: StaticImageData | string; // Can be imported image or string path
}

export interface Project {
  id: number;
  title: string;
  description: string;
  period: string;
  technologies: string[];
  highlights: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
    certificate?: string;
    website?: string;
    linkedin?: string;
  };
  featured?: boolean;
  image: StaticImageData | string; 
  flow: FlowStep[]; // Now mandatory for the UI to work everywhere
}
export const personalInfo = {
  name: "Krishna Faujdar",
  title: "Full Stack Developer",
  subtitle: "React · Next.js · TypeScript · Node.js",
  email: "krishnafauj@gmail.com",
  phone: "+91 8619064840",
  location: "Kolkata, West Bengal",
  linkedin: "https://linkedin.com/in/krishna-faujdar-0a2204279",
  github: "https://github.com/krishnafauj",
  bio: "Full Stack Developer at Rezolve.ai building production web applications end-to-end: Django and Node.js APIs, React/Next.js interfaces and access-controlled systems on PostgreSQL, MongoDB and AWS. Builds AI applications with LangChain and LangGraph, and leads the campus as Student Council President at IIIT Raichur.",
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
    id: 5,
    title: "Full Stack Developer",
    company: "Rezolve.ai · Kolkata",
    period: "Apr 2026 – Present",
    technologies: ["Django", "Python", "Node.js", "TypeScript", "AWS SES", "RBAC", "REST APIs", "React", "Next.js"],
    achievements: [
      "Own features end-to-end on an AI-powered recruiting platform, from shaping the product idea to designing the backend logic, APIs and data flow",
      "Built scalable email services on AWS SES for high-volume, templated transactional emails",
      "Implemented role-based access control (RBAC) to manage user roles and permissions across the platform",
      "Build the matching frontend in React and Next.js and integrate the product with third-party platforms"
    ],
    links: {
      Website: "https://www.rezolve.ai"
    }
  },
  {
    id: 4,
    title: "Software Developer Intern",
    company: "Qtanea Solutions",
    period: "Feb 2026 – Mar 2026",
    technologies: [] as string[],
    achievements: [
      "Took ownership of a central-authority platform for colleges and universities, giving one governing body oversight of every institution from a single website",
      "Designed and built role-based admin panels for different roles (central authority, university and college admins), each managing only its own scope"
    ],
    links: {}
  },
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Soundverse.ai",
    period: "Dec 2025 – Jan 2026", 
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
export const projects: Project[] = [
  {
    id: 6,
    title: "AgentStudy",
    description: "AI study platform where a teacher assigns a PDF and each student chats with it privately, without ever getting access to the original, often confidential, document.",
    period: "2026 – Present",
    technologies: ["Next.js", "Node.js", "Express", "LangChain", "LangGraph", "MongoDB", "AWS S3", "Redux Toolkit", "React Query", "MCP"],
    highlights: [
      "Access-controlled RAG: teachers assign a PDF and each student chats with it privately, never accessing the original document",
      "Teachers carve PDFs into page-range sections and grant them per student; scope is derived server-side and retrieval is filtered to approved pages only",
      "Prerequisite knowledge graph lets an out-of-scope concept cross only as a short definition (depth 1, no LLM call), never the restricted page",
      "In progress: AI interview-style sessions where the agent questions students on the material"
    ],
    links: {
      live: "https://studyagent.krishnafauj.in",
      github: "https://github.com/krishnafauj/Study_Agent"
    },
    featured: true,
    image: agentStudyImg,
    flow: [
      { step: 1, title: "Teacher Uploads PDF", desc: "Document is stored privately on S3 and parsed into searchable chunks.", badge: "Ingestion", image: agentStudyImg },
      { step: 2, title: "Scoped Access", desc: "Teacher decides which chapters or pages each student can use.", badge: "Access Control", image: agentStudyImg },
      { step: 3, title: "Private Chat", desc: "Each student chats with an agent that answers only from the content they are allowed to see.", badge: "LangGraph", image: agentStudyImg },
      { step: 4, title: "No Raw Access", desc: "Students get explanations, never the original file, keeping confidential material safe.", badge: "Privacy", image: agentStudyImg },
      { step: 5, title: "AI Interview (WIP)", desc: "Agent runs viva-style sessions so students can answer questions on the material.", badge: "In Progress", image: agentStudyImg }
    ]
  },
  {
    id: 7,
    title: "COSA Portal – IIIT Raichur",
    description: "Jira-style issue and grievance tracker for IIIT Raichur, routing student issues to the right club, committee or COSA office bearer.",
    period: "2026 – Present",
    technologies: ["Django", "Python", "PostgreSQL", "AWS S3", "Neon", "Vercel"],
    highlights: [
      "Google sign-in restricted to IIITR emails; students raise issues with category, priority, attachments and tagged COSA members who get notified",
      "Jira-style Issue Board (Not Started, Under Process, Blocked, Completed) with Escalated and Overdue (5+ days) filters, plus a sortable table view",
      "Issues are assigned to office bearers, other students can join an existing issue publicly or privately, and every status change is kept in an audit history"
    ],
    links: {
      live: "https://cosaiiitr.krishnafauj.in/board",
      github: "https://github.com/krishnafauj/cosa"
    },
    featured: true,
    image: p7_img2,
    flow: [
      { step: 1, title: "Sign In", desc: "Students sign in with Google using their IIITR email.", badge: "Auth", image: p7_img1 },
      { step: 2, title: "Raise an Issue", desc: "Title, description, category, priority, attachments and tagged COSA members, who get notified.", badge: "Intake", image: p7_img5 },
      { step: 3, title: "Issue Board", desc: "Kanban board across Not Started, Under Process, Blocked and Completed, with escalated and overdue filters.", badge: "Workflow", image: p7_img2 },
      { step: 4, title: "Table View", desc: "Every issue with status, priority, assignee, tags and latest updates in one sortable table.", badge: "Tracking", image: p7_img4 },
      { step: 5, title: "Issue Detail & History", desc: "Assignment, students on the issue, remarks and a full audit trail of status changes.", badge: "Audit", image: p7_img3 }
    ]
  },
  {
    id: 4, 
    title: "Linear Optimizer (COMA)",
    description: "Cross-platform mobile application for solving complex Linear Programming problems with step-by-step visualization.",
    period: "Oct 2024 – Present", 
    technologies: ["React Native", "Expo SDK", "TypeScript", "Fraction.js"],
    highlights: [
      "Engineered 'Smart Routing Logic' to automatically detect problem types",
      "Built an interactive 'Step-by-Step Mode' visualizer",
      "Implemented robust post-optimality tools"
    ],
    links: {
      github: "https://github.com/krishnafauj/coma_project", 
      live: "https://drive.google.com/file/d/1eD4n0h7U7JK-hQd-oGtwjvY_i8ieaOlX/view"
    },
    featured: true,
    image: iconimage1, // Main Card Image
    
    // SPECIFIC FLOW IMAGES
    flow: [
      { step: 1, title: "Constraint Input", desc: "User inputs objective function. Validation layer checks syntax.", badge: "Input Parsing", image: p4_img1 },
      { step: 2, title: "Smart Routing", desc: "Logic detects problem type (Standard vs Non-Standard) to select method.", badge: "Algorithm", image: p4_img2 },
      { step: 3, title: "Matrix Iteration", desc: "System converts inequalities to slack variables and generates Tableau.", badge: "Math Engine", image: p4_img3 },
      { step: 4, title: "Pivot Visualization", desc: "Step-by-step rendering of pivot columns/rows and variables.", badge: "Visualization", image: p4_img4 },
      { step: 5, title: "Optimal Solution", desc: "Final calculation of Shadow Prices and Sensitivity Analysis.", badge: "Analysis", image: p4_img5 }
    ]
  },
  {
    id: 1,
    title: "SeatSwap Application",
    description: "Deployed platform that matches train passengers holding complementary berths so they can swap seats instead of cancelling.",
    period: "Jul 2025 – Present",
    technologies: ["Node.js", "Kafka", "Multer", "WebSocket", "MongoDB"],
    highlights: ["Kafka producers batch swap requests to handle bursts of concurrent users", "Indexed MongoDB queries find complementary seats", "WebSocket channel for live swap negotiation"],
    links: {
      live: "https://seatswap.krishnafauj.in",
      github: "https://github.com/krishnafauj/trainticketswap "
    },
    featured: true,
    image: iconimage2, // Main Card Image
    
    // FALLBACK FLOW IMAGES (Using iconimage2)
    flow: [
      { step: 1, title: "User Onboarding", desc: "User authenticates and enters PNR/Seat details via secure form.", badge: "Auth", image: p1_img1 },
      { step: 2, title: "Pattern Matching", desc: "Indexed MongoDB filters scan for complementary seat requirements.", badge: "Query Opt", image: p1_img2 },
      { step: 3, title: "Event Streaming", desc: "Kafka producers batch requests to handle high concurrency.", badge: "Kafka", image: p1_img3 },
      { step: 4, title: "Negotiation", desc: "WebSocket channel opens for users to agree on the swap.", badge: "Real-time", image: p1_img4 },
      { step: 5, title: "Swap Success", desc: "Transaction finalized and now it is open for other passengerss, who are interested in their seat swapping", badge: "Complete", image: p1_img5 }
    ]
  },
  {
    id: 2,
    title: "Verdict Vault",
    description: "Automated decentralized legal document management—from police filing to jurisdiction",
    period: "Jul 2024 – Dec 2024",
    technologies: ["Ganache", "Hardhat", "React.js", "Node.js", "MongoDB", "IPFS"],
    highlights: ["Secured legal documents on blockchain"],
    links: {
      github: "https://github.com/krishnafauj/verdictvault"
    },
    featured: true,
    image: iconimage3, // Main Card Image
    
    // FALLBACK FLOW IMAGES (Using iconimage3)
    flow: [
      { step: 1, title: "Case Filing", desc: "Police upload FIR. Frontend generates cryptographic hash.", badge: "Upload", image: iconimage3 },
      { step: 2, title: "IPFS Storage", desc: "Document blob sent to IPFS; CID returned.", badge: "Storage", image: iconimage3 },
      { step: 3, title: "Smart Contract", desc: "CID and metadata packed into Ethereum transaction.", badge: "Solidity", image: iconimage3 },
      { step: 4, title: "Mining", desc: "Miners validate transaction and add block to chain.", badge: "Blockchain", image: iconimage3 },
      { step: 5, title: "Verification", desc: "Court verifies document integrity using on-chain signature.", badge: "Security", image: iconimage3 }
    ]
  },
  // {
  //   id: 3,
  //   title: "PetAdopt Mobile APK",
  //   description: "Cross-platform mobile app facilitating pet adoption/donation",
  //   period: "Jul 2024 – Nov 2024",
  //   technologies: ["React Native", "Firebase", "OAuth 2.0", "WebSocket"],
  //   highlights: ["Secure OAuth 2.0 authentication", "Real-time listings"],
  //   links: { github: "#" },
  //   featured: false,
  //   image: projectImg, // Main Card Image
    
  //   // FALLBACK FLOW IMAGES (Using projectImg)
  //   flow: [
  //     { step: 1, title: "Auth & Profile", desc: "User login via Google OAuth 2.0.", badge: "Security", image: p5_img1 },
  //     { step: 2, title: "Pet Listing", desc: "Users upload pet details and images to Firebase Storage.", badge: "Upload", image: p5_img2 },
  //     { step: 3, title: "Real-time Feed", desc: "Live synchronization of new pets using Firestore snapshot listeners.", badge: "Sync", image: p5_img3 },
  //     { step: 4, title: "Chat System", desc: "Adopters and donors communicate via WebSocket.", badge: "Chat", image: p5_img4 },
  //     { step: 5, title: "Adoption", desc: "Status updated to 'Adopted' and unlisted from feed.", badge: "Database", image: p5_img5 }
  //   ]
  // },
  {
    id: 5, 
    title: "Sbi Apk",
    description: "Cross-platform mobile application UI for banking services for SBI BANK.",
    period: "Oct 2025 – Dec 2025", 
    technologies: ["React Native", "Expo SDK", "TypeScript"],
    highlights: ["Secure Banking", "Fast Transactions"],
    links: {
      github: "https://github.com/krishnafauj/UIUXPROJECT", 
      live: "https://drive.google.com/file/d/16xr8QSlOUXC5R7K201etUHi5WMNelszK/view?usp=sharing"
    },
    image: iconimage5, // Main Card Image
    
    // FALLBACK FLOW IMAGES (Using iconimage1)
    flow: [
      { step: 1, title: "User Login", desc: "Biometric authentication or MPIN entry.", badge: "Auth", image: p5_img2 },
      { step: 2, title: "HomePage", desc: "Fetch all features which are provided by banks", badge: "API", image: p5_img1 },
      { step: 3, title: "User Dashboard", desc: "Money transfer, Add Money, View Transactions.", badge: "Security", image: p5_img5 },
      { step: 4, title: "Sidebar", desc: "Navigation across pages and settings access.", badge: "Accessibility", image: p5_img4 },
      { step: 5, title: "Registration Page", desc: "Sim based authentication", badge: "UI/UX", image: p5_img3 }
    ]
  },
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
    id: 3,
    title: "President",
    organization: "Student Council, IIIT Raichur",
    period: "Sep 2026 – Present",
    description: "Lead the student body, representing students to the administration and overseeing campus clubs, fests and student initiatives"
  },
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