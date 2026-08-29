import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { techStack } from "@/data";
import {
  IoLogoJavascript, IoLogoReact, IoLogoNodejs, IoLogoFirebase, IoLogoPython, IoLogoGithub,
} from "react-icons/io5";
import {
  SiExpress, SiMongodb, SiMysql, SiFastapi, SiTypescript, SiTailwindcss,
  SiPostgresql, SiRedis, SiSupabase, SiChromatic, SiHuggingface,
  SiNvidia, SiDocker, SiVercel, SiLinux, SiShadcnui, SiOpenaigym,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import { Code2, Briefcase, BrainCircuit, FlaskConical } from "lucide-react";

const iconMap = {
  IoLogoJavascript, IoLogoReact, TbBrandNextjs, IoLogoNodejs, IoLogoPython, IoLogoGithub,
  SiExpress, SiFastapi, IoLogoFirebase, SiMongodb, SiMysql, SiTypescript,
  SiTailwindcss, TbBrandFramerMotion, SiShadcnui, SiPostgresql, SiRedis,
  SiSupabase, SiChromatic, SiHuggingface, SiOpenai: SiOpenaigym, SiNvidia, SiDocker,
  SiVercel, SiLinux,
};

const rise = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { icon: Code2, label: "Stack", value: "Full Stack + AI" },
  { icon: BrainCircuit, label: "AI Work", value: "SFT & Agent Eval" },
  { icon: Briefcase, label: "Experience", value: "Freelance & Startup" },
  { icon: FlaskConical, label: "Building", value: "Agentic Systems" },
];

export default function About() {
  return (
    <section className="relative py-28">
      <span className="section-number">01</span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="space-y-16"
      >
        {/* Header */}
        <motion.div variants={rise}>
          <p className="font-mono text-xs text-primary">01 / About</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            A bit about me
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Bio - spans 2 cols */}
          <motion.div variants={rise} className="md:col-span-2">
            <Card className="h-full border-border bg-card">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-6">
                  <div className="hidden shrink-0 md:block">
                    <div className="group relative size-40 overflow-hidden rounded-2xl">
                      <img
                        src="/assets/img.jpg"
                        alt="Profile"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I started building modern web applications with a focus on
                      seamless UX and robust backends. Over time, my work expanded
                      into <strong className="text-foreground">AI engineering</strong>, supervised
                      fine-tuning (SFT), agent evaluation frameworks, and building
                      systems that <strong className="text-foreground">reason and act autonomously</strong>.
                    </p>
                    <p>
                      Currently at <strong className="text-foreground">Infosys</strong>,
                      I work at the intersection of full-stack development and
                      applied AI, fine-tuning models via SFT, building agent
                      evaluation frameworks, and shipping agentic systems that
                      solve real-world problems end to end.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stat cards */}
          <div className="flex flex-col gap-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <motion.div key={label} variants={rise}>
                <Card className="border-border bg-card transition-colors hover:border-primary/30">
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-semibold">{value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech marquee */}
        <motion.div variants={rise} className="space-y-4">
          <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            Technologies I work with
          </h3>
          <div className="relative overflow-hidden rounded-xl border border-border bg-card py-5">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent" />
            <div className="animate-marquee flex w-max gap-8">
              {[...techStack, ...techStack].map((tech, i) => {
                const Icon = iconMap[tech.icon];
                return (
                  <div key={`${tech.name}-${i}`} className="flex items-center gap-2 text-muted-foreground">
                    {Icon ? <Icon size={20} /> : tech.img ? <img src={tech.img} alt={tech.name} className="size-5 object-contain" /> : null}
                    <span className="whitespace-nowrap text-sm font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
