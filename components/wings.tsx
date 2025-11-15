import Link from 'next/link'
import { Newspaper, BarChart3, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const products = [
  {
    id: 'news',
    title: 'News Product',
    subtitle: 'news.sophialabs.in',
    description: 'Stay updated with curated daily top news articles from across the internet. Enjoy AI-powered summaries and podcast versions for convenient consumption on-the-go.',
    icon: Newspaper,
    href: 'https://news.sophialabs.in',
    features: ['Daily Top Articles', 'AI Summaries', 'News Podcasts', 'Multi-source Aggregation'],
    accent: 'from-blue-500 to-cyan-500',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    image: '/news-aggregation-dashboard.jpg',
  },
  {
    id: 'ads',
    title: 'Digital Ads Product',
    subtitle: 'ads.sophialabs.in',
    description: 'Master digital advertising through comprehensive educational resources. Compare Google Ads across categories, learn best practices, and optimize your ad campaigns.',
    icon: BarChart3,
    href: 'https://ads.sophialabs.in',
    features: ['Google Ads Comparisons', 'Ad Strategy Guides', 'Category Breakdowns', 'Performance Analytics'],
    accent: 'from-purple-500 to-pink-500',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    image: '/digital-marketing-analytics.png',
  },
]

export default function Wings() {
  return (
    <section id="products" className="py-16 md:py-32 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-12 md:mb-16">
          <h2 className="section-title text-3xl md:text-4xl animate-fade-in-up">
            Our Products
          </h2>
          <p className="section-subtitle max-w-2xl text-sm md:text-base animate-fade-in-up animate-stagger-1">
            Two powerful platforms, each designed to excel in their domain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <article className="group animate-slide-in-left p-8 md:p-10 rounded-2xl border border-border/40 bg-gradient-to-br from-blue-500/5 via-card to-cyan-500/5 hover:border-blue-500/50 hover:from-blue-500/10 hover:via-card hover:to-cyan-500/10 transition-all duration-300 card-hover-effect">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/20 mb-6">
              <Newspaper size={16} className="text-blue-600" />
              <span className="text-xs font-semibold text-blue-700">NEWS WING</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Daily Top Articles</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Stay updated with curated daily top news articles from across the internet. Enjoy AI-powered summaries and podcast versions for convenient consumption.
            </p>
            
            <div className="relative w-full h-32 md:h-48 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-6">
              <Image
                src="/news-aggregation-dashboard.jpg"
                alt="News Product Dashboard showing curated articles and AI summaries"
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect fill='%23e0f2fe' width='800' height='400'/%3E%3C/svg%3E"
                quality={80}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {products[0].features.map((feature, idx) => (
                <div key={idx} className="feature-badge animate-fade-in-up px-2 py-1 rounded-lg border border-blue-200/40 bg-blue-50/60 hover:border-blue-300/50 transition-all duration-300" style={{ animationDelay: `${0.4 + idx * 0.08}s` }}>
                  <span className="text-xs font-medium text-blue-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <Link href={products[0].href} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group/link transition-all duration-300">
              Explore News <span className="group-hover/link:translate-x-2 group-hover/link:transition-transform">→</span>
            </Link>
          </article>

          <article className="group animate-slide-in-right p-8 md:p-10 rounded-2xl border border-border/40 bg-gradient-to-br from-purple-500/5 via-card to-pink-500/5 hover:border-purple-500/50 hover:from-purple-500/10 hover:via-card hover:to-pink-500/10 transition-all duration-300 card-hover-effect">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/20 mb-6">
              <BarChart3 size={16} className="text-purple-600" />
              <span className="text-xs font-semibold text-purple-700">DIGITAL ADS WING</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Master Digital Ads</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Learn, compare, and optimize. Comprehensive guides for Google Ads, category breakdowns, performance analytics, and expert strategies.
            </p>

            <div className="relative w-full h-32 md:h-48 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-6">
              <Image
                src={products[1].image || "/placeholder.svg"}
                alt="Digital Ads Product showing Google Ads comparisons and performance analytics"
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect fill='%23fce7f3' width='800' height='400'/%3E%3C/svg%3E"
                quality={80}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {products[1].features.map((feature, idx) => (
                <div key={idx} className="feature-badge animate-fade-in-up px-2 py-1 rounded-lg border border-purple-200/40 bg-purple-50/60 hover:border-purple-300/50 transition-all duration-300" style={{ animationDelay: `${0.4 + idx * 0.08}s` }}>
                  <span className="text-xs font-medium text-purple-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <Link href={products[1].href} className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold group/link transition-all duration-300">
              Explore Digital Ads <span className="group-hover/link:translate-x-2 group-hover/link:transition-transform">→</span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}
