'use client'

import { useEffect } from 'react'

export default function PerformanceMonitoring() {
  useEffect(() => {
    if ('web-vital' in window) {
      // Monitor Core Web Vitals
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // Log performance metrics to console in development
            if (process.env.NODE_ENV === 'development') {
              console.log('[v0] Performance:', {
                name: entry.name,
                duration: entry.duration,
                entryType: entry.entryType,
              })
            }
          }
        })

        observer.observe({ entryTypes: ['measure', 'navigation', 'resource', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })

        return () => observer.disconnect()
      } catch (e) {
        // Gracefully handle if Performance Observer API is not supported
        console.log('[v0] Performance monitoring not available')
      }
    }
  }, [])

  return null
}
