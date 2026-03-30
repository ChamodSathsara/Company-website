"use client";

import { useState } from "react";
import { SectionWrapper, SectionTitle } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Syne, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
  viewport,
} from "@/components/motion-variants";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

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

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: "hello@weerasolution.com",
    link: "mailto:hello@weerasolution.com",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: "+94 (0) 700 000 000",
    link: "tel:+94700000000",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    details: "Sri Lanka",
    link: "#",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    details: "Mon – Fri, 9 AM – 6 PM",
    link: "#",
  },
];

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "Timelines vary with scope — a website takes 4–8 weeks; larger projects 3–6 months.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes! We offer maintenance packages to keep your solution running smoothly after launch.",
  },
  {
    q: "What is your development process?",
    a: "Agile: discovery → design → development → testing → deployment, with regular client check-ins.",
  },
  {
    q: "Can you work with my existing team?",
    a: "Absolutely! We integrate seamlessly as an extension of your workforce.",
  },
  {
    q: "Do you provide hosting solutions?",
    a: "We recommend and integrate AWS, Google Cloud, and others based on your needs.",
  },
  {
    q: "What are your payment terms?",
    a: "Milestone-based payment structure, agreed during the project proposal phase.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setIsLoading(false);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

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
            Reach Out
          </motion.p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get In{" "}
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
              Touch
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-lg md:text-xl text-foreground/65 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Have a project in mind? Send us a message and we&apos;ll get back to
            you as soon as possible.
          </motion.p>
        </motion.div>
      </SectionWrapper>

      {/* ══ Contact Section ══ */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form — fade from left */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="show"
            variants={fadeLeft}
            viewport={viewport}
          >
            <div className="glass rounded-2xl p-8">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send us a Message
              </h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-400/40 text-green-200"
                >
                  <p
                    className="font-semibold text-[15px]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Thank you for your message!
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      id: "name",
                      label: "Full Name",
                      type: "text",
                      placeholder: "John Doe",
                    },
                    {
                      id: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "john@example.com",
                    },
                  ].map((field, i) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <label
                        htmlFor={field.id}
                        className="text-[13px] font-medium text-foreground/70"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {field.label}
                      </label>
                      <Input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="bg-white/5 border-white/20 text-foreground placeholder:text-foreground/35 rounded-xl focus:border-purple-400/60 transition-colors text-[14px]"
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label
                    htmlFor="message"
                    className="text-[13px] font-medium text-foreground/70"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={6}
                    className="bg-white/5 border-white/20 text-foreground placeholder:text-foreground/35 resize-none rounded-xl focus:border-purple-400/60 transition-colors text-[14px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white border-0 hover:shadow-lg hover:shadow-purple-500/50 text-[15px] h-12 font-semibold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {isLoading ? (
                      <>
                        <span className="inline-block animate-spin mr-2">
                          ⟳
                        </span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact info — fade from right with stagger */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={staggerContainer}
            viewport={viewport}
            className="space-y-5"
          >
            <motion.h2
              variants={fadeRight}
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact Information
            </motion.h2>
            {contactInfo.map((info) => (
              <motion.a
                key={info.title}
                variants={fadeRight}
                whileHover={{ scale: 1.03, x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                href={info.link}
                className="glass rounded-2xl p-5 block group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 14 }}
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center text-white flex-shrink-0"
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h3
                      className="font-semibold text-[15px] mb-0.5"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {info.title}
                    </h3>
                    <p
                      className="text-[13px] text-foreground/55 group-hover:text-foreground/75 transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {info.details}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ══ Map ══ */}
      <SectionWrapper className="hidden md:block bg-gradient-to-b from-purple-950/10 to-transparent">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle title="Find Us" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={viewport}
          className="w-full h-96 rounded-2xl glass overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-cyan-500/20"
        >
          <div className="text-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            </motion.div>
            <p
              className="text-foreground/55 text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Map integration coming soon
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* ══ FAQ ══ */}
      <SectionWrapper>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={viewport}
        >
          <SectionTitle title="Frequently Asked Questions" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="glass rounded-2xl p-6 cursor-default"
            >
              <h3
                className="font-semibold text-[15px] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.q}
              </h3>
              <p
                className="text-[13px] text-foreground/55 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.a}
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
            Ready to Start Your Project?
          </h2>
          <p
            className="text-lg text-foreground/65 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Scroll up to the form or reach out via any of our contact channels.
          </p>
          <motion.a
            href="https://wa.me/947XXXXXXXX?text=Hello%20Weera%20Solution"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-semibold hover:shadow-lg hover:shadow-green-500/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
