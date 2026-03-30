"use client";

import { SectionWrapper, SectionTitle } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Syne, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scalePop,
  staggerContainer,
  staggerSlow,
  viewport,
} from "@/components/motion-variants";
import { Zap, Heart, Target, Users } from "lucide-react";

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

const skills = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Backend Development",
  "Frontend Development",
  "Database Design",
  "Cloud Architecture",
  "DevOps",
  "API Development",
  "System Design",
  "Performance Optimization",
  "Security",
];
const valueItems = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Mission Driven",
    description:
      "Delivering solutions that create real value and drive business growth.",
    accent: "#a855f7",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Quality First",
    description:
      "Every project receives full attention. We believe in excellence over everything.",
    accent: "#f43f5e",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation Focused",
    description:
      "We stay ahead with the latest technologies and best practices in the industry.",
    accent: "#f59e0b",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client Centric",
    description:
      "Your success is our success. We work as an extension of your team.",
    accent: "#22d3ee",
  },
];
const timelineItems = [
  {
    year: "2016",
    title: "Started Journey",
    description:
      "Began freelancing as a solo developer with a passion for quality digital solutions.",
  },
  {
    year: "2018",
    title: "Expanded Services",
    description:
      "Started offering comprehensive web and mobile development services to businesses.",
  },
  {
    year: "2020",
    title: "Founded Weera Solution",
    description:
      "Officially launched Weera Solution to scale services and help more businesses grow.",
  },
  {
    year: "2024",
    title: "Market Leader",
    description:
      "Established as trusted partner for premium digital solutions across multiple industries.",
  },
];
const techs = [
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "Node.js",
  "Python",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "AWS",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "TypeScript",
];

export default function AboutPage() {
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
            className="text-xs font-semibold uppercase text-purple-400"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Who We Are
          </motion.p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About{" "}
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
              Weera Solution
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-lg md:text-xl text-foreground/65 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Transforming ideas into digital excellence. Founded by a passionate
            developer with a vision to create premium solutions.
          </motion.p>
        </motion.div>
      </SectionWrapper>

      {/* ══ Story ══ */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-5"
            initial="hidden"
            whileInView="show"
            variants={fadeLeft}
            viewport={viewport}
          >
            <SectionTitle title="Our Story" centered={false} />
            <div
              className="space-y-4 text-foreground/65 leading-relaxed text-[15px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>
                Weera Solution was born from a passion for creating exceptional
                digital experiences. Starting as a solo developer, our founder
                has grown the business to deliver premium quality solutions that
                exceed client expectations.
              </p>
              <p>
                Over the years, we&apos;ve worked with startups, small
                businesses, and enterprises across various industries. Each
                project is an opportunity to learn, innovate, and push
                boundaries.
              </p>
              <p>
                Today, we&apos;re proud to be a trusted partner for businesses
                looking to transform their digital presence through innovative
                technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeRight}
            viewport={viewport}
            className="relative h-80"
          >
            <div className="absolute inset-0 glass rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-cyan-500/10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-purple-500/30"
                >
                  <span
                    className="text-3xl font-extrabold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    WS
                  </span>
                </motion.div>
                <p
                  className="text-foreground/55 text-[14px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Weera Solution
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ══ Vision & Mission ══ */}
      <SectionWrapper className="bg-gradient-to-b from-purple-950/10 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              title: "Our Vision",
              body: "To be the leading digital solutions provider, known for innovative, scalable, and beautiful solutions that transform businesses.",
              delay: 0,
            },
            {
              title: "Our Mission",
              body: "To empower businesses with cutting-edge solutions that drive growth, improve efficiency, and create exceptional user experiences.",
              delay: 0.1,
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="glass rounded-2xl p-8 cursor-default"
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-foreground/60 leading-relaxed text-[15px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ══ Values ══ */}
      <SectionWrapper>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle title="Our Core Values" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {valueItems.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="glass rounded-2xl p-6 cursor-default group"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 14 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{
                  background: `linear-gradient(135deg,${v.accent}cc,${v.accent}66)`,
                }}
              >
                {v.icon}
              </motion.div>
              <h3
                className="font-bold text-[17px] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {v.title}
              </h3>
              <p
                className="text-foreground/55 text-[14px] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {v.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ══ Timeline ══ */}
      <SectionWrapper className="bg-gradient-to-b from-cyan-950/10 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle title="Our Journey" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={viewport}
          className="space-y-8 max-w-3xl mx-auto"
        >
          {timelineItems.map((item, i) => (
            <motion.div
              key={item.year}
              variants={fadeLeft}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/25"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {i + 1}
                </motion.div>
                {i < timelineItems.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ originY: 0 }}
                    className="w-[2px] h-20 bg-gradient-to-b from-purple-400/60 to-cyan-400/20 my-2"
                  />
                )}
              </div>
              <div className="pt-2">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-[12px] font-semibold mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.year}
                </motion.span>
                <h3
                  className="text-[19px] font-semibold mb-1.5 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-foreground/55 text-[14px] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ══ Skills / Expertise ══ */}
      <SectionWrapper>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle title="Our Expertise" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerSlow}
          viewport={viewport}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={scalePop}
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ type: "spring", stiffness: 360, damping: 16 }}
            >
              <Badge
                variant="secondary"
                className="text-[13px] px-4 py-2 cursor-default"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ══ Tech Stack ══ */}
      <SectionWrapper className="bg-gradient-to-b from-purple-950/10 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle
            title="Technology Stack"
            subtitle="Tools and platforms we use to build amazing solutions"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerSlow}
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {techs.map((tech) => (
            <motion.div
              key={tech}
              variants={fadeUp}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className="glass rounded-xl p-4 text-center cursor-default"
            >
              <span
                className="font-semibold text-[13px] text-foreground/70"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {tech}
              </span>
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
            Let&apos;s Create Something Amazing
          </h2>
          <p
            className="text-lg text-foreground/65 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ready to partner with us on your next digital project? Let&apos;s
            discuss your vision.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-shadow font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
