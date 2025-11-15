import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-md text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        <div className="space-y-3">
          <Link href="/">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </Link>
          <Link href="https://news.sophialabs.in">
            <Button variant="outline" className="w-full">
              Visit News Wing
            </Button>
          </Link>
          <Link href="https://ads.sophialabs.in">
            <Button variant="outline" className="w-full">
              Visit Ads Wing
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
