// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'newcode wen - 个人博客'
export const SITE_DESCRIPTION = '记录技术学习、编程心得与日常生活'

export const GITHUB_URL = 'https://github.com/newcodewen'
export const SITE_URL = 'http://localhost:4321/'

export const SITE_METADATA = {
  title: {
    default: 'newcode wen - 个人博客'
  },
  description:
    '记录技术学习、编程心得与日常生活',
  keywords: [
    '博客',
    '技术',
    '编程',
    'Astro',
    'React',
    'Rust',
    'Kotlin',
    '前端',
    '个人博客'
  ],
  authors: [{ name: 'newcode wen', url: SITE_URL }],
  creator: 'newcode wen',
  publisher: 'newcode wen',
  robots: {
    index: true,
    follow: true
  },
  language: 'zh-CN',
  locale: 'zh_CN',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'newcode wen',
    title: 'newcode wen - 个人博客',
    description: '记录技术学习、编程心得与日常生活',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'newcode wen - 个人博客',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@newcodewen',
    title: 'newcode wen - 个人博客',
    description: '记录技术学习、编程心得与日常生活',
    images: ['/images/og-image.png']
  },
  verification: {
    google: '',
    yandex: '',
    bing: ''
  }
}

// Social media links
export const SOCIAL_LINKS = {
  github: GITHUB_URL,
}

// Company information for structured data
export const COMPANY_INFO = {
  name: 'newcode wen',
  legalName: 'newcode wen',
  url: SITE_URL,
  logo: `/images/site-logo.png`,
  foundingDate: '2025',
  address: undefined,
  contactPoint: undefined,
  sameAs: [GITHUB_URL],
}
