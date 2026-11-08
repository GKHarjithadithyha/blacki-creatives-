import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'motion/react'

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const title = ({ '/': 'Home', '/about': 'About', '/services': 'Services', '/packages': 'Packages', '/portfolio': 'Portfolio', '/contact': 'Contact' } as Record<string, string>)[pathname] ?? 'Home'
    document.title = `${title} | BLACKi Creative`
  }, [pathname])
  return <motion.div className="page-shell" initial={{ opacity: 1, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4, transition: { duration: 0.2 } }} transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}
