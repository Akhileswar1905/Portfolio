import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { work } from "@/data";

const rise = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <section className="relative py-28">
      <span className="section-number">03</span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="space-y-12"
      >
        <motion.div variants={rise}>
          <p className="font-mono text-xs text-primary">03 / Experience</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            Where I've worked
          </h2>
        </motion.div>

        <div className="space-y-0">
          {work.map((job, i) => (
            <motion.div key={job.id} variants={rise}>
              {i > 0 && <Separator />}
              <div className="group grid gap-4 py-8 md:grid-cols-[200px_1fr] md:gap-12">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted-foreground">{job.date}</span>
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="mt-2 h-14 w-auto object-contain object-left opacity-60 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                    {job.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{job.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <Separator />
        </div>
      </motion.div>
    </section>
  );
}
