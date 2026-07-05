import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/config/portfolio";
import { SectionHead } from "./about";
import { cn } from "@/lib/utils";

const PAGE = 3;

export function Blog() {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / PAGE));
  const items = blogPosts.slice(page * PAGE, page * PAGE + PAGE);
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Blog" title="Latest writing" subtitle="Notes on QA, cloud, and shipping reliable systems." />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="relative h-40 bg-gradient-to-br from-primary/30 via-secondary/25 to-accent/25">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute bottom-3 left-4 rounded-full glass px-3 py-1 text-[11px] text-foreground/80">
                  {p.readTime}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{p.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border disabled:opacity-40"
              aria-label="Prev page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={cn(
                  "h-9 min-w-9 rounded-lg px-3 text-sm font-medium",
                  i === page ? "gradient-bg text-white" : "border border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border disabled:opacity-40"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
