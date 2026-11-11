import { a as __toESM } from "../_runtime.mjs";
import { i as motion, n as useSpring, o as AnimatePresence, r as useScroll, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useTheme } from "./theme-provider-BN-bmhdG.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { A as Calendar, C as Download, D as Cloud, E as Copy, F as ArrowUp, I as ArrowUpRight, L as ArrowRight, M as Box, N as Bot, O as CircleCheck, P as Award, R as Activity, S as ExternalLink, T as Cpu, _ as Layers, a as Terminal, b as Github, c as ShieldCheck, d as Network, f as Moon, g as Linkedin, h as Mail, i as TestTubeDiagonal, j as Briefcase, k as Check, l as Server, m as MapPin, n as X, o as Sun, p as Menu, r as Wrench, s as Shield, t as ZoomIn, u as Phone, v as GraduationCap, w as Database, x as GitBranch, y as Globe } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DUsYcbGf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var personal = {
	name: "Sri Jaya Shankaran R",
	initials: "SJS",
	role: "Junior DevOps / Cloud Engineer",
	specialization: "AWS · CI/CD · Cloud & IT Systems · Hardware Engineering",
	headline: "Building reliable deployments, automating workflows, and engineering systems from silicon to cloud.",
	summary: "I'm an AWS Certified Solutions Architect – Associate with 1+ year of professional experience in software quality engineering and automation, complemented by certified expertise in laptop chip-level diagnostics and IT support. I enjoy working across the full spectrum—from motherboard troubleshooting, computer hardware servicing, and IT systems to containerized cloud architectures, Terraform, and automated CI/CD delivery.",
	availability: "Open to DevOps, Cloud, IT Support & Systems Roles",
	location: "Madurai & Chennai, India",
	email: "jaishankar98421@gmail.com",
	phone: "+91 9842139997",
	phoneHref: "tel:+919842139997",
	portfolioUrl: "https://jaishankar.vercel.app/",
	resumeUrl: "https://drive.google.com/file/d/1spNAB6iiulJtnGw6yBfYmzxTjTA9QT4_/view?usp=sharing"
};
var socials = [
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/r-sri-jaya-shankaran-b76329223/",
		label: "LinkedIn Profile",
		icon: Linkedin
	},
	{
		name: "GitHub",
		href: "https://github.com/Jaishankar-2003",
		label: "GitHub Profile",
		icon: Github
	},
	{
		name: "Upwork",
		href: "https://www.upwork.com/freelancers/~0139f092ec94ed11a0?mp_source=share",
		label: "Upwork Profile",
		icon: Briefcase
	},
	{
		name: "Email",
		href: "mailto:jaishankar98421@gmail.com",
		label: "Send Email",
		icon: Mail
	}
];
var aboutContent = {
	paragraphs: [
		"I'm a technology professional with 1+ year of experience in Software Development in Test (SDET), expanding into DevOps Engineering and AWS Cloud Infrastructure, backed by a strong foundation in physical hardware engineering and IT systems.",
		"My hands-on background in automation testing, defect analysis, and root-cause troubleshooting gives me a reliability-first engineering mindset. When systems fail, I know how to investigate logs, network packets, APIs, and container metrics.",
		"Beyond software, I hold a deep passion for computer hardware. As an ISO 9001:2015 certified laptop chip-level technician, I diagnose motherboards, power rails, display/charging circuits, and BIOS configurations at the component level using multimeters and diagnostic tools.",
		"This dual fluency—from physical silicon and IT support up to AWS infrastructure, Docker, and CI/CD automation—allows me to understand application performance and infrastructure reliability end-to-end."
	],
	journey: [
		{
			step: "01",
			title: "Hardware Engineering & IT Support",
			detail: "Certified in laptop chip-level diagnostics (ICFix Services ICFA/LAP/2278). Hands-on motherboard troubleshooting, power rails, component repair, OS/driver maintenance, and L1 networking.",
			icon: Cpu
		},
		{
			step: "02",
			title: "Software Testing & Automation",
			detail: "Playwright + TypeScript, Selenium, REST API validation, and automated smoke/regression suites across 30+ web applications.",
			icon: TestTubeDiagonal
		},
		{
			step: "03",
			title: "Quality Engineering & Root-Cause Analysis",
			detail: "Systematic failure investigation using browser traces, logs, API responses, and JMeter/k6 concurrent-user load behavior.",
			icon: Activity
		},
		{
			step: "04",
			title: "AWS Cloud & Infrastructure",
			detail: "AWS Certified Solutions Architect – Associate. VPC networking, EC2, ALB, IAM security, S3, CloudFront, Route 53, and high availability.",
			icon: Cloud
		},
		{
			step: "05",
			title: "DevOps & CI/CD Automation",
			detail: "Multi-container deployments with Docker & Docker Compose, declarative Jenkins pipelines, Terraform IaC, and Kubernetes fundamentals.",
			icon: GitBranch
		}
	]
};
var skillFilterTabs = [
	{
		id: "all",
		label: "All Categories"
	},
	{
		id: "cloud-iac",
		label: "Cloud & IaC"
	},
	{
		id: "containers-cicd",
		label: "Containers & CI/CD"
	},
	{
		id: "linux-ops",
		label: "Linux & Ops"
	},
	{
		id: "hardware-it",
		label: "Hardware & IT Support"
	},
	{
		id: "qa-ai",
		label: "QA & AI Testing"
	}
];
var skillGroups = [
	{
		id: "aws-cloud",
		title: "AWS & Cloud",
		filterGroup: "cloud-iac",
		familiarity: "Hands-on & Lab",
		icon: Cloud,
		items: [
			{
				name: "EC2",
				note: "Hands-on"
			},
			{ name: "VPC" },
			{ name: "IAM" },
			{ name: "S3" },
			{
				name: "Application Load Balancer",
				note: "Hands-on"
			},
			{ name: "Auto Scaling" },
			{ name: "Route 53" },
			{ name: "CloudFront" },
			{ name: "CloudWatch" },
			{ name: "ECR" },
			{ name: "ECS" },
			{ name: "EKS" },
			{ name: "RDS" },
			{ name: "Lambda" },
			{ name: "CloudTrail" }
		]
	},
	{
		id: "containers",
		title: "Containers & Orchestration",
		filterGroup: "containers-cicd",
		familiarity: "Hands-on & Lab",
		icon: Box,
		items: [
			{
				name: "Docker",
				note: "Hands-on"
			},
			{
				name: "Docker Compose",
				note: "Hands-on"
			},
			{
				name: "Kubernetes",
				note: "Foundational"
			},
			{
				name: "Helm",
				note: "Foundational"
			},
			{
				name: "eksctl",
				note: "Foundational"
			}
		]
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
			{
				name: "Git",
				note: "Hands-on"
			},
			{ name: "Maven" }
		]
	},
	{
		id: "iac",
		title: "Infrastructure as Code",
		filterGroup: "cloud-iac",
		familiarity: "Foundational & Lab",
		icon: Layers,
		items: [{
			name: "Terraform",
			note: "Lab & Learning"
		}]
	},
	{
		id: "linux-scripting",
		title: "Linux & Scripting",
		filterGroup: "linux-ops",
		familiarity: "Hands-on & Lab",
		icon: Terminal,
		items: [
			{
				name: "Linux",
				note: "Hands-on"
			},
			{ name: "Bash" },
			{ name: "Python" }
		]
	},
	{
		id: "networking",
		title: "Networking",
		filterGroup: "linux-ops",
		familiarity: "Hands-on & Lab",
		icon: Network,
		items: [
			{ name: "SSH" },
			{ name: "DNS" },
			{ name: "TCP/IP" }
		]
	},
	{
		id: "observability",
		title: "Monitoring & Observability",
		filterGroup: "linux-ops",
		familiarity: "Foundational & Lab",
		icon: Activity,
		items: [
			{ name: "AWS CloudWatch" },
			{
				name: "Prometheus",
				note: "Foundational"
			},
			{
				name: "Grafana",
				note: "Foundational"
			}
		]
	},
	{
		id: "hardware-support",
		title: "Hardware, Chip-Level & IT Support",
		filterGroup: "hardware-it",
		familiarity: "Certified & Hands-On",
		icon: Cpu,
		items: [
			{
				name: "Laptop Chip-Level Diagnostics",
				note: "Certified"
			},
			{
				name: "Motherboard & Power Circuits",
				note: "Hands-on"
			},
			{
				name: "Multimeter & Continuity Testing",
				note: "Hands-on"
			},
			{
				name: "Component Replacement (RAM/SSD/Display)",
				note: "Hands-on"
			},
			{
				name: "OS & Driver Installation / Imaging",
				note: "Hands-on"
			},
			{
				name: "L1/L2 IT Support & Troubleshooting",
				note: "Hands-on"
			},
			{ name: "BIOS & Firmware Configuration" },
			{ name: "LAN, Router & TCP/IP Support" },
			{ name: "No-Power / No-Display Investigation" },
			{ name: "System Maintenance & Thermal Pasting" }
		]
	},
	{
		id: "qa-automation",
		title: "QA & Automation",
		filterGroup: "qa-ai",
		familiarity: "Production Experience",
		icon: TestTubeDiagonal,
		items: [
			{
				name: "Playwright",
				note: "1+ Yr Prod"
			},
			{
				name: "TypeScript",
				note: "1+ Yr Prod"
			},
			{ name: "Selenium" },
			{ name: "Java" },
			{ name: "REST Assured" },
			{ name: "Postman" },
			{ name: "JMeter" },
			{ name: "k6" }
		]
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
			{ name: "RAGAS" }
		]
	}
];
var featuredProjects = [
	{
		id: "jspcs-pos",
		title: "JSPCS POS – Multi-Tier AWS Application Deployment",
		status: "Deployed / Hands-On",
		featured: true,
		diagramType: "jspcs-aws",
		description: "Deployed a multi-tier Point-of-Sale application on AWS EC2 behind an Application Load Balancer, running frontend, backend, and database services in a containerized environment.",
		contribution: "Owned infrastructure setup on EC2, ALB HTTP routing configuration to port 5173, Docker Compose orchestration for FastAPI and PostgreSQL, and live service/log troubleshooting.",
		technologies: [
			"AWS EC2",
			"Application Load Balancer",
			"Docker Compose",
			"React",
			"Vite",
			"FastAPI",
			"PostgreSQL",
			"Linux"
		],
		highlights: [
			"Deployed application infrastructure on AWS EC2 behind an Application Load Balancer.",
			"Configured HTTP traffic routing from the ALB to the React/Vite frontend on port 5173.",
			"Ran FastAPI backend and PostgreSQL database services using Docker Compose.",
			"Configured application ports and inter-service container connectivity.",
			"Investigated container status, service logs, and deployment issues during setup.",
			"Validated application availability and health via HTTP checks and container inspection."
		],
		githubUrl: "https://github.com/Jaishankar-2003"
	},
	{
		id: "automated-cicd",
		title: "Automated CI/CD Pipeline",
		status: "In Progress",
		diagramType: "cicd-pipeline",
		description: "Hands-on CI/CD and infrastructure automation project focused on automating application builds, container image publishing, and deployment workflows.",
		contribution: "Building declarative Jenkinsfile stages, Docker image publishing to Amazon ECR, and Terraform provisioning exercises as part of DevOps workflow practice.",
		technologies: [
			"Jenkins",
			"GitHub",
			"Docker",
			"Amazon ECR",
			"EC2",
			"Terraform",
			"CloudWatch"
		],
		highlights: [
			"Source-code integration with GitHub and Jenkins declarative pipeline (Jenkinsfile).",
			"Automated build and validation stages with Docker image creation.",
			"Container image publishing workflow targeting Amazon ECR.",
			"EC2 deployment workflow and Terraform infrastructure provisioning exercises.",
			"Deployment verification and CloudWatch logging/monitoring exploration."
		],
		githubUrl: "https://github.com/Jaishankar-2003"
	},
	{
		id: "aws-static-hosting",
		title: "AWS Static Website Hosting & Delivery",
		status: "Learning Project",
		diagramType: "static-cdn",
		description: "Exploring static website hosting, content delivery, HTTPS configuration, and automated frontend deployment using AWS services.",
		contribution: "Practising S3 static origin setup, CloudFront distribution behavior, custom-domain DNS routing, and Git-triggered frontend delivery.",
		technologies: [
			"AWS S3",
			"CloudFront",
			"Route 53",
			"ACM",
			"GitHub"
		],
		highlights: [
			"Static website hosting on Amazon S3 (and AWS Amplify exploration).",
			"CloudFront distribution configuration for edge content delivery.",
			"Custom-domain configuration, DNS routing with Route 53, and ACM HTTPS concepts.",
			"Git-based deployment workflow and delivery verification after updates."
		],
		githubUrl: "https://github.com/Jaishankar-2003"
	}
];
var liveStaticSites = [
	{
		name: "DexQA",
		domain: "dexqa.vercel.app",
		url: "https://dexqa.vercel.app/",
		note: "Static web application deployed on Vercel"
	},
	{
		name: "JSPCS",
		domain: "www.jspcs.online",
		url: "https://www.jspcs.online/",
		note: "Live production static site with custom domain"
	},
	{
		name: "ShellCoders",
		domain: "shellcoders.vercel.app",
		url: "https://shellcoders.vercel.app/",
		note: "Static web application deployed on Vercel"
	}
];
var automationProjects = [
	{
		title: "World Vision – Full Regression Automation",
		stack: "Playwright · TypeScript",
		summary: "Automated end-to-end regression flows with maintainable Page Object Model components, assertions, and trace/screenshot failure diagnostics.",
		focus: "Release Regression"
	},
	{
		title: "Simbli.ai – AI Social Media Platform Automation",
		stack: "Playwright · TypeScript",
		summary: "Built UI automation coverage across core user workflows, data flows, and AI-assisted features using reusable fixtures and structured suites.",
		focus: "E2E & AI Feature QA"
	},
	{
		title: "30+ Website Daily Smoke Automation",
		stack: "Playwright · TypeScript",
		summary: "Created shared validation patterns and reusable Playwright components to verify critical paths, forms, and page availability across 30+ web applications.",
		focus: "Multi-Site Smoke Checks"
	},
	{
		title: "HappierMe & Sustally – RAG Chatbot Testing",
		stack: "Playwright API · RAGAS · Promptfoo",
		summary: "Evaluated AI chatbot retrieval quality, context grounding, and response consistency at scale using API-driven question suites and evaluation frameworks.",
		focus: "AI / RAG Evaluation"
	},
	{
		title: "Server Performance & Downtime Investigation",
		stack: "Apache JMeter",
		summary: "Executed graduated concurrent-user load tests to isolate response degradation, error rates, and constrained server thresholds with reproducible metrics.",
		focus: "Load & Root-Cause Analysis"
	}
];
var professionalExperience = {
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
		"Collaborate with development teams to investigate defects and validate fixes."
	]
};
var trainings = [
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
			"CloudWatch monitoring, logs, metrics, and deployment troubleshooting"
		]
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
			"L1 networking diagnostics: IP configuration, LAN checks, router setup, TCP/IP, and DNS"
		]
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
			"Client IT support and network connectivity assistance"
		]
	}
];
var certificationsList = [{
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
		"Compute, S3 Storage & CloudFront"
	],
	verified: true
}, {
	id: "icfix-chip-level",
	name: "Laptop Chip-Level Engineering Course",
	issuer: "ICFix Services (ISO 9001:2015 Certified Academy)",
	code: "ICFA/LAP/2278",
	type: "Hardware & IT Systems",
	badge: "ISO 9001:2015 Certified",
	date: "March 4, 2025 · Chennai",
	certificateImage: "/certificates/icfix-chip-level.jpg",
	quote: "An expert-level training program in laptop chip-level repairs, specializing in motherboard diagnostics, power issues, screen replacements, and hardware troubleshooting for all major laptop brands.",
	focusAreas: [
		"Motherboard Diagnostics & Power Rails",
		"Multimeter Continuity & Voltage Testing",
		"Screen & Component Replacements",
		"Hardware Root-Cause & IT Support"
	],
	verified: true
}];
var education = {
	degree: "Bachelor of Engineering – Computer Science and Engineering",
	institution: "CSI College of Engineering",
	university: "Anna University",
	period: "2021 – 2025"
};
var navItems = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Skills",
		href: "#skills"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Experience",
		href: "#experience"
	},
	{
		label: "Certifications",
		href: "#certifications"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [activeId, setActiveId] = (0, import_react.useState)("home");
	const { theme, toggle } = useTheme();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const sections = navItems.map((item) => item.href.replace("#", "")).map((id) => document.getElementById(id)).filter((el) => el !== null);
		if (sections.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible.length > 0) setActiveId(visible[0].target.id);
		}, {
			rootMargin: "-30% 0px -55% 0px",
			threshold: [
				0,
				.25,
				.5
			]
		});
		sections.forEach((sec) => observer.observe(sec));
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKeyDown = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-200", scrolled ? "border-b border-border bg-background/85 py-2.5 backdrop-blur-md" : "bg-transparent py-4"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "visually-hidden fixed left-4 top-4 z-[70] rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "group inline-flex min-h-10 items-center gap-2.5 rounded-lg pr-2 transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-xs font-semibold tracking-tight text-primary transition group-hover:border-primary/60 group-hover:bg-primary/15",
							children: personal.initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden font-display text-sm font-semibold tracking-tight text-foreground sm:inline",
							children: "Sri Jaya Shankaran"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Primary",
						className: "scrollspy-nav hidden items-center gap-1 lg:flex",
						children: navItems.map((item) => {
							const isCurrent = activeId === item.href.replace("#", "");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								"aria-current": isCurrent ? "true" : void 0,
								className: cn("rounded-lg px-3 py-1.5 text-sm font-medium transition-colors", isCurrent ? "target-current text-foreground" : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"),
								children: item.label
							}, item.href);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: toggle,
								"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
								className: "grid h-10 w-10 place-items-center rounded-lg border border-border bg-card/70 text-muted-foreground transition hover:border-foreground/20 hover:text-foreground",
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: personal.resumeUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hidden min-h-10 items-center gap-1.5 rounded-lg border border-border bg-card/80 px-3.5 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary sm:inline-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
									className: "h-3.5 w-3.5",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Resume" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "hidden min-h-10 items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 md:inline-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "h-3.5 w-3.5",
									"aria-hidden": "true"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpen((v) => !v),
								"aria-expanded": open,
								"aria-controls": "mobile-nav-menu",
								"aria-label": open ? "Close navigation menu" : "Open navigation menu",
								className: "grid h-10 w-10 place-items-center rounded-lg border border-border bg-card/70 text-foreground transition hover:bg-muted lg:hidden",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				id: "mobile-nav-menu",
				initial: {
					opacity: 0,
					y: -8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -8
				},
				transition: { duration: .18 },
				className: "mx-4 mt-2 rounded-2xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur-lg lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Mobile Primary",
					className: "grid gap-1",
					children: [navItems.map((item) => {
						const isCurrent = activeId === item.href.replace("#", "");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							onClick: () => setOpen(false),
							"aria-current": isCurrent ? "true" : void 0,
							className: cn("flex min-h-11 items-center rounded-xl px-3.5 py-2 text-sm font-medium transition", isCurrent ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
							children: item.label
						}, item.href);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid grid-cols-2 gap-2 border-t border-border pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: personal.resumeUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => setOpen(false),
							className: "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-border bg-background/70 px-3 py-2 text-sm font-medium text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Resume"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							onClick: () => setOpen(false),
							className: "inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground",
							children: "Contact"
						})]
					})]
				})
			}) })
		]
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 140,
		damping: 24,
		mass: .2
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		"aria-hidden": "true",
		style: { scaleX },
		className: "fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-primary"
	});
}
var topologyNodes = [
	{
		id: "alb",
		label: "Application Load Balancer",
		sublabel: "HTTP Traffic Routing",
		detail: "Receives incoming client traffic and routes HTTP requests to the EC2 target on port 5173.",
		badge: "AWS ALB"
	},
	{
		id: "ec2",
		label: "AWS EC2 Instance (Linux)",
		sublabel: "Docker Compose Runtime",
		detail: "Hosts containerized multi-tier services with port mapping, container health checks, and service logs.",
		badge: "Compute"
	},
	{
		id: "frontend",
		label: "React + Vite",
		sublabel: "Frontend · Port 5173",
		detail: "Point-of-Sale client interface exposed behind the ALB and connected to backend APIs.",
		badge: ":5173"
	},
	{
		id: "backend",
		label: "FastAPI + PostgreSQL",
		sublabel: "Backend API & Database",
		detail: "API backend and PostgreSQL database orchestrated together via Docker Compose bridge networking.",
		badge: "Compose"
	}
];
var pipelineNodes = [
	{
		id: "github",
		label: "GitHub Repository",
		sublabel: "Source Control",
		detail: "Branching, pull requests, and commit webhooks triggering automated pipeline builds.",
		badge: "SCM"
	},
	{
		id: "jenkins",
		label: "Jenkins Declarative Pipeline",
		sublabel: "Jenkinsfile Stages",
		detail: "Checkout, build & validation stages, Docker image creation, and deployment orchestration.",
		badge: "CI/CD"
	},
	{
		id: "ecr",
		label: "Docker & Amazon ECR",
		sublabel: "Container Registry",
		detail: "Packages application services into tagged Docker images for publishing to Amazon ECR.",
		badge: "Registry"
	},
	{
		id: "terraform",
		label: "Terraform + EC2 + CloudWatch",
		sublabel: "Provision & Verify",
		detail: "IaC resource provisioning concepts paired with EC2 deployment checks and log inspection.",
		badge: "IaC / Ops"
	}
];
function HeroArchitecture() {
	const [tab, setTab] = (0, import_react.useState)("topology");
	const [selectedId, setSelectedId] = (0, import_react.useState)("alb");
	const [tilt, setTilt] = (0, import_react.useState)({
		rx: 0,
		ry: 0
	});
	const prefersReduced = useReducedMotion();
	const nodes = tab === "topology" ? topologyNodes : pipelineNodes;
	const activeNode = nodes.find((n) => n.id === selectedId) ?? nodes[0];
	const handleTabChange = (next) => {
		setTab(next);
		setSelectedId(next === "topology" ? "alb" : "github");
	};
	const handleMouseMove = (e) => {
		if (prefersReduced) return;
		const rect = e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - .5;
		const y = (e.clientY - rect.top) / rect.height - .5;
		setTilt({
			rx: -y * 5,
			ry: x * 5
		});
	};
	const handleMouseLeave = () => {
		setTilt({
			rx: 0,
			ry: 0
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 18
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .55,
			delay: .15
		},
		onMouseMove: handleMouseMove,
		onMouseLeave: handleMouseLeave,
		style: { perspective: 1100 },
		className: "relative mx-auto w-full max-w-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 blur-2xl"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			animate: prefersReduced ? void 0 : {
				rotateX: tilt.rx,
				rotateY: tilt.ry
			},
			transition: {
				type: "spring",
				stiffness: 220,
				damping: 24
			},
			className: "engineering-card relative overflow-hidden rounded-2xl p-3.5 shadow-2xl sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3.5 sm:gap-3 sm:pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-7 w-7 place-items-center rounded-md bg-primary/12 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs font-semibold text-foreground",
							children: "aws-infra-blueprint"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] text-muted-foreground sm:text-[11px]",
							children: "interactive architecture view"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "tablist",
						"aria-label": "Architecture view selector",
						className: "inline-flex rounded-lg border border-border bg-muted/60 p-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": tab === "topology",
							onClick: () => handleTabChange("topology"),
							className: cn("rounded-md px-2 py-1 font-mono text-[10px] font-medium transition sm:px-2.5 sm:text-[11px]", tab === "topology" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
							children: "AWS Topology"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": tab === "pipeline",
							onClick: () => handleTabChange("pipeline"),
							className: cn("rounded-md px-2 py-1 font-mono text-[10px] font-medium transition sm:px-2.5 sm:text-[11px]", tab === "pipeline" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
							children: "CI/CD Flow"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-4 rounded-xl border border-border bg-background/60 p-2.5 dot-grid-bg sm:mt-5 sm:p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2.5 flex items-center justify-between text-[10px] font-mono text-muted-foreground sm:mb-3 sm:text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate pr-2",
							children: tab === "topology" ? "Multi-Tier AWS Deployment (JSPCS POS)" : "Automated Build & Delivery Workflow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex shrink-0 items-center gap-1.5 text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-1.5 w-1.5 rounded-full bg-accent",
								"aria-hidden": "true"
							}), "Click node"]
						})]
					}), tab === "topology" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 sm:gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex w-fit items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs text-muted-foreground sm:py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
											className: "h-3.5 w-3.5 text-primary",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] sm:text-[11px]",
											children: "HTTP Traffic"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden sm:block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowLine, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeButton, {
										node: topologyNodes[0],
										selected: activeNode.id === "alb",
										onSelect: () => setSelectedId("alb"),
										icon: Shield,
										className: "flex-1 min-w-0"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerticalFlow, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-dashed border-primary/35 bg-primary/[0.03] p-2.5 sm:p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeButton, {
									node: topologyNodes[1],
									selected: activeNode.id === "ec2",
									onSelect: () => setSelectedId("ec2"),
									icon: Server,
									className: "w-full min-w-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 grid grid-cols-1 gap-2 sm:mt-2.5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeButton, {
										node: topologyNodes[2],
										selected: activeNode.id === "frontend",
										onSelect: () => setSelectedId("frontend"),
										icon: Box,
										className: "min-w-0"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeButton, {
										node: topologyNodes[3],
										selected: activeNode.id === "backend",
										onSelect: () => setSelectedId("backend"),
										icon: Database,
										className: "min-w-0"
									})]
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 sm:gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeButton, {
									node: pipelineNodes[0],
									selected: activeNode.id === "github",
									onSelect: () => setSelectedId("github"),
									icon: GitBranch,
									className: "min-w-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeButton, {
									node: pipelineNodes[1],
									selected: activeNode.id === "jenkins",
									onSelect: () => setSelectedId("jenkins"),
									icon: Layers,
									className: "min-w-0"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerticalFlow, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeButton, {
									node: pipelineNodes[2],
									selected: activeNode.id === "ecr",
									onSelect: () => setSelectedId("ecr"),
									icon: Box,
									className: "min-w-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeButton, {
									node: pipelineNodes[3],
									selected: activeNode.id === "terraform",
									onSelect: () => setSelectedId("terraform"),
									icon: Activity,
									className: "min-w-0"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-xl border border-border bg-muted/40 p-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xs font-semibold text-foreground",
							children: activeNode.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded bg-primary/12 px-2 py-0.5 font-mono text-[10px] font-medium text-primary",
							children: activeNode.badge
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
						children: activeNode.detail
					})]
				})
			]
		})]
	});
}
function NodeButton({ node, selected, onSelect, icon: Icon, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: onSelect,
		className: cn("flex min-w-0 items-center justify-between gap-2 rounded-lg border px-2 py-1.5 text-left transition sm:px-3 sm:py-2.5", selected ? "border-primary/60 bg-primary/10 shadow-sm" : "border-border bg-card hover:border-primary/30 hover:bg-card/90", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("grid h-6 w-6 shrink-0 place-items-center rounded-md sm:h-7 sm:w-7", selected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-3.5 w-3.5",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-[11px] font-semibold text-foreground sm:text-xs",
					children: node.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate font-mono text-[9px] text-muted-foreground sm:text-[10px]",
					children: node.sublabel
				})]
			})]
		})
	});
}
function FlowLine() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "h-3 w-8 shrink-0 text-primary",
		viewBox: "0 0 32 12",
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "0",
			y1: "6",
			x2: "28",
			y2: "6",
			stroke: "currentColor",
			strokeWidth: "1.5",
			className: "animate-pulse-flow"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M24 2L30 6L24 10",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
function VerticalFlow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "h-5 w-4 text-primary",
		viewBox: "0 0 16 20",
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "8",
			y1: "0",
			x2: "8",
			y2: "16",
			stroke: "currentColor",
			strokeWidth: "1.5",
			className: "animate-pulse-flow"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 13L8 18L12 13",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
function Hero() {
	const linkedin = socials.find((s) => s.name === "LinkedIn");
	const github = socials.find((s) => s.name === "GitHub");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		tabIndex: -1,
		className: "relative isolate overflow-hidden pb-12 pt-24 sm:pb-16 sm:pt-28 lg:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 -z-10 grid-bg opacity-70 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_20%,black,transparent)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute left-1/2 top-0 -z-10 h-[380px] w-[min(650px,96vw)] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .35 },
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
									className: "h-3.5 w-3.5 text-primary",
									"aria-hidden": "true"
								}), "AWS Certified Solutions Architect"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/20 px-2.5 py-1 text-xs font-medium text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
									className: "h-3.5 w-3.5 text-primary",
									"aria-hidden": "true"
								}), "Certified Laptop Chip-Level Engineer"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-1.5 w-1.5 rounded-full bg-primary",
									"aria-hidden": "true"
								}), personal.availability]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .4,
							delay: .05
						},
						className: "mt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs font-medium uppercase tracking-widest text-primary",
								children: personal.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1.5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]",
								children: personal.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2.5 font-display text-base font-medium text-foreground/90 sm:text-xl",
								children: personal.headline
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .4,
							delay: .1
						},
						className: "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: personal.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .4,
							delay: .15
						},
						className: "mt-6 flex flex-wrap items-center gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#projects",
								className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Projects" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: personal.resumeUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Resume" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#certifications",
								className: "inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
									className: "h-4 w-4 text-primary",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Certificates" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-transparent px-3.5 py-2 text-sm font-medium text-muted-foreground transition hover:border-foreground/25 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: .4,
							delay: .2
						},
						className: "mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-4 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [linkedin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: linkedin.href,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "LinkedIn profile",
									className: "inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-border bg-card/70 px-2.5 py-1 text-xs font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
										className: "h-3.5 w-3.5 text-primary",
										"aria-hidden": "true"
									}), "LinkedIn"]
								}), github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: github.href,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "GitHub profile",
									className: "inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-border bg-card/70 px-2.5 py-1 text-xs font-medium text-muted-foreground transition hover:border-primary/40 hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
										className: "h-3.5 w-3.5 text-foreground",
										"aria-hidden": "true"
									}), "GitHub"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden h-3.5 w-px bg-border sm:inline-block",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px]",
								children: personal.specialization
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroArchitecture, {})]
			})
		]
	});
}
function SectionHeader({ eyebrow, title, subtitle, align = "left", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-1.5 w-1.5 rounded-full bg-primary",
					"aria-hidden": "true"
				}), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base leading-relaxed text-muted-foreground",
				children: subtitle
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		tabIndex: -1,
		className: "border-t border-border py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "About Me",
				title: "Reliability-first mindset from silicon to cloud infrastructure",
				subtitle: "Combining certified laptop chip-level diagnostics, 1+ year of production SDET automation, and AWS DevOps engineering."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-start sm:mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: { duration: .35 },
					className: "engineering-card rounded-2xl p-5 sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 font-mono text-sm font-bold text-primary",
									children: personal.initials
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-semibold text-foreground",
									children: personal.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-xs text-muted-foreground",
									children: [
										personal.role,
										" · ",
										personal.location
									]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden items-center gap-1 rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary sm:inline-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
									className: "h-3 w-3",
									"aria-hidden": "true"
								}), "Hardware Passion"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-3.5 text-sm leading-relaxed text-muted-foreground",
							children: aboutContent.paragraphs.map((paragraph, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap gap-2 border-t border-border pt-4 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "h-3.5 w-3.5 text-accent",
									"aria-hidden": "true"
								}), "Root-Cause Investigation"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1 text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
									className: "h-3.5 w-3.5 text-primary",
									"aria-hidden": "true"
								}), "Component-Level Diagnostics"]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .35,
						delay: .06
					},
					className: "engineering-card rounded-2xl p-5 sm:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border pb-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold text-foreground",
							children: "Engineering Journey"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: "Hardware → SDET → Cloud"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "relative mt-5 space-y-4 before:absolute before:bottom-3 before:left-[15px] before:top-3 before:w-px before:bg-border",
						children: aboutContent.journey.map((item) => {
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "relative flex gap-3.5 pl-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 pt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[11px] text-primary",
											children: item.step
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-display text-xs font-semibold text-foreground sm:text-sm",
											children: item.title
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs leading-relaxed text-muted-foreground",
										children: item.detail
									})]
								})]
							}, item.step);
						})
					})]
				})]
			})]
		})
	});
}
var familiarityBadgeStyle = {
	"Production Experience": "border-accent/40 bg-accent/20 text-foreground",
	"Certified & Hands-On": "border-primary/30 bg-primary/10 text-primary",
	"Hands-on Deployment": "border-primary/30 bg-primary/10 text-primary",
	"Hands-on & Lab": "border-primary/30 bg-primary/10 text-primary",
	"Foundational & Lab": "border-border bg-muted text-muted-foreground"
};
function Skills() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("all");
	const visibleGroups = activeTab === "all" ? skillGroups : skillGroups.filter((group) => group.filterGroup === activeTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		tabIndex: -1,
		className: "border-t border-border py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Technical Skills",
					title: "Cloud, DevOps, Hardware & QA Engineering Stack",
					subtitle: "Organized by domain with clear distinctions: 1+ year production SDET automation, hands-on AWS deployments, certified chip-level IT diagnostics, and foundational DevOps tooling."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "tablist",
					"aria-label": "Filter technical skills by domain",
					className: "flex flex-wrap gap-1 rounded-xl border border-border bg-card/70 p-1",
					children: skillFilterTabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": activeTab === tab.id,
						onClick: () => setActiveTab(tab.id),
						className: cn("min-h-8 rounded-lg px-2.5 py-1 text-xs font-medium transition", activeTab === tab.id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"),
						children: tab.label
					}, tab.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:mt-8",
				children: visibleGroups.map((group) => {
					const Icon = group.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
						layout: true,
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .22 },
						className: "engineering-card group flex flex-col justify-between rounded-2xl p-4.5 transition hover:border-primary/35 sm:p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-start justify-between gap-2.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-muted/60 text-primary transition group-hover:border-primary/30 group-hover:bg-primary/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-sm font-semibold text-foreground sm:text-base",
										children: group.title
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] font-medium", familiarityBadgeStyle[group.familiarity]),
									children: group.familiarity
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3.5 flex flex-wrap gap-1.5",
								children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-1 rounded-lg border border-border bg-background/70 px-2 py-0.5 text-xs text-foreground/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name }), item.note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[10px] text-primary",
										children: ["· ", item.note]
									})]
								}, item.name))
							})
						] })
					}, group.id);
				})
			})]
		})
	});
}
var statusBadgeStyles = {
	"Deployed / Hands-On": "border-accent/40 bg-accent/20 text-foreground",
	"In Progress": "border-primary/35 bg-primary/10 text-primary",
	"Learning Project": "border-border bg-muted text-muted-foreground"
};
function Projects() {
	const flagship = featuredProjects.find((p) => p.featured);
	const secondaryProjects = featuredProjects.filter((p) => !p.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		tabIndex: -1,
		className: "border-t border-border py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Featured Projects",
					title: "Cloud Deployments, CI/CD & Automation Engineering",
					subtitle: "Hands-on AWS infrastructure deployments, ongoing DevOps automation workflows, live static sites, and production QA engineering suites."
				}),
				flagship && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: { duration: .35 },
					className: "engineering-card mt-7 overflow-hidden rounded-2xl border-primary/25 p-5 sm:mt-8 sm:p-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-primary/12 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary",
									children: "Flagship Project"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 font-mono text-[10px] font-medium", statusBadgeStyles[flagship.status]),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-1.5 w-1.5 rounded-full bg-current",
										"aria-hidden": "true"
									}), flagship.status]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl",
								children: flagship.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: flagship.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3.5 rounded-xl border border-border bg-muted/40 p-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] font-semibold uppercase tracking-wider text-primary",
									children: "My Contribution"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs leading-relaxed text-foreground/90 sm:text-sm",
									children: flagship.contribution
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2",
								children: flagship.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-xs leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-accent",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-1.5",
								children: flagship.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md border border-border bg-background/80 px-2 py-0.5 font-mono text-[11px] text-foreground/85",
									children: tech
								}, tech))
							}),
							flagship.githubUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: flagship.githubUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex min-h-9 items-center gap-2 rounded-xl border border-border bg-background/70 px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary/40 hover:text-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
											className: "h-3.5 w-3.5",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GitHub Profile" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											className: "h-3.5 w-3.5",
											"aria-hidden": "true"
										})
									]
								})
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JspcsArchitectureDiagram, {})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2",
					children: secondaryProjects.map((project, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 14
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-40px"
						},
						transition: {
							duration: .35,
							delay: idx * .06
						},
						className: "engineering-card flex flex-col justify-between rounded-2xl p-5 transition hover:border-primary/35",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[10px] font-medium", statusBadgeStyles[project.status]),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-1.5 w-1.5 rounded-full bg-current",
										"aria-hidden": "true"
									}), project.status]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-bold text-foreground sm:text-xl",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm",
								children: project.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: project.diagramType === "cicd-pipeline" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CicdMiniDiagram, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaticDeliveryMiniDiagram, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3.5 text-xs leading-relaxed text-foreground/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono font-semibold text-primary",
									children: ["Focus:", " "]
								}), project.contribution]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3.5 space-y-1.5",
								children: project.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-xs leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 border-t border-border pt-3.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5",
								children: project.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md border border-border bg-background/80 px-2 py-0.5 font-mono text-[10px] text-foreground/85 sm:text-[11px]",
									children: tech
								}, tech))
							})
						})]
					}, project.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 sm:mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold text-foreground sm:text-lg",
							children: "Live Static Sites Developed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted-foreground",
							children: "Publicly accessible web deployments"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-3",
						children: liveStaticSites.map((site) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "engineering-card group flex items-center justify-between gap-3 rounded-xl p-3.5 transition hover:border-primary/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-xs font-semibold text-foreground group-hover:text-primary sm:text-sm",
										children: site.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate font-mono text-[11px] text-muted-foreground",
										children: site.domain
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary",
								"aria-hidden": "true"
							})]
						}, site.url))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 sm:mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-widest text-primary",
							children: "Quality Engineering & Automation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-0.5 font-display text-lg font-bold text-foreground sm:text-xl",
							children: "Production QA & Performance Automation Work"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-muted-foreground",
							children: "SDET differentiator · Reliability & validation"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3",
						children: automationProjects.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "engineering-card flex flex-col justify-between rounded-xl p-4 transition hover:border-primary/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 font-mono text-[10px] font-medium text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestTubeDiagonal, {
											className: "h-3 w-3",
											"aria-hidden": "true"
										}), item.focus]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-2 font-display text-xs font-semibold text-foreground sm:text-sm",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
									children: item.summary
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3.5 border-t border-border pt-2.5 font-mono text-[10px] text-muted-foreground",
								children: item.stack
							})]
						}, item.title))
					})]
				})
			]
		})
	});
}
function JspcsArchitectureDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "img",
		"aria-label": "Architecture diagram showing HTTP traffic routed through an AWS Application Load Balancer to an EC2 Linux instance running Docker Compose with React/Vite on port 5173, FastAPI backend, and PostgreSQL database",
		className: "rounded-xl border border-border bg-background/70 p-4 dot-grid-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between border-b border-border pb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[11px] font-semibold text-foreground",
				children: "AWS Multi-Tier Deployment Topology"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] text-accent",
				children: "EC2 + Docker Compose"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 sm:flex-row sm:items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
								className: "h-3.5 w-3.5 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-foreground",
								children: "Client HTTP"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-px flex-1 border-t border-dashed border-primary/50 sm:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-2.5 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
								className: "h-3.5 w-3.5 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-semibold text-foreground",
								children: "Application Load Balancer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[9px] text-muted-foreground",
								children: "HTTP Listener Routing"
							})] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-px border-l border-dashed border-primary/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded border border-border bg-card px-2 py-0.5 font-mono text-[9px] text-muted-foreground",
								children: "Target Port :5173"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3 w-px border-l border-dashed border-primary/60" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-dashed border-primary/40 bg-card/80 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 border-b border-border pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, {
								className: "h-3.5 w-3.5 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold text-foreground",
								children: "AWS EC2 Instance (Linux)"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] text-muted-foreground",
							children: "Docker Compose"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-background/80 p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
										className: "h-3 w-3",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] font-semibold",
										children: "React + Vite"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 font-mono text-[9px] text-muted-foreground",
									children: "Frontend :5173"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-background/80 p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
										className: "h-3 w-3",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] font-semibold",
										children: "FastAPI"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 font-mono text-[9px] text-muted-foreground",
									children: "Backend API"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-background/80 p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
										className: "h-3 w-3",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] font-semibold",
										children: "PostgreSQL"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 font-mono text-[9px] text-muted-foreground",
									children: "Database Tier"
								})]
							})
						]
					})]
				})
			]
		})]
	});
}
function CicdMiniDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "img",
		"aria-label": "CI/CD workflow stages: GitHub to Jenkins to Docker and Amazon ECR to Terraform and EC2",
		className: "grid grid-cols-2 gap-1.5 rounded-xl border border-border bg-background/60 p-2.5 sm:grid-cols-4",
		children: [
			{
				label: "GitHub",
				icon: GitBranch
			},
			{
				label: "Jenkins",
				icon: Layers
			},
			{
				label: "Docker/ECR",
				icon: Box
			},
			{
				label: "TF + EC2",
				icon: Server
			}
		].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
				className: "h-3 w-3 shrink-0 text-primary",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate font-mono text-[10px] text-foreground",
				children: s.label
			})]
		}, s.label))
	});
}
function StaticDeliveryMiniDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "img",
		"aria-label": "Static hosting delivery flow: GitHub to S3 Origin to CloudFront to Route 53 and ACM HTTPS",
		className: "grid grid-cols-2 gap-1.5 rounded-xl border border-border bg-background/60 p-2.5 sm:grid-cols-4",
		children: [
			{
				label: "GitHub",
				icon: GitBranch
			},
			{
				label: "S3 Origin",
				icon: Cloud
			},
			{
				label: "CloudFront",
				icon: Globe
			},
			{
				label: "Route 53",
				icon: Shield
			}
		].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
				className: "h-3 w-3 shrink-0 text-primary",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate font-mono text-[10px] text-foreground",
				children: s.label
			})]
		}, s.label))
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		tabIndex: -1,
		className: "border-t border-border py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Experience & Training",
				title: "Professional Experience & Technical Development",
				subtitle: "Production SDET quality engineering paired with certified chip-level hardware diagnostics and AWS DevOps training."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] sm:mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: { duration: .35 },
					className: "engineering-card relative flex flex-col justify-between rounded-2xl p-5 sm:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center justify-between gap-2.5 border-b border-border pb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-xl bg-accent/12 text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
										className: "h-4.5 w-4.5",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] font-semibold uppercase tracking-wider text-accent",
									children: "Professional Experience"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold text-foreground sm:text-xl",
									children: professionalExperience.role
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xs font-semibold text-foreground sm:text-sm",
									children: professionalExperience.company
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "h-3 w-3 text-primary",
										"aria-hidden": "true"
									}), professionalExperience.location]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
										className: "h-3 w-3 text-primary",
										"aria-hidden": "true"
									}), professionalExperience.period]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2.5",
							children: professionalExperience.responsibilities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-xs leading-relaxed text-muted-foreground sm:text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-accent",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-xl border border-border bg-muted/40 p-3 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-foreground",
							children: ["SDET & Systems Differentiator:", " "]
						}), "Applies root-cause log and API investigation skills across both software test environments and physical hardware systems."]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: trainings.map((t, idx) => {
						const Icon = t.icon ?? GraduationCap;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							initial: {
								opacity: 0,
								y: 14
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-40px"
							},
							transition: {
								duration: .35,
								delay: idx * .05
							},
							className: "engineering-card relative rounded-2xl p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-8 w-8 place-items-center rounded-lg bg-primary/12 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "h-4 w-4",
												"aria-hidden": "true"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] font-semibold uppercase tracking-wider text-primary",
												children: t.badge
											}), "serialNo" in t && t.serialNo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-[9px] text-muted-foreground",
												children: ["#", t.serialNo]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-display text-sm font-bold text-foreground sm:text-base",
											children: t.title
										})] })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-foreground",
											children: t.organization
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
												className: "h-3 w-3 text-primary",
												"aria-hidden": "true"
											}), t.location]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[11px]",
											children: t.period
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-1.5",
									children: t.topics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-xs leading-relaxed text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: topic })]
									}, topic))
								})
							]
						}, t.title);
					})
				})]
			})]
		})
	});
}
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function Certifications() {
	const [certModalOpen, setCertModalOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "certifications",
		tabIndex: -1,
		className: "border-t border-border py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Credentials & Education",
					title: "Verified Certifications & Academic Foundation",
					subtitle: "AWS cloud architecture credentials alongside ISO 9001:2015 certified laptop chip-level engineering and a Computer Science degree."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2 sm:mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 14
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-40px"
						},
						transition: { duration: .35 },
						className: "engineering-card relative flex flex-col justify-between overflow-hidden rounded-2xl border-primary/25 p-5 sm:p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-start justify-between gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-primary/35 bg-primary/10 text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, {
										className: "h-6 w-6",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
										className: "absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-card p-0.5 text-primary",
										"aria-hidden": "true"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] font-semibold uppercase tracking-wider text-primary",
										children: "Cloud Architecture · SAA-C03"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-base font-bold text-foreground sm:text-lg",
										children: "AWS Certified Solutions Architect – Associate"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Issued by Amazon Web Services (AWS)"
									})
								] })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
								children: "Core Architecture Competencies"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2.5 flex flex-wrap gap-1.5",
								children: certificationsList[0].focusAreas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-lg border border-border bg-background/70 px-2.5 py-0.5 text-xs text-foreground/90",
									children: area
								}, area))
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between border-t border-border pt-3.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "h-3.5 w-3.5",
									"aria-hidden": "true"
								}), "Verified Associate Credential"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px]",
								children: "AWS SAA-C03"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 14
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-40px"
						},
						transition: {
							duration: .35,
							delay: .05
						},
						className: "engineering-card relative flex flex-col justify-between overflow-hidden rounded-2xl border-accent/40 p-5 sm:p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-start justify-between gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-accent/40 bg-accent/20 text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
											className: "h-6 w-6",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
											className: "absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-card p-0.5 text-primary",
											"aria-hidden": "true"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] font-semibold uppercase tracking-wider text-primary",
											children: "Hardware & IT · Serial ICFA/LAP/2278"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-base font-bold text-foreground sm:text-lg",
											children: "Laptop Chip-Level Engineering Course"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "ICFix Services · ISO 9001:2015 Certified Academy"
										})
									] })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3.5 text-xs leading-relaxed text-muted-foreground",
								children: "“An expert-level training program in laptop chip-level repairs, specializing in motherboard diagnostics, power issues, screen replacements, and hardware troubleshooting for all major laptop brands.”"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 border-t border-border pt-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
									children: "Core Diagnostic Competencies"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2.5 flex flex-wrap gap-1.5",
									children: certificationsList[1].focusAreas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-lg border border-border bg-background/70 px-2.5 py-0.5 text-xs text-foreground/90",
										children: area
									}, area))
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between border-t border-border pt-3.5 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-muted-foreground",
								children: "Issued 04 March, 2025 · Chennai"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
								open: certModalOpen,
								onOpenChange: setCertModalOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "inline-flex min-h-8 items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary transition hover:bg-primary/20",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, {
											className: "h-3.5 w-3.5",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Certificate" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
									className: "max-w-2xl border-border bg-card p-4 sm:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
											className: "font-display text-lg font-bold text-foreground",
											children: "Laptop Chip-Level Course – Certificate of Completion"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
											className: "font-mono text-xs text-muted-foreground",
											children: "Candidate Serial No: ICFA/LAP/2278 · Issued by ICFix Services (ISO 9001:2015 Certified)"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 overflow-hidden rounded-xl border border-border bg-black/40",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/certificates/icfix-chip-level.jpg",
												alt: "Certificate of Completion for Sri jaya shankaran . R in Laptop Chip-Level Course from ICFix Services, Candidate Serial No: ICFA/LAP/2278",
												className: "max-h-[70vh] w-full object-contain"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Issued in Chennai on 04th March, 2025 · Signed by Founder Abdul Hameed A" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "/certificates/icfix-chip-level.jpg",
												target: "_blank",
												rel: "noopener noreferrer",
												className: "inline-flex items-center gap-1 text-primary hover:underline",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open full image" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
													className: "h-3.5 w-3.5",
													"aria-hidden": "true"
												})]
											})]
										})
									]
								})]
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					initial: {
						opacity: 0,
						y: 14
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .35,
						delay: .08
					},
					className: "engineering-card mt-5 flex flex-col justify-between rounded-2xl p-5 sm:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
									className: "h-6 w-6",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] font-semibold uppercase tracking-wider text-primary",
									children: "Academic Degree"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base font-bold text-foreground sm:text-lg",
									children: education.degree
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-foreground/90 sm:text-sm",
									children: [
										education.institution,
										" · ",
										education.university
									]
								})
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg border border-border bg-background/70 px-3 py-1 font-mono text-xs text-muted-foreground",
							children: education.period
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 border-t border-border pt-3.5 text-xs leading-relaxed text-muted-foreground",
						children: "Comprehensive computer science foundation covering computer architecture, operating systems, networking protocols (TCP/IP, UDP, DNS), data structures, and database management systems."
					})]
				})
			]
		})
	});
}
function Contact() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(personal.email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2200);
		} catch {
			window.location.href = `mailto:${personal.email}`;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		tabIndex: -1,
		className: "border-t border-border py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 14
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-40px"
				},
				transition: { duration: .35 },
				className: "engineering-card relative overflow-hidden rounded-3xl p-5 sm:p-8 md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: "Contact",
						title: "Let's Build Something Reliable Together.",
						subtitle: "Open to Junior DevOps, AWS Cloud Infrastructure, Cloud Operations, IT Support & Systems Engineering opportunities."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${personal.email}?subject=Opportunity%20%E2%80%94%20DevOps%20%2F%20Cloud%20%2F%20IT%20Systems`,
								className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Send an Email" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: copyEmail,
								className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-border bg-background/80 px-3.5 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary",
								children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "h-4 w-4 text-accent",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copied!" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy Email" })] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: personal.resumeUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-border bg-background/80 px-3.5 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Resume" })]
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${personal.email}`,
								className: "flex items-center justify-between gap-3 rounded-xl border border-border bg-background/70 p-3.5 transition hover:border-primary/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate text-xs font-medium text-foreground sm:text-sm",
											children: personal.email
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "h-4 w-4 shrink-0 text-muted-foreground",
									"aria-hidden": "true"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: personal.phoneHref,
								className: "flex items-center justify-between gap-3 rounded-xl border border-border bg-background/70 p-3.5 transition hover:border-primary/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
											children: "Phone"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-xs font-medium text-foreground sm:text-sm",
											children: personal.phone
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "h-4 w-4 shrink-0 text-muted-foreground",
									"aria-hidden": "true"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: personal.portfolioUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center justify-between gap-3 rounded-xl border border-border bg-background/70 p-3.5 transition hover:border-primary/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
											children: "Portfolio"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate font-mono text-xs font-medium text-foreground sm:text-sm",
											children: "jaishankar.vercel.app"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "h-4 w-4 shrink-0 text-muted-foreground",
									"aria-hidden": "true"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-3 gap-2 pt-1",
								children: socials.filter((s) => s.name !== "Email").map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: s.href,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-border bg-background/70 px-2 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary/40 hover:text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.name })]
								}, s.name))
							})
						]
					})]
				})]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-card/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-xs font-bold text-primary",
							children: personal.initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base font-semibold text-foreground",
							children: personal.name
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-xs text-muted-foreground",
						children: [
							personal.role,
							" · ",
							personal.specialization
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Footer",
						className: "flex flex-wrap gap-x-4 gap-y-1.5 text-xs",
						children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "text-muted-foreground transition hover:text-foreground",
							children: item.label
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: s.href.startsWith("http") ? "_blank" : void 0,
							rel: s.href.startsWith("http") ? "noopener noreferrer" : void 0,
							"aria-label": s.label,
							className: "grid h-8 w-8 place-items-center rounded-lg border border-border bg-background/70 text-muted-foreground transition hover:border-primary/40 hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							})
						}, s.name))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					personal.name,
					". Built for clarity and reliability."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "inline-flex min-h-8 items-center gap-1.5 rounded-lg border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-foreground transition hover:border-primary/40 hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to top" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
						className: "h-3 w-3",
						"aria-hidden": "true"
					})]
				})]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
