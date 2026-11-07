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
        className="space-y-10"
      >
        <motion.div variants={rise} className="max-w-2xl">
          <p className="font-mono text-xs text-primary">03 / Experience</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            Experience that ships
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A mix of product engineering and applied AI — from building full-stack workflows
            to developing and evaluating intelligent systems.
          </p>
        </motion.div>

        <div className="space-y-0">
          {work.map((job, i) => (
            <motion.article key={job.id} variants={rise}>
              {i > 0 && <Separator />}
              <div className="group grid gap-5 py-8 md:grid-cols-[190px_1fr] md:gap-12">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-muted-foreground">{job.date}</span>
                  <img
                    src={job.logo}
                    alt={job.company}
                    loading="lazy"
                    className="mt-1 h-12 w-auto max-w-36 object-contain object-left opacity-70 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{job.company}</p>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {(job.highlights || []).map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
          <Separator />
        </div>
      </motion.div>
    </section>
  );
}
