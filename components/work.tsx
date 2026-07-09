'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

const projects = [
  {
    title: 'Apex EV Launch',
    description:
      'Global broadcast & digital campaign driving 300% pre-order increase. A masterclass in automotive tension and release.',
    category: 'AUTOMOTIVE',
    duration: '01:15',
    format: '4K HDR',
    image: '/placeholder.svg?height=720&width=1280',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-neon-car-driving-through-the-city-at-night-42234-large.mp4',
  },
  {
    title: "Lumina 'Liquid Chrome'",
    description:
      'Social-first macro cinematography redefining modern luxury beauty through elemental textures and stark contrast.',
    category: 'BEAUTY / LIFESTYLE',
    duration: '00:30',
    format: 'Vertical Native',
    image: '/placeholder.svg?height=720&width=1280',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-liquid-gold-swirling-background-34306-large.mp4',
  },
]

interface WorkProps {
  onPlayVideo?: (url: string) => void
}

export function Work({ onPlayVideo }: WorkProps) {
  return (
    <section id="work" className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <h2 className="font-display text-balance text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Selected
            <br />
            <span className="text-primary">Transmissions</span>
          </h2>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 text-sm font-bold tracking-widest transition-colors hover:text-primary"
          >
            VIEW COMPLETE ARCHIVE
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
              className="group cursor-pointer"
              onClick={() => onPlayVideo?.(project.videoUrl)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex size-16 items-center justify-center rounded-full bg-primary">
                    <Play className="size-6 fill-primary-foreground text-primary-foreground" />
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 flex gap-2 text-xs font-bold tracking-widest">
                  <span className="bg-background/80 px-2 py-1 backdrop-blur-sm">
                    {project.duration}
                  </span>
                  <span className="bg-primary px-2 py-1 text-primary-foreground">
                    {project.format}
                  </span>
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl font-black tracking-tight transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
              <p className="mt-4 text-xs font-bold tracking-[0.25em] text-primary">
                {project.category}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/portfolio"
            className="group relative flex items-center gap-3 bg-primary px-8 py-4 text-sm font-bold tracking-widest text-primary-foreground transition-all duration-300 hover:opacity-95 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-primary/20"
          >
            VIEW ALL WORK
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 border border-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
