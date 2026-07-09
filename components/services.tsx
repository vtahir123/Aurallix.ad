'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Creative Strategy',
    description:
      "Data-informed narrative design. We architect campaigns that penetrate the noise and anchor in the viewer's psyche.",
    tags: [],
  },
  {
    number: '02',
    title: 'Cinematic Production',
    description:
      'Execution at scale. 8K workflows, motion control, and uncompromising visual fidelity in every frame.',
    tags: [],
  },
  {
    number: '03',
    title: 'Post & VFX',
    description:
      'Seamless integration. Color grading, 3D motion design, and invisible visual effects that elevate the narrative without distracting.',
    tags: [],
  },
  {
    number: '04',
    title: 'Omnichannel Distribution',
    description:
      'Optimized delivery across all digital touchpoints. Formats engineered specifically for modern consumption.',
    tags: ['CTV', 'Social', 'DOOH'],
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="font-display text-balance text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          The Architecture
          <br />
          of <span className="text-primary">Impact</span>
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
          An uncompromising approach to every phase of the visual lifecycle, stripped of the
          unnecessary.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2">
        {services.map((service, i) => (
          <motion.article
            key={service.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            className="group relative bg-background p-10 transition-colors hover:bg-card"
          >
            <span className="font-display text-sm font-bold text-primary">{service.number}</span>
            <h3 className="mt-4 font-display text-2xl font-black tracking-tight">
              {service.title}
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
            {service.tags.length > 0 && (
              <div className="mt-6 flex gap-3">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-primary/40 px-3 py-1 text-xs font-bold tracking-widest text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full"
            />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
