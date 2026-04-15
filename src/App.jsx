import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Database,
  Github,
  Mail,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";

const focusAreas = [
  "Java and Spring Boot backend development",
  "Node.js and Express services",
  "REST API design and authentication flows",
  "PostgreSQL and MongoDB data modeling",
  "Full-stack product development with React",
];

const skillGroups = [
  {
    title: "Languages",
    icon: BrainCircuit,
    items: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    icon: Workflow,
    items: ["Spring Boot", "Node.js", "Express", "Spring Security", "JWT"],
  },
  {
    title: "Frontend",
    icon: Sparkles,
    items: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Data + Tools",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Git", "Maven", "Docker", "Vercel", "Render"],
  },
];

const currentWork = [
  "Strengthening backend engineering fundamentals",
  "Improving system design and database modeling",
  "Building production-ready portfolio projects with better documentation and deployment practices",
];

const projects = [
  
  {
    title: "RentMyStuff",
    label: "Featured Build",
    year: "2026",
    description:
      "A full-stack rental marketplace with JWT authentication, product listings, image upload, booking approval workflows, and strong practical business logic.",
    stack: ["React 19", "Vite", "Spring Boot 3", "PostgreSQL", "Framer Motion"],
    live: "https://rentmystuff.vercel.app/",
    repo: "https://github.com/parikshitchuahan-8/rentmystuff",
    extra: "https://github.com/parikshitchuahan-8/rentmystuff/blob/main/README.md",
    accent: "from-mint/20 via-sky/10 to-transparent",
  },
  {
    title: "Vivaforge",
    label: "AI + Full Stack",
    year: "2026",
    description:
      "AI-assisted examination platform built with React, Spring Boot, PostgreSQL, and JWT-secured APIs with a deployment story across Vercel, Render, and Neon.",
    stack: ["React", "Spring Boot", "JWT", "Groq", "Neon"],
    live: "https://vivaforge.vercel.app/",
    repo: "https://github.com/parikshitchuahan-8/vivaforge",
    extra: "https://github.com/parikshitchuahan-8/vivaforge/blob/main/README.md",
    accent: "from-sky/20 via-mint/10 to-transparent",
  },

  {
    title: "Study Orbit",
    label: "Full-Stack + AI",
    year: "2026",
    description:
      "A student productivity and collaboration platform featuring AI-powered study planners, academic-only study reels with spaced-repetition quizzes, focus tracking, and study groups — powered by a three-service architecture across React, Spring Boot, and Python FastAPI.",
    stack: ["React", "Spring Boot", "PostgreSQL", "FastAPI", "Groq AI", "Tailwind"],
    live: "https://student-reel-platform.vercel.app/",
    repo: "https://github.com/parikshitchuahan-8/study-orbit",
    extra: "https://github.com/parikshitchuahan-8/study-orbit/blob/main/README.md",
    accent: "from-mint/20 via-ember/10 to-transparent",
  },

  {
    title: "JointHands",
    label: "Accessibility + AI",
    year: "2026",
    description:
      "An accessibility-first career platform designed for inclusive hiring with voice controls, gesture workflows, and AI-assisted experiences.",
    stack: ["React", "Node.js", "MongoDB", "MediaPipe", "OpenAI / Groq"],
    live: "https://joint-hands.vercel.app/",
    repo: "https://github.com/parikshitchuahan-8/Joint-Hands",
    extra: "https://github.com/parikshitchuahan-8/Joint-Hands/blob/main/README.md",
    accent: "from-ember/20 via-sky/10 to-transparent",
  },
  {
    title: "Nimbus Drive",
    label: "Cloud Storage Clone",
    year: "2025",
    description:
      "A cloud file storage application with authentication, file uploads, and Cloudinary-backed asset management.",
    stack: ["Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind"],
    live: "https://drive-clone-jns1.onrender.com/",
    repo: "https://github.com/parikshitchuahan-8/drive",
    extra: "https://github.com/parikshitchuahan-8/drive/blob/master/README.md",
    accent: "from-sky/20 via-white/5 to-transparent",
  },
  {
    title: "Interview Reservation App",
    label: "Scheduling Platform",
    year: "2026",
    description:
      "An interview scheduling platform with reservations, onboarding, dashboard reporting, and reminder automation deployed on Render.",
    stack: ["Java 21", "Spring MVC", "Thymeleaf", "PostgreSQL"],
    live: "https://interview-reservation-app.onrender.com",
    repo: "https://github.com/parikshitchuahan-8/interview-reservation-app",
    extra: "https://github.com/parikshitchuahan-8/interview-reservation-app/blob/main/README.md",
    accent: "from-ember/20 via-white/5 to-transparent",
  },
];

const metrics = [
  { value: "Backend", label: "Focused on scalable APIs and clean architecture" },
  { value: "Full-Stack", label: "Able to take products from data model to UI polish" },
  { value: "Build Mode", label: "Practical product development with real deployment thinking" },
];

const strengths = [
  "API design with authentication and business rules",
  "Clean backend architecture with Spring Boot and Node.js",
  "React frontends that feel modern, fast, and intentional",
  "Deployment-minded development with Vercel, Render, and databases",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SectionTitle({ eyebrow, title, note }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="mb-12 max-w-5xl"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.34em] text-mint">{eyebrow}</p>
      <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
        {title}
      </h2>
      {note ? <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{note}</p> : null}
    </motion.div>
  );
}

function Chip({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
      {children}
    </span>
  );
}

function ProjectCard({ project, featured = false, index }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      custom={index * 0.08}
      variants={fadeUp}
      whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-7 shadow-glow backdrop-blur-xl ${featured ? "md:col-span-7" : "md:col-span-5"}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open live project for ${project.title}`}
        className="absolute inset-0 z-0"
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`} />
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-3xl transition group-hover:scale-125" />
      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.28em] text-mint">{project.label}</span>
          <span className="text-xs uppercase tracking-[0.24em] text-slate-400">{project.year}</span>
        </div>
        <h3 className="font-display text-4xl tracking-[-0.04em] text-white">{project.title}</h3>
        <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-5 text-base font-medium text-white">
          <a className="relative z-10 inline-flex items-center gap-2 transition hover:text-mint" href={project.live} target="_blank" rel="noreferrer">
            Live Project <ArrowUpRight size={18} />
          </a>
          <a className="relative z-10 inline-flex items-center gap-2 transition hover:text-mint" href={project.repo} target="_blank" rel="noreferrer">
            Repository <ArrowUpRight size={18} />
          </a>
          <a className="relative z-10 inline-flex items-center gap-2 transition hover:text-mint" href={project.extra} target="_blank" rel="noreferrer">
            Readme / Details <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-hero-radial font-body text-white">
      <div
        className="pointer-events-none fixed z-0 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/20 blur-3xl md:block"
        style={{ left: cursor.x, top: cursor.y }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:120px_120px] [mask-image:radial-gradient(circle_at_center,black,transparent_88%)]" />

      <header className="relative isolate min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-[-6rem] top-16 h-[28rem] w-[28rem] rounded-full bg-sky/30 blur-3xl animate-float" />
          <div className="absolute bottom-10 left-[-5rem] h-[22rem] w-[22rem] rounded-full bg-ember/25 blur-3xl animate-drift" />
          <div className="absolute inset-x-[-20%] bottom-[-20%] top-[42%] opacity-40 [background-image:linear-gradient(rgba(117,168,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(117,168,255,0.18)_1px,transparent_1px)] [background-size:90px_90px] [transform:perspective(1000px)_rotateX(78deg)]" />
        </div>

        <div className="relative z-10 mx-auto flex w-[min(1220px,calc(100%-1.5rem))] flex-col">
          <nav className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
            <a href="#top" className="font-display text-3xl font-extrabold tracking-[0.08em]">
              PC
            </a>
            <div className="flex flex-wrap items-center justify-center gap-5 text-base text-slate-300">
              <a className="transition hover:text-white" href="#projects">Projects</a>
              <a className="transition hover:text-white" href="#skills">Skills</a>
              <a className="transition hover:text-white" href="#about">About</a>
              <a className="transition hover:text-white" href="#contact">Contact</a>
              <a
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                href="https://github.com/parikshitchuahan-8"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </nav>

          <div id="top" className="grid flex-1 items-center gap-10 py-12 md:grid-cols-[1.08fr_0.92fr] md:py-16">
            <motion.section initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
              <p className="mb-5 text-sm uppercase tracking-[0.34em] text-mint">
                Backend-Focused Software Developer • Full-Stack Builder
              </p>
              <h1 className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.9] tracking-[-0.06em]">
                Building software with
                <span className="block text-ember">clean logic and real product feel</span>
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300 md:text-2xl">
                I&apos;m Parikshit Chauhan, a backend-focused developer building full-stack
                applications with a strong interest in scalable APIs, clean architecture,
                and practical product development.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Spring Boot", "Node.js", "React", "PostgreSQL", "MongoDB", "JWT"].map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-full bg-mint px-7 py-4 text-lg font-semibold text-slate-950 transition hover:-translate-y-1">
                  Explore Work
                </a>
                <a href="mailto:parikshitchauhan12345@gmail.com" className="rounded-full border border-white/10 bg-white/5 px-7 py-4 text-lg transition hover:-translate-y-1 hover:bg-white/10">
                  Let&apos;s Connect
                </a>
              </div>
            </motion.section>

            <motion.aside
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
              className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl"
            >
              <div className="absolute left-1/2 top-8 h-56 w-56 -translate-x-1/2 rounded-full bg-sky/20 blur-3xl" />
              <div className="relative flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-[-18px] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(98,242,200,0.26),rgba(117,168,255,0.16),rgba(255,139,83,0.24),rgba(98,242,200,0.26))] blur-md" />
                  <div className="absolute inset-[-8px] rounded-full border border-white/15" />
                  <img
                    className="relative h-72 w-72 rounded-full border-4 border-white/20 object-cover object-[center_10%] shadow-[0_26px_80px_rgba(0,0,0,0.4)] md:h-[22rem] md:w-[22rem]"
                    src="/profile.jpg"
                    alt="Parikshit Chauhan"
                  />
                </div>

                <div className="mt-8 max-w-xl">
                  <p className="text-sm uppercase tracking-[0.28em] text-mint">Profile</p>
                  <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-5xl">Parikshit Chauhan</h2>
                  <p className="mt-4 text-lg leading-8 text-slate-300">
                    Full-stack developer with stronger interest in backend systems,
                    authentication flows, data modeling, and practical web products.
                  </p>
                </div>

                <div className="mt-8 grid w-full gap-4 md:grid-cols-3">
                  {metrics.map((item) => (
                    <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-left">
                      <p className="font-display text-2xl tracking-[-0.03em] text-white">{item.value}</p>
                      <p className="mt-2 text-base leading-7 text-slate-300">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section id="about" className="mx-auto w-[min(1220px,calc(100%-1.5rem))] py-12">
          <SectionTitle
            eyebrow="About Me"
            title="Not just a GitHub profile, but a developer focused on building reliable, practical software"
            note="My work leans toward strong backend fundamentals, better system structure, and full-stack products that solve real workflow problems instead of just looking good in screenshots."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <motion.article initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="rounded-[30px] border border-white/10 bg-white/5 p-7 shadow-glow backdrop-blur-xl">
              <BriefcaseBusiness className="text-mint" />
              <h3 className="mt-5 font-display text-3xl tracking-[-0.03em]">Focus Areas</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </motion.article>

            <motion.article initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.08} variants={fadeUp} className="rounded-[30px] border border-white/10 bg-white/5 p-7 shadow-glow backdrop-blur-xl">
              <Rocket className="text-mint" />
              <h3 className="mt-5 font-display text-3xl tracking-[-0.03em]">What I&apos;m Working On</h3>
              <div className="mt-5 space-y-3">
                {currentWork.map((item) => (
                  <p key={item} className="text-base leading-8 text-slate-300">
                    {item}
                  </p>
                ))}
              </div>
            </motion.article>

            <motion.article initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.16} variants={fadeUp} className="rounded-[30px] border border-white/10 bg-white/5 p-7 shadow-glow backdrop-blur-xl">
              <Sparkles className="text-mint" />
              <h3 className="mt-5 font-display text-3xl tracking-[-0.03em]">Work Style</h3>
              <p className="mt-5 text-base leading-8 text-slate-300">
                I enjoy building products where architecture, authentication,
                data modeling, and interface quality support each other. I want
                applications to feel well-structured under the hood, not just polished on the surface.
              </p>
            </motion.article>
          </div>
        </section>

        <section id="skills" className="mx-auto w-[min(1220px,calc(100%-1.5rem))] py-24">
          <SectionTitle
            eyebrow="Skills"
            title="A stack built around backend strength, solid APIs, and full-stack delivery"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map(({ title, icon: Icon, items }, index) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.08}
                variants={fadeUp}
                className="rounded-[32px] border border-white/10 bg-white/5 p-7 shadow-glow backdrop-blur-xl"
              >
                <Icon className="text-mint" />
                <h3 className="mt-5 font-display text-3xl tracking-[-0.03em]">{title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-[min(1220px,calc(100%-1.5rem))] py-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-[32px] border border-white/10 bg-white/5 p-7 shadow-glow backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-mint">Core Strengths</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <p className="text-base leading-8 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mx-auto w-[min(1220px,calc(100%-1.5rem))] py-24">
          <SectionTitle
            eyebrow="Projects"
            title="Featured work that shows how I think about APIs, full-stack architecture, and product delivery"
            note="These are the standout projects from my GitHub, but the portfolio itself now highlights me as a developer first, not just my repositories."
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} featured={index === 0} />
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-[min(1220px,calc(100%-1.5rem))] py-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-panel/95 via-slate-950 to-slate-900 p-8 shadow-glow md:p-10"
          >
            <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-sky/20 blur-3xl animate-pulseSoft" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-ember/20 blur-3xl animate-pulseSoft" />
            <div className="relative z-10 max-w-4xl">
              <p className="mb-4 text-sm uppercase tracking-[0.32em] text-mint">Contact</p>
              <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Let&apos;s build something strong, usable, and production-ready
              </h2>
              <p className="mt-5 text-lg leading-9 text-slate-300 md:text-xl">
                If you want someone who cares about backend structure, practical full-stack
                delivery, and product quality, I&apos;d love to connect.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="mailto:parikshitchauhan12345@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-mint px-7 py-4 text-lg font-semibold text-slate-950 transition hover:-translate-y-1">
                  <Mail size={20} />
                  parikshitchauhan12345@gmail.com
                </a>
                <a href="https://github.com/parikshitchuahan-8" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-lg transition hover:-translate-y-1 hover:bg-white/10">
                  <Github size={20} />
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="mx-auto flex w-[min(1220px,calc(100%-1.5rem))] flex-col gap-3 pb-10 text-base text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>Personal portfolio for Parikshit Chauhan built in React, Tailwind, and Framer Motion.</p>
        <a href="#top" className="transition hover:text-white">Back to top</a>
      </footer>
    </div>
  );
}
