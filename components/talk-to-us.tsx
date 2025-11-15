'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function TalkToUs() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for reaching out! We will get back to you soon.')
      setFormData({ email: '', firstName: '', message: '' })
    }, 1000)
  }

  return (
    <section className="py-12 md:py-32 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-stretch">
          
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-blue-600/60 via-purple-500/60 to-pink-500/60 p-6 md:p-12 flex flex-col justify-between border border-white/20 transition-all duration-500 hover:shadow-2xl">
            {/* Decorative dot */}
            <div className="absolute top-6 md:top-8 left-6 md:left-8 w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-400" />
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/30 rounded-xl md:rounded-2xl" />
            
            <div className="relative z-10 space-y-4 md:space-y-6">
              {/* Subtitle with accent line */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-1 h-4 md:h-6 bg-yellow-400 rounded-full" />
                <span className="text-yellow-300 font-semibold text-xs md:text-sm tracking-wider">LET'S INNOVATE TOGETHER</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
                Have Questions or Ideas?
              </h2>

              {/* Description */}
              <p className="text-white/90 text-sm md:text-lg leading-relaxed">
                We're here to help you navigate the world of news and digital marketing. Whether you're looking to stay informed or master ads, our team is ready to assist.
              </p>
            </div>
          </div>

          <div className="rounded-xl md:rounded-2xl border border-border/50 bg-card/50 p-6 md:p-12 flex flex-col justify-center transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" suppressHydrationWarning>
              {/* Email and First Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="form-input-animate w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground text-sm md:text-base focus:outline-none focus:border-primary/50 transition-all duration-300"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                    className="form-input-animate w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground text-sm md:text-base focus:outline-none focus:border-primary/50 transition-all duration-300"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  rows={4}
                  className="form-input-animate w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground text-sm md:text-base focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none"
                  suppressHydrationWarning
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="submit-button-animate w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 md:py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-xl border border-blue-500/30 hover:scale-105 disabled:scale-100 disabled:opacity-70"
                suppressHydrationWarning
              >
                {isSubmitting ? 'Submitting...' : (
                  <>
                    Submit Enquiry
                    <ArrowRight size={16} className="transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
