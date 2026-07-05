import { a as __toESM } from "../_runtime.mjs";
import { a as motion, i as useScroll, n as useSpring, o as AnimatePresence, r as useMotionValue, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useTheme } from "./theme-provider-CqHKImdn.mjs";
import { A as Cloud, B as ArrowUp, C as FolderGit2, D as Cpu, E as Download, F as Check, I as Calendar, L as Boxes, M as CircleCheck, N as ChevronRight, O as Container, P as ChevronLeft, R as BookOpen, S as Github, T as ExternalLink, V as ArrowRight, _ as MapPin, a as TestTubeDiagonal, b as Instagram, c as Sparkles, d as Search, f as Phone, g as Menu, h as Moon, i as Trophy, j as Clock, k as CodeXml, l as Server, m as Network, n as Wrench, o as Terminal, p as PenTool, r as Twitter, s as Sun, t as X, u as Send, v as Mail, w as FileText, x as Heart, y as Linkedin, z as Award } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CctVl1od.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var personal = {
	name: "Sri Jaya Shankaran R",
	shortName: "SJ",
	roles: [
		"QA Automation Engineer",
		"AWS Certified Solutions Architect",
		"DevOps Enthusiast",
		"Cloud Engineer",
		"Platform Engineering Learner",
		"Testing Everything. Building Reliable Systems."
	],
	tagline: "I'm a QA Automation Engineer and AWS Certified Solutions Architect focused on building reliable, scalable software systems.",
	description: "I build cloud infrastructure, automate testing pipelines, and bridge development, testing, and operations to deliver high-quality software.",
	location: "India",
	email: "jaishankar98421@gmail.com",
	phone: "+91 00000 00000",
	resumeUrl: "/resume.pdf"
};
var socials = [
	{
		name: "GitHub",
		href: "https://github.com/",
		icon: Github
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com/",
		icon: Linkedin
	},
	{
		name: "Email",
		href: "mailto:jaishankar98421@gmail.com",
		icon: Mail
	},
	{
		name: "LeetCode",
		href: "https://leetcode.com/",
		icon: CodeXml
	},
	{
		name: "HackerRank",
		href: "https://hackerrank.com/",
		icon: Terminal
	},
	{
		name: "Instagram",
		href: "https://instagram.com/",
		icon: Instagram
	},
	{
		name: "X",
		href: "https://x.com/",
		icon: Twitter
	},
	{
		name: "Dev.to",
		href: "https://dev.to/",
		icon: PenTool
	},
	{
		name: "Medium",
		href: "https://medium.com/",
		icon: BookOpen
	}
];
var stats = [
	{
		label: "Projects",
		value: 12,
		suffix: "+"
	},
	{
		label: "Certifications",
		value: 5,
		suffix: ""
	},
	{
		label: "Technologies",
		value: 30,
		suffix: "+"
	},
	{
		label: "Years Experience",
		value: 3,
		suffix: "+"
	}
];
var skillCategories = [
	"Cloud",
	"DevOps",
	"Testing",
	"Languages",
	"Hardware"
];
var skills$1 = [
	{
		name: "AWS",
		level: 92,
		category: "Cloud"
	},
	{
		name: "EC2",
		level: 90,
		category: "Cloud"
	},
	{
		name: "IAM",
		level: 88,
		category: "Cloud"
	},
	{
		name: "Lambda",
		level: 85,
		category: "Cloud"
	},
	{
		name: "API Gateway",
		level: 82,
		category: "Cloud"
	},
	{
		name: "VPC",
		level: 84,
		category: "Cloud"
	},
	{
		name: "Route53",
		level: 78,
		category: "Cloud"
	},
	{
		name: "S3",
		level: 92,
		category: "Cloud"
	},
	{
		name: "CloudFront",
		level: 80,
		category: "Cloud"
	},
	{
		name: "RDS",
		level: 82,
		category: "Cloud"
	},
	{
		name: "DynamoDB",
		level: 78,
		category: "Cloud"
	},
	{
		name: "CloudFormation",
		level: 76,
		category: "Cloud"
	},
	{
		name: "Linux",
		level: 90,
		category: "DevOps"
	},
	{
		name: "Docker",
		level: 88,
		category: "DevOps"
	},
	{
		name: "Kubernetes",
		level: 80,
		category: "DevOps"
	},
	{
		name: "Terraform",
		level: 78,
		category: "DevOps"
	},
	{
		name: "Git",
		level: 92,
		category: "DevOps"
	},
	{
		name: "GitHub",
		level: 92,
		category: "DevOps"
	},
	{
		name: "Jenkins",
		level: 85,
		category: "DevOps"
	},
	{
		name: "Maven",
		level: 78,
		category: "DevOps"
	},
	{
		name: "Networking",
		level: 84,
		category: "DevOps"
	},
	{
		name: "Playwright",
		level: 92,
		category: "Testing"
	},
	{
		name: "Selenium",
		level: 90,
		category: "Testing"
	},
	{
		name: "Postman",
		level: 90,
		category: "Testing"
	},
	{
		name: "REST API Testing",
		level: 88,
		category: "Testing"
	},
	{
		name: "JUnit",
		level: 82,
		category: "Testing"
	},
	{
		name: "TestNG",
		level: 84,
		category: "Testing"
	},
	{
		name: "Agile / Scrum",
		level: 85,
		category: "Testing"
	},
	{
		name: "Java",
		level: 88,
		category: "Languages"
	},
	{
		name: "Python",
		level: 86,
		category: "Languages"
	},
	{
		name: "FastAPI",
		level: 78,
		category: "Languages"
	},
	{
		name: "Chip-Level Repair",
		level: 90,
		category: "Hardware"
	},
	{
		name: "Windows",
		level: 88,
		category: "Hardware"
	},
	{
		name: "Hardware Troubleshooting",
		level: 92,
		category: "Hardware"
	}
];
var categoryIcons = {
	Cloud,
	DevOps: Wrench,
	Testing: TestTubeDiagonal,
	Languages: Cpu,
	Hardware: Network
};
var experiences = [{
	role: "Software Test Engineer Intern",
	company: "QSpiders Test Yantra",
	period: "2024 — Present",
	location: "India",
	icon: TestTubeDiagonal,
	bullets: [
		"Built automation frameworks using Playwright and Selenium.",
		"Designed API testing suites with Postman and REST Assured.",
		"Integrated tests into CI/CD pipelines using Jenkins and GitHub Actions."
	]
}, {
	role: "Hardware Engineer",
	company: "Views Computers",
	period: "2021 — 2023",
	location: "India",
	icon: Cpu,
	bullets: [
		"Performed chip-level diagnostics and repair for laptops and desktops.",
		"Configured networks, servers, and Windows environments for SMB clients.",
		"Founded and operated a small computer service business."
	]
}];
var projects = [
	{
		title: "Endocrine Disease Detection",
		description: "Image processing pipeline for early detection of endocrine diseases using classical CV and ML techniques.",
		tags: [
			"Python",
			"OpenCV",
			"ML",
			"Research"
		],
		github: "https://github.com/",
		caseStudy: "#",
		gradient: "from-blue-500/30 to-cyan-500/30"
	},
	{
		title: "Web Traffic Analysis",
		description: "Analytics platform processing web traffic logs to uncover behavior patterns and anomalies.",
		tags: [
			"Python",
			"Pandas",
			"AWS",
			"Dashboards"
		],
		github: "https://github.com/",
		demo: "#",
		gradient: "from-cyan-500/30 to-emerald-500/30"
	},
	{
		title: "DEX QA",
		description: "End-to-end QA suite for a decentralized exchange covering UI, contract, and API layers.",
		tags: [
			"Playwright",
			"REST",
			"CI/CD"
		],
		github: "https://github.com/",
		gradient: "from-emerald-500/30 to-blue-500/30"
	},
	{
		title: "JSPCS",
		description: "Java-based service platform with modular architecture and JUnit-driven test coverage.",
		tags: [
			"Java",
			"Maven",
			"JUnit"
		],
		github: "https://github.com/",
		caseStudy: "#",
		gradient: "from-blue-500/30 to-purple-500/30"
	},
	{
		title: "AWS Serverless Deployment",
		description: "Serverless reference architecture using Lambda, API Gateway, DynamoDB and CloudFormation.",
		tags: [
			"AWS",
			"Lambda",
			"CloudFormation"
		],
		github: "https://github.com/",
		demo: "#",
		gradient: "from-orange-500/30 to-blue-500/30"
	},
	{
		title: "CI/CD Automation",
		description: "Opinionated Jenkins + GitHub Actions pipeline templates for build, test and deploy stages.",
		tags: [
			"Jenkins",
			"GitHub Actions",
			"Docker"
		],
		github: "https://github.com/",
		gradient: "from-cyan-500/30 to-blue-500/30"
	},
	{
		title: "Playwright Automation Framework",
		description: "Scalable Playwright framework with fixtures, POM, parallel execution and HTML reporting.",
		tags: [
			"Playwright",
			"TypeScript",
			"POM"
		],
		github: "https://github.com/",
		demo: "#",
		gradient: "from-emerald-500/30 to-cyan-500/30"
	},
	{
		title: "Dockerized Test Framework",
		description: "Containerized Selenium Grid + test runner setup for repeatable execution across environments.",
		tags: [
			"Docker",
			"Selenium Grid",
			"Java"
		],
		github: "https://github.com/",
		gradient: "from-blue-500/30 to-emerald-500/30"
	},
	{
		title: "API Automation Suite",
		description: "Comprehensive REST API test suite with data-driven cases and CI-integrated reports.",
		tags: [
			"Postman",
			"REST Assured",
			"Newman"
		],
		github: "https://github.com/",
		demo: "#",
		gradient: "from-purple-500/30 to-cyan-500/30"
	}
];
var certifications = [
	{
		name: "AWS Certified Solutions Architect – Associate",
		org: "Amazon Web Services",
		date: "2024",
		credentialUrl: "#"
	},
	{
		name: "Postman Student Expert",
		org: "Postman",
		date: "2024",
		credentialUrl: "#"
	},
	{
		name: "CompTIA A+",
		org: "CompTIA",
		date: "2022",
		credentialUrl: "#"
	},
	{
		name: "Chip-Level Hardware Engineer",
		org: "Views Institute",
		date: "2021",
		credentialUrl: "#"
	},
	{
		name: "Software Test Engineer",
		org: "QSpiders",
		date: "2024",
		credentialUrl: "#"
	}
];
var achievements = [
	"AWS Certified Solutions Architect",
	"Postman Student Expert",
	"Founded a Computer Service Business",
	"Built end-to-end QA Automation frameworks",
	"Shipped multiple AWS Cloud projects",
	"Deep Networking & Hardware Engineering background"
];
var blogPosts = [
	{
		title: "Scaling Playwright Test Suites for Real Production Apps",
		excerpt: "Fixtures, sharding, and reporting patterns that keep large Playwright suites fast and maintainable.",
		date: "May 2025",
		readTime: "8 min read",
		href: "#"
	},
	{
		title: "From QA to Cloud: My AWS Solutions Architect Journey",
		excerpt: "How I approached the SAA-C03 exam while working full-time in QA automation.",
		date: "Apr 2025",
		readTime: "6 min read",
		href: "#"
	},
	{
		title: "Dockerizing a Selenium Grid the Right Way",
		excerpt: "A pragmatic setup for containerized browser testing on any CI runner.",
		date: "Mar 2025",
		readTime: "7 min read",
		href: "#"
	},
	{
		title: "REST API Testing: A Postman + Newman Playbook",
		excerpt: "Turn manual Postman collections into a first-class regression suite.",
		date: "Feb 2025",
		readTime: "5 min read",
		href: "#"
	},
	{
		title: "Kubernetes for QA Engineers",
		excerpt: "The exact k8s vocabulary QA engineers need to test cloud-native apps confidently.",
		date: "Jan 2025",
		readTime: "9 min read",
		href: "#"
	}
];
var techStack = [
	"AWS",
	"Docker",
	"Kubernetes",
	"Linux",
	"Python",
	"Java",
	"Playwright",
	"Selenium",
	"GitHub",
	"Git",
	"Jenkins",
	"FastAPI",
	"Postman",
	"MySQL",
	"Redis",
	"NGINX",
	"Terraform"
];
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
		label: "Experience",
		href: "#experience"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Certifications",
		href: "#certifications"
	},
	{
		label: "Blog",
		href: "#blog"
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
	const { theme, toggle } = useTheme();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "py-2" : "py-4"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center justify-between rounded-2xl px-4 py-3 transition-all", scrolled ? "glass shadow-lg" : "bg-transparent"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "group flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-xl gradient-bg font-display text-sm font-bold text-white shadow-[0_0_20px_-4px_var(--primary)]",
							children: personal.shortName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden font-display text-sm font-semibold sm:inline",
							children: [
								personal.name.split(" ")[0],
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "/ Portfolio"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: n.href,
							className: "rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground",
							children: n.label
						}, n.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden items-center gap-1 md:flex",
								children: socials.slice(0, 4).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.href,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": s.name,
									className: "grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
								}, s.name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: toggle,
								"aria-label": "Toggle theme",
								className: "grid h-9 w-9 place-items-center rounded-lg border border-border/60 text-foreground transition hover:bg-muted",
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: personal.resumeUrl,
								className: "hidden items-center gap-2 rounded-lg gradient-bg px-4 py-2 text-sm font-medium text-white shadow-[0_0_25px_-6px_var(--primary)] transition hover:translate-y-[-1px] hover:shadow-[0_0_35px_-4px_var(--primary)] md:inline-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Resume"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "grid h-9 w-9 place-items-center rounded-lg border border-border/60 lg:hidden",
								onClick: () => setOpen((o) => !o),
								"aria-label": "Menu",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
				className: "glass mt-2 rounded-2xl p-3 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1",
					children: [navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						onClick: () => setOpen(false),
						className: "rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
						children: n.label
					}, n.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: personal.resumeUrl,
						className: "mt-2 inline-flex items-center justify-center gap-2 rounded-lg gradient-bg px-4 py-2 text-sm font-medium text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download Resume"]
					})]
				})
			}) })]
		})
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 20,
		mass: .2
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX },
		className: "fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full gradient-bg" })
	});
}
function AnimatedBackground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl animate-blob" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/3 -right-24 h-[460px] w-[460px] rounded-full bg-secondary/25 blur-3xl animate-blob [animation-delay:-6s]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-12s]" }),
			[
				{
					Icon: Cloud,
					x: "8%",
					y: "18%",
					delay: "0s",
					size: 44
				},
				{
					Icon: Container,
					x: "78%",
					y: "22%",
					delay: "1.5s",
					size: 40
				},
				{
					Icon: Boxes,
					x: "18%",
					y: "68%",
					delay: "3s",
					size: 46
				},
				{
					Icon: Server,
					x: "72%",
					y: "72%",
					delay: "4.2s",
					size: 42
				},
				{
					Icon: Cloud,
					x: "50%",
					y: "10%",
					delay: "2s",
					size: 32
				},
				{
					Icon: Container,
					x: "45%",
					y: "80%",
					delay: "5s",
					size: 34
				}
			].map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.Icon, {
				className: "absolute text-foreground/10 animate-float-slow",
				style: {
					left: g.x,
					top: g.y,
					width: g.size,
					height: g.size,
					animationDelay: g.delay
				}
			}, i))
		]
	});
}
function useTypewriter(words, speed = 65, pause = 1400) {
	const [i, setI] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [del, setDel] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const word = words[i % words.length];
		const t = setTimeout(() => {
			if (!del) {
				const next = word.slice(0, text.length + 1);
				setText(next);
				if (next === word) setTimeout(() => setDel(true), pause);
			} else {
				const next = word.slice(0, text.length - 1);
				setText(next);
				if (next === "") {
					setDel(false);
					setI((v) => v + 1);
				}
			}
		}, del ? speed / 2 : speed);
		return () => clearTimeout(t);
	}, [
		text,
		del,
		i,
		words,
		speed,
		pause
	]);
	return text;
}
var skills = [
	"Playwright",
	"Selenium",
	"API Testing",
	"CI/CD",
	"Jenkins",
	"Docker",
	"Kubernetes",
	"AWS",
	"Linux",
	"Git",
	"Java",
	"Python"
];
function Hero() {
	const typed = useTypewriter(personal.roles);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.15fr_0.85fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2 w-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-accent" })]
					}), "Available for opportunities"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .05
					},
					className: "mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl",
					children: [
						"Hello ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block animate-float-slow",
							children: "👋"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"I'm ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: personal.name
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .3 },
					className: "mt-4 flex h-8 items-center font-display text-xl text-foreground/80 sm:text-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-5 w-5 text-secondary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: typed }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1 inline-block h-6 w-[2px] animate-pulse bg-primary" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .4 },
					className: "mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg",
					children: [personal.tagline, " I specialize in modern QA, DevOps and cloud tooling."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .55 },
					className: "mt-5 flex flex-wrap gap-2",
					children: skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "glass rounded-full px-3 py-1 text-xs text-foreground/80",
						children: s
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .65 },
					className: "mt-6 max-w-2xl text-sm text-muted-foreground",
					children: personal.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .75 },
					className: "mt-8 flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: personal.resumeUrl,
							className: "group inline-flex items-center gap-2 rounded-xl gradient-bg px-5 py-3 text-sm font-semibold text-white shadow-[0_0_35px_-8px_var(--primary)] transition hover:translate-y-[-2px] hover:shadow-[0_0_55px_-4px_var(--primary)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 transition group-hover:translate-y-0.5" }), "Download Resume"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-primary/60 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Contact Me"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#projects",
							className: "inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-secondary/60 hover:text-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { className: "h-4 w-4" }), " View Projects"]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCard, {})]
		})]
	});
}
function HeroCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			scale: .9
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			duration: .8,
			delay: .2
		},
		className: "relative mx-auto w-full max-w-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative glass rounded-3xl p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border/60 pb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-secondary/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-accent/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 font-mono text-xs text-muted-foreground",
							children: "~/sri — zsh"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("pre", {
					className: "mt-4 whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-foreground/85",
					children: [`$ whoami
> sri-jaya-shankaran

$ cat role.json
{
  "title":  "QA Automation Engineer",
  "cloud":  "AWS SAA-C03",
  "loves":  ["Playwright", "K8s", "Linux"],
  "mission":"ship reliable systems"
}

$ deploy --to production
`, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text",
						children: "✔ pipeline green · tests 100% · shipped"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-3 gap-2 text-center text-[11px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border/60 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg text-primary",
								children: "120+"
							}), "PRs merged"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border/60 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg text-secondary",
								children: "1k+"
							}), "Tests"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border/60 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg text-accent",
								children: "99.9%"
							}), "Uptime"]
						})
					]
				})
			]
		})]
	});
}
var traits = [
	{
		icon: TestTubeDiagonal,
		label: "QA Automation Engineer"
	},
	{
		icon: Cloud,
		label: "AWS Certified"
	},
	{
		icon: Cpu,
		label: "Hardware Engineer"
	},
	{
		icon: Network,
		label: "Networking Background"
	},
	{
		icon: Cloud,
		label: "Cloud Enthusiast"
	},
	{
		icon: Wrench,
		label: "DevOps Learner"
	}
];
function Counter({ value, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-40px"
	});
	const mv = useMotionValue(0);
	const spring = useSpring(mv, {
		stiffness: 60,
		damping: 20
	});
	(0, import_react.useEffect)(() => {
		if (inView) mv.set(value);
	}, [
		inView,
		value,
		mv
	]);
	(0, import_react.useEffect)(() => spring.on("change", (v) => {
		if (ref.current) ref.current.textContent = Math.floor(v).toString() + suffix;
	}), [spring, suffix]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: ["0", suffix]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "About",
				title: "A little bit about me"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "glass relative overflow-hidden rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-16 w-16 place-items-center rounded-2xl gradient-bg font-display text-2xl font-bold text-white shadow-[0_0_30px_-6px_var(--primary)]",
								children: "SJ"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: "Sri Jaya Shankaran R"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "QA · Cloud · DevOps"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-muted-foreground",
							children: "I work across three complementary domains — QA automation, cloud engineering, and hardware / infrastructure. That mix lets me build reliable end-to-end pipelines and reason about systems from the silicon to the deployment target."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid grid-cols-2 gap-2",
							children: traits.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 rounded-xl border border-border/60 bg-card/40 px-3 py-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.label })]
							}, t.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [[
								"QA",
								"Cloud",
								"Infrastructure"
							].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
								children: d
							}, d)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent",
								children: "3+ Domains"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "glass rounded-3xl p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-2xl font-semibold",
								children: ["Building at the intersection of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-text",
									children: "quality, cloud & scale"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground",
								children: "I'm a QA Automation Engineer and AWS Certified Solutions Architect who cares about reliability, developer experience, and shipping software that behaves correctly under load. Before software I spent years repairing hardware at the chip level and running a small computer service business — that background shapes how I think about systems today."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 grid gap-2 text-sm",
								children: [
									"Design end-to-end test automation frameworks (Playwright, Selenium, REST).",
									"Ship cloud infrastructure on AWS with IaC and CI/CD.",
									"Bridge dev, QA and ops — from Git commit to Kubernetes pod."
								].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), l]
								}, l))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
						children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: i * .05 },
							className: "glass rounded-2xl p-5 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl font-bold gradient-text",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									value: s.value,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-muted-foreground",
								children: s.label
							})]
						}, s.label))
					})]
				})]
			})]
		})
	});
}
function SectionHead({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-primary" }),
					" ",
					eyebrow
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-text",
					children: title
				})
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: subtitle
			})
		]
	});
}
function Skills() {
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const filtered = (0, import_react.useMemo)(() => skills$1.filter((s) => (cat === "All" || s.category === cat) && s.name.toLowerCase().includes(q.toLowerCase())), [q, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Skills",
					title: "Tools I reach for",
					subtitle: "Search or filter across cloud, DevOps, testing, languages, and hardware."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-10 flex max-w-3xl flex-col items-stretch gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search a skill…",
							className: "w-full rounded-xl border border-border bg-card/60 py-3 pl-10 pr-4 text-sm outline-none backdrop-blur transition placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: ["All", ...skillCategories].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setCat(c),
							className: cn("rounded-xl border px-3 py-2 text-xs font-medium transition", cat === c ? "border-transparent gradient-bg text-white shadow-[0_0_20px_-6px_var(--primary)]" : "border-border bg-card/60 text-muted-foreground hover:text-foreground"),
							children: c
						}, c))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [filtered.map((s, i) => {
						const Icon = categoryIcons[s.category];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: i % 9 * .03 },
							className: "group glass relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:border-primary/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 -top-px h-px shimmer-border opacity-0 transition group-hover:opacity-100" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium",
											children: s.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: s.category
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs text-muted-foreground",
										children: [s.level, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: { width: 0 },
										whileInView: { width: `${s.level}%` },
										viewport: { once: true },
										transition: {
											duration: 1,
											ease: "easeOut"
										},
										className: "h-full gradient-bg"
									})
								})
							]
						}, s.name);
					}), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-full rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground",
						children: [
							"No skills match \"",
							q,
							"\"."
						]
					})]
				})
			]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Experience",
				title: "Where I've worked",
				subtitle: "Building reliable systems across QA, cloud, and infrastructure."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 space-y-6",
				children: experiences.map((exp, i) => {
					const Icon = exp.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							x: -20
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						transition: { delay: i * .1 },
						className: "glass group relative overflow-hidden rounded-3xl border border-border/60 p-6 transition hover:border-primary/40 hover:bg-card/80 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-lg font-semibold",
													children: exp.role
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm text-muted-foreground",
													children: exp.company
												})] })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center gap-1 rounded-full border border-border/40 bg-card/40 px-2.5 py-1",
													children: exp.period
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "inline-flex items-center gap-1 rounded-full border border-border/40 bg-card/40 px-2.5 py-1",
													children: exp.location
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-4 space-y-2",
												children: exp.bullets.map((bullet, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex gap-3 text-sm text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bullet })]
												}, idx))
											})
										]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 -top-px h-px shimmer-border opacity-0 transition group-hover:opacity-100" })
						]
					}, `${exp.company}-${exp.period}`);
				})
			})]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Projects",
				title: "Selected work",
				subtitle: "A mix of shipped work and DevOps / QA reference builds."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i % 6 * .05 },
					className: "group relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur transition hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_var(--primary)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative h-40 w-full bg-gradient-to-br ${p.gradient}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { className: "h-14 w-14 text-white/70 transition group-hover:scale-110" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-3 text-sm text-muted-foreground",
								children: p.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border bg-muted/40 px-2 py-0.5 text-[11px] text-foreground/80",
									children: t
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: [
									p.github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: p.github,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium transition hover:border-primary/60 hover:text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-3.5 w-3.5" }), " Code"]
									}),
									p.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: p.demo,
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-1.5 rounded-lg gradient-bg px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_20px_-8px_var(--primary)] hover:shadow-[0_0_30px_-4px_var(--primary)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" }), " Live"]
									}),
									p.caseStudy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: p.caseStudy,
										className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium transition hover:border-secondary/60 hover:text-secondary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), " Case study"]
									})
								]
							})
						]
					})]
				}, p.title))
			})]
		})
	});
}
function Certifications() {
	const scroller = (0, import_react.useRef)(null);
	const scroll = (dir) => {
		scroller.current?.scrollBy({
			left: dir * 340,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "certifications",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Certifications",
					title: "Credentials & achievements"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex items-center justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scroll(-1),
						"aria-label": "Prev",
						className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 hover:border-primary/60 hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scroll(1),
						"aria-label": "Next",
						className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 hover:border-primary/60 hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: scroller,
					className: "mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: certifications.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "relative min-w-[320px] max-w-[360px] shrink-0 snap-start rounded-3xl p-[1px] shimmer-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass h-full rounded-3xl p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 place-items-center rounded-xl gradient-bg text-white shadow-[0_0_25px_-6px_var(--primary)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: c.date
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-semibold leading-snug",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: c.org
								}),
								c.credentialUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: c.credentialUrl,
									target: "_blank",
									rel: "noreferrer",
									className: "mt-5 inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium hover:border-primary/60 hover:text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" }), " View credential"]
								})
							]
						})
					}, c.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "Highlights"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: achievements.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: i % 6 * .05 },
							className: "glass flex items-center gap-3 rounded-2xl p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: a
							})]
						}, a))
					})]
				})
			]
		})
	});
}
function TechStack() {
	const items = [...techStack, ...techStack];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Tech stack",
		className: "relative py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass overflow-hidden rounded-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative py-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-max animate-marquee gap-10 whitespace-nowrap",
							children: items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full gradient-bg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl font-semibold text-foreground/80",
									children: t
								})]
							}, i))
						})
					]
				})
			})
		})
	});
}
var PAGE = 3;
function Blog() {
	const [page, setPage] = (0, import_react.useState)(0);
	const totalPages = Math.max(1, Math.ceil(blogPosts.length / PAGE));
	const items = blogPosts.slice(page * PAGE, page * PAGE + PAGE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "blog",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Blog",
					title: "Latest writing",
					subtitle: "Notes on QA, cloud, and shipping reliable systems."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
						href: p.href,
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .05 },
						className: "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-40 bg-gradient-to-br from-primary/30 via-secondary/25 to-accent/25",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-3 left-4 rounded-full glass px-3 py-1 text-[11px] text-foreground/80",
								children: p.readTime
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }), p.date]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }), p.readTime]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-lg font-semibold leading-snug group-hover:text-primary",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground",
									children: p.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary",
									children: ["Read more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
								})
							]
						})]
					}, p.title))
				}),
				totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex items-center justify-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPage((p) => Math.max(0, p - 1)),
							disabled: page === 0,
							className: "grid h-9 w-9 place-items-center rounded-lg border border-border disabled:opacity-40",
							"aria-label": "Prev page",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
						}),
						Array.from({ length: totalPages }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPage(i),
							className: cn("h-9 min-w-9 rounded-lg px-3 text-sm font-medium", i === page ? "gradient-bg text-white" : "border border-border text-muted-foreground hover:text-foreground"),
							children: i + 1
						}, i)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPage((p) => Math.min(totalPages - 1, p + 1)),
							disabled: page === totalPages - 1,
							className: "grid h-9 w-9 place-items-center rounded-lg border border-border disabled:opacity-40",
							"aria-label": "Next page",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
						})
					]
				})
			]
		})
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		setTimeout(() => setSent(false), 3500);
		e.currentTarget.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Contact",
				title: "Let's build something reliable",
				subtitle: "Have an opportunity, project, or just want to chat about QA and cloud? Reach out."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: "Get in touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Prefer email? I usually reply within 24 hours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									icon: Mail,
									label: "Email",
									value: personal.email,
									href: `mailto:${personal.email}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									icon: Phone,
									label: "Phone",
									value: personal.phone,
									href: `tel:${personal.phone.replace(/\s+/g, "")}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									icon: MapPin,
									label: "Location",
									value: personal.location
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: "Social"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: s.href,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": s.name,
									title: s.name,
									className: "group relative grid h-11 w-11 place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_25px_-8px_var(--primary)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pointer-events-none absolute -top-8 whitespace-nowrap rounded-md bg-foreground/90 px-2 py-0.5 text-[10px] text-background opacity-0 transition group-hover:opacity-100",
										children: s.name
									})]
								}, s.name))
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "glass relative overflow-hidden rounded-3xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Name",
									name: "name",
									required: true,
									placeholder: "Your name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									name: "email",
									type: "email",
									required: true,
									placeholder: "you@example.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sm:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Subject",
										name: "subject",
										required: true,
										placeholder: "What's this about?"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-muted-foreground",
										children: "Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										required: true,
										rows: 5,
										placeholder: "Tell me a little about your project…",
										className: "mt-1 w-full resize-none rounded-xl border border-border bg-background/60 p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "mt-6 inline-flex items-center gap-2 rounded-xl gradient-bg px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_var(--primary)] transition hover:translate-y-[-1px] hover:shadow-[0_0_50px_-4px_var(--primary)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send message"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: sent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: 10
							},
							className: "mt-4 flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), " Message sent — I'll be in touch soon."]
						}) })
					]
				})]
			})]
		})
	});
}
function InfoRow({ icon: Icon, label, value, href }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[11px] uppercase tracking-widest text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-medium",
		children: value
	})] })] });
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "flex items-center gap-3 rounded-xl p-2 -mx-2 transition hover:bg-muted/60",
		children: content
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-3 p-2 -mx-2",
		children: content
	});
}
function Field({ label, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-medium text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...rest,
		className: "mt-1 w-full rounded-xl border border-border bg-background/60 px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative mt-16 border-t border-border/60 bg-card/40 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-10 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-xl gradient-bg font-display font-bold text-white",
									children: personal.shortName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-semibold",
									children: personal.name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-sm text-muted-foreground",
								children: "QA Automation Engineer · AWS Certified Solutions Architect · DevOps enthusiast building reliable, scalable systems."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap gap-2",
								children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.href,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": s.name,
									className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_25px_-8px_var(--primary)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
								}, s.name))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground",
						children: "Quick links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: n.href,
							className: "text-foreground/80 transition hover:text-primary",
							children: n.label
						}) }, n.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground",
						children: "Tech stack"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: techStack.slice(0, 12).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border bg-background/60 px-2 py-0.5 text-[11px] text-foreground/80",
							children: t
						}, t))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						personal.name,
						". All rights reserved."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-1",
						children: [
							"Made with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3.5 w-3.5 fill-destructive text-destructive" }),
							" by ",
							personal.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 py-1.5 hover:border-primary/60 hover:text-primary",
						children: ["Back to top ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-3.5 w-3.5" })]
					})
				]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStack, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blog, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
