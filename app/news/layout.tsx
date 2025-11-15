import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News Wing | Sophialabs - Daily Top News with Podcasts',
  description: 'Stay updated with curated daily top news articles from across the internet. Get AI-powered summaries and podcast versions of news stories.',
  keywords: ['news aggregation', 'daily news', 'news summary', 'podcast news', 'top stories'],
  openGraph: {
    title: 'News Wing | Sophialabs',
    description: 'Curated daily top news with AI summaries and podcasts',
    url: 'https://news.sophialabs.in',
    type: 'website',
    images: [
      {
        url: '/og-image-news.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
