'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-20"
        >
          <h2 className="font-display text-balance text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Ready to Command
            <br />
            <span className="text-primary">Attention?</span>
          </h2>
          <Link
            href="mailto:hello@auralix.studio"
            className="group mt-8 inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-bold tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            START A PROJECT
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid gap-12 border-t border-border pt-14 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-black tracking-tight">
              AURALIX<span className="text-primary">.</span>
            </p>
            <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
              Architecting visual impact for brands that demand attention. Operating at the
              intersection of cinematic craft and digital strategy.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <h4 className="text-xs font-bold tracking-[0.25em] text-primary">NAVIGATION</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <Link href="#work" className="transition-colors hover:text-foreground">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="#services" className="transition-colors hover:text-foreground">
                  Studio Services
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Social links">
            <h4 className="text-xs font-bold tracking-[0.25em] text-primary">CONNECT</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="transition-colors hover:text-foreground">
                  Inquiries
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-foreground">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-foreground">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-xs tracking-widest text-muted-foreground">
          <p>© 2024 AURALIX STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              PRIVACY
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              TERMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
