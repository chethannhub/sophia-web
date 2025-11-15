'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function ContactForm() {
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
  )
}
