"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Syne, DM_Sans } from "next/font/google";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/* ── Page-transition overlay (slides in from right, then out to left) ── */
const overlayVariants = {
  initial: { x: "100%", opacity: 1 },
  animate: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.45, ease: cubicBezier(0.76, 0, 0.24, 1) },
  },
  exit: {
    x: "-100%",
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: cubicBezier(0.76, 0, 0.24, 1),
      delay: 0.05,
    },
  },
};

/* ── Mobile menu panel ── */
const menuVariants: any = {
  closed: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
  open: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

/* ── Single mobile link ── */
const mobileLinkVariants: any = {
  closed: { x: 40, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.07,
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [nextHref, setNextHref] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Handle nav click with slide animation */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href === pathname) return; // already on this page – do nothing
    e.preventDefault();
    setNextHref(href);
    setTransitioning(true);
  };

  /* After overlay animates in, navigate */
  const onOverlayComplete = () => {
    if (transitioning && nextHref) {
      router.push(nextHref);
      /* Give the new page a frame to mount, then dismiss overlay */
      setTimeout(() => setTransitioning(false), 500);
    }
  };

  return (
    <>
      {/* ── Page-transition overlay ── */}
      <AnimatePresence>
        {transitioning && (
          <motion.div
            key="page-transition"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={onOverlayComplete}
            className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, #1e0a3c 0%, #0a1628 50%, #0d2535 100%)",
            }}
          >
            {/* Decorative gradient line that sweeps across */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              style={{ originX: 0 }}
              className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-transparent"
            />
            {/* Logo mark in center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.35,
                delay: 0.15,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center shadow-2xl shadow-purple-500/40"
            >
              <span
                className="text-xl font-extrabold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                WS
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Navbar bar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-purple-500/10 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div
          className={`${syne.variable} ${dmSans.variable} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
        >
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" onClick={(e) => handleNavClick(e, "/")}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Weera Solution
              </motion.div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative text-sm font-medium transition-colors"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: isActive ? "white" : "rgba(255,255,255,0.65)",
                    }}
                  >
                    <motion.span
                      whileHover={{ color: "#fff" }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      {link.label}

                      {/* Active underline */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Hover underline */}
                      {!isActive && (
                        <motion.span
                          className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-purple-400/50 to-cyan-400/50"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.25 }}
                          style={{ originX: 0 }}
                        />
                      )}
                    </motion.span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white border-0 hover:shadow-lg hover:shadow-purple-500/50"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Link
                    href="/contact"
                    onClick={(e) => handleNavClick(e, "/contact")}
                  >
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu panel (slides from right) ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 z-50 h-full w-72 md:hidden flex flex-col"
              style={{
                background:
                  "linear-gradient(160deg, #1a0635 0%, #0b1628 60%, #0d2535 100%)",
                borderLeft: "1px solid rgba(168,85,247,0.2)",
              }}
            >
              {/* Top accent line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-purple-500 to-cyan-400" />

              {/* Close button */}
              <div className="flex justify-between items-center px-6 py-5">
                <span
                  className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Menu
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={22} className="text-foreground/70" />
                </motion.button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-6 py-4 flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      custom={i}
                      variants={mobileLinkVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          handleNavClick(e, link.href);
                          setMobileOpen(false);
                        }}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                          isActive
                            ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/10 text-white border border-purple-400/25"
                            : "text-foreground/65 hover:bg-white/8 hover:text-white"
                        }`}
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {link.label}
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="px-6 py-6 border-t border-white/8"
              >
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white border-0 hover:shadow-lg hover:shadow-purple-500/40"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Link
                    href="/contact"
                    onClick={(e) => {
                      handleNavClick(e, "/contact");
                      setMobileOpen(false);
                    }}
                  >
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
