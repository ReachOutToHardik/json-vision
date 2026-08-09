import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://json-vision.vercel.app'),
  title: {
    default: 'JSON Vision - Visualize & Extract Paths',
    template: '%s | JSON Vision',
  },
  description: 'A powerful JSON visualization tool with tree and graph views, path extraction, JSONPath queries, and real-time validation. Built with Next.js.',
  keywords: ['JSON', 'visualizer', 'JSON viewer', 'JSON formatter', 'JSON path', 'JSONPath', 'tree view', 'graph view', 'JSON tool', 'developer tools'],
  authors: [{ name: 'Hardik Joshi', url: 'https://github.com/ReachOutToHardik' }],
  creator: 'Hardik Joshi',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://json-vision.vercel.app',
    title: 'JSON Vision - Visualize & Extract Paths',
    description: 'A powerful JSON visualization tool with tree and graph views, path extraction, and real-time validation',
    siteName: 'JSON Vision',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Vision',
    description: 'Powerful JSON visualization tool with multiple view modes',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'PpU8vgY6NQZUbSqSgbq-rltnDrZNF9gNB3ppEPJgLOc',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "JSON Vision",
    "url": "https://json-vision.vercel.app",
    "description": "A powerful JSON visualization tool with tree and graph views, path extraction, JSONPath queries, and real-time validation.",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "creator": {
      "@type": "Person",
      "name": "Hardik Joshi",
      "url": "https://github.com/ReachOutToHardik"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="PpU8vgY6NQZUbSqSgbq-rltnDrZNF9gNB3ppEPJgLOc" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
