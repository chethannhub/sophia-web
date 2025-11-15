'use client'

import { useState } from 'react'
import ArticleCard from './article-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const mockArticles = [
  {
    id: 1,
    title: 'AI Breakthroughs: New Language Model Sets Industry Record',
    summary: 'A groundbreaking new language model achieves unprecedented performance metrics in natural language understanding and generation tasks.',
    category: 'Technology',
    source: 'TechNews Daily',
    timestamp: '2 hours ago',
    image: '/ai-technology-breakthrough.jpg',
    hasPodcast: true,
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'Global Markets React to Economic Policy Changes',
    summary: 'Stock markets worldwide experience significant movements following major economic policy announcements from leading nations.',
    category: 'Business',
    source: 'Financial Times',
    timestamp: '4 hours ago',
    image: '/stock-market-trading.jpg',
    hasPodcast: true,
    readTime: '7 min',
  },
  {
    id: 3,
    title: 'Renewable Energy Reaches New Milestone in Global Production',
    summary: 'International renewable energy capacity surpasses expectations, contributing significantly to global climate change mitigation efforts.',
    category: 'Science',
    source: 'Green Future',
    timestamp: '6 hours ago',
    image: '/renewable-energy-solar-wind.jpg',
    hasPodcast: false,
    readTime: '6 min',
  },
  {
    id: 4,
    title: 'Space Agency Announces Historic Mission Launch',
    summary: 'A historic space mission is set to launch next month, carrying groundbreaking scientific instruments to explore new frontiers.',
    category: 'Science',
    source: 'Space Today',
    timestamp: '8 hours ago',
    image: '/space-mission-rocket-launch.jpg',
    hasPodcast: true,
    readTime: '4 min',
  },
  {
    id: 5,
    title: 'Mobile Technology: Latest Innovations Unveiled',
    summary: 'Leading tech companies showcase the latest innovations in mobile technology, including advanced processors and display technologies.',
    category: 'Technology',
    source: 'Mobile Insider',
    timestamp: '10 hours ago',
    image: '/mobile-phone-smartphone-technology.jpg',
    hasPodcast: true,
    readTime: '5 min',
  },
  {
    id: 6,
    title: 'Healthcare Advances with AI-Powered Diagnostics',
    summary: 'New AI-powered diagnostic tools are revolutionizing healthcare by improving accuracy and speed of disease detection.',
    category: 'Health',
    source: 'Medical Weekly',
    timestamp: '12 hours ago',
    image: '/medical-healthcare-ai-technology.jpg',
    hasPodcast: false,
    readTime: '6 min',
  },
]

const categories = ['All', 'Technology', 'Business', 'Science', 'Health']

export default function ArticleGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredArticles = selectedCategory === 'All'
    ? mockArticles
    : mockArticles.filter(article => article.category === selectedCategory)

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-12">
          <h2 className="section-title">Top Stories Today</h2>
          <p className="text-muted-foreground">
            Carefully curated articles from trusted sources
          </p>
        </div>

        {/* Category Filter */}
        <Tabs defaultValue="All" className="mb-12" onValueChange={setSelectedCategory}>
          <TabsList className="bg-secondary/30 border border-border/50 p-1 gap-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <div className="mb-12">
            <div className="relative rounded-2xl overflow-hidden border border-border/50">
              <ArticleCard article={filteredArticles[0]} featured />
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.slice(1).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Load More */}
        {filteredArticles.length > 0 && (
          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 rounded-full border border-primary/30 hover:bg-primary/5 text-primary font-medium transition-all">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
