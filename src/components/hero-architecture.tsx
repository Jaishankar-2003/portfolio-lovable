import { useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Box,
  Cloud,
  Database,
  GitBranch,
  Globe,
  Layers,
  Server,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

type TabMode = "topology" | "pipeline";

type InfraNode = {
  id: string;
  label: string;
  sublabel: string;
  detail: string;
  badge: string;
};

const topologyNodes: InfraNode[] = [
  {
    id: "alb",
    label: "Application Load Balancer",
    sublabel: "HTTP Traffic Routing",
    detail:
      "Receives incoming client traffic and routes HTTP requests to the EC2 target on port 5173.",
    badge: "AWS ALB",
  },
  {
    id: "ec2",
    label: "AWS EC2 Instance (Linux)",
    sublabel: "Docker Compose Runtime",
    detail:
      "Hosts containerized multi-tier services with port mapping, container health checks, and service logs.",
    badge: "Compute",
  },
  {
    id: "frontend",
    label: "React + Vite",
    sublabel: "Frontend · Port 5173",
    detail:
      "Point-of-Sale client interface exposed behind the ALB and connected to backend APIs.",
    badge: ":5173",
  },
  {
    id: "backend",
    label: "FastAPI + PostgreSQL",
    sublabel: "Backend API & Database",
    detail:
      "API backend and PostgreSQL database orchestrated together via Docker Compose bridge networking.",
    badge: "Compose",
  },
];

const pipelineNodes: InfraNode[] = [
  {
    id: "github",
    label: "GitHub Repository",
    sublabel: "Source Control",
    detail:
      "Branching, pull requests, and commit webhooks triggering automated pipeline builds.",
    badge: "SCM",
  },
  {
    id: "jenkins",
    label: "Jenkins Declarative Pipeline",
    sublabel: "Jenkinsfile Stages",
    detail:
      "Checkout, build & validation stages, Docker image creation, and deployment orchestration.",
    badge: "CI/CD",
  },
  {
    id: "ecr",
    label: "Docker & Amazon ECR",
    sublabel: "Container Registry",
    detail:
      "Packages application services into tagged Docker images for publishing to Amazon ECR.",
    badge: "Registry",
  },
  {
    id: "terraform",
    label: "Terraform + EC2 + CloudWatch",
    sublabel: "Provision & Verify",
    detail:
      "IaC resource provisioning concepts paired with EC2 deployment checks and log inspection.",
    badge: "IaC / Ops",
  },
];

export function HeroArchitecture() {
  const [tab, setTab] = useState<TabMode>("topology");
  const [selectedId, setSelectedId] = useState<string>("alb");
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const prefersReduced = useReducedMotion();

  const nodes = tab === "topology" ? topologyNodes : pipelineNodes;
  const activeNode = nodes.find((n) => n.id === selectedId) ?? nodes[0];

  const handleTabChange = (next: TabMode) => {
    setTab(next);
    setSelectedId(next === "topology" ? "alb" : "github");
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -y * 5, ry: x * 5 });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1100,
      }}
      className="relative mx-auto w-full max-w-xl"
    >
      {/* Subtle architectural glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 blur-2xl"
      />

      <motion.div
        animate={
          prefersReduced ? undefined : { rotateX: tilt.rx, rotateY: tilt.ry }
        }
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="engineering-card relative overflow-hidden rounded-2xl p-3.5 shadow-2xl sm:p-6"
      >
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3.5 sm:gap-3 sm:pb-4">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/12 text-primary">
              <Cloud className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-xs font-semibold text-foreground">
                aws-infra-blueprint
              </p>
              <p className="font-mono text-[10px] text-muted-foreground sm:text-[11px]">
                interactive architecture view
              </p>
            </div>
          </div>

          <div
            role="tablist"
            aria-label="Architecture view selector"
            className="inline-flex rounded-lg border border-border bg-muted/60 p-0.5"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === "topology"}
              onClick={() => handleTabChange("topology")}
              className={cn(
                "rounded-md px-2 py-1 font-mono text-[10px] font-medium transition sm:px-2.5 sm:text-[11px]",
                tab === "topology"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              AWS Topology
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "pipeline"}
              onClick={() => handleTabChange("pipeline")}
              className={cn(
                "rounded-md px-2 py-1 font-mono text-[10px] font-medium transition sm:px-2.5 sm:text-[11px]",
                tab === "pipeline"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              CI/CD Flow
            </button>
          </div>
        </div>

        {/* Interactive topology diagram */}
        <div className="relative mt-4 rounded-xl border border-border bg-background/60 p-2.5 dot-grid-bg sm:mt-5 sm:p-4">
          <div className="mb-2.5 flex items-center justify-between text-[10px] font-mono text-muted-foreground sm:mb-3 sm:text-[11px]">
            <span className="truncate pr-2">
              {tab === "topology"
                ? "Multi-Tier AWS Deployment (JSPCS POS)"
                : "Automated Build & Delivery Workflow"}
            </span>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-accent">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              Click node
            </span>
          </div>

          {tab === "topology" ? (
            <div className="grid gap-2 sm:gap-2.5">
              {/* Row 1: Client -> ALB */}
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2">
                <div className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs text-muted-foreground sm:py-2">
                  <Globe
                    className="h-3.5 w-3.5 text-primary"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] sm:text-[11px]">
                    HTTP Traffic
                  </span>
                </div>
                <div className="hidden sm:block">
                  <FlowLine />
                </div>
                <NodeButton
                  node={topologyNodes[0]}
                  selected={activeNode.id === "alb"}
                  onSelect={() => setSelectedId("alb")}
                  icon={Shield}
                  className="flex-1 min-w-0"
                />
              </div>

              <div className="flex justify-center">
                <VerticalFlow />
              </div>

              {/* Row 2: EC2 Host Container */}
              <div className="rounded-xl border border-dashed border-primary/35 bg-primary/[0.03] p-2.5 sm:p-3">
                <NodeButton
                  node={topologyNodes[1]}
                  selected={activeNode.id === "ec2"}
                  onSelect={() => setSelectedId("ec2")}
                  icon={Server}
                  className="w-full min-w-0"
                />

                <div className="mt-2 grid grid-cols-1 gap-2 sm:mt-2.5 sm:grid-cols-2">
                  <NodeButton
                    node={topologyNodes[2]}
                    selected={activeNode.id === "frontend"}
                    onSelect={() => setSelectedId("frontend")}
                    icon={Box}
                    className="min-w-0"
                  />
                  <NodeButton
                    node={topologyNodes[3]}
                    selected={activeNode.id === "backend"}
                    onSelect={() => setSelectedId("backend")}
                    icon={Database}
                    className="min-w-0"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid gap-2 sm:gap-2.5">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <NodeButton
                  node={pipelineNodes[0]}
                  selected={activeNode.id === "github"}
                  onSelect={() => setSelectedId("github")}
                  icon={GitBranch}
                  className="min-w-0"
                />
                <NodeButton
                  node={pipelineNodes[1]}
                  selected={activeNode.id === "jenkins"}
                  onSelect={() => setSelectedId("jenkins")}
                  icon={Layers}
                  className="min-w-0"
                />
              </div>
              <div className="flex justify-center">
                <VerticalFlow />
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <NodeButton
                  node={pipelineNodes[2]}
                  selected={activeNode.id === "ecr"}
                  onSelect={() => setSelectedId("ecr")}
                  icon={Box}
                  className="min-w-0"
                />
                <NodeButton
                  node={pipelineNodes[3]}
                  selected={activeNode.id === "terraform"}
                  onSelect={() => setSelectedId("terraform")}
                  icon={Activity}
                  className="min-w-0"
                />
              </div>
            </div>
          )}
        </div>

        {/* Selected Node Inspector */}
        <div className="mt-4 rounded-xl border border-border bg-muted/40 p-3.5">
          <div className="flex items-center justify-between gap-2">
            <span className="font-display text-xs font-semibold text-foreground">
              {activeNode.label}
            </span>
            <span className="rounded bg-primary/12 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
              {activeNode.badge}
            </span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            {activeNode.detail}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function NodeButton({
  node,
  selected,
  onSelect,
  icon: Icon,
  className,
}: {
  node: InfraNode;
  selected: boolean;
  onSelect: () => void;
  icon: typeof Cloud;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex min-w-0 items-center justify-between gap-2 rounded-lg border px-2 py-1.5 text-left transition sm:px-3 sm:py-2.5",
        selected
          ? "border-primary/60 bg-primary/10 shadow-sm"
          : "border-border bg-card hover:border-primary/30 hover:bg-card/90",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <span
          className={cn(
            "grid h-6 w-6 shrink-0 place-items-center rounded-md sm:h-7 sm:w-7",
            selected
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground",
          )}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[11px] font-semibold text-foreground sm:text-xs">
            {node.label}
          </div>
          <div className="truncate font-mono text-[9px] text-muted-foreground sm:text-[10px]">
            {node.sublabel}
          </div>
        </div>
      </div>
    </button>
  );
}

function FlowLine() {
  return (
    <svg
      className="h-3 w-8 shrink-0 text-primary"
      viewBox="0 0 32 12"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="6"
        x2="28"
        y2="6"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-pulse-flow"
      />
      <path
        d="M24 2L30 6L24 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VerticalFlow() {
  return (
    <svg
      className="h-5 w-4 text-primary"
      viewBox="0 0 16 20"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="8"
        y1="0"
        x2="8"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-pulse-flow"
      />
      <path
        d="M4 13L8 18L12 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
