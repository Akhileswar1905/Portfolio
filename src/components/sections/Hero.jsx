import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const stagger = {
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};
const rise = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const profileLinks = [
  { label: "GitHub", href: "https://github.com/Akhileswar1905", icon: IoLogoGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sathivada-akhileswar-243b66237/", icon: IoLogoLinkedin },
];

export default function Hero({ contactRef, projectsRef }) {
  const scrollTo = (ref) => ref?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-[88vh] items-center py-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        <motion.div variants={rise} className="mb-6 flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-40" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs tracking-wide text-muted-foreground">
            Full Stack Development · Agentic AI
          </span>
        </motion.div>

        <motion.h1
          variants={rise}
          className="max-w-5xl font-display text-[clamp(2.8rem,7vw,6rem)] leading-[1.04] font-extrabold tracking-tight"
        >
          I build high-performance software
          <br className="hidden md:block" />
          {" "}and <span className="text-primary">intelligent AI systems.</span>
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I'm Akhileswar Sathivada, a full-stack developer and AI engineer focused on
          building modern applications, agentic workflows, and practical AI systems
          that solve real problems.
        </motion.p>

        <motion.div
          variants={rise}
          className="mt-8 max-w-xl rounded-xl border border-border bg-card p-4 font-mono text-sm"
        >
          <div className="mb-3 flex items-center gap-2 text-muted-foreground">
            <Terminal className="size-3.5" />
            <span className="text-xs">~/.akhileswar</span>
          </div>
          <div className="space-y-1 text-muted-foreground">
            <p><span className="text-primary">const</span> focus = &#123;</p>
            <p className="pl-4">engineering: <span className="text-green-600 dark:text-green-400">"Full Stack"</span>,</p>
            <p className="pl-4">speciality: <span className="text-green-600 dark:text-green-400">"Agentic AI"</span>,</p>
            <p className="pl-4">principle: <span className="text-green-600 dark:text-green-400">"Build useful things"</span></p>
            <p>&#125;;</p>
          </div>
        </motion.div>

        <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            className="cursor-pointer rounded-full px-6"
            onClick={() => scrollTo(projectsRef)}
          >
            Explore projects
            <ArrowRight className="ml-1 size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="cursor-pointer rounded-full px-6"
            onClick={() => scrollTo(contactRef)}
          >
            Let's connect
          </Button>
          <div className="flex items-center gap-1 pl-1">
            {profileLinks.map(({ label, href, icon: Icon }) => (
              <Button key={label} variant="ghost" size="icon" asChild className="size-10 rounded-full">
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon className="size-4" />
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
