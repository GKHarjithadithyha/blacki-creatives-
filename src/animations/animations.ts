import type { Variants } from 'motion/react'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export const staggerChildren: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
}

export const staggerText = staggerChildren
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.025 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
export const hoverLift = { y: -3, transition: { duration: 0.25, ease: 'easeOut' } }
export const scrollReveal = { initial: 'hidden', whileInView: 'visible' as const, viewport: { once: true, amount: 0.18 } }
