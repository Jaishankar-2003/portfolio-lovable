import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";
type Ctx = { theme: Theme; toggle: () => void };
const ThemeCtx = createContext<Ctx>({ theme: "dark", toggle: () => { } });

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) {
    meta.setAttribute("content", theme);
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("sjs_theme_palette") as Theme | null;
      const initial: Theme =
        stored === "light" || stored === "dark" ? stored : "light";
      setTheme(initial);
      applyTheme(initial);
    } catch {
      applyTheme("light");
    }

    const onStorage = (e: StorageEvent) => {
      if (
        e.key === "sjs_theme_palette" &&
        (e.newValue === "light" || e.newValue === "dark")
      ) {
        setTheme(e.newValue);
        applyTheme(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem("sjs_theme_palette", next);
      } catch {
        // Ignore storage write failure in restricted contexts
      }
      return next;
    });
  };

  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
