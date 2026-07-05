import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, FolderGit2 } from "lucide-react";
import { projects } from "@/config/portfolio";
import { SectionHead } from "./about";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Projects" title="Selected work" subtitle="A mix of shipped work and DevOps / QA reference builds." />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur transition hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_var(--primary)]"
            >
              <div className={`relative h-40 w-full bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <FolderGit2 className="h-14 w-14 text-white/70 transition group-hover:scale-110" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[11px] text-foreground/80">{t}</span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium transition hover:border-primary/60 hover:text-primary">
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-1.5 rounded-lg gradient-bg px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_20px_-8px_var(--primary)] hover:shadow-[0_0_30px_-4px_var(--primary)]">
                      <ExternalLink className="h-3.5 w-3.5" /> Live
                    </a>
                  )}
                  {p.caseStudy && (
                    <a href={p.caseStudy}
                       className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium transition hover:border-secondary/60 hover:text-secondary">
                      <FileText className="h-3.5 w-3.5" /> Case study
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
