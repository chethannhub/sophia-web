'use client'

import Image from 'next/image'
import { Clock, Volume2, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface ArticleCardProps {
  article: {
    id: number
    title: string
    summary: string
    category: string
    source: string
    timestamp: string
    image: string
    hasPodcast: boolean
    readTime: string
  }
  featured?: boolean
}

export default function ArticleCard({ article, featured }: ArticleCardProps) {
  const [showSummary, setShowSummary] = useState(false)

  if (featured) {
    return (
      <div className="group h-96 md:h-96 overflow-hidden bg-card/50">
        <div className="relative w-full h-full flex items-end">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            priority={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 630'%3E%3Crect fill='%23f0f0f0' width='1200' height='630'/%3E%3C/svg%3E"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 p-8 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                {article.category}
              </span>
              <span className="text-xs text-muted-foreground">{article.timestamp}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 line-clamp-3 text-balance">
              {article.title}
            </h3>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                {article.source}
              </a>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock size={16} />
                {article.readTime}
              </div>
              {article.hasPodcast && (
                <button className="ml-auto p-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors">
                  <Volume2 size={18} className="text-primary" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="group rounded-xl border border-border/50 bg-card/50 hover:border-accent/50 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-40 md:h-48 overflow-hidden bg-muted">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 320'%3E%3Crect fill='%23e5e5e5' width='400' height='320'/%3E%3C/svg%3E"
          quality={75}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-grow">
        {/* Category & Time */}
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
            {article.category}
          </span>
          <span className="text-xs text-muted-foreground">{article.timestamp}</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        {/* Summary Toggle */}
        {showSummary && (
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {article.summary}
          </p>
        )}

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-border/30 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock size={14} />
            <span>{article.readTime}</span>
          </div>

          <div className="flex gap-2">
            {article.hasPodcast && (
              <button
                className="p-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                title="Listen to podcast"
                aria-label="Listen to podcast"
              >
                <Volume2 size={16} />
              </button>
            )}
            <Button
              size="sm"
              variant="ghost"
              className="gap-1"
              onClick={() => setShowSummary(!showSummary)}
            >
              <ExternalLink size={14} />
              Read
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
