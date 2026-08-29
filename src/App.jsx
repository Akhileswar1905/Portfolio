import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

const NAV = ["About", "Projects", "Experience", "Contact"];

export default function App() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const refs = {
    home: useRef(null),
    About: useRef(null),
    Projects: useRef(null),
    Experience: useRef(null),
    Contact: useRef(null),
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (key) => refs[key]?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="grain">
      {/* ── Navbar ── */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled
            ? "py-2 border-b border-border bg-background/80 backdrop-blur-xl"
            : "py-4 bg-transparent"
        }`}
      >
        <div
          className="cursor-pointer font-display text-xl font-extrabold tracking-tight"
          onClick={() => go("home")}
        >
          A<span className="text-primary">.</span>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((l, i) => (
            <button
              key={l}
              onClick={() => go(l)}
              className="group flex items-center gap-1.5 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              <span className="font-mono text-[0.65rem] text-primary">0{i + 1}</span>
              {l}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggle}
            className="rounded-full cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </motion.div>
            </AnimatePresence>
          </Button>

          <div className="hidden md:flex items-center gap-1.5">
            <Button variant="ghost" size="icon-sm" className="rounded-full" asChild>
              <a href="https://github.com/Akhileswar1905" target="_blank" rel="noreferrer">
                <IoLogoGithub size={16} />
              </a>
            </Button>
            <Button variant="ghost" size="icon-sm" className="rounded-full" asChild>
              <a href="https://www.linkedin.com/in/sathivada-akhileswar-243b66237/" target="_blank" rel="noreferrer">
                <IoLogoLinkedin size={16} />
              </a>
            </Button>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon-sm"><Menu className="size-5" /></Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 border-border bg-background">
                <SheetHeader>
                  <SheetTitle className="font-display">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-1">
                  {NAV.map((l, i) => (
                    <button
                      key={l}
                      onClick={() => { go(l); setSheetOpen(false); }}
                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-left text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
                    >
                      <span className="font-mono text-xs text-primary">0{i + 1}</span>
                      {l}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* ── Content ── */}
      <main className="mx-auto max-w-6xl px-5 pt-20 sm:px-8">
        <div ref={refs.home}><Hero contactRef={refs.Contact} /></div>
        <div ref={refs.About}><About /></div>
        <div ref={refs.Projects}><Projects /></div>
        <div ref={refs.Experience}><Experience /></div>
        <div ref={refs.Contact}><Contact /></div>
      </main>
    </div>
  );
}
