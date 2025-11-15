import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import StructuredData from '@/components/structured-data'
import PerformanceMonitoring from './performance-monitoring'

const geistSans = Geist({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-mono',
  preload: false,
  fallback: ['monospace'],
})

// ... existing metadata ...

export const metadata: Metadata = {
  title: {
    default: 'Sophialabs | Design, Innovate, Build Solutions',
    template: '%s | Sophialabs'
  },
  description: 'Sophialabs designs, innovates, and builds transformative solutions. Explore our News aggregation platform and Digital Marketing Ads platform with AI-powered summaries and comprehensive ad insights.',
  generator: 'Next.js',
  keywords: [
    'design',
    'innovation',
    'solutions',
    'news aggregation',
    'digital marketing',
    'google ads',
    'AI summaries',
    'news platform',
    'ads platform',
    'ad strategy',
    'marketing education',
    'news summaries',
    'AI news',
    'digital advertising',
    'search engine marketing',
    'marketing platform',
    'business solutions',
    'tech solutions',
    'innovation platform',
  ],
  authors: [{ name: 'Sophialabs', url: 'https://sophialabs.in' }],
  creator: 'Sophialabs',
  category: 'Technology',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sophialabs.in',
    siteName: 'Sophialabs',
    title: 'Sophialabs | Design, Innovate, Build Solutions',
    description: 'Sophialabs designs, innovates, and builds transformative solutions and experiences to solve real-world problems.',
    images: [
      {
        url: 'https://sophialabs.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sophialabs - Design, Innovate, Build Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sophialabs | Design, Innovate, Build Solutions',
    description: 'Sophialabs designs, innovates, and builds transformative solutions and experiences to solve real-world problems.',
    creator: '@sophialabs',
    images: ['https://sophialabs.in/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://sophialabs.in',
    languages: {
      'en-US': 'https://sophialabs.in',
    },
  },
  verification: {
    // Add your actual verification codes here
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  viewportFit: 'cover',
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://news.sophialabs.in" />
        <link rel="dns-prefetch" href="https://ads.sophialabs.in" />
        <link rel="preconnect" href="https://news.sophialabs.in" />
        <link rel="preconnect" href="https://ads.sophialabs.in" />
        
        <link rel="canonical" href="https://sophialabs.in" />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`font-sans antialiased`}>
        <PerformanceMonitoring />
        {children}
        <Analytics mode="production" />
      </body>
    </html>
  )
}
