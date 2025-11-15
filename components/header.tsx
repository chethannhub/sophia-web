'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Newspaper, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="md:hidden flex items-center gap-2 group transition-transform duration-300 hover:scale-105">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:shadow-lg">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-lg">Sophialabs</span>
        </Link>

        {/* Logo and Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:shadow-lg">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-lg">Sophialabs</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="/#products"
              scroll={true}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Products
            </Link>
          </div>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="https://news.sophialabs.in" className="inline-block">
            <Button 
              size="sm"
              variant="outline"
              className="bg-transparent border border-blue-500/50 hover:bg-blue-500/10 text-blue-600 hover:text-blue-700 rounded-full px-3 py-2 flex items-center gap-2 transition-all duration-300 hover:shadow-md hover:border-blue-500/70 active:scale-95"
            >
              <Newspaper size={16} />
              <span className="hidden sm:inline">News</span>
            </Button>
          </Link>
          <Link href="https://ads.sophialabs.in" className="inline-block">
            <Button 
              size="sm"
              variant="outline"
              className="bg-transparent border border-purple-500/50 hover:bg-purple-500/10 text-purple-600 hover:text-purple-700 rounded-full px-3 py-2 flex items-center gap-2 transition-all duration-300 hover:shadow-md hover:border-purple-500/70 active:scale-95"
            >
              <TrendingUp size={16} />
              <span className="hidden sm:inline">Digital Ads</span>
            </Button>
          </Link>
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
              href="/about"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/#products"
              scroll={true}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link href="https://news.sophialabs.in" className="block">
              <Button 
                size="sm"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center gap-2"
              >
                <Newspaper size={16} />
                News Product
              </Button>
            </Link>
            <Link href="https://ads.sophialabs.in" className="block">
              <Button 
                size="sm"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center gap-2"
              >
                <TrendingUp size={16} />
                Digital Ads Product
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
