import { useState } from "react";
import { motion } from "framer-motion";
import { skillFilterTabs, skillGroups } from "@/config/portfolio";
import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";

type FilterTabId = (typeof skillFilterTabs)[number]["id"];

const familiarityBadgeStyle: Record<string, string> = {
  "Production Experience": "border-accent/40 bg-accent/20 text-foreground",
  "Certified & Hands-On": "border-primary/30 bg-primary/10 text-primary",
  "Hands-on Deployment": "border-primary/30 bg-primary/10 text-primary",
  "Hands-on & Lab": "border-primary/30 bg-primary/10 text-primary",
  "Foundational & Lab": "border-border bg-muted text-muted-foreground",
};

export function Skills() {
  const [activeTab, setActiveTab] = useState<FilterTabId>("all");

  const visibleGroups =
    activeTab === "all"
      ? skillGroups
      : skillGroups.filter((group) => group.filterGroup === activeTab);

  return (
    <section id="skills" tabIndex={-1} className="border-t border-border py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Technical Skills"
            title="Cloud, DevOps, Hardware & QA Engineering Stack"
            subtitle="Organized by domain with clear distinctions: 1+ year production SDET automation, hands-on AWS deployments, certified chip-level IT diagnostics, and foundational DevOps tooling."
          />

          {/* Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter technical skills by domain"
            className="flex flex-wrap gap-1 rounded-xl border border-border bg-card/70 p-1"
          >
            {skillFilterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "min-h-8 rounded-lg px-2.5 py-1 text-xs font-medium transition",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:mt-8">
          {visibleGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
                className="engineering-card group flex flex-col justify-between rounded-2xl p-4.5 transition hover:border-primary/35 sm:p-5"
              >
                <div>
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-muted/60 text-primary transition group-hover:border-primary/30 group-hover:bg-primary/10">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-sm font-semibold text-foreground sm:text-base">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-2.5">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] font-medium",
                        familiarityBadgeStyle[group.familiarity],
                      )}
                    >
                      {group.familiarity}
                    </span>
                  </div>

                  <ul className="mt-3.5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="inline-flex items-center gap-1 rounded-lg border border-border bg-background/70 px-2 py-0.5 text-xs text-foreground/90"
                      >
                        <span>{item.name}</span>
                        {item.note && (
                          <span className="font-mono text-[10px] text-primary">
                            · {item.note}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
