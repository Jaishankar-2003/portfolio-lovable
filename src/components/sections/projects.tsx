import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Box,
  CheckCircle2,
  Cloud,
  Database,
  GitBranch,
  Github,
  Globe,
  Layers,
  Server,
  Shield,
  TestTube2,
} from "lucide-react";
import {
  automationProjects,
  featuredProjects,
  liveStaticSites,
  type FeaturedProject,
} from "@/config/portfolio";
import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";

const statusBadgeStyles: Record<FeaturedProject["status"], string> = {
  "Deployed / Hands-On": "border-accent/40 bg-accent/20 text-foreground",
  "In Progress": "border-primary/35 bg-primary/10 text-primary",
  "Learning Project": "border-border bg-muted text-muted-foreground",
};

export function Projects() {
  const flagship = featuredProjects.find((p) => p.featured);
  const secondaryProjects = featuredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      tabIndex={-1}
      className="border-t border-border py-10 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Cloud Deployments, CI/CD & Automation Engineering"
          subtitle="Hands-on AWS infrastructure deployments, ongoing DevOps automation workflows, live static sites, and production QA engineering suites."
        />

        {/* Flagship Project Card */}
        {flagship && (
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35 }}
            className="engineering-card mt-7 overflow-hidden rounded-2xl border-primary/25 p-5 sm:mt-8 sm:p-7"
          >
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-primary/12 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Flagship Project
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 font-mono text-[10px] font-medium",
                      statusBadgeStyles[flagship.status],
                    )}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-current"
                      aria-hidden="true"
                    />
                    {flagship.status}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                  {flagship.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {flagship.description}
                </p>

                <div className="mt-3.5 rounded-xl border border-border bg-muted/40 p-3.5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                    My Contribution
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/90 sm:text-sm">
                    {flagship.contribution}
                  </p>
                </div>

                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {flagship.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {flagship.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-background/80 px-2 py-0.5 font-mono text-[11px] text-foreground/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {flagship.githubUrl && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={flagship.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-9 items-center gap-2 rounded-xl border border-border bg-background/70 px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>GitHub Profile</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                )}
              </div>

              {/* Flagship Architecture Diagram */}
              <JspcsArchitectureDiagram />
            </div>
          </motion.article>
        )}

        {/* Secondary DevOps / Cloud Projects */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {secondaryProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="engineering-card flex flex-col justify-between rounded-2xl p-5 transition hover:border-primary/35"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[10px] font-medium",
                      statusBadgeStyles[project.status],
                    )}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-current"
                      aria-hidden="true"
                    />
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg font-bold text-foreground sm:text-xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {project.description}
                </p>

                {/* Compact Flow Visual */}
                <div className="mt-4">
                  {project.diagramType === "cicd-pipeline" ? (
                    <CicdMiniDiagram />
                  ) : (
                    <StaticDeliveryMiniDiagram />
                  )}
                </div>

                <p className="mt-3.5 text-xs leading-relaxed text-foreground/85">
                  <span className="font-mono font-semibold text-primary">
                    Focus:{" "}
                  </span>
                  {project.contribution}
                </p>

                <ul className="mt-3.5 space-y-1.5">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border-t border-border pt-3.5">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-background/80 px-2 py-0.5 font-mono text-[10px] text-foreground/85 sm:text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Live Static Sites Developed */}
        <div className="mt-7 sm:mt-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
              Live Static Sites Developed
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              Publicly accessible web deployments
            </span>
          </div>
          <div className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {liveStaticSites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="engineering-card group flex items-center justify-between gap-3 rounded-xl p-3.5 transition hover:border-primary/40"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Globe className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-xs font-semibold text-foreground group-hover:text-primary sm:text-sm">
                      {site.name}
                    </div>
                    <div className="truncate font-mono text-[11px] text-muted-foreground">
                      {site.domain}
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Compact Additional Automation Projects */}
        <div className="mt-8 sm:mt-10">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                Quality Engineering &amp; Automation
              </p>
              <h3 className="mt-0.5 font-display text-lg font-bold text-foreground sm:text-xl">
                Production QA &amp; Performance Automation Work
              </h3>
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              SDET differentiator · Reliability &amp; validation
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {automationProjects.map((item) => (
              <div
                key={item.title}
                className="engineering-card flex flex-col justify-between rounded-xl p-4 transition hover:border-primary/30"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium text-primary">
                      <TestTube2 className="h-3 w-3" aria-hidden="true" />
                      {item.focus}
                    </span>
                  </div>
                  <h4 className="mt-2 font-display text-xs font-semibold text-foreground sm:text-sm">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-3.5 border-t border-border pt-2.5 font-mono text-[10px] text-muted-foreground">
                  {item.stack}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JspcsArchitectureDiagram() {
  return (
    <div
      role="img"
      aria-label="Architecture diagram showing HTTP traffic routed through an AWS Application Load Balancer to an EC2 Linux instance running Docker Compose with React/Vite on port 5173, FastAPI backend, and PostgreSQL database"
      className="rounded-xl border border-border bg-background/70 p-4 dot-grid-bg"
    >
      <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
        <span className="font-mono text-[11px] font-semibold text-foreground">
          AWS Multi-Tier Deployment Topology
        </span>
        <span className="font-mono text-[10px] text-accent">
          EC2 + Docker Compose
        </span>
      </div>

      <div className="space-y-2.5">
        {/* Layer 1: Client -> ALB */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1.5">
            <Globe className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span className="font-mono text-[11px] text-foreground">
              Client HTTP
            </span>
          </div>
          <div className="hidden h-px flex-1 border-t border-dashed border-primary/50 sm:block" />
          <div className="flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-2.5 py-1.5">
            <Shield className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <div>
              <div className="text-[11px] font-semibold text-foreground">
                Application Load Balancer
              </div>
              <div className="font-mono text-[9px] text-muted-foreground">
                HTTP Listener Routing
              </div>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="h-3 w-px border-l border-dashed border-primary/60" />
            <span className="rounded border border-border bg-card px-2 py-0.5 font-mono text-[9px] text-muted-foreground">
              Target Port :5173
            </span>
            <div className="h-3 w-px border-l border-dashed border-primary/60" />
          </div>
        </div>

        {/* Layer 2: EC2 Host */}
        <div className="rounded-xl border border-dashed border-primary/40 bg-card/80 p-3">
          <div className="flex items-center justify-between gap-2 border-b border-border pb-2">
            <div className="flex items-center gap-1.5">
              <Server className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span className="text-[11px] font-semibold text-foreground">
                AWS EC2 Instance (Linux)
              </span>
            </div>
            <span className="font-mono text-[9px] text-muted-foreground">
              Docker Compose
            </span>
          </div>

          <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-background/80 p-2">
              <div className="flex items-center gap-1 text-primary">
                <Box className="h-3 w-3" aria-hidden="true" />
                <span className="font-mono text-[10px] font-semibold">
                  React + Vite
                </span>
              </div>
              <p className="mt-0.5 font-mono text-[9px] text-muted-foreground">
                Frontend :5173
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background/80 p-2">
              <div className="flex items-center gap-1 text-accent">
                <Layers className="h-3 w-3" aria-hidden="true" />
                <span className="font-mono text-[10px] font-semibold">
                  FastAPI
                </span>
              </div>
              <p className="mt-0.5 font-mono text-[9px] text-muted-foreground">
                Backend API
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background/80 p-2">
              <div className="flex items-center gap-1 text-primary">
                <Database className="h-3 w-3" aria-hidden="true" />
                <span className="font-mono text-[10px] font-semibold">
                  PostgreSQL
                </span>
              </div>
              <p className="mt-0.5 font-mono text-[9px] text-muted-foreground">
                Database Tier
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CicdMiniDiagram() {
  const stages = [
    { label: "GitHub", icon: GitBranch },
    { label: "Jenkins", icon: Layers },
    { label: "Docker/ECR", icon: Box },
    { label: "TF + EC2", icon: Server },
  ];
  return (
    <div
      role="img"
      aria-label="CI/CD workflow stages: GitHub to Jenkins to Docker and Amazon ECR to Terraform and EC2"
      className="grid grid-cols-2 gap-1.5 rounded-xl border border-border bg-background/60 p-2.5 sm:grid-cols-4"
    >
      {stages.map((s) => (
        <div
          key={s.label}
          className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5"
        >
          <s.icon
            className="h-3 w-3 shrink-0 text-primary"
            aria-hidden="true"
          />
          <span className="truncate font-mono text-[10px] text-foreground">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function StaticDeliveryMiniDiagram() {
  const stages = [
    { label: "GitHub", icon: GitBranch },
    { label: "S3 Origin", icon: Cloud },
    { label: "CloudFront", icon: Globe },
    { label: "Route 53", icon: Shield },
  ];
  return (
    <div
      role="img"
      aria-label="Static hosting delivery flow: GitHub to S3 Origin to CloudFront to Route 53 and ACM HTTPS"
      className="grid grid-cols-2 gap-1.5 rounded-xl border border-border bg-background/60 p-2.5 sm:grid-cols-4"
    >
      {stages.map((s) => (
        <div
          key={s.label}
          className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5"
        >
          <s.icon
            className="h-3 w-3 shrink-0 text-primary"
            aria-hidden="true"
          />
          <span className="truncate font-mono text-[10px] text-foreground">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
