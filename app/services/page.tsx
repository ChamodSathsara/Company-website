"use client";

import { SectionWrapper, SectionTitle } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Syne, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  staggerContainer,
  staggerSlow,
  viewport,
} from "@/components/motion-variants";
import {
  Code,
  Smartphone,
  ShoppingCart,
  Cog,
  Lightbulb,
  Settings,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

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

const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites built with cutting-edge technology, SEO best practices, and exceptional UX.",
    icon: <Code className="w-6 h-6 text-white" />,
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Performance",
      "Secure & Scalable",
    ],
    accent: "#a855f7",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS & Android with seamless user experience.",
    icon: <Smartphone className="w-6 h-6 text-white" />,
    features: [
      "iOS & Android",
      "Cross-Platform",
      "Real-time Sync",
      "Offline Support",
    ],
    accent: "#22d3ee",
  },
  {
    title: "POS Systems",
    description:
      "Comprehensive point-of-sale solutions for retail and hospitality businesses.",
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
    features: [
      "Inventory Tracking",
      "Payment Integration",
      "Sales Analytics",
      "Multi-location",
    ],
    accent: "#f59e0b",
  },
  {
    title: "ERP Systems",
    description:
      "Enterprise resource planning to streamline operations, improve efficiency and reduce costs.",
    icon: <Cog className="w-6 h-6 text-white" />,
    features: ["Finance Module", "HR Management", "Supply Chain", "Analytics"],
    accent: "#10b981",
  },
  {
    title: "Workforce Automation",
    description:
      "Automate repetitive tasks and boost team productivity with intelligent workflows.",
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    features: [
      "Task Automation",
      "Workflow Management",
      "Team Collaboration",
      "Performance Tracking",
    ],
    accent: "#f43f5e",
  },
  {
    title: "Custom Software",
    description:
      "Tailored software development that meets your exact business requirements.",
    icon: <Settings className="w-6 h-6 text-white" />,
    features: [
      "Bespoke Development",
      "Legacy Integration",
      "API Development",
      "Tech Consulting",
    ],
    accent: "#6366f1",
  },
];

const processList = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We deeply understand your business needs and goals through collaborative discovery sessions.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Our design team creates beautiful, user-centric prototypes for your approval.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Expert developers build with rigorous quality assurance at every stage.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "We handle deployment and provide ongoing support to ensure long-term success.",
  },
];

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Firebase",
  "Docker",
  "GraphQL",
  "Redis",
  "Stripe",
  "Figma",
  "Git",
];

export default function ServicesPage() {
  return (
    <div className={`${syne.variable} ${dmSans.variable}`}>
      {/* ══ Hero ══ */}
      <SectionWrapper className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        {/* Ambient orbs */}
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
            className="text-xs font-semibold uppercase text-purple-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            What We Do
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
              Services
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-lg md:text-xl text-foreground/65 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Comprehensive digital solutions tailored to transform your business
            and accelerate growth.
          </motion.p>
        </motion.div>
      </SectionWrapper>

      {/* ══ Services Grid ══ */}
      <SectionWrapper>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle
            title="What We Offer"
            subtitle="End-to-end digital solutions for every business need"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -7, scale: 1.025 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="glass rounded-2xl p-6 flex flex-col cursor-default"
              style={{ borderTop: `2px solid ${s.accent}44` }}
            >
              <motion.div
                whileHover={{ scale: 1.18, rotate: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 14 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `linear-gradient(135deg,${s.accent}cc,${s.accent}66)`,
                }}
              >
                {s.icon}
              </motion.div>

              <h3
                className="font-semibold text-[17px] mb-2 leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.title}
              </h3>
              <p
                className="text-foreground/55 text-[14px] leading-relaxed mb-5 flex-grow"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {s.description}
              </p>

              <div className="flex flex-col gap-2">
                {s.features.map((feat, fi) => (
                  <motion.div
                    key={feat}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: fi * 0.07, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: s.accent }}
                    />
                    <span
                      className="text-[13px] text-foreground/65"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {feat}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ══ Process ══ */}
      <SectionWrapper className="bg-gradient-to-b from-purple-950/10 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle
            title="Our Process"
            subtitle="A structured approach to ensure your project's success"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={viewport}
          className="space-y-8 max-w-3xl mx-auto"
        >
          {processList.map((p) => (
            <motion.div
              key={p.step}
              variants={fadeLeft}
              className="flex gap-6 items-start"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 14 }}
                className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/25"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.step}
              </motion.div>
              <div>
                <h3
                  className="text-[19px] font-semibold mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-foreground/60 text-[15px] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ══ Tech Stack ══ */}
      <SectionWrapper>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle
            title="Our Technology Stack"
            subtitle="Modern, proven technologies for scalable solutions"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerSlow}
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {techStack.map((t) => (
            <motion.div
              key={t}
              variants={fadeUp}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className="glass rounded-xl p-4 text-center cursor-default"
            >
              <span
                className="font-semibold text-[14px] text-foreground/75"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ══ CTA ══ */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewport}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-12 text-center space-y-6"
        >
          <div className="absolute inset-0 -z-0 pointer-events-none">
            <motion.div
              animate={{ x: [-12, 12, -12], y: [-12, 12, -12] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ x: [12, -12, 12], y: [12, -12, 12] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl"
            />
          </div>
          <h2
            className="relative text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Get Started?
          </h2>
          <p
            className="relative text-lg text-foreground/65 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Let&apos;s discuss how our services can transform your business.
          </p>
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="relative inline-block"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white border-0 hover:shadow-lg hover:shadow-purple-500/50 text-base h-12 px-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
