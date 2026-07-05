import { ArrowUp, Heart } from "lucide-react";
import { navItems, personal, socials, techStack } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-border/60 bg-card/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl gradient-bg font-display font-bold text-white">
                {personal.shortName}
              </span>
              <span className="font-display text-lg font-semibold">{personal.name}</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              QA Automation Engineer · AWS Certified Solutions Architect ·
              DevOps enthusiast building reliable, scalable systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_25px_-8px_var(--primary)]"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">Quick links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-foreground/80 transition hover:text-primary">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">Tech stack</h4>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {techStack.slice(0, 12).map((t) => (
                <span key={t} className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[11px] text-foreground/80">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} {personal.name}. All rights reserved.</div>
          <div className="inline-flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 fill-destructive text-destructive" /> by {personal.name}
          </div>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 hover:border-primary/60 hover:text-primary"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
