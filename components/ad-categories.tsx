'use client'

import { useState } from 'react'
import CategoryCard from './category-card'
import { Search } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Search Ads',
    description: 'Text-based ads that appear on Google Search results',
    icon: '🔍',
    subcategories: ['Text Ads', 'Performance Max', 'App Campaigns'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    name: 'Display Ads',
    description: 'Visual banner ads across the Google Display Network',
    icon: '🖼️',
    subcategories: ['Banner Ads', 'Responsive Display', 'Video Ads'],
    color: 'from-green-500 to-green-600',
  },
  {
    id: 3,
    name: 'Shopping Ads',
    description: 'Product-focused ads for e-commerce businesses',
    icon: '🛒',
    subcategories: ['Product Shopping', 'Local Inventory', 'Showcase'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 4,
    name: 'Video Ads',
    description: 'Engaging video content on YouTube and across the web',
    icon: '🎬',
    subcategories: ['Skippable In-stream', 'Non-skippable', 'Bumper Ads'],
    color: 'from-red-500 to-red-600',
  },
  {
    id: 5,
    name: 'App Campaigns',
    description: 'Promote your mobile app across Google networks',
    icon: '📱',
    subcategories: ['iOS Apps', 'Android Apps', 'Cross-promotion'],
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 6,
    name: 'Smart Campaigns',
    description: 'Automated campaigns powered by machine learning',
    icon: '🤖',
    subcategories: ['Smart Shopping', 'Smart Display', 'Automation'],
    color: 'from-purple-500 to-purple-600',
  },
]

export default function AdCategories() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section id="categories" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-start gap-4 mb-12">
          <h2 className="section-title">Google Ads Categories</h2>
          <p className="text-muted-foreground">
            Explore different types of Google Ads and learn which works best for your business
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-border/50 bg-card/50 focus:border-purple-500/50 focus:outline-none transition-colors"
          />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No categories found. Try a different search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
