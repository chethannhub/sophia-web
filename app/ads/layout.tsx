import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Ads Wing | Sophialabs - Google Ads Education & Comparisons',
  description: 'Master digital advertising with comprehensive guides on Google Ads. Compare ad types by category, learn best practices, and optimize your campaigns.',
  keywords: ['google ads', 'digital marketing', 'ad comparison', 'ads strategy', 'PPC advertising'],
  openGraph: {
    title: 'Digital Ads Wing | Sophialabs',
    description: 'Educational resources and Google Ads comparisons by category',
    url: 'https://ads.sophialabs.in',
    type: 'website',
    images: [
      {
        url: '/og-image-ads.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function AdsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
