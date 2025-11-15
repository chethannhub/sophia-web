'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NewsHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">News Wing</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Back to Main
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground/70 hover:text-foreground"
          >
            <Search size={20} />
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
          </div>
        </div>
      )}
    </header>
  )
}
