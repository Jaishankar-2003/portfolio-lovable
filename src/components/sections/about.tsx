import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { CheckCircle2, Cloud, Cpu, Network, TestTube2, Wrench } from "lucide-react";
import { stats } from "@/config/portfolio";

const traits = [
  { icon: TestTube2, label: "QA Automation Engineer" },
  { icon: Cloud, label: "AWS Certified" },
  { icon: Cpu, label: "Hardware Engineer" },
  { icon: Network, label: "Networking Background" },
  { icon: Cloud, label: "Cloud Enthusiast" },
  { icon: Wrench, label: "DevOps Learner" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  useEffect(() => { if (inView) mv.set(value); }, [inView, value, mv]);
  useEffect(() =>
    spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.floor(v).toString() + suffix;
    }),
  [spring, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead eyebrow="About" title="A little bit about me" />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass relative overflow-hidden rounded-3xl p-8"
          >
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl gradient-bg font-display text-2xl font-bold text-white shadow-[0_0_30px_-6px_var(--primary)]">
                SJ
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Sri Jaya Shankaran R</h3>
                <p className="text-sm text-muted-foreground">QA · Cloud · DevOps</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              I work across three complementary domains — QA automation, cloud
              engineering, and hardware / infrastructure. That mix lets me build
              reliable end-to-end pipelines and reason about systems from the
              silicon to the deployment target.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2">
              {traits.map((t) => (
                <div key={t.label} className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/40 px-3 py-2 text-xs">
                  <t.icon className="h-4 w-4 text-primary" />
                  <span>{t.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["QA", "Cloud", "Infrastructure"].map((d) => (
                <span key={d} className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {d}
                </span>
              ))}
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">3+ Domains</span>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="font-display text-2xl font-semibold">
                Building at the intersection of <span className="gradient-text">quality, cloud & scale</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                I'm a QA Automation Engineer and AWS Certified Solutions Architect
                who cares about reliability, developer experience, and shipping
                software that behaves correctly under load. Before software I
                spent years repairing hardware at the chip level and running a
                small computer service business — that background shapes how I
                think about systems today.
              </p>
              <ul className="mt-5 grid gap-2 text-sm">
                {[
                  "Design end-to-end test automation frameworks (Playwright, Selenium, REST).",
                  "Ship cloud infrastructure on AWS with IaC and CI/CD.",
                  "Bridge dev, QA and ops — from Git commit to Kubernetes pod.",
                ].map((l) => (
                  <li key={l} className="flex gap-2 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {l}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-2xl p-5 text-center"
                >
                  <div className="font-display text-3xl font-bold gradient-text">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
        <span className="h-1 w-1 rounded-full bg-primary" /> {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
