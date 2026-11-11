import {
  Activity,
  Bot,
  Box,
  Cloud,
  Code2,
  Cpu,
  GitBranch,
  Github,
  Layers,
  Linkedin,
  Mail,
  Network,
  ShieldCheck,
  Terminal,
  TestTube2,
  Briefcase,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const personal = {
  name: "Sri Jaya Shankaran R",
  initials: "SJS",
  role: "Junior DevOps / Cloud Engineer",
  specialization: "AWS · CI/CD · Cloud & IT Systems · Hardware Engineering",
  headline:
    "Building reliable deployments, automating workflows, and engineering systems from silicon to cloud.",
  summary:
    "I'm an AWS Certified Solutions Architect – Associate with 1+ year of professional experience in software quality engineering and automation, complemented by certified expertise in laptop chip-level diagnostics and IT support. I enjoy working across the full spectrum—from motherboard troubleshooting, computer hardware servicing, and IT systems to containerized cloud architectures, Terraform, and automated CI/CD delivery.",
  availability: "Open to DevOps, Cloud, IT Support & Systems Roles",
  location: "Madurai & Chennai, India",
  email: "jaishankar98421@gmail.com",
  phone: "+91 9842139997",
  phoneHref: "tel:+919842139997",
  portfolioUrl: "https://jaishankar.vercel.app/",
  resumeUrl:
    "https://drive.google.com/file/d/1spNAB6iiulJtnGw6yBfYmzxTjTA9QT4_/view?usp=sharing",
};

export type SocialLink = {
  name: string;
  href: string;
  label: string;
  icon: LucideIcon;
};

export const socials: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/r-sri-jaya-shankaran-b76329223/",
    label: "LinkedIn Profile",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Jaishankar-2003",
    label: "GitHub Profile",
    icon: Github,
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~0139f092ec94ed11a0?mp_source=share",
    label: "Upwork Profile",
    icon: Briefcase,
  },
  {
    name: "Email",
    href: "mailto:jaishankar98421@gmail.com",
    label: "Send Email",
    icon: Mail,
  },
];

export const aboutContent = {
  paragraphs: [
    "I'm a technology professional with 1+ year of experience in Software Development in Test (SDET), expanding into DevOps Engineering and AWS Cloud Infrastructure, backed by a strong foundation in physical hardware engineering and IT systems.",
    "My hands-on background in automation testing, defect analysis, and root-cause troubleshooting gives me a reliability-first engineering mindset. When systems fail, I know how to investigate logs, network packets, APIs, and container metrics.",
    "Beyond software, I hold a deep passion for computer hardware. As an ISO 9001:2015 certified laptop chip-level technician, I diagnose motherboards, power rails, display/charging circuits, and BIOS configurations at the component level using multimeters and diagnostic tools.",
    "This dual fluency—from physical silicon and IT support up to AWS infrastructure, Docker, and CI/CD automation—allows me to understand application performance and infrastructure reliability end-to-end.",
  ],
  journey: [
    {
      step: "01",
      title: "Hardware Engineering & IT Support",
      detail:
        "Certified in laptop chip-level diagnostics (ICFix Services ICFA/LAP/2278). Hands-on motherboard troubleshooting, power rails, component repair, OS/driver maintenance, and L1 networking.",
      icon: Cpu,
    },
    {
      step: "02",
      title: "Software Testing & Automation",
      detail:
        "Playwright + TypeScript, Selenium, REST API validation, and automated smoke/regression suites across 30+ web applications.",
      icon: TestTube2,
    },
    {
      step: "03",
      title: "Quality Engineering & Root-Cause Analysis",
      detail:
        "Systematic failure investigation using browser traces, logs, API responses, and JMeter/k6 concurrent-user load behavior.",
      icon: Activity,
    },
    {
      step: "04",
      title: "AWS Cloud & Infrastructure",
      detail:
        "AWS Certified Solutions Architect – Associate. VPC networking, EC2, ALB, IAM security, S3, CloudFront, Route 53, and high availability.",
      icon: Cloud,
    },
    {
      step: "05",
      title: "DevOps & CI/CD Automation",
      detail:
        "Multi-container deployments with Docker & Docker Compose, declarative Jenkins pipelines, Terraform IaC, and Kubernetes fundamentals.",
      icon: GitBranch,
    },
  ],
};

export type SkillCategoryGroup = {
  id: string;
  title: string;
  filterGroup:
    "cloud-iac" | "containers-cicd" | "linux-ops" | "hardware-it" | "qa-ai";
  familiarity:
    | "Production Experience"
    | "Certified & Hands-On"
    | "Hands-on Deployment"
    | "Hands-on & Lab"
    | "Foundational & Lab";
  icon: LucideIcon;
  items: { name: string; note?: string }[];
};

export const skillFilterTabs = [
  { id: "all", label: "All Categories" },
  { id: "cloud-iac", label: "Cloud & IaC" },
  { id: "containers-cicd", label: "Containers & CI/CD" },
  { id: "linux-ops", label: "Linux & Ops" },
  { id: "hardware-it", label: "Hardware & IT Support" },
  { id: "qa-ai", label: "QA & AI Testing" },
] as const;

export const skillGroups: SkillCategoryGroup[] = [
  {
    id: "aws-cloud",
    title: "AWS & Cloud",
    filterGroup: "cloud-iac",
    familiarity: "Hands-on & Lab",
    icon: Cloud,
    items: [
      { name: "EC2", note: "Hands-on" },
      { name: "VPC" },
      { name: "IAM" },
      { name: "S3" },
      { name: "Application Load Balancer", note: "Hands-on" },
      { name: "Auto Scaling" },
      { name: "Route 53" },
      { name: "CloudFront" },
      { name: "CloudWatch" },
      { name: "ECR" },
      { name: "ECS" },
      { name: "EKS" },
      { name: "RDS" },
      { name: "Lambda" },
      { name: "CloudTrail" },
    ],
  },
  {
    id: "containers",
    title: "Containers & Orchestration",
    filterGroup: "containers-cicd",
    familiarity: "Hands-on & Lab",
    icon: Box,
    items: [
      { name: "Docker", note: "Hands-on" },
      { name: "Docker Compose", note: "Hands-on" },
      { name: "Kubernetes", note: "Foundational" },
      { name: "Helm", note: "Foundational" },
      { name: "eksctl", note: "Foundational" },
    ],
  },
  {
    id: "cicd",
    title: "CI/CD & Automation",
    filterGroup: "containers-cicd",
    familiarity: "Hands-on & Lab",
    icon: GitBranch,
    items: [
      { name: "Jenkins" },
      { name: "GitHub Actions" },
      { name: "GitLab CI/CD" },
      { name: "Git", note: "Hands-on" },
      { name: "Maven" },
    ],
  },
  {
    id: "iac",
    title: "Infrastructure as Code",
    filterGroup: "cloud-iac",
    familiarity: "Foundational & Lab",
    icon: Layers,
    items: [{ name: "Terraform", note: "Lab & Learning" }],
  },
  {
    id: "linux-scripting",
    title: "Linux & Scripting",
    filterGroup: "linux-ops",
    familiarity: "Hands-on & Lab",
    icon: Terminal,
    items: [
      { name: "Linux", note: "Hands-on" },
      { name: "Bash" },
      { name: "Python" },
    ],
  },
  {
    id: "networking",
    title: "Networking",
    filterGroup: "linux-ops",
    familiarity: "Hands-on & Lab",
    icon: Network,
    items: [{ name: "SSH" }, { name: "DNS" }, { name: "TCP/IP" }],
  },
  {
    id: "observability",
    title: "Monitoring & Observability",
    filterGroup: "linux-ops",
    familiarity: "Foundational & Lab",
    icon: Activity,
    items: [
      { name: "AWS CloudWatch" },
      { name: "Prometheus", note: "Foundational" },
      { name: "Grafana", note: "Foundational" },
    ],
  },
  {
    id: "hardware-support",
    title: "Hardware, Chip-Level & IT Support",
    filterGroup: "hardware-it",
    familiarity: "Certified & Hands-On",
    icon: Cpu,
    items: [
      { name: "Laptop Chip-Level Diagnostics", note: "Certified" },
      { name: "Motherboard & Power Circuits", note: "Hands-on" },
      { name: "Multimeter & Continuity Testing", note: "Hands-on" },
      { name: "Component Replacement (RAM/SSD/Display)", note: "Hands-on" },
      { name: "OS & Driver Installation / Imaging", note: "Hands-on" },
      { name: "L1/L2 IT Support & Troubleshooting", note: "Hands-on" },
      { name: "BIOS & Firmware Configuration" },
      { name: "LAN, Router & TCP/IP Support" },
      { name: "No-Power / No-Display Investigation" },
      { name: "System Maintenance & Thermal Pasting" },
    ],
  },
  {
    id: "qa-automation",
    title: "QA & Automation",
    filterGroup: "qa-ai",
    familiarity: "Production Experience",
    icon: TestTube2,
    items: [
      { name: "Playwright", note: "1+ Yr Prod" },
      { name: "TypeScript", note: "1+ Yr Prod" },
      { name: "Selenium" },
      { name: "Java" },
      { name: "REST Assured" },
      { name: "Postman" },
      { name: "JMeter" },
      { name: "k6" },
    ],
  },
  {
    id: "ai-dev",
    title: "AI-Assisted Development",
    filterGroup: "qa-ai",
    familiarity: "Production Experience",
    icon: Bot,
    items: [
      { name: "AI-assisted coding" },
      { name: "AI-powered debugging" },
      { name: "RAG testing" },
      { name: "Promptfoo" },
      { name: "RAGAS" },
    ],
  },
];

export type FeaturedProject = {
  id: string;
  title: string;
  status: "Deployed / Hands-On" | "In Progress" | "Learning Project";
  featured?: boolean;
  diagramType: "jspcs-aws" | "cicd-pipeline" | "static-cdn";
  description: string;
  contribution: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "jspcs-pos",
    title: "JSPCS POS – Multi-Tier AWS Application Deployment",
    status: "Deployed / Hands-On",
    featured: true,
    diagramType: "jspcs-aws",
    description:
      "Deployed a multi-tier Point-of-Sale application on AWS EC2 behind an Application Load Balancer, running frontend, backend, and database services in a containerized environment.",
    contribution:
      "Owned infrastructure setup on EC2, ALB HTTP routing configuration to port 5173, Docker Compose orchestration for FastAPI and PostgreSQL, and live service/log troubleshooting.",
    technologies: [
      "AWS EC2",
      "Application Load Balancer",
      "Docker Compose",
      "React",
      "Vite",
      "FastAPI",
      "PostgreSQL",
      "Linux",
    ],
    highlights: [
      "Deployed application infrastructure on AWS EC2 behind an Application Load Balancer.",
      "Configured HTTP traffic routing from the ALB to the React/Vite frontend on port 5173.",
      "Ran FastAPI backend and PostgreSQL database services using Docker Compose.",
      "Configured application ports and inter-service container connectivity.",
      "Investigated container status, service logs, and deployment issues during setup.",
      "Validated application availability and health via HTTP checks and container inspection.",
    ],
    githubUrl: "https://github.com/Jaishankar-2003",
  },
  {
    id: "automated-cicd",
    title: "Automated CI/CD Pipeline",
    status: "In Progress",
    diagramType: "cicd-pipeline",
    description:
      "Hands-on CI/CD and infrastructure automation project focused on automating application builds, container image publishing, and deployment workflows.",
    contribution:
      "Building declarative Jenkinsfile stages, Docker image publishing to Amazon ECR, and Terraform provisioning exercises as part of DevOps workflow practice.",
    technologies: [
      "Jenkins",
      "GitHub",
      "Docker",
      "Amazon ECR",
      "EC2",
      "Terraform",
      "CloudWatch",
    ],
    highlights: [
      "Source-code integration with GitHub and Jenkins declarative pipeline (Jenkinsfile).",
      "Automated build and validation stages with Docker image creation.",
      "Container image publishing workflow targeting Amazon ECR.",
      "EC2 deployment workflow and Terraform infrastructure provisioning exercises.",
      "Deployment verification and CloudWatch logging/monitoring exploration.",
    ],
    githubUrl: "https://github.com/Jaishankar-2003",
  },
  {
    id: "aws-static-hosting",
    title: "AWS Static Website Hosting & Delivery",
    status: "Learning Project",
    diagramType: "static-cdn",
    description:
      "Exploring static website hosting, content delivery, HTTPS configuration, and automated frontend deployment using AWS services.",
    contribution:
      "Practising S3 static origin setup, CloudFront distribution behavior, custom-domain DNS routing, and Git-triggered frontend delivery.",
    technologies: ["AWS S3", "CloudFront", "Route 53", "ACM", "GitHub"],
    highlights: [
      "Static website hosting on Amazon S3 (and AWS Amplify exploration).",
      "CloudFront distribution configuration for edge content delivery.",
      "Custom-domain configuration, DNS routing with Route 53, and ACM HTTPS concepts.",
      "Git-based deployment workflow and delivery verification after updates.",
    ],
    githubUrl: "https://github.com/Jaishankar-2003",
  },
];

export type StaticSiteItem = {
  name: string;
  domain: string;
  url: string;
  note: string;
};

export const liveStaticSites: StaticSiteItem[] = [
  {
    name: "DexQA",
    domain: "dexqa.vercel.app",
    url: "https://dexqa.vercel.app/",
    note: "Static web application deployed on Vercel",
  },
  {
    name: "JSPCS",
    domain: "www.jspcs.online",
    url: "https://www.jspcs.online/",
    note: "Live production static site with custom domain",
  },
  {
    name: "ShellCoders",
    domain: "shellcoders.vercel.app",
    url: "https://shellcoders.vercel.app/",
    note: "Static web application deployed on Vercel",
  },
];

export type AutomationProject = {
  title: string;
  stack: string;
  summary: string;
  focus: string;
};

export const automationProjects: AutomationProject[] = [
  {
    title: "World Vision – Full Regression Automation",
    stack: "Playwright · TypeScript",
    summary:
      "Automated end-to-end regression flows with maintainable Page Object Model components, assertions, and trace/screenshot failure diagnostics.",
    focus: "Release Regression",
  },
  {
    title: "Simbli.ai – AI Social Media Platform Automation",
    stack: "Playwright · TypeScript",
    summary:
      "Built UI automation coverage across core user workflows, data flows, and AI-assisted features using reusable fixtures and structured suites.",
    focus: "E2E & AI Feature QA",
  },
  {
    title: "30+ Website Daily Smoke Automation",
    stack: "Playwright · TypeScript",
    summary:
      "Created shared validation patterns and reusable Playwright components to verify critical paths, forms, and page availability across 30+ web applications.",
    focus: "Multi-Site Smoke Checks",
  },
  {
    title: "HappierMe & Sustally – RAG Chatbot Testing",
    stack: "Playwright API · RAGAS · Promptfoo",
    summary:
      "Evaluated AI chatbot retrieval quality, context grounding, and response consistency at scale using API-driven question suites and evaluation frameworks.",
    focus: "AI / RAG Evaluation",
  },
  {
    title: "Server Performance & Downtime Investigation",
    stack: "Apache JMeter",
    summary:
      "Executed graduated concurrent-user load tests to isolate response degradation, error rates, and constrained server thresholds with reproducible metrics.",
    focus: "Load & Root-Cause Analysis",
  },
];

export const professionalExperience = {
  role: "Automation Test Engineer / SDET",
  company: "Dot Com Infoway",
  location: "Madurai",
  period: "October 2025 – Present",
  responsibilities: [
    "Develop and maintain Playwright + TypeScript automation.",
    "Contribute to testing across 30+ web applications.",
    "Perform UI, API, regression, and smoke testing.",
    "Investigate defects using logs, browser traces, screenshots, and API responses.",
    "Execute performance testing using JMeter and k6.",
    "Validate AI/RAG application responses and retrieval quality.",
    "Collaborate with development teams to investigate defects and validate fixes.",
  ],
};

export const trainings = [
  {
    title: "AWS & DevOps Training",
    organization: "Techpanda",
    location: "Chennai",
    period: "2026",
    badge: "Cloud & DevOps",
    icon: Cloud,
    topics: [
      "AWS infrastructure (EC2, VPC, IAM, security groups, load balancing)",
      "Linux administration and Bash scripting fundamentals",
      "Docker and Docker Compose multi-container deployments",
      "Jenkins and CI/CD pipeline workflows",
      "Terraform Infrastructure as Code fundamentals",
      "Kubernetes fundamentals (Pods, Deployments, Services, ConfigMaps, Secrets)",
      "CloudWatch monitoring, logs, metrics, and deployment troubleshooting",
    ],
  },
  {
    title: "Laptop Chip-Level Service Engineering",
    organization: "ICFix Services (ISO 9001:2015 Certified)",
    location: "Chennai",
    period: "March 2025",
    badge: "Hardware & IT Support",
    serialNo: "ICFA/LAP/2278",
    icon: Cpu,
    topics: [
      "Motherboard architecture, power & charging circuits, and BIOS fundamentals",
      "Chip-level troubleshooting using multimeters for voltage and continuity testing",
      "Diagnosing no-power, no-display, charging, boot failure, and short-circuits",
      "Hardware component replacement (RAM, HDD/SSD, display, keyboards, thermal pasting)",
      "OS & driver installation, system configuration, and post-repair validation",
      "L1 networking diagnostics: IP configuration, LAN checks, router setup, TCP/IP, and DNS",
    ],
  },
  {
    title: "Computer Repair & IT Support Services",
    organization: "Views Computers",
    location: "Madurai",
    period: "Practical Experience",
    badge: "Hardware Passion",
    icon: Wrench,
    topics: [
      "Hands-on desktop and laptop diagnostics, hardware assembly, and repair",
      "Operating system, driver, and application troubleshooting",
      "Preventive maintenance, thermal management, and hardware upgrades",
      "Client IT support and network connectivity assistance",
    ],
  },
];

export const certificationsList = [
  {
    id: "aws-saa",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    code: "SAA-C03",
    type: "Cloud Architecture",
    badge: "AWS Certified",
    focusAreas: [
      "High Availability & Load Balancing",
      "VPC Networking & Security Groups",
      "IAM Access Controls",
      "Compute, S3 Storage & CloudFront",
    ],
    verified: true,
  },
  {
    id: "icfix-chip-level",
    name: "Laptop Chip-Level Engineering Course",
    issuer: "ICFix Services (ISO 9001:2015 Certified Academy)",
    code: "ICFA/LAP/2278",
    type: "Hardware & IT Systems",
    badge: "ISO 9001:2015 Certified",
    date: "March 4, 2025 · Chennai",
    certificateImage: "/certificates/icfix-chip-level.jpg",
    quote:
      "An expert-level training program in laptop chip-level repairs, specializing in motherboard diagnostics, power issues, screen replacements, and hardware troubleshooting for all major laptop brands.",
    focusAreas: [
      "Motherboard Diagnostics & Power Rails",
      "Multimeter Continuity & Voltage Testing",
      "Screen & Component Replacements",
      "Hardware Root-Cause & IT Support",
    ],
    verified: true,
  },
];

export const education = {
  degree: "Bachelor of Engineering – Computer Science and Engineering",
  institution: "CSI College of Engineering",
  university: "Anna University",
  period: "2021 – 2025",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const sectionIcon = ShieldCheck;
