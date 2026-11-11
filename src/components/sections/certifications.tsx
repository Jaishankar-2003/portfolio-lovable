import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Cloud,
  Cpu,
  ExternalLink,
  GraduationCap,
  ZoomIn,
} from "lucide-react";
import { certificationsList, education } from "@/config/portfolio";
import { SectionHeader } from "@/components/section-header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Certifications() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <section
      id="certifications"
      tabIndex={-1}
      className="border-t border-border py-10 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Credentials & Education"
          title="Verified Certifications & Academic Foundation"
          subtitle="AWS cloud architecture credentials alongside ISO 9001:2015 certified laptop chip-level engineering and a Computer Science degree."
        />

        <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2 sm:mt-8">
          {/* AWS Certification Card */}
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35 }}
            className="engineering-card relative flex flex-col justify-between overflow-hidden rounded-2xl border-primary/25 p-5 sm:p-7"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-primary/35 bg-primary/10 text-primary">
                    <Cloud className="h-6 w-6" aria-hidden="true" />
                    <Award
                      className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-card p-0.5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Cloud Architecture · SAA-C03
                    </span>
                    <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
                      AWS Certified Solutions Architect – Associate
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Issued by Amazon Web Services (AWS)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-border pt-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Core Architecture Competencies
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {certificationsList[0].focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-lg border border-border bg-background/70 px-2.5 py-0.5 text-xs text-foreground/90"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-border pt-3.5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 text-accent">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                Verified Associate Credential
              </span>
              <span className="font-mono text-[11px]">AWS SAA-C03</span>
            </div>
          </motion.article>

          {/* ICFix Laptop Chip-Level Certificate Card with Interactive Preview Modal */}
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="engineering-card relative flex flex-col justify-between overflow-hidden rounded-2xl border-accent/40 p-5 sm:p-7"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-accent/40 bg-accent/20 text-primary">
                    <Cpu className="h-6 w-6" aria-hidden="true" />
                    <Award
                      className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-card p-0.5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Hardware &amp; IT · Serial ICFA/LAP/2278
                    </span>
                    <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
                      Laptop Chip-Level Engineering Course
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      ICFix Services · ISO 9001:2015 Certified Academy
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground">
                &ldquo;An expert-level training program in laptop chip-level
                repairs, specializing in motherboard diagnostics, power issues,
                screen replacements, and hardware troubleshooting for all major
                laptop brands.&rdquo;
              </p>

              <div className="mt-4 border-t border-border pt-3.5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Core Diagnostic Competencies
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {certificationsList[1].focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-lg border border-border bg-background/70 px-2.5 py-0.5 text-xs text-foreground/90"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-border pt-3.5 text-xs">
              <span className="font-mono text-[11px] text-muted-foreground">
                Issued 04 March, 2025 · Chennai
              </span>

              <Dialog open={certModalOpen} onOpenChange={setCertModalOpen}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex min-h-8 items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary transition hover:bg-primary/20"
                  >
                    <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>View Certificate</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl border-border bg-card p-4 sm:p-6">
                  <DialogHeader>
                    <DialogTitle className="font-display text-lg font-bold text-foreground">
                      Laptop Chip-Level Course – Certificate of Completion
                    </DialogTitle>
                    <DialogDescription className="font-mono text-xs text-muted-foreground">
                      Candidate Serial No: ICFA/LAP/2278 · Issued by ICFix
                      Services (ISO 9001:2015 Certified)
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-2 overflow-hidden rounded-xl border border-border bg-black/40">
                    <img
                      src="/certificates/icfix-chip-level.jpg"
                      alt="Certificate of Completion for Sri jaya shankaran . R in Laptop Chip-Level Course from ICFix Services, Candidate Serial No: ICFA/LAP/2278"
                      className="max-h-[70vh] w-full object-contain"
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                    <span>
                      Issued in Chennai on 04th March, 2025 · Signed by Founder
                      Abdul Hameed A
                    </span>
                    <a
                      href="/certificates/icfix-chip-level.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      <span>Open full image</span>
                      <ExternalLink
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.article>
        </div>

        {/* Academic Education Card */}
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="engineering-card mt-5 flex flex-col justify-between rounded-2xl p-5 sm:p-7"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3.5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                  Academic Degree
                </span>
                <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
                  {education.degree}
                </h3>
                <p className="text-xs text-foreground/90 sm:text-sm">
                  {education.institution} · {education.university}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-background/70 px-3 py-1 font-mono text-xs text-muted-foreground">
              {education.period}
            </div>
          </div>

          <p className="mt-4 border-t border-border pt-3.5 text-xs leading-relaxed text-muted-foreground">
            Comprehensive computer science foundation covering computer
            architecture, operating systems, networking protocols (TCP/IP, UDP,
            DNS), data structures, and database management systems.
          </p>
        </motion.article>
      </div>
    </section>
  );
}
