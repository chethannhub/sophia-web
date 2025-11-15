import Script from 'next/script'

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sophialabs',
    alternateName: 'Sophia Labs',
    url: 'https://sophialabs.in',
    logo: 'https://sophialabs.in/logo.png',
    image: 'https://sophialabs.in/og-image.png',
    description: 'Sophialabs designs, innovates, and builds transformative solutions and experiences with two specialized wings: news aggregation and digital marketing education.',
    foundingDate: '2023',
    foundingLocation: {
      '@type': 'Place',
      name: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@sophialabs.in',
      url: 'https://sophialabs.in/contact',
      availableLanguage: 'en',
    },
    sameAs: [
      'https://twitter.com/sophialabs',
      'https://linkedin.com/company/sophialabs',
      'https://github.com/sophialabs',
    ],
    knowsAbout: [
      'News Aggregation',
      'Digital Marketing',
      'AI Summaries',
      'Ad Analytics',
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sophialabs.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://sophialabs.in/#products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'About',
        item: 'https://sophialabs.in/about',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://sophialabs.in/contact',
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://sophialabs.in',
    name: 'Sophialabs',
    description: 'Design, Innovate, Build Transformative Solutions',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sophialabs.in/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const newsProductSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Sophialabs News Wing',
    description: 'AI-powered news aggregation platform with daily articles, summaries, and podcasts from multiple sources.',
    url: 'https://news.sophialabs.in',
    applicationCategory: 'NewsApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    creator: {
      '@type': 'Organization',
      name: 'Sophialabs',
      url: 'https://sophialabs.in',
    },
  }

  const adsProductSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Sophialabs Digital Ads Wing',
    description: 'Comprehensive platform for learning Google Ads, comparing ad strategies, and optimizing digital marketing campaigns.',
    url: 'https://ads.sophialabs.in',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '350',
      bestRating: '5',
      worstRating: '1',
    },
    creator: {
      '@type': 'Organization',
      name: 'Sophialabs',
      url: 'https://sophialabs.in',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Sophialabs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sophialabs is a company that designs, innovates, and builds transformative solutions. We offer two main products: a news aggregation platform and a digital marketing education platform.',
        },
      },
      {
        '@type': 'Question',
        name: 'What products does Sophialabs offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sophialabs offers two main wings: News (AI-powered news aggregation with summaries and podcasts) and Digital Ads (comprehensive guides for Google Ads and ad strategy optimization).',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I access Sophialabs News?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can access Sophialabs News at https://news.sophialabs.in. It features curated daily articles, AI summaries, and podcast versions from multiple sources.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I learn digital marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visit https://ads.sophialabs.in to access our comprehensive digital marketing education platform with Google Ads comparisons, strategy guides, and performance analytics.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the key features of Sophialabs News?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sophialabs News provides daily top articles from multiple sources, AI-powered summaries for quick understanding, podcast versions for audio learners, and multi-source aggregation ensuring comprehensive coverage of important news stories.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does the Digital Ads platform teach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Digital Ads platform offers Google Ads comparisons, ad strategy guides, category breakdowns for different ad types, and performance analytics to help marketers optimize their digital advertising campaigns.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is Sophialabs different from other platforms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sophialabs combines two powerful solutions: AI-driven news aggregation with intelligent summaries and a comprehensive digital marketing education platform, uniquely positioned to help professionals stay informed and excel in digital advertising.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Sophialabs free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, both Sophialabs News and Digital Ads platforms are currently free to access, making quality news aggregation and digital marketing education accessible to everyone.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowToPage',
    mainEntity: [
      {
        '@type': 'HowTo',
        name: 'How to Use Sophialabs News for Daily Updates',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Visit Sophialabs News',
            text: 'Go to https://news.sophialabs.in to access the news aggregation platform',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Browse Daily Articles',
            text: 'View curated daily top articles from multiple trusted sources',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Read AI Summaries',
            text: 'Get quick AI-powered summaries of articles for faster understanding',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Listen to Podcasts',
            text: 'Enjoy podcast versions of news stories for on-the-go consumption',
          },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Learn Digital Marketing with Sophialabs Ads',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Access Digital Ads Platform',
            text: 'Visit https://ads.sophialabs.in to start learning digital marketing',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Explore Ad Strategies',
            text: 'Study comprehensive Google Ads strategy guides and best practices',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Compare Ad Types',
            text: 'Understand differences between search, display, shopping, and video ads',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Analyze Performance',
            text: 'Learn performance analytics to optimize your campaigns',
          },
        ],
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Innovating Solutions for Tomorrow: Sophialabs Platform Overview',
    description: 'Discover how Sophialabs revolutionizes news aggregation and digital marketing education with AI-powered solutions.',
    image: 'https://sophialabs.in/og-image.png',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Sophialabs',
      url: 'https://sophialabs.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sophialabs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sophialabs.in/logo.png',
      },
    },
    mainEntity: {
      '@type': 'Thing',
      name: 'Sophialabs Solutions',
    },
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="news-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsProductSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="ads-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(adsProductSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        strategy="afterInteractive"
      />
    </>
  )
}

export default StructuredData
