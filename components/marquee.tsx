const words = [
  'CREATIVE STRATEGY',
  'CINEMATIC PRODUCTION',
  'POST & VFX',
  'OMNICHANNEL DISTRIBUTION',
]

export function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-border bg-primary py-4">
      <div className="animate-marquee flex w-max items-center gap-8">
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap font-display text-lg font-black tracking-widest text-primary-foreground"
          >
            {word}
            <span className="text-primary-foreground/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
