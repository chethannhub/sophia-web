import NewsHeader from '@/components/news-header'
import NewsHero from '@/components/news-hero'
import ArticleGrid from '@/components/article-grid'
import NewsFooter from '@/components/news-footer'

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background via-secondary/5">
      <NewsHeader />
      <NewsHero />
      <ArticleGrid />
      <NewsFooter />
    </main>
  )
}
