import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Muying Portfolio',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased min-h-screen">
        <main className="flex-auto min-w-0 flex flex-col">
        <header className="w-full relative py-8 md:py-24 shadow-md overflow-hidden">
  {/* Background image with overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://kinorotterdam.nl/content/uploads/2023/10/1035364-giveaway-win-free-tickets-see-studio-ghiblis-castle-sky-1798x640.jpg" 
      alt="Abstract green background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 opacity-70"></div>
  </div>
  
  {/* Content container */}
  <div className="container relative z-10 mx-auto px-4 text-center">
    <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white drop-shadow-lg">
      Welcome to Muying Personal Website
    </h1>
    <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto drop-shadow-md">
      Passionate about creating amazing things
    </p>
  </div>
</header>
          <Navbar />
          <div className="mx-auto w-full px-16">
          {children}
          <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
