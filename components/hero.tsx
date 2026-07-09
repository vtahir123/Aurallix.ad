'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

interface HeroProps {
  onPlayShowreel?: () => void
}

export function Hero({ onPlayShowreel }: HeroProps) {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.55_0.22_28/0.15),transparent_60%)]"
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-7xl px-6 py-24"
      >
        <motion.p
          variants={item}
          className="mb-6 flex items-center gap-3 text-sm font-bold tracking-[0.3em] text-primary"
        >
          <span aria-hidden="true" className="h-px w-10 bg-primary" />
          PREMIUM VIDEO AGENCY
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display text-balance text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-[7rem]"
        >
          Motion That
          <br />
          <span className="text-primary">Commands</span> Attention.
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground"
        >
          We engineer high-stakes video advertising campaigns for visionary brands. Precision
          post-production meets relentless creative strategy in an uncompromising studio
          environment.
        </motion.p>
        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-6">
          <button
            type="button"
            onClick={onPlayShowreel}
            className="group flex items-center gap-3 bg-primary px-7 py-4 text-sm font-bold tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Play className="size-4 fill-current transition-transform group-hover:scale-125" />
            PLAY SHOWREEL
          </button>
          <Link
            href="#work"
            className="group flex items-center gap-2 text-sm font-bold tracking-widest transition-colors hover:text-primary"
          >
            VIEW CASE STUDIES
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 h-1 w-full origin-left bg-primary"
      />
    </section>
  )
}
