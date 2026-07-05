import { useRef } from "react";
import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink, Trophy } from "lucide-react";
import { achievements, certifications } from "@/config/portfolio";
import { SectionHead } from "./about";

export function Certifications() {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="Certifications" title="Credentials & achievements" />

        <div className="mt-12 flex items-center justify-end gap-2">
          <button onClick={() => scroll(-1)} aria-label="Prev" className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 hover:border-primary/60 hover:text-primary">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => scroll(1)} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 hover:border-primary/60 hover:text-primary">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div
          ref={scroller}
          className="mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {certifications.map((c) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative min-w-[320px] max-w-[360px] shrink-0 snap-start rounded-3xl p-[1px] shimmer-border"
            >
              <div className="glass h-full rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-bg text-white shadow-[0_0_25px_-6px_var(--primary)]">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="text-xs text-muted-foreground">{c.date}</div>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
                {c.credentialUrl && (
                  <a href={c.credentialUrl} target="_blank" rel="noreferrer"
                     className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium hover:border-primary/60 hover:text-primary">
                    <ExternalLink className="h-3.5 w-3.5" /> View credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-center">
            <span className="gradient-text">Highlights</span>
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="glass flex items-center gap-3 rounded-2xl p-4"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Trophy className="h-4 w-4" />
                </div>
                <span className="text-sm">{a}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
