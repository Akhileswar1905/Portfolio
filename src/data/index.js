export const work = [
  {
    id: 0,
    title: "AI Engineer",
    company: "Infosys",
    date: "Present",
    description:
      "Working on Agentic AI systems, supervised fine-tuning (SFT) of language models, and building agent evaluation frameworks using SWE-bench Verified, DeepSWE, and SWE Atlas QnA. Built ModelWorks — a platform for pipeline automation. Experience with NVIDIA NeMo framework.",
    logo: "/companies/images.jpg",
  },
  {
    id: 1,
    title: "Web Development Intern",
    company: "Gen Alpha Digital",
    date: "July 2024 - 2025",
    description: "Developed and maintained the company's portfolio.",
    logo: "/companies/genalpha.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "MK Logistics",
    date: "June 2024 - September 2024",
    description:
      "Created a mobile app for employees to track work hours and schedules, along with a dashboard for managers to monitor payments and employee activity.",
    logo: "/companies/mklogistics.svg",
  },
];

export const projects = [
  {
    id: 0,
    title: "ModelWorks",
    description:
      "An internal platform at Infosys for end-to-end AI model lifecycle — SFT training, evaluation benchmarks, vLLM inference deployment, B200 cluster monitoring, and API analytics on HPC infrastructure.",
    images: [
      "/projects/modelworks/training.png",
      "/projects/modelworks/node-health.png",
      "/projects/modelworks/pipeline-runs.png",
      "/projects/modelworks/infrastructure.png",
      "/projects/modelworks/containers.png",
      "/projects/modelworks/deploy.png",
      "/projects/modelworks/analytics.png",
      "/projects/modelworks/adoption.png",
    ],
    techStack: ["React", "Tailwind CSS", "shadcn/ui", "FastAPI", "Slurm", "vLLM", "NeMo", "Docker"],
  },
  {
    id: 1,
    title: "Gen Alpha Digital",
    description:
      "A digital agency that specializes in creating websites, apps, and digital marketing campaigns for startups and large businesses.",
    image: "/projects/project1.jpg",
    link: "https://genalphadigital.in",
    github: "https://github.com/GenAlphaDigital/Gen-Alpha-Website",
    techStack: ["Next.js", "Framer Motion", "Firebase"],
  },
  {
    id: 2,
    title: "MK Logistics Dashboard",
    description:
      "A dashboard that helps the logistics company to manage their drivers, track their vehicles, and generate reports.",
    image: "/projects/project2.jpg",
    link: "https://mk-logistics-dashboard.vercel.app/",
    github: "https://github.com/Akhileswar1905/MK-Logistics-Dashboard",
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
  },
  {
    id: 4,
    title: "DriverSync",
    description:
      "A mobile app that helps the drivers to track their trips, manage their earnings, and connect with other drivers.",
    image: "/projects/project4.jpg",
    link: "https://expo.dev/artifacts/eas/ccEYaVm7FBpQ5YYLpg4cn3.apk",
    github: "https://github.com/Akhileswar1905/Polygon-driver-app",
    techStack: ["React Native", "Firebase"],
  },
  {
    id: 3,
    title: "Kokoro Connect",
    description:
      "A social media platform that connects people with similar interests and helps them to collaborate on projects.",
    image: "/projects/project3.jpg",
    link: "https://kokoro-connect.vercel.app/",
    github: "https://github.com/Akhileswar1905/Kokoro-Connect",
    techStack: ["React", "Firebase"],
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
