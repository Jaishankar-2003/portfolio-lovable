import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { categoryIcons, skillCategories, skills, type SkillCategory } from "@/config/portfolio";
import { SectionHead } from "./about";
import { cn } from "@/lib/utils";

export function Skills() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<SkillCategory | "All">("All");

  const filtered = useMemo(
    () =>
      skills.filter(
        (s) =>
          (cat === "All" || s.category === cat) &&
          s.name.toLowerCase().includes(q.toLowerCase()),
      ),
    [q, cat],
  );

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Skills" title="Tools I reach for" subtitle="Search or filter across cloud, DevOps, testing, languages, and hardware." />

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-stretch gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search a skill…"
              className="w-full rounded-xl border border-border bg-card/60 py-3 pl-10 pr-4 text-sm outline-none backdrop-blur transition placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(["All", ...skillCategories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-xl border px-3 py-2 text-xs font-medium transition",
                  cat === c
                    ? "border-transparent gradient-bg text-white shadow-[0_0_20px_-6px_var(--primary)]"
                    : "border-border bg-card/60 text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, i) => {
            const Icon = categoryIcons[s.category as SkillCategory];
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 9) * 0.03 }}
                className="group glass relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute inset-x-0 -top-px h-px shimmer-border opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{s.category}</div>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                </div>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full gradient-bg"
                  />
                </div>
              </motion.div>
            );
          })}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
              No skills match "{q}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
