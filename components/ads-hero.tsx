import { BarChart3, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5">
            <BarChart3 size={16} className="text-purple-500" />
            <span className="text-sm font-medium text-purple-500">
              Data-Driven Insights
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Master Digital Advertising
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              With Expert Guidance
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Learn everything about Google Ads across different categories. Compare ad types, understand best practices, and optimize your advertising campaigns with data-driven strategies.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 rounded-full"
            >
              Explore Ads Categories
              <Zap className="ml-2" size={18} />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 pt-8 w-full max-w-xl">
            {[
              { value: '10+', label: 'Ad Categories' },
              { value: '50+', label: 'Guides' },
              { value: '100%', label: 'Free' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="text-2xl md:text-3xl font-bold text-purple-500">
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
