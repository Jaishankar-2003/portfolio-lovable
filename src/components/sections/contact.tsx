import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Globe,
  Mail,
  Phone,
} from "lucide-react";
import { personal, socials } from "@/config/portfolio";
import { SectionHeader } from "@/components/section-header";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <section
      id="contact"
      tabIndex={-1}
      className="border-t border-border py-10 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35 }}
          className="engineering-card relative overflow-hidden rounded-3xl p-5 sm:p-8 md:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Contact"
                title="Let's Build Something Reliable Together."
                subtitle="Open to Junior DevOps, AWS Cloud Infrastructure, Cloud Operations, IT Support & Systems Engineering opportunities."
              />

              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <a
                  href={`mailto:${personal.email}?subject=Opportunity%20%E2%80%94%20DevOps%20%2F%20Cloud%20%2F%20IT%20Systems`}
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Send an Email</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-border bg-background/80 px-3.5 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  {copied ? (
                    <>
                      <Check
                        className="h-4 w-4 text-accent"
                        aria-hidden="true"
                      />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-border bg-background/80 px-3.5 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Resume</span>
                </a>
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-2.5">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/70 p-3.5 transition hover:border-primary/40"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Email
                    </div>
                    <div className="truncate text-xs font-medium text-foreground sm:text-sm">
                      {personal.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
              </a>

              <a
                href={personal.phoneHref}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/70 p-3.5 transition hover:border-primary/40"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Phone
                    </div>
                    <div className="font-mono text-xs font-medium text-foreground sm:text-sm">
                      {personal.phone}
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
              </a>

              <a
                href={personal.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/70 p-3.5 transition hover:border-primary/40"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Globe className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Portfolio
                    </div>
                    <div className="truncate font-mono text-xs font-medium text-foreground sm:text-sm">
                      jaishankar.vercel.app
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
              </a>

              {/* Social Profile Buttons */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {socials
                  .filter((s) => s.name !== "Email")
                  .map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-background/70 px-2 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
                    >
                      <s.icon className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{s.name}</span>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
