import { Sparkles, TrendingUp } from 'lucide-react'

export default function NewsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5">
            <TrendingUp size={16} className="text-blue-500" />
            <span className="text-sm font-medium text-blue-500">
              Updated Daily
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Stay Informed with
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Curated Top News
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Discover the most important stories of the day. Read summaries, listen to podcasts, and stay ahead of the curve with our AI-powered news aggregation platform.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 pt-8 w-full max-w-xl">
            {[
              { value: '100+', label: 'Daily Articles' },
              { value: '50+', label: 'Source Sites' },
              { value: '24/7', label: 'Updates' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="text-2xl md:text-3xl font-bold text-blue-500">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
