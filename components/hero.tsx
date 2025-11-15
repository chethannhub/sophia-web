import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section aria-label="Hero section" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-12 md:pt-20 pb-12 md:pb-20">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center text-center gap-6 md:gap-12">
          <div className="animate-fade-in-down inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-accent/30 bg-accent/5 badge-glow badge-shimmer relative">
            <Sparkles size={14} className="text-accent flex-shrink-0 animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-accent">
              Innovating Solutions for Tomorrow
            </span>
          </div>

          <h1 className="hero-title animate-fade-in-up">
            Design, Innovate, Build
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transformative Solutions
            </span>
          </h1>

          <p className="hero-subtitle animate-fade-in-up animate-stagger-1">
            We design, innovate, and build transformative solutions and experiences to solve real-world problems in the most effective way possible. Explore our specialized products for news aggregation and digital marketing insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center pt-2 md:pt-4 w-full sm:w-auto animate-fade-in-up animate-stagger-2">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base w-full sm:w-auto transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              Explore Solutions
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
            </Button>
            <Link href="https://news.sophialabs.in" className="w-full sm:w-auto">
              <Button
                size="sm"
                variant="outline"
                className="px-6 md:px-8 py-2 md:py-3 rounded-full border-primary/30 hover:bg-primary/5 text-sm md:text-base w-full transition-all duration-300 hover:shadow-md"
              >
                Visit News Wing
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-12 pt-8 md:pt-20 w-full max-w-2xl px-2 animate-fade-in-up animate-stagger-3">
            {[
              { value: '100+', label: 'Daily Articles' },
              { value: '50K+', label: 'Active Users' },
              { value: '10+', label: 'Ad Categories' },
            ].map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1 md:gap-2 animate-fade-in-up" style={{ animationDelay: `${0.35 + idx * 0.1}s` }}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary transition-transform duration-300 hover:scale-110">
                  {metric.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground text-balance">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
