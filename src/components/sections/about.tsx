import { motion } from "framer-motion";
import { Cpu, ShieldCheck } from "lucide-react";
import { aboutContent, personal } from "@/config/portfolio";
import { SectionHeader } from "@/components/section-header";

export function About() {
  return (
    <section
      id="about"
      tabIndex={-1}
      className="border-t border-border py-10 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Me"
          title="Reliability-first mindset from silicon to cloud infrastructure"
          subtitle="Combining certified laptop chip-level diagnostics, 1+ year of production SDET automation, and AWS DevOps engineering."
        />

        <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-start sm:mt-8">
          {/* Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35 }}
            className="engineering-card rounded-2xl p-5 sm:p-7"
          >
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 font-mono text-sm font-bold text-primary">
                  {personal.initials}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {personal.name}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {personal.role} · {personal.location}
                  </p>
                </div>
              </div>

              <span className="hidden items-center gap-1 rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary sm:inline-flex">
                <Cpu className="h-3 w-3" aria-hidden="true" />
                Hardware Passion
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm leading-relaxed text-muted-foreground">
              {aboutContent.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4 text-xs">
              <span className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-foreground">
                <ShieldCheck
                  className="h-3.5 w-3.5 text-accent"
                  aria-hidden="true"
                />
                Root-Cause Investigation
              </span>
              <span className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-foreground">
                <Cpu className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                Component-Level Diagnostics
              </span>
            </div>
          </motion.div>

          {/* Visual Engineering Journey */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: 0.06 }}
            className="engineering-card rounded-2xl p-5 sm:p-7"
          >
            <div className="flex items-center justify-between border-b border-border pb-3.5">
              <h3 className="font-display text-base font-semibold text-foreground">
                Engineering Journey
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                Hardware → SDET → Cloud
              </span>
            </div>

            <ol className="relative mt-5 space-y-4 before:absolute before:bottom-3 before:left-[15px] before:top-3 before:w-px before:bg-border">
              {aboutContent.journey.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.step} className="relative flex gap-3.5 pl-1">
                    <span className="relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-primary">
                          {item.step}
                        </span>
                        <h4 className="font-display text-xs font-semibold text-foreground sm:text-sm">
                          {item.title}
                        </h4>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
