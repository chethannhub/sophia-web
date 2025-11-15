import AdsHeader from '@/components/ads-header'
import AdsHero from '@/components/ads-hero'
import AdCategories from '@/components/ad-categories'
import AdComparison from '@/components/ad-comparison'
import LearningPath from '@/components/learning-path'
import AdsFooter from '@/components/ads-footer'

export default function AdsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background via-secondary/5">
      <AdsHeader />
      <AdsHero />
      <AdCategories />
      <AdComparison />
      <LearningPath />
      <AdsFooter />
    </main>
  )
}
