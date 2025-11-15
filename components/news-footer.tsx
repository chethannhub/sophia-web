import Link from 'next/link'
import { Mail, Twitter, Linkedin } from 'lucide-react'

export default function NewsFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="font-bold">News Wing</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Curated daily top news with AI summaries and podcast editions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Back to Sophialabs
              </Link>
              <Link href="/news" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                All Stories
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                Subscribe
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg border border-border/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg border border-border/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:news@sophialabs.in" className="p-2 rounded-lg border border-border/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sophialabs News Wing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
