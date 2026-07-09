'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Play, X, ArrowLeft } from 'lucide-react'

const categories = ['ALL', 'AUTOMOTIVE', 'BEAUTY / LIFESTYLE', 'COMMERCIAL', 'EXPERIMENTAL']

const projects = [
  {
    title: 'Apex EV Launch',
    description:
      'Global broadcast & digital campaign driving 300% pre-order increase. A masterclass in automotive tension and release.',
    category: 'AUTOMOTIVE',
    duration: '01:15',
    format: '4K HDR',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-neon-car-driving-through-the-city-at-night-42234-large.mp4',
  },
  {
    title: "Lumina 'Liquid Chrome'",
    description:
      'Social-first macro cinematography redefining modern luxury beauty through elemental textures and stark contrast.',
    category: 'BEAUTY / LIFESTYLE',
    duration: '00:30',
    format: 'Vertical Native',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-liquid-gold-swirling-background-34306-large.mp4',
  },
  {
    title: 'Cyberpunk Neon City',
    description:
      'A moody, rain-slicked journey through towering corporate spires and neon-drenched alleyways.',
    category: 'COMMERCIAL',
    duration: '00:45',
    format: '4K HDR',
    image: 'https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-neon-city-street-at-night-41584-large.mp4',
  },
  {
    title: 'AeroDrone Cinematic',
    description:
      'Sweeping, high-altitude landscapes capture the rugged beauty of volcanic ridges and coastal cliffs.',
    category: 'EXPERIMENTAL',
    duration: '02:00',
    format: '8K RED',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-subway-station-with-neon-lights-41589-large.mp4',
  },
  {
    title: 'HyperSpeed Shift',
    description:
      'High-octane commercial edit for next-generation racing simulators, tracking the limits of physics.',
    category: 'AUTOMOTIVE',
    duration: '00:40',
    format: '4K HDR',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-neon-car-driving-through-the-city-at-night-42234-large.mp4',
  },
  {
    title: 'Chronos Digital Grid',
    description:
      'An abstract visualizer exploring human-machine interfacing and holographic data structures.',
    category: 'EXPERIMENTAL',
    duration: '01:30',
    format: '4K HDR',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-exploring-a-futuristic-digital-neon-city-43132-large.mp4',
  },
  {
    title: 'Siren Skin Luxury',
    description:
      'Commercial campaign for high-end skincare, focusing on macro fluid motions and hydration physics.',
    category: 'BEAUTY / LIFESTYLE',
    duration: '00:15',
    format: 'Vertical Native',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-liquid-gold-swirling-background-34306-large.mp4',
  },
  {
    title: 'RetroSynth Waves',
    description:
      'Synthwave music video incorporating 80s wireframe aesthetics and cathode-ray tube emulation.',
    category: 'COMMERCIAL',
    duration: '03:10',
    format: '4K HDR',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-31766-large.mp4',
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'ALL' || project.category === selectedCategory
  )

  return (
    <main className="min-h-svh bg-background text-foreground">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-36 pb-20">
        {/* Back navigation */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest text-muted-foreground transition-colors hover:text-primary mb-8"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          BACK TO HOME
        </Link>

        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-primary mb-3">
              COMPLETE TRANSMISSIONS ARCHIVE
            </p>
            <h1 className="font-display text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Our <span className="text-primary">Portfolio</span>
            </h1>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground text-sm md:text-base">
            Explore our curated history of high-fidelity visual assets, commercial campaigns, and experimental motion design.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-16 border-b border-border flex flex-wrap gap-2 md:gap-6 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 text-xs font-bold tracking-widest transition-colors ${
                selectedCategory === category
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(project.videoUrl)}
              >
                {/* Media Container */}
                <div className="relative overflow-hidden aspect-video bg-card border border-border/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg shadow-primary/30">
                      <Play className="size-5 fill-current" />
                    </span>
                  </div>
                  {/* Duration and Format Badge */}
                  <div className="absolute bottom-3 left-3 flex gap-2 text-[10px] font-bold tracking-widest">
                    <span className="bg-background/85 px-2 py-1 backdrop-blur-sm">
                      {project.duration}
                    </span>
                    <span className="bg-primary px-2 py-1 text-primary-foreground">
                      {project.format}
                    </span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="mt-5">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4"
          >
            {/* Click outside to close */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setActiveVideo(null)}
            />

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl border border-border/80 rounded-lg overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 flex size-10 items-center justify-center rounded-full bg-background/80 hover:bg-primary text-foreground hover:text-primary-foreground backdrop-blur transition-colors"
                aria-label="Close video player"
              >
                <X className="size-5" />
              </button>

              {/* Video Player */}
              <video
                src={activeVideo}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
