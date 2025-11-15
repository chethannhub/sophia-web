'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const learningModules = [
  {
    id: 1,
    title: 'Google Ads Fundamentals',
    description: 'Learn the basics of Google Ads, account structure, and best practices',
    modules: ['Account Setup', 'Campaign Structure', 'Budgeting Strategies', 'Performance Tracking'],
    difficulty: 'Beginner',
    duration: '2 hours',
  },
  {
    id: 2,
    title: 'Advanced Keyword Strategy',
    description: 'Master keyword research, bidding strategies, and optimization techniques',
    modules: ['Keyword Research', 'Match Types', 'Bid Strategies', 'Quality Score'],
    difficulty: 'Intermediate',
    duration: '3 hours',
  },
  {
    id: 3,
    title: 'Conversion Optimization',
    description: 'Improve your conversion rates with landing page optimization and tracking',
    modules: ['Landing Page Optimization', 'Conversion Tracking', 'Attribution Modeling', 'A/B Testing'],
    difficulty: 'Intermediate',
    duration: '2.5 hours',
  },
  {
    id: 4,
    title: 'Expert Performance Tactics',
    description: 'Learn advanced strategies used by top advertisers to maximize ROI',
    modules: ['Smart Bidding', 'Audience Segmentation', 'Seasonality Planning', 'Multi-channel Attribution'],
    difficulty: 'Advanced',
    duration: '4 hours',
  },
]

const difficultyColors = {
  Beginner: 'bg-green-500/20 text-green-700 dark:text-green-400',
  Intermediate: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400',
  Advanced: 'bg-red-500/20 text-red-700 dark:text-red-400',
}

export default function LearningPath() {
  return (
    <section id="learning" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="section-title">Learning Path</h2>
          <p className="section-subtitle max-w-2xl">
            Complete our structured learning modules to master Google Ads from beginner to advanced level
          </p>
        </div>

        {/* Modules */}
        <div className="grid md:grid-cols-2 gap-6">
          {learningModules.map((module) => (
            <div
              key={module.id}
              className="group rounded-xl border border-border/50 bg-card/50 hover:border-purple-500/50 overflow-hidden hover:shadow-lg transition-all duration-300 p-6 flex flex-col"
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg group-hover:text-purple-500 transition-colors">
                    {module.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      difficultyColors[module.difficulty as keyof typeof difficultyColors]
                    }`}
                  >
                    {module.difficulty}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{module.description}</p>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 pb-4 border-b border-border/30">
                <span className="font-medium">Duration:</span>
                <span>{module.duration}</span>
              </div>

              {/* Modules */}
              <div className="space-y-2 flex-grow">
                {module.modules.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
                Start Learning
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
