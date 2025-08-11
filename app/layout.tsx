import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GlobalEffects } from '@/components/global-effects'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Bodega – Cocktail Bar & Kitchen, Kanpur | Euro-Asian Cuisine & Cocktails',
  description: 'Bodega Kanpur: Elegant cocktail lounge and kitchen. Enjoy Euro-Asian cuisine, creative cocktails & luxe ambiance in Swaroop Nagar. Reserve your table today!',
  keywords: 'Bodega Kanpur, cocktail bar Kanpur, Euro-Asian cuisine, fine dining Kanpur, cocktail lounge, Swaroop Nagar restaurant',
  openGraph: {
    title: 'Bodega – Cocktail Bar & Kitchen, Kanpur',
    description: 'Experience elegant Euro-Asian dining & cocktails in Kanpur\'s finest lounge',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Bodega',
    url: 'https://bodega-kanpur.com',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Bodega – Cocktail Bar & Kitchen, Kanpur',
    description: 'Experience elegant Euro-Asian dining & cocktails in Kanpur\'s finest lounge',
    creator: '@bodega_kanpur',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#ffffff',
  manifest: '/manifest.json'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {/* Preconnect to image hosts to speed up first paint */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Header />
        <GlobalEffects />
        <main role="main" id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
