"use client";

import { useState } from "react";
import { SectionWrapper, SectionTitle } from "@/components/section-wrapper";
import { PortfolioCard } from "@/components/portfolio-card";
import { Syne, DM_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeUp,
  scalePop,
  staggerContainer,
  staggerSlow,
  viewport,
} from "@/components/motion-variants";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

type FilterType = "all" | "web" | "mobile" | "systems";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce with payment integration, inventory management, and analytics.",
    image: "/api/placeholder?w=400&h=300",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking with real-time transactions, bill payments, and account mgmt.",
    image: "/api/placeholder?w=400&h=300",
    tags: ["React Native", "Firebase", "iOS", "Android"],
    category: "mobile",
  },
  {
    id: 3,
    title: "Inventory Management System",
    description:
      "Cloud-based inventory management for retail chains with real-time stock tracking.",
    image: "/api/placeholder?w=400&h=300",
    tags: ["Vue.js", "Django", "PostgreSQL", "AWS"],
    category: "systems",
  },
  {
    id: 4,
    title: "SaaS Analytics Platform",
    description:
      "Comprehensive analytics for tracking user behaviour, conversions and metrics.",
    image: "/api/placeholder?w=400&h=300",
    tags: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    category: "web",
  },
  {
    id: 5,
    title: "Restaurant Management App",
    description:
      "Complete POS with order management, kitchen display, and reporting.",
    image: "/api/placeholder?w=400&h=300",
    tags: ["React", "Express", "PostgreSQL", "Socket.io"],
    category: "systems",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description:
      "Mobile app with workout logging, nutrition tracking, and social features.",
    image: "/api/placeholder?w=400&h=300",
    tags: ["Flutter", "Firebase", "Google Fit API"],
    category: "mobile",
  },
  {
    id: 7,
    title: "Project Management Tool",
    description:
      "Team collaboration with task management, file sharing, and real-time comms.",
    image: "/api/placeholder?w=400&h=300",
    tags: ["Next.js", "MongoDB", "Websockets", "Tailwind"],
    category: "web",
  },
  {
    id: 8,
    title: "HR Management System",
    description:
      "Enterprise HR for employee management, payroll, and performance tracking.",
    image: "/api/placeholder?w=400&h=300",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    category: "systems",
  },
];

const statItems = [
  { number: "50+", label: "Projects Completed" },
  { number: "40+", label: "Happy Clients" },
  { number: "8+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
];

const filters: { value: FilterType; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "systems", label: "Systems" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className={`${syne.variable} ${dmSans.variable}`}>
      {/* ══ Hero ══ */}
      <SectionWrapper className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.18, 1], x: [0, -22, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.22, 1], x: [0, 22, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          className="space-y-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, letterSpacing: "0.28em" }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="text-xs font-semibold uppercase text-cyan-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Our Work
          </motion.p>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our{" "}
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="gradient-primary bg-clip-text text-transparent inline-block"
            >
              Portfolio
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-lg md:text-xl text-foreground/65 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Explore our collection of successful projects showcasing expertise
            and dedication to excellence.
          </motion.p>
        </motion.div>
      </SectionWrapper>

      {/* ══ Grid + Filters ══ */}
      <SectionWrapper>
        {/* Filter tabs */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={viewport}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <motion.button
              key={f.value}
              variants={scalePop}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setActiveFilter(f.value)}
              className={`px-6 py-2 rounded-full font-medium text-[14px] transition-colors duration-300 ${
                activeFilter === f.value
                  ? "bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-lg shadow-purple-500/40"
                  : "glass hover:bg-white/12"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* AnimatePresence keeps layout smooth when items change */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                whileHover={{ y: -6 }}
              >
                <PortfolioCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p
              className="text-foreground/55 text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </SectionWrapper>

      {/* ══ Stats ══ */}
      <SectionWrapper className="bg-gradient-to-b from-cyan-950/10 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {statItems.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="glass rounded-2xl p-6 text-center cursor-default"
            >
              <div
                className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.number}
              </div>
              <p
                className="text-foreground/55 text-[14px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ══ CTA ══ */}
      <SectionWrapper className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewport}
          className="text-center space-y-6"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Interested in Working Together?
          </h2>
          <p
            className="text-lg text-foreground/65 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Let&apos;s discuss your project and bring your vision to life.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-shadow font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
