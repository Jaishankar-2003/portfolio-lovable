import { ArrowUp } from "lucide-react";
import { navItems, personal, socials } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-xs font-bold text-primary">
                {personal.initials}
              </span>
              <span className="font-display text-base font-semibold text-foreground">
                {personal.name}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              {personal.role} · {personal.specialization}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={s.label}
                className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-background/70 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
              >
                <s.icon className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {personal.name}. Built for clarity and
            reliability.
          </p>
          <a
            href="#home"
            className="inline-flex min-h-8 items-center gap-1.5 rounded-lg border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
