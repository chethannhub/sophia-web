import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Sophialabs',
  description: 'Privacy policy for Sophialabs and its wings',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pt-20 pb-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-8">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mt-6 mb-3">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sophialabs ("we", "our", or "us") operates the sophialabs.in website and its associated wings (news.sophialabs.in and ads.sophialabs.in). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-6 mb-3">Information Collection and Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect several different types of information for various purposes to provide and improve our services to you.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Personal Data: Name, email address, phone number</li>
              <li>Usage Data: Browser type, IP address, pages visited, time and date of visits</li>
              <li>Cookies and Tracking: Information to enhance user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-6 mb-3">Use of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sophialabs uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-6 mb-3">Security of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-6 mb-3">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-6 mb-3">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:privacy@sophialabs.in" className="text-primary hover:underline">
                privacy@sophialabs.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
