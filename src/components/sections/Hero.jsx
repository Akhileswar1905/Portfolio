import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

const stagger = {
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const rise = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ contactRef }) {
  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-[92vh] items-center py-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        {/* Status line */}
        <motion.div variants={rise} className="mb-6 flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">Available for work</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={rise}
          className="font-display text-[clamp(2.8rem,7vw,6rem)] leading-[1.05] font-extrabold tracking-tight"
        >
          I build & train
          <br />
          for the <span className="text-primary">web & AI</span>
          <span className="text-primary">.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={rise}
          className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          Full-stack engineer & AI engineer — I build modern applications,
          fine-tune models via <span className="font-medium text-foreground">SFT</span>,
          evaluate agents, and ship <span className="font-medium text-foreground">agentic systems</span> that reason.
        </motion.p>

        {/* Terminal card */}
        <motion.div
          variants={rise}
          className="mt-8 max-w-md rounded-xl border border-border bg-card p-4 font-mono text-sm"
        >
          <div className="mb-3 flex items-center gap-2 text-muted-foreground">
            <Terminal className="size-3.5" />
            <span className="text-xs">~/.akhileswar</span>
          </div>
          <div className="space-y-1 text-muted-foreground">
            <p><span className="text-primary">const</span> developer = &#123;</p>
            <p className="pl-4">name: <span className="text-green-600 dark:text-green-400">"Akhileswar Sathivada"</span>,</p>
            <p className="pl-4">role: <span className="text-green-600 dark:text-green-400">["Full Stack", "AI Engineer"]</span>,</p>
            <p className="pl-4">skills: <span className="text-green-600 dark:text-green-400">["SFT", "Agent Eval", "Agentic AI"]</span>,</p>
            <p>&#125;;</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={rise} className="mt-10 flex flex-wrap gap-3">
          <Button
            size="lg"
            className="rounded-full px-6 cursor-pointer"
            onClick={() => scrollTo(contactRef)}
          >
            Let's Connect
            <ArrowRight className="ml-1 size-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full cursor-pointer" asChild>
            <a href="https://github.com/Akhileswar1905" target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
