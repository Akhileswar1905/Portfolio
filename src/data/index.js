export const work = [
  {
    id: 0,
    title: "AI Engineer",
    company: "Infosys",
    date: "Present",
    highlights: [
      "Built ModelWorks, an internal platform for automating model and training pipelines.",
      "Work on supervised fine-tuning (SFT) workflows and agentic AI systems using NVIDIA NeMo.",
      "Contribute to benchmark-driven agent evaluation, including SWE-bench Verified and related evaluation suites.",
    ],
    logo: "/companies/images.jpg",
  },
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Univyn Technologies",
    date: "Feb 2025 - Aug 2025",
    highlights: [
      "Contributed to Qubico, a coworking-space CRM covering member onboarding, bookings, grievances, community feeds, and associate-partner workflows.",
      "Built and maintained frontend and backend features across the React, Express, and MySQL stack.",
      "Helped streamline operational workflows and improve the experience for workspace teams and members.",
    ],
    logo: "/companies/univyn.jpg",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "Gen Alpha Digital",
    date: "Aug 2024 - Oct 2024",
    highlights: [
      "Developed the company's portfolio website and contributed to internal web tools.",
      "Worked across frontend development, database integration, and API-connected features.",
    ],
    logo: "/companies/genalpha.svg",
  },
];

export const projects = [
  {
    id: 0,
    title: "ModelWorks",
    description:
      "An internal AI platform built at Infosys covering the end-to-end model lifecycle - training pipelines, evaluation benchmarks, deployment, and infrastructure monitoring at scale.",
    image: "/projects/modelworks/cover.png",
    techStack: ["React", "Tailwind CSS", "Material UI", "FastAPI", "Docker"],
  },
  {
    id: 1,
    title: "Qubico",
    description:
      "Qubico is a smart, privacy-first workspace management platform that optimizes co-working occupancy, streamlines operations, and strengthens community engagement.",
    images: [
      "/projects/qubico/home.png",
      "/projects/qubico/about.png",
      "/projects/qubico/offering.png",
      "/projects/qubico/team.png",
      "/projects/qubico/partners.png"
    ],
    link: "https://qubico.in",
    techStack: ["React", "Tailwind CSS", "Material UI"],
  },
  {
    id: 2,
    title: "Gen Alpha Digital",
    description:
      "A digital agency that specializes in creating websites, apps, and digital marketing campaigns for startups and large businesses.",
    image: "/projects/project1.jpg",
    link: "https://genalphadigital.in",
    github: "https://github.com/GenAlphaDigital/Gen-Alpha-Website",
    techStack: ["Next.js", "Framer Motion", "Firebase"],
  },
  {
    id: 3,
    title: "DriverSync",
    description:
      "A mobile app that helps the drivers to track their trips, manage their earnings, and connect with other drivers.",
    image: "/projects/project4.jpg",
    // link: "https://expo.dev/artifacts/eas/ccEYaVm7FBpQ5YYLpg4cn3.apk",
    github: "https://github.com/Akhileswar1905/Polygon-driver-app",
    techStack: ["React Native", "Firebase"],
  },
];

export const techStack = [
  { name: "JavaScript", icon: "IoLogoJavascript" },
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "Python", icon: "IoLogoPython" },
  { name: "React", icon: "IoLogoReact" },
  { name: "Next.js", icon: "TbBrandNextjs" },
  { name: "React Native", icon: "IoLogoReact" },
  { name: "Tailwind CSS", icon: "SiTailwindcss" },
  { name: "Framer Motion", icon: "TbBrandFramerMotion" },
  { name: "shadcn/ui", icon: "SiShadcnui" },
  { name: "Node.js", icon: "IoLogoNodejs" },
  { name: "Express", icon: "SiExpress" },
  { name: "FastAPI", icon: "SiFastapi" },
  { name: "MongoDB", icon: "SiMongodb" },
  { name: "PostgreSQL", icon: "SiPostgresql" },
  { name: "MySQL", icon: "SiMysql" },
  { name: "Redis", icon: "SiRedis" },
  { name: "Firebase", icon: "IoLogoFirebase" },
  { name: "Supabase", icon: "SiSupabase" },
  { name: "ChromaDB", icon: "SiChromatic" },
  { name: "LangChain", img: "/tech/langchain.png" },
  { name: "LangGraph", img: "/tech/langgraph.png" },
  { name: "Hugging Face", icon: "SiHuggingface" },
  { name: "OpenAI", icon: "SiOpenai" },
  { name: "NeMo", icon: "SiNvidia" },
  { name: "MCP", img: "/tech/mcp.png" },
  { name: "A2A", img: "/tech/a2a.svg" },
  { name: "RAG" },
  { name: "SFT" },
  { name: "RLHF" },
  { name: "Docker", icon: "SiDocker" },
  { name: "Vercel", icon: "SiVercel" },
  { name: "Git", icon: "IoLogoGithub" },
  { name: "Linux", icon: "SiLinux" },
];
