import { useRef, useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data";
import { ExternalLink } from "lucide-react";
import { IoLogoGithub } from "react-icons/io5";

const rise = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Slideshow({ images, alt }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => setIdx((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx]}
          alt={`${alt} ${idx + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIdx(i); }}
              className={`size-1.5 rounded-full transition-all cursor-pointer ${
                i === idx ? "bg-primary w-4" : "bg-foreground/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SpotlightCard({ children, className }) {
  const ref = useRef(null);
  const handleMouse = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);
  return (
    <div ref={ref} onMouseMove={handleMouse} className={`spotlight-card ${className}`}>
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="relative py-28">
      <span className="section-number">02</span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="space-y-12"
      >
        <motion.div variants={rise}>
          <p className="font-mono text-xs text-primary">02 / Work</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            Selected projects
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div key={p.id} variants={rise}>
              <SpotlightCard className="h-full rounded-xl">
                <Card className="group h-full overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/20">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {p.images ? (
                      <Slideshow images={p.images} alt={p.title} />
                    ) : (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer" className="flex size-9 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                          <ExternalLink className="size-4" />
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer" className="flex size-9 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                          <IoLogoGithub size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardContent className="flex flex-col gap-2 p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-base font-semibold">{p.title}</h3>
                      <span className="font-mono text-[0.65rem] text-muted-foreground">#{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {p.techStack.map((t) => (
                        <Badge key={t} variant="secondary" className="rounded-full text-[0.65rem] font-mono">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
