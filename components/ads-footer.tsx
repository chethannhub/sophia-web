import Link from 'next/link'
import { Mail, Twitter, Linkedin } from 'lucide-react'

export default function AdsFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-bold">Ads Wing</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Master digital advertising with expert-curated educational resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Back to Sophialabs
              </Link>
              <Link href="/ads" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                All Categories
              </Link>
              <Link href="#learning" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Learning Path
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg border border-border/50 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg border border-border/50 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:ads@sophialabs.in" className="p-2 rounded-lg border border-border/50 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sophialabs Ads Wing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
