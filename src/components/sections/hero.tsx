import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, FolderGit2, Sparkles } from "lucide-react";
import { personal } from "@/config/portfolio";
import { AnimatedBackground } from "../animated-background";

function useTypewriter(words: string[], speed = 65, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") { setDel(false); setI((v) => v + 1); }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

const skills = ["Playwright", "Selenium", "API Testing", "CI/CD", "Jenkins", "Docker", "Kubernetes", "AWS", "Linux", "Git", "Java", "Python"];

export function Hero() {
  const typed = useTypewriter(personal.roles);

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28">
      <AnimatedBackground />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hello <span className="inline-block animate-float-slow">👋</span>
            <br />
            I'm <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 flex h-8 items-center font-display text-xl text-foreground/80 sm:text-2xl"
          >
            <Sparkles className="mr-2 h-5 w-5 text-secondary" />
            <span>{typed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-primary" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            {personal.tagline} I specialize in modern QA, DevOps and cloud tooling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {skills.map((s) => (
              <span
                key={s}
                className="glass rounded-full px-3 py-1 text-xs text-foreground/80"
              >
                {s}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-6 max-w-2xl text-sm text-muted-foreground"
          >
            {personal.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={personal.resumeUrl}
              className="group inline-flex items-center gap-2 rounded-xl gradient-bg px-5 py-3 text-sm font-semibold text-white shadow-[0_0_35px_-8px_var(--primary)] transition hover:translate-y-[-2px] hover:shadow-[0_0_55px_-4px_var(--primary)]"
            >
              <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-primary/60 hover:text-primary"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-secondary/60 hover:text-secondary"
            >
              <FolderGit2 className="h-4 w-4" /> View Projects
            </a>
          </motion.div>
        </div>

        <HeroCard />
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 blur-2xl" />
      <div className="relative glass rounded-3xl p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2 border-b border-border/60 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">~/sri — zsh</span>
        </div>
        <pre className="mt-4 whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-foreground/85">
{`$ whoami
> sri-jaya-shankaran

$ cat role.json
{
  "title":  "QA Automation Engineer",
  "cloud":  "AWS SAA-C03",
  "loves":  ["Playwright", "K8s", "Linux"],
  "mission":"ship reliable systems"
}

$ deploy --to production
`}<span className="gradient-text">✔ pipeline green · tests 100% · shipped</span>
        </pre>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] text-muted-foreground">
          <div className="rounded-xl border border-border/60 py-2">
            <div className="font-display text-lg text-primary">120+</div>PRs merged
          </div>
          <div className="rounded-xl border border-border/60 py-2">
            <div className="font-display text-lg text-secondary">1k+</div>Tests
          </div>
          <div className="rounded-xl border border-border/60 py-2">
            <div className="font-display text-lg text-accent">99.9%</div>Uptime
          </div>
        </div>
      </div>
    </motion.div>
  );
}
