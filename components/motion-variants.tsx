// ─────────────────────────────────────────────────────────────────────────────
// Shared Framer Motion variants — import into every page
// ─────────────────────────────────────────────────────────────────────────────
import type { Variants } from 'framer-motion'

/** Fade up with spring overshoot – good for cards, sections */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.34, 1.56, 0.64, 1] },
  },
}

/** Slide in from left */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -44 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Slide in from right */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 44 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Subtle scale pop – good for badges, pills */
export const scalePop: Variants = {
  hidden: { opacity: 0, scale: 0.75 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
}

/** Stagger wrapper – wrap around a list of motion children */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

/** Slow stagger – for tech/badge grids with many items */
export const staggerSlow: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.05 },
  },
}

/** Shared viewport options for useInView / whileInView */
export const viewport = { once: true, margin: '-72px' } as const