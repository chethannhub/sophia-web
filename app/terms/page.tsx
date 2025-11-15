import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Sophialabs',
  description: 'Terms of service for Sophialabs and its wings',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-20 pb-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-8">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mt-6 mb-3">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-6 mb-3">Use License</h2>
            <p className="text-muted-foreground leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on Sophialabs' website and wings for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-6 mb-3">Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials on Sophialabs' website and wings are provided on an 'as is' basis. Sophialabs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-6 mb-3">Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall Sophialabs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sophialabs' website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-6 mb-3">Accuracy of Materials</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials appearing on Sophialabs' website and wings could include technical, typographical, or photographic errors. Sophialabs does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-6 mb-3">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:legal@sophialabs.in" className="text-primary hover:underline">
                legal@sophialabs.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
