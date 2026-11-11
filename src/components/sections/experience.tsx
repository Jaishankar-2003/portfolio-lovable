import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Cpu,
  GraduationCap,
  MapPin,
  Wrench,
} from "lucide-react";
import { professionalExperience, trainings } from "@/config/portfolio";
import { SectionHeader } from "@/components/section-header";

export function Experience() {
  return (
    <section
      id="experience"
      tabIndex={-1}
      className="border-t border-border py-10 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Experience & Training"
          title="Professional Experience & Technical Development"
          subtitle="Production SDET quality engineering paired with certified chip-level hardware diagnostics and AWS DevOps training."
        />

        <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] sm:mt-8">
          {/* Professional Employment */}
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35 }}
            className="engineering-card relative flex flex-col justify-between rounded-2xl p-5 sm:p-7"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/12 text-accent">
                    <Briefcase className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                      Professional Experience
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                      {professionalExperience.role}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                <span className="font-display text-xs font-semibold text-foreground sm:text-sm">
                  {professionalExperience.company}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-primary" aria-hidden="true" />
                  {professionalExperience.location}
                </span>
                <span className="inline-flex items-center gap-1 font-mono">
                  <Calendar
                    className="h-3 w-3 text-primary"
                    aria-hidden="true"
                  />
                  {professionalExperience.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5">
                {professionalExperience.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground sm:text-sm"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-xl border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                SDET &amp; Systems Differentiator:{" "}
              </span>
              Applies root-cause log and API investigation skills across both
              software test environments and physical hardware systems.
            </div>
          </motion.article>

          {/* Technical Training & Hardware Development */}
          <div className="space-y-4">
            {trainings.map((t, idx) => {
              const Icon = t.icon ?? GraduationCap;
              return (
                <motion.article
                  key={t.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="engineering-card relative rounded-2xl p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/12 text-primary">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                            {t.badge}
                          </span>
                          {"serialNo" in t && t.serialNo && (
                            <span className="font-mono text-[9px] text-muted-foreground">
                              #{t.serialNo}
                            </span>
                          )}
                        </div>
                        <h4 className="font-display text-sm font-bold text-foreground sm:text-base">
                          {t.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {t.organization}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin
                        className="h-3 w-3 text-primary"
                        aria-hidden="true"
                      />
                      {t.location}
                    </span>
                    <span>·</span>
                    <span className="font-mono text-[11px]">{t.period}</span>
                  </div>

                  <ul className="mt-3 space-y-1.5">
                    {t.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
