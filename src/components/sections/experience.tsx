import { motion } from "framer-motion";
import { experiences } from "@/config/portfolio";
import { SectionHead } from "./about";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHead
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Building reliable systems across QA, cloud, and infrastructure."
        />

        <div className="mt-14 space-y-6">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.article
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass group relative overflow-hidden rounded-3xl border border-border/60 p-6 transition hover:border-primary/40 hover:bg-card/80 sm:p-8"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />

                <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-1 gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-display text-lg font-semibold">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1 rounded-full border border-border/40 bg-card/40 px-2.5 py-1">
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-border/40 bg-card/40 px-2.5 py-1">
                          {exp.location}
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2">
                        {exp.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-0 -top-px h-px shimmer-border opacity-0 transition group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
