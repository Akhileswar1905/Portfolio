import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";

const rise = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const socials = [
  { icon: IoLogoGithub, href: "https://github.com/Akhileswar1905", label: "GitHub" },
  { icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/sathivada-akhileswar-243b66237/", label: "LinkedIn" },
  { icon: IoLogoInstagram, href: "https://www.instagram.com/urs_akhileswar/", label: "Instagram" },
];

export default function Contact() {
  return (
    <section className="relative py-28">
      <span className="section-number">04</span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="space-y-12"
      >
        <motion.div variants={rise} className="max-w-xl">
          <p className="font-mono text-xs text-primary">04 / Contact</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            Let's work together
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Have a project in mind, need technical help, or just want to say hi?
            My inbox is always open.
          </p>
        </motion.div>

        <motion.div variants={rise} className="flex flex-wrap items-center gap-4">
          <Button size="lg" className="rounded-full px-6 cursor-pointer" asChild>
            <a href="mailto:akhileswarsathivada@gmail.com">
              <Mail className="mr-2 size-4" />
              Get In Touch
              <ArrowRight className="ml-1 size-4" />
            </a>
          </Button>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary/30 hover:text-primary hover:-translate-y-0.5"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-24 flex flex-col items-center gap-2 border-t border-border pt-8 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          Designed & Built by{" "}
          <a href="https://github.com/Akhileswar1905" className="text-foreground hover:text-primary transition-colors">
            Akhileswar
          </a>
        </p>
      </footer>
    </section>
  );
}
