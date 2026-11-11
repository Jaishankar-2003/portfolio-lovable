import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, personal } from "@/config/portfolio";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: pair native scroll-target-group with IntersectionObserver fallback + aria-current sync
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-border bg-background/85 py-2.5 backdrop-blur-md"
          : "bg-transparent py-4",
      )}
    >
      <a
        href="#main-content"
        className="visually-hidden fixed left-4 top-4 z-[70] rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#home"
          className="group inline-flex min-h-10 items-center gap-2.5 rounded-lg pr-2 transition"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-xs font-semibold tracking-tight text-primary transition group-hover:border-primary/60 group-hover:bg-primary/15">
            {personal.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-foreground sm:inline">
            Sri Jaya Shankaran
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="scrollspy-nav hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => {
            const isCurrent = activeId === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "true" : undefined}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                  isCurrent
                    ? "target-current text-foreground"
                    : "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card/70 text-muted-foreground transition hover:border-foreground/20 hover:text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center gap-1.5 rounded-lg border border-border bg-card/80 px-3.5 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="hidden min-h-10 items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 md:inline-flex"
          >
            <span>Contact</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card/70 text-foreground transition hover:bg-muted lg:hidden"
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="mx-4 mt-2 rounded-2xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur-lg lg:hidden"
          >
            <nav aria-label="Mobile Primary" className="grid gap-1">
              {navItems.map((item) => {
                const isCurrent = activeId === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isCurrent ? "true" : undefined}
                    className={cn(
                      "flex min-h-11 items-center rounded-xl px-3.5 py-2 text-sm font-medium transition",
                      isCurrent
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border pt-3">
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-border bg-background/70 px-3 py-2 text-sm font-medium text-foreground"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
                >
                  Contact
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
