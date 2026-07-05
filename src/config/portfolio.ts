import {
  Github, Linkedin, Mail, Instagram, Twitter, Code2, Terminal,
  BookOpen, PenTool, Cloud, Cpu, TestTube2, Network, Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const personal = {
  name: "Sri Jaya Shankaran R",
  shortName: "SJ",
  roles: [
    "QA Automation Engineer",
    "AWS Certified Solutions Architect",
    "DevOps Enthusiast",
    "Cloud Engineer",
    "Platform Engineering Learner",
    "Testing Everything. Building Reliable Systems.",
  ],
  tagline:
    "I'm a QA Automation Engineer and AWS Certified Solutions Architect focused on building reliable, scalable software systems.",
  description:
    "I build cloud infrastructure, automate testing pipelines, and bridge development, testing, and operations to deliver high-quality software.",
  location: "India",
  email: "jaishankar98421@gmail.com",
  phone: "+91 9842139997",
  resumeUrl: "/resume.pdf",
};

export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

// Only configured links appear in nav/footer
export const socials: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/Jaishankar-2003/", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/r-sri-jaya-shankaran-b76329223", icon: Linkedin },
  { name: "Email", href: "mailto:jaishankar98421@gmail.com", icon: Mail },
  { name: "LeetCode", href: "https://leetcode.com/u/sri_jaya_shankaran_003/", icon: Code2 },
  { name: "HackerRank", href: "https://hackerrank.com/", icon: Terminal },
  { name: "Instagram", href: "https://instagram.com/", icon: Instagram },
  { name: "X", href: "https://x.com/", icon: Twitter },
  { name: "Dev.to", href: "https://dev.to/", icon: PenTool },
  { name: "Medium", href: "https://medium.com/", icon: BookOpen },
];

export const stats = [
  { label: "Projects", value: 12, suffix: "+" },
  { label: "Certifications", value: 5, suffix: "" },
  { label: "Technologies", value: 30, suffix: "+" },
  { label: "Years Experience", value: 3, suffix: "+" },
];

export type Skill = { name: string; level: number; category: string };
export const skillCategories = ["Cloud", "DevOps", "Testing", "Languages", "Hardware"] as const;
export type SkillCategory = (typeof skillCategories)[number];

export const skills: Skill[] = [
  // Cloud
  { name: "AWS", level: 92, category: "Cloud" },
  { name: "EC2", level: 90, category: "Cloud" },
  { name: "IAM", level: 88, category: "Cloud" },
  { name: "Lambda", level: 85, category: "Cloud" },
  { name: "API Gateway", level: 82, category: "Cloud" },
  { name: "VPC", level: 84, category: "Cloud" },
  { name: "Route53", level: 78, category: "Cloud" },
  { name: "S3", level: 92, category: "Cloud" },
  { name: "CloudFront", level: 80, category: "Cloud" },
  { name: "RDS", level: 82, category: "Cloud" },
  { name: "DynamoDB", level: 78, category: "Cloud" },
  { name: "CloudFormation", level: 76, category: "Cloud" },
  // DevOps
  { name: "Linux", level: 90, category: "DevOps" },
  { name: "Docker", level: 88, category: "DevOps" },
  { name: "Kubernetes", level: 80, category: "DevOps" },
  { name: "Terraform", level: 78, category: "DevOps" },
  { name: "Git", level: 92, category: "DevOps" },
  { name: "GitHub", level: 92, category: "DevOps" },
  { name: "Jenkins", level: 85, category: "DevOps" },
  { name: "Maven", level: 78, category: "DevOps" },
  { name: "Networking", level: 84, category: "DevOps" },
  // Testing
  { name: "Playwright", level: 92, category: "Testing" },
  { name: "Selenium", level: 90, category: "Testing" },
  { name: "Postman", level: 90, category: "Testing" },
  { name: "REST API Testing", level: 88, category: "Testing" },
  { name: "JUnit", level: 82, category: "Testing" },
  { name: "TestNG", level: 84, category: "Testing" },
  { name: "Agile / Scrum", level: 85, category: "Testing" },
  // Languages
  { name: "Java", level: 88, category: "Languages" },
  { name: "Python", level: 86, category: "Languages" },
  { name: "FastAPI", level: 78, category: "Languages" },
  // Hardware
  { name: "Chip-Level Repair", level: 90, category: "Hardware" },
  { name: "Windows", level: 88, category: "Hardware" },
  { name: "Hardware Troubleshooting", level: 92, category: "Hardware" },
];

export const categoryIcons: Record<SkillCategory, LucideIcon> = {
  Cloud, DevOps: Wrench, Testing: TestTube2, Languages: Cpu, Hardware: Network,
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  icon: LucideIcon;
};

export const experiences: Experience[] = [
  {
    role: "Software Test Engineer Intern",
    company: "QSpiders Test Yantra",
    period: "2024 — Present",
    location: "India",
    icon: TestTube2,
    bullets: [
      "Built automation frameworks using Playwright and Selenium.",
      "Designed API testing suites with Postman and REST Assured.",
      "Integrated tests into CI/CD pipelines using Jenkins and GitHub Actions.",
    ],
  },
  {
    role: "Hardware Engineer",
    company: "Views Computers",
    period: "2021 — 2023",
    location: "India",
    icon: Cpu,
    bullets: [
      "Performed chip-level diagnostics and repair for laptops and desktops.",
      "Configured networks, servers, and Windows environments for SMB clients.",
      "Founded and operated a small computer service business.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "Endocrine Disease Detection",
    description:
      "Image processing pipeline for early detection of endocrine diseases using classical CV and ML techniques.",
    tags: ["Python", "OpenCV", "ML", "Research"],
    github: "https://github.com/", caseStudy: "#",
    gradient: "from-blue-500/30 to-cyan-500/30",
  },
  {
    title: "Web Traffic Analysis",
    description:
      "Analytics platform processing web traffic logs to uncover behavior patterns and anomalies.",
    tags: ["Python", "Pandas", "AWS", "Dashboards"],
    github: "https://github.com/", demo: "#",
    gradient: "from-cyan-500/30 to-emerald-500/30",
  },
  {
    title: "DEX QA",
    description:
      "End-to-end QA suite for a decentralized exchange covering UI, contract, and API layers.",
    tags: ["Playwright", "REST", "CI/CD"],
    github: "https://github.com/",
    gradient: "from-emerald-500/30 to-blue-500/30",
  },
  {
    title: "JSPCS",
    description:
      "Java-based service platform with modular architecture and JUnit-driven test coverage.",
    tags: ["Java", "Maven", "JUnit"],
    github: "https://github.com/", caseStudy: "#",
    gradient: "from-blue-500/30 to-purple-500/30",
  },
  {
    title: "AWS Serverless Deployment",
    description:
      "Serverless reference architecture using Lambda, API Gateway, DynamoDB and CloudFormation.",
    tags: ["AWS", "Lambda", "CloudFormation"],
    github: "https://github.com/", demo: "#",
    gradient: "from-orange-500/30 to-blue-500/30",
  },
  {
    title: "CI/CD Automation",
    description:
      "Opinionated Jenkins + GitHub Actions pipeline templates for build, test and deploy stages.",
    tags: ["Jenkins", "GitHub Actions", "Docker"],
    github: "https://github.com/",
    gradient: "from-cyan-500/30 to-blue-500/30",
  },
  {
    title: "Playwright Automation Framework",
    description:
      "Scalable Playwright framework with fixtures, POM, parallel execution and HTML reporting.",
    tags: ["Playwright", "TypeScript", "POM"],
    github: "https://github.com/", demo: "#",
    gradient: "from-emerald-500/30 to-cyan-500/30",
  },
  {
    title: "Dockerized Test Framework",
    description:
      "Containerized Selenium Grid + test runner setup for repeatable execution across environments.",
    tags: ["Docker", "Selenium Grid", "Java"],
    github: "https://github.com/",
    gradient: "from-blue-500/30 to-emerald-500/30",
  },
  {
    title: "API Automation Suite",
    description:
      "Comprehensive REST API test suite with data-driven cases and CI-integrated reports.",
    tags: ["Postman", "REST Assured", "Newman"],
    github: "https://github.com/", demo: "#",
    gradient: "from-purple-500/30 to-cyan-500/30",
  },
];

export type Certification = {
  name: string;
  org: string;
  date: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  { name: "AWS Certified Solutions Architect – Associate", org: "Amazon Web Services", date: "2024", credentialUrl: "#" },
  { name: "Postman Student Expert", org: "Postman", date: "2024", credentialUrl: "#" },
  { name: "CompTIA A+", org: "CompTIA", date: "2022", credentialUrl: "#" },
  { name: "Chip-Level Hardware Engineer", org: "Views Institute", date: "2021", credentialUrl: "#" },
  { name: "Software Test Engineer", org: "QSpiders", date: "2024", credentialUrl: "#" },
];

export const achievements = [
  "AWS Certified Solutions Architect",
  "Postman Student Expert",
  "Founded a Computer Service Business",
  "Built end-to-end QA Automation frameworks",
  "Shipped multiple AWS Cloud projects",
  "Deep Networking & Hardware Engineering background",
];

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Scaling Playwright Test Suites for Real Production Apps",
    excerpt: "Fixtures, sharding, and reporting patterns that keep large Playwright suites fast and maintainable.",
    date: "May 2025", readTime: "8 min read", href: "#",
  },
  {
    title: "From QA to Cloud: My AWS Solutions Architect Journey",
    excerpt: "How I approached the SAA-C03 exam while working full-time in QA automation.",
    date: "Apr 2025", readTime: "6 min read", href: "#",
  },
  {
    title: "Dockerizing a Selenium Grid the Right Way",
    excerpt: "A pragmatic setup for containerized browser testing on any CI runner.",
    date: "Mar 2025", readTime: "7 min read", href: "#",
  },
  {
    title: "REST API Testing: A Postman + Newman Playbook",
    excerpt: "Turn manual Postman collections into a first-class regression suite.",
    date: "Feb 2025", readTime: "5 min read", href: "#",
  },
  {
    title: "Kubernetes for QA Engineers",
    excerpt: "The exact k8s vocabulary QA engineers need to test cloud-native apps confidently.",
    date: "Jan 2025", readTime: "9 min read", href: "#",
  },
];

export const techStack = [
  "AWS", "Docker", "Kubernetes", "Linux", "Python", "Java",
  "Playwright", "Selenium", "GitHub", "Git", "Jenkins", "FastAPI",
  "Postman", "MySQL", "Redis", "NGINX", "Terraform",
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
