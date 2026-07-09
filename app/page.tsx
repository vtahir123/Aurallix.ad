'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Services } from '@/components/services'
import { Work } from '@/components/work'
import { Footer } from '@/components/footer'

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <main>
      <Navbar />
      <Hero onPlayShowreel={() => setActiveVideo('https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-31766-large.mp4')} />
      <Marquee />
      <Services />
      <Work onPlayVideo={(url) => setActiveVideo(url)} />
      <Footer />

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
    </main>
  )
}
