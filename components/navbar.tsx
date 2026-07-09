'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl font-black tracking-tight">
          AURALIX<span className="text-primary">.</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium tracking-widest md:flex">
          <Link href="/#work" className="transition-colors hover:text-primary">
            WORK
          </Link>
          <Link href="/#services" className="transition-colors hover:text-primary">
            SERVICES
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-primary">
            CONTACT
          </Link>
        </div>
        <Link
          href="/#contact"
          className="bg-primary px-5 py-2.5 text-sm font-bold tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
        >
          GET STARTED
        </Link>
      </nav>
    </motion.header>
  )
}
