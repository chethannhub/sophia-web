import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Wings from '@/components/wings'
import TalkToUs from '@/components/talk-to-us'
import Footer from '@/components/footer'
import { StructuredData } from '@/components/structured-data'

export const metadata = {
  title: 'Sophialabs | Design, Innovate, Build Solutions',
  description: 'Sophialabs designs, innovates, and builds transformative solutions. Explore our News aggregation and Digital Marketing Ads platforms.',
  openGraph: {
    title: 'Sophialabs | Design, Innovate, Build Solutions',
    description: 'Design, Innovate, Build Solutions for real-world problems',
    url: 'https://sophialabs.in',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background via-secondary/5">
      <StructuredData />
      <Header />
      <Hero />
      <Features />
      <Wings />
      <TalkToUs />
      <Footer />
    </main>
  )
}
