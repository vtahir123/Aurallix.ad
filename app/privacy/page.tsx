'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-svh bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <section className="mx-auto w-full max-w-4xl px-6 pt-36 pb-20 flex-grow">
        {/* Back navigation */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest text-muted-foreground transition-colors hover:text-primary mb-8"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          BACK TO HOME
        </Link>

        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs font-bold tracking-[0.3em] text-primary mb-3">
            LEGAL & COMPLIANCE
          </p>
          <h1 className="font-display text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Privacy <span className="text-primary">Policy</span>
          </h1>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card/50 border border-border/80 rounded-lg p-8 md:p-12 space-y-6"
        >
          <p className="text-lg leading-relaxed text-muted-foreground font-light">
            At Auralix, we respect your privacy. Any information you share with us (contact details, brand assets,
            or project files) is used only to deliver your video ad services and is never sold or shared with third
            parties. We may use basic cookies to improve website experience.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground font-light">
            For any questions about your data, contact us at{' '}
            <Link
              href="mailto:auralix11@gmail.com?subject=Let's%20Create%20Something%20Amazing%20with%20Auralix&body=Hi%20Auralix%20Team%2C%0A%0AI'm%20interested%20in%20creating%20a%20hyper-realistic%20video%20ad%20for%20my%20brand%20and%20would%20love%20to%20get%20started%20with%20Auralix.%0A%0ACould%20you%20please%20share%20your%20available%20packages%20and%20pricing%3F"
              className="text-primary hover:underline font-semibold transition-colors"
            >
              auralix11@gmail.com
            </Link>
            .
          </p>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Need full details?</h4>
              <p className="text-muted-foreground text-sm mt-1">Get in touch with our operations team for comprehensive legal policies.</p>
            </div>
            <Link
              href="mailto:auralix11@gmail.com?subject=Let's%20Create%20Something%20Amazing%20with%20Auralix&body=Hi%20Auralix%20Team%2C%0A%0AI'm%20interested%20in%20creating%20a%20hyper-realistic%20video%20ad%20for%20my%20brand%20and%20would%20love%20to%20get%20started%20with%20Auralix.%0A%0ACould%20you%20please%20share%20your%20available%20packages%20and%20pricing%3F"
              className="inline-flex items-center justify-center bg-primary hover:opacity-90 text-primary-foreground font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
