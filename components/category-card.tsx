'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface CategoryCardProps {
  category: {
    id: number
    name: string
    description: string
    icon: string
    subcategories: string[]
    color: string
  }
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group rounded-xl border border-border/50 bg-card/50 hover:border-purple-500/50 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-start justify-between text-left hover:bg-secondary/5 transition-colors"
      >
        <div className="flex items-start gap-4 flex-1">
          <div className={`text-3xl flex-shrink-0`}>{category.icon}</div>
          <div>
            <h3 className="font-bold text-lg group-hover:text-purple-500 transition-colors">
              {category.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {category.description}
            </p>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`text-muted-foreground transition-transform flex-shrink-0 mt-1 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expanded Content */}
      {isOpen && (
        <div className="px-6 pb-6 border-t border-border/30">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Subcategories</p>
            {category.subcategories.map((sub, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                <span className="text-sm">{sub}</span>
              </div>
            ))}
          </div>

          {/* Learn Button */}
          <button className="w-full mt-4 px-4 py-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-600 font-medium transition-colors">
            Learn More
          </button>
        </div>
      )}
    </div>
  )
}
