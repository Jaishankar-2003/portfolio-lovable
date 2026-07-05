import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, personal, socials } from "@/config/portfolio";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all",
            scrolled ? "glass shadow-lg" : "bg-transparent",
          )}
        >
          <a href="#home" className="group flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-bg font-display text-sm font-bold text-white shadow-[0_0_20px_-4px_var(--primary)]">
              {personal.shortName}
            </span>
            <span className="hidden font-display text-sm font-semibold sm:inline">
              {personal.name.split(" ")[0]} <span className="text-muted-foreground">/ Portfolio</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 md:flex">
              {socials.slice(0, 4).map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 text-foreground transition hover:bg-muted"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href={personal.resumeUrl}
              className="hidden items-center gap-2 rounded-lg gradient-bg px-4 py-2 text-sm font-medium text-white shadow-[0_0_25px_-6px_var(--primary)] transition hover:translate-y-[-1px] hover:shadow-[0_0_35px_-4px_var(--primary)] md:inline-flex"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <button
              className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass mt-2 rounded-2xl p-3 lg:hidden"
            >
              <div className="grid gap-1">
                {navItems.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href={personal.resumeUrl}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg gradient-bg px-4 py-2 text-sm font-medium text-white"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
