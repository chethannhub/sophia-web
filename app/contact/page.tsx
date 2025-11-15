'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Metadata } from 'next'

export const metadata = {
  title: 'Contact Sophialabs | Get in Touch',
  description: 'Get in touch with Sophialabs. Contact us for inquiries about our news aggregation and digital marketing platforms.',
  keywords: ['contact', 'Sophialabs', 'support', 'get in touch'],
  openGraph: {
    title: 'Contact Sophialabs',
    description: 'Get in touch with the Sophialabs team for questions and inquiries.',
    url: 'https://sophialabs.in/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://sophialabs.in/contact',
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <Link href="/">
              <Button variant="outline" className="mb-8">
                ← Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <a href="mailto:hello@sophialabs.in" className="flex items-start gap-4 group hover:translate-x-1 transition-transform">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-muted-foreground">hello@sophialabs.in</p>
                    </div>
                  </a>

                  <a href="tel:+911234567890" className="flex items-start gap-4 group hover:translate-x-1 transition-transform">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Phone</p>
                      <p className="text-muted-foreground">+91 123 456 7890</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">Address</p>
                      <p className="text-muted-foreground">India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="https://news.sophialabs.in" className="block text-primary hover:underline">
                    Visit News Wing
                  </Link>
                  <Link href="https://ads.sophialabs.in" className="block text-primary hover:underline">
                    Visit Ads Wing
                  </Link>
                  <Link href="/privacy" className="block text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-xl border border-border/50 bg-card/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border/50 bg-background focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border/50 bg-background focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border/50 bg-background focus:border-primary/50 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
