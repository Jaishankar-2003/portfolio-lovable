import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, MapPin, Phone, Send } from "lucide-react";
import { personal, socials } from "@/config/portfolio";
import { SectionHead } from "./about";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Contact" title="Let's build something reliable" subtitle="Have an opportunity, project, or just want to chat about QA and cloud? Reach out." />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-3xl p-8">
            <h3 className="font-display text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer email? I usually reply within 24 hours.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <InfoRow icon={Mail} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
              <InfoRow icon={Phone} label="Phone" value={personal.phone} href={`tel:${personal.phone.replace(/\s+/g, "")}`} />
              <InfoRow icon={MapPin} label="Location" value={personal.location} />
            </div>

            <div className="mt-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Social</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="group relative grid h-11 w-11 place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_25px_-8px_var(--primary)]"
                  >
                    <s.icon className="h-4 w-4" />
                    <span className="pointer-events-none absolute -top-8 whitespace-nowrap rounded-md bg-foreground/90 px-2 py-0.5 text-[10px] text-background opacity-0 transition group-hover:opacity-100">
                      {s.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass relative overflow-hidden rounded-3xl p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required placeholder="Your name" />
              <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
              <div className="sm:col-span-2">
                <Field label="Subject" name="subject" required placeholder="What's this about?" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about your project…"
                  className="mt-1 w-full resize-none rounded-xl border border-border bg-background/60 p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-bg px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_var(--primary)] transition hover:translate-y-[-1px] hover:shadow-[0_0_50px_-4px_var(--primary)]"
            >
              <Send className="h-4 w-4" /> Send message
            </button>

            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent"
                >
                  <Check className="h-4 w-4" /> Message sent — I'll be in touch soon.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon, label, value, href,
}: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const content = (
    <>
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-3 rounded-xl p-2 -mx-2 transition hover:bg-muted/60">{content}</a>
  ) : (
    <div className="flex items-center gap-3 p-2 -mx-2">{content}</div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-1 w-full rounded-xl border border-border bg-background/60 px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
