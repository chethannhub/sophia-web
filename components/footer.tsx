import Link from 'next/link'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-lg">Sophialabs</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Designing, innovating, and building solutions to real-world problems.
            </p>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Products</h3>
            <Link href="https://news.sophialabs.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              News Product
            </Link>
            <Link href="https://ads.sophialabs.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Digital Ads Product
            </Link>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Connect</h3>
            <div className="flex gap-3">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
              <Link
                href="mailto:hello@sophialabs.in"
                className="p-2 rounded-lg border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Sophialabs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
