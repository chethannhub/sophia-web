export const navigationLinks = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'News Wing', href: 'https://news.sophialabs.in' },
    { label: 'Ads Wing', href: 'https://ads.sophialabs.in' },
  ],
  news: [
    { label: 'All Stories', href: '/news' },
    { label: 'Technology', href: '/news/category/technology' },
    { label: 'Business', href: '/news/category/business' },
    { label: 'Science', href: '/news/category/science' },
    { label: 'Health', href: '/news/category/health' },
  ],
  ads: [
    { label: 'Overview', href: '/ads' },
    { label: 'Search Ads', href: '/ads/category/search-ads' },
    { label: 'Display Ads', href: '/ads/category/display-ads' },
    { label: 'Shopping Ads', href: '/ads/category/shopping-ads' },
    { label: 'Video Ads', href: '/ads/category/video-ads' },
    { label: 'Learning Path', href: '/ads/learning' },
  ],
  social: [
    { label: 'Twitter', href: 'https://twitter.com/sophialabs', icon: 'twitter' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/sophialabs', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/sophialabs', icon: 'github' },
    { label: 'Email', href: 'mailto:hello@sophialabs.in', icon: 'mail' },
  ],
  footer: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Sitemap', href: '/sitemap' },
    { label: 'Contact', href: '/contact' },
  ],
}

export const routes = {
  home: '/',
  news: '/news',
  newsCategory: (category: string) => `/news/category/${category}`,
  ads: '/ads',
  adsCategory: (category: string) => `/ads/category/${category}`,
  adsLearning: '/ads/learning',
  privacy: '/privacy',
  terms: '/terms',
}
