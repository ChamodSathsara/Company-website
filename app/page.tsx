"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Syne, DM_Sans } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { SectionWrapper, SectionTitle } from "@/components/section-wrapper";
import { PortfolioCard } from "@/components/portfolio-card";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scalePop,
  staggerContainer,
  staggerSlow,
  viewport,
} from "@/components/motion-variants";
import {
  Zap,
  Layers,
  Shield,
  Headphones,
  Code,
  Smartphone,
  ShoppingCart,
  Cog,
  Lightbulb,
  Settings,
  ArrowRight,
  Play,
  ChevronRight,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   Fonts  (matches services/page.tsx)
───────────────────────────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────────────────────
   Animated number counter
───────────────────────────────────────────────────────────────────────────── */
function Counter({
  end,
  suffix = "",
  inView,
}: {
  end: number;
  suffix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  if (inView && !started.current) {
    started.current = true;
    let cur = 0;
    const total = 1800;
    const tick = 16;
    const inc = end / (total / tick);
    const t = setInterval(() => {
      cur += inc;
      if (cur >= end) {
        setCount(end);
        clearInterval(t);
      } else {
        setCount(Math.floor(cur));
      }
    }, tick);
  }

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Service Card — Framer Motion tilt + hover
───────────────────────────────────────────────────────────────────────────── */
function ServiceCardAnimated({
  title,
  description,
  icon,
  index,
  accent,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  accent: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 16,
      y: ((e.clientY - r.top) / r.height - 0.5) * -16,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.65,
        delay: index * 0.09,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={onMove}
      onMouseLeave={() => {
        setHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      animate={{
        rotateX: tilt.y,
        rotateY: tilt.x,
      }}
      style={{ perspective: 900, willChange: "transform" }}
      className="relative rounded-2xl overflow-hidden cursor-default"
    >
      {/* Glass body */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          background: hovered
            ? `radial-gradient(circle at 65% 35%, ${accent}1f 0%, transparent 65%), rgba(255,255,255,0.07)`
            : "rgba(255,255,255,0.04)",
          borderColor: hovered ? accent + "55" : "rgba(255,255,255,0.08)",
          boxShadow: hovered
            ? `0 24px 60px ${accent}1a, inset 0 1px 0 rgba(255,255,255,0.12)`
            : "inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
        transition={{ duration: 0.4 }}
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      />

      {/* Top sweep line */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] rounded-full"
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.5 }}
        style={{ background: `linear-gradient(90deg,${accent},transparent)` }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl pointer-events-none"
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1.3 : 0.7,
        }}
        transition={{ duration: 0.6 }}
        style={{ background: accent + "2e" }}
      />

      <div className="relative z-10 p-6">
        {/* Icon */}
        <div className="relative mb-5 w-fit">
          <motion.div
            className="absolute inset-0 rounded-xl blur-md"
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1.5 : 1 }}
            transition={{ duration: 0.4 }}
            style={{ background: accent + "55" }}
          />
          <motion.div
            className="relative w-12 h-12 rounded-xl flex items-center justify-center"
            animate={{
              background: hovered
                ? `linear-gradient(135deg,${accent}cc,${accent}77)`
                : `linear-gradient(135deg,${accent}66,${accent}33)`,
              scale: hovered ? 1.12 : 1,
              rotate: hovered ? -5 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {icon}
          </motion.div>
        </div>

        <motion.h3
          className="font-bold text-[17px] mb-2"
          animate={{ color: hovered ? "#fff" : "inherit" }}
          transition={{ duration: 0.3 }}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-[14px] leading-relaxed"
          animate={{
            color: hovered
              ? "rgba(255,255,255,0.65)"
              : "rgba(255,255,255,0.40)",
          }}
          transition={{ duration: 0.3 }}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-4 flex items-center gap-1 text-xs font-semibold overflow-hidden"
          animate={{ maxHeight: hovered ? 20 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: accent, fontFamily: "var(--font-body)" }}
        >
          Learn more <ChevronRight className="w-3 h-3" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ═════════════════════════════════════════════════════════════════════════════
   PAGE
═════════════════════════════════════════════════════════════════════════════ */
export default function Home() {
  /* ── refs for counter section ── */
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  const services = [
    {
      title: "Website Development",
      description:
        "Modern, responsive websites built with cutting-edge technology and SEO best practices.",
      icon: <Code className="w-5 h-5 text-white" />,
      accent: "#a855f7",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications designed for seamless user experience.",
      icon: <Smartphone className="w-5 h-5 text-white" />,
      accent: "#22d3ee",
    },
    {
      title: "POS Systems",
      description:
        "Comprehensive point-of-sale solutions for retail and hospitality businesses.",
      icon: <ShoppingCart className="w-5 h-5 text-white" />,
      accent: "#f59e0b",
    },
    {
      title: "ERP Systems",
      description:
        "Enterprise resource planning solutions to streamline your business operations.",
      icon: <Cog className="w-5 h-5 text-white" />,
      accent: "#10b981",
    },
    {
      title: "Workforce Automation",
      description:
        "Automate repetitive tasks and improve team productivity with smart solutions.",
      icon: <Lightbulb className="w-5 h-5 text-white" />,
      accent: "#f43f5e",
    },
    {
      title: "Custom Software",
      description:
        "Tailored software development to meet your unique business requirements.",
      icon: <Settings className="w-5 h-5 text-white" />,
      accent: "#6366f1",
    },
  ];

  const features = [
    {
      title: "Fast Delivery",
      description: "Projects delivered on time, every time",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Scalable Solutions",
      description: "Built to grow with your business",
      icon: <Layers className="w-5 h-5" />,
    },
    {
      title: "Modern Tech Stack",
      description: "Using latest technologies and frameworks",
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: "Reliable Support",
      description: "24/7 support and maintenance",
      icon: <Headphones className="w-5 h-5" />,
    },
  ];

  const portfolioProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop&auto=format",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with real-time transactions",
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=300&fit=crop&auto=format",
      tags: ["React Native", "Firebase", "iOS", "Android"],
    },
    {
      title: "Inventory Management System",
      description: "Cloud-based inventory management for retail chains",
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop&auto=format",
      tags: ["Vue.js", "Django", "PostgreSQL"],
    },
  ];

  const stats = [
    { end: 120, suffix: "+", label: "Projects Delivered" },
    { end: 98, suffix: "%", label: "Client Satisfaction" },
    { end: 5, suffix: "+", label: "Years Experience" },
    { end: 40, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <div className={`${syne.variable} ${dmSans.variable}`}>
      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <SectionWrapper className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated orbs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, -24, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.25, 1], x: [0, 24, 0] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Status pill */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-purple-400/30 bg-purple-500/10 text-purple-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              />
              Available for new projects
            </motion.div> */}

            {/* Hero h1 */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.2,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.03] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Build Your Digital{" "}
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.45,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="gradient-primary bg-clip-text text-transparent inline-block"
              >
                Future
              </motion.span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-xl md:text-2xl text-foreground/65 leading-relaxed max-w-2xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Premium digital solutions tailored to your business needs. From
              web applications to enterprise systems, we deliver excellence.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white border-0 hover:shadow-lg hover:shadow-purple-500/50 text-base h-12"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-purple-400/30 hover:bg-purple-500/10 text-base h-12"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════════════════ */}
      <SectionWrapper className="bg-gradient-to-b from-purple-950/10 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle
            title="Why Choose Us"
            subtitle="Delivering excellence through innovation and expertise"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="glass rounded-xl p-6 group hover:shadow-lg hover:shadow-purple-500/10 hover:bg-white/10 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 14 }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-cyan-500/30 flex items-center justify-center mb-3 text-cyan-400"
              >
                {f.icon}
              </motion.div>
              <h3
                className="font-semibold mb-1 text-[15px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm text-foreground/60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════════ */}
      <SectionWrapper className="relative overflow-hidden">
        {/* Grid bg */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-16 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive solutions for every aspect of your digital presence"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCardAnimated key={s.title} {...s} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white border-0 hover:shadow-lg hover:shadow-purple-500/50"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Link href="/services">
                Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════════ */}
      <div
        ref={statsRef}
        className="border-y border-white/5 bg-gradient-to-r from-purple-950/20 via-transparent to-cyan-950/20 py-12"
      >
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Counter end={s.end} suffix={s.suffix} inView={statsInView} />
              </div>
              <p
                className="text-sm text-foreground/50 mt-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          PORTFOLIO PREVIEW
      ══════════════════════════════════════════════════════ */}
      <SectionWrapper className="bg-gradient-to-b from-cyan-950/10 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle
            title="Featured Projects"
            subtitle="Showcasing our latest and greatest work"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {portfolioProjects.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <PortfolioCard
                image={p.image}
                title={p.title}
                description={p.description}
                tags={p.tags}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block"
          >
            <Button
              asChild
              variant="outline"
              className="border-2 border-cyan-400/30 hover:bg-cyan-500/10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Link href="/portfolio">
                View Full Portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════════
          ABOUT PREVIEW
      ══════════════════════════════════════════════════════ */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Copy – slide from left */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeLeft}
            viewport={viewport}
          >
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              About Weera Solution
            </h2>
            <p
              className="text-foreground/65 mb-4 leading-relaxed text-[15px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Founded by a passionate developer with years of experience in
              building digital solutions, Weera Solution is committed to
              delivering premium quality work that exceeds expectations.
            </p>
            <p
              className="text-foreground/65 mb-8 leading-relaxed text-[15px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We believe in creating solutions that are not just functional, but
              beautiful, scalable, and future-proof.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white border-0 hover:shadow-lg hover:shadow-purple-500/50"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image – slide from right */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeRight}
            viewport={viewport}
            className="hidden md:block relative h-96 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-purple-900/30"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format"
              alt="Weera Solution team collaborating"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-4 glass rounded-lg px-4 py-2 flex items-center gap-2 backdrop-blur-md"
            >
              <Shield className="w-4 h-4 text-purple-400" />
              <span
                className="text-sm font-medium text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Trusted by Businesses
              </span>
            </motion.div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════ */}
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
            Ready to Transform Your Business?
          </h2>
          <p
            className="relative text-lg text-foreground/65 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Let&apos;s create something amazing together. Get in touch with us
            today.
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
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════════
          VIDEO SECTION
      ══════════════════════════════════════════════════════ */}
      <SectionWrapper>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle
            title="Company Intro"
            subtitle="See what Weera Solution is all about"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewport}
          className="relative w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-purple-900/30"
        >
          <Image
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&h=788&fit=crop&auto=format"
            alt="Company intro video thumbnail"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: "spring", stiffness: 360, damping: 16 }}
              className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center ring-2 ring-white/50 shadow-xl hover:bg-white/30 transition-colors"
            >
              <Play className="w-7 h-7 text-white ml-1" />
            </motion.button>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-lg px-5 py-2 backdrop-blur-md">
            <span
              className="text-sm font-medium text-white tracking-wide"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Watch Our Story
            </span>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
