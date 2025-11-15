import Header from '@/components/header'
import Footer from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { Sparkles, Users, Lightbulb, Rocket, Target, Zap } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Sophialabs | Mission, Vision & Values',
  description: 'Discover Sophialabs mission to design, innovate, and build transformative solutions. Learn about our two wings: news aggregation and digital marketing education platforms.',
  keywords: ['about Sophialabs', 'mission', 'vision', 'news aggregation', 'digital marketing education'],
  openGraph: {
    title: 'About Sophialabs | Mission, Vision & Values',
    description: 'Learn about Sophialabs mission to deliver innovative solutions for news and digital marketing.',
    url: 'https://sophialabs.in/about',
    type: 'website',
    images: [
      {
        url: 'https://sophialabs.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sophialabs - About',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sophialabs',
    description: 'Learn about our mission, vision, and transformative solutions.',
    images: ['https://sophialabs.in/og-image.png'],
  },
  alternates: {
    canonical: 'https://sophialabs.in/about',
  },
}

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-6 md:pt-8 px-4 border-b border-border/40">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumb />
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background via-secondary/3 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/20 animate-fade-in-down">
              <Lightbulb size={16} className="text-accent" />
              <span className="text-sm font-medium">Our Story</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance animate-fade-in-up animate-stagger-2">
              We Design, <span className="bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent">Innovate,</span> and Build
            </h1>

            <p className="text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty animate-fade-in-up animate-stagger-3">
              Transformative solutions that solve real-world problems. From curated news to digital marketing mastery, we're redefining how people stay informed and grow their businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex flex-col gap-6 p-8 rounded-2xl border border-border/40 bg-gradient-to-br from-card via-card to-secondary/5 hover:border-accent/30 transition-colors animate-slide-in-left animate-stagger-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                <Lightbulb size={28} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To create intelligent, user-centric solutions that empower individuals and businesses to make informed decisions and master digital growth. We believe in building products that are functional, intuitive, and genuinely transformative.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-8 rounded-2xl border border-border/40 bg-gradient-to-br from-card via-card to-secondary/5 hover:border-accent/30 transition-colors animate-slide-in-right animate-stagger-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center">
                <Rocket size={28} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the essential platform for staying globally informed and mastering digital marketing. We envision a world where quality information and educational resources are accessible, actionable, and empowering for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-secondary/3 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold animate-fade-in animate-stagger-1">Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-stagger-2">
              These principles drive every decision we make and shape our culture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We embrace cutting-edge technology and creative thinking to solve challenges in fresh, effective ways.',
                icon: Zap,
              },
              {
                title: 'User First',
                description: 'Every feature, every design choice, every update is centered on understanding and serving our users needs.',
                icon: Users,
              },
              {
                title: 'Quality',
                description: 'We pursue excellence in design, engineering, and customer experience with unwavering attention to detail.',
                icon: Target,
              },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className={`group p-8 rounded-2xl border border-border/40 bg-card hover:border-accent/50 hover:bg-card/80 transition-all duration-300 animate-fade-in ${
                    idx === 0 ? 'animate-stagger-3' : idx === 1 ? 'animate-stagger-4' : 'animate-stagger-5'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-bold animate-fade-in animate-stagger-1">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-stagger-2">
              Specialized platforms built to excel in their domain and deliver real value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 md:p-10 rounded-2xl border border-border/40 bg-gradient-to-br from-blue-500/5 via-card to-cyan-500/5 hover:border-blue-500/50 hover:from-blue-500/10 hover:via-card hover:to-cyan-500/10 transition-all duration-300 animate-slide-in-left animate-stagger-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/20 mb-6">
                <span className="text-xs font-semibold text-blue-700">NEWS WING</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Global News at Your Fingertips</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Stay informed with curated daily top articles, AI-powered summaries, and audio podcasts. Multi-source aggregation brings you the stories that matter, delivered how you prefer.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">AI-powered article summaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Podcast versions of top articles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Multi-source aggregation</span>
                </li>
              </ul>
              <a href="https://news.sophialabs.in" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group/link">
                Explore News <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <div className="group p-8 md:p-10 rounded-2xl border border-border/40 bg-gradient-to-br from-purple-500/5 via-card to-pink-500/5 hover:border-purple-500/50 hover:from-purple-500/10 hover:via-card hover:to-pink-500/10 transition-all duration-300 animate-slide-in-right animate-stagger-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/20 mb-6">
                <span className="text-xs font-semibold text-purple-700">DIGITAL ADS WING</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Master Digital Marketing</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Learn, compare, and optimize. Comprehensive guides for Google Ads, category-wise breakdowns, performance analytics, and expert strategies to maximize your advertising ROI.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Detailed Google Ads comparisons</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Ad strategy guides & best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">Performance analytics & insights</span>
                </li>
              </ul>
              <a href="https://ads.sophialabs.in" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold group/link">
                Explore Digital Ads <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
