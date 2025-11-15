'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdsHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">Ads Wing</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Back to Main
          </Link>
          <Link
            href="#categories"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Categories
          </Link>
          <Link
            href="#learning"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Learn
          </Link>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/50 backdrop-blur">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Back to Main
            </Link>
            <Link
              href="#categories"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Categories
            </Link>
            <Link
              href="#learning"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Learn
            </Link>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
