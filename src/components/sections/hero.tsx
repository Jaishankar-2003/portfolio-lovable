import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Cpu,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { personal, socials } from "@/config/portfolio";
import { HeroArchitecture } from "@/components/hero-architecture";

export function Hero() {
  const linkedin = socials.find((s) => s.name === "LinkedIn");
  const github = socials.find((s) => s.name === "GitHub");

  return (
    <section
      id="home"
      tabIndex={-1}
      className="relative isolate overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pt-32"
    >
      {/* Subtle architectural grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-70 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_20%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[380px] w-[min(650px,96vw)] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div>
          {/* Status + Multi-Domain Certification Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              <Award className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              AWS Certified Solutions Architect
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/20 px-2.5 py-1 text-xs font-medium text-foreground">
              <Cpu className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              Certified Laptop Chip-Level Engineer
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-foreground">
              <span
                className="h-1.5 w-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              {personal.availability}
            </span>
          </motion.div>

          {/* Identity & Role */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-5"
          >
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
              {personal.role}
            </p>
            <h1 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              {personal.name}
            </h1>
            <p className="mt-2.5 font-display text-base font-medium text-foreground/90 sm:text-xl">
              {personal.headline}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {personal.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-6 flex flex-wrap items-center gap-2.5"
          >
            <a
              href="#projects"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Resume</span>
            </a>

            <a
              href="#certifications"
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              <Award className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Certificates</span>
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-transparent px-3.5 py-2 text-sm font-medium text-muted-foreground transition hover:border-foreground/25 hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Contact</span>
            </a>
          </motion.div>

          {/* Quick Social Links & Focus Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-4 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              {linkedin && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-border bg-card/70 px-2.5 py-1 text-xs font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                >
                  <Linkedin
                    className="h-3.5 w-3.5 text-primary"
                    aria-hidden="true"
                  />
                  LinkedIn
                </a>
              )}
              {github && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-border bg-card/70 px-2.5 py-1 text-xs font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                >
                  <Github
                    className="h-3.5 w-3.5 text-foreground"
                    aria-hidden="true"
                  />
                  GitHub
                </a>
              )}
            </div>
            <span
              className="hidden h-3.5 w-px bg-border sm:inline-block"
              aria-hidden="true"
            />
            <span className="font-mono text-[11px]">
              {personal.specialization}
            </span>
          </motion.div>
        </div>

        {/* Technical Infrastructure Visual */}
        <HeroArchitecture />
      </div>
    </section>
  );
}
