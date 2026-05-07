import type { Metadata, Viewport } from 'next'
import { Heebo, Frank_Ruhl_Libre } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LocaleProvider } from '@/lib/locale-context'
import './globals.css'

const heebo = Heebo({ 
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
});

const frankRuhlLibre = Frank_Ruhl_Libre({ 
  subsets: ['hebrew', 'latin'],
  variable: '--font-frank',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'אייל גוזלן - משרד עורכי דין | Gozlan Law Office',
  description: 'משרד בוטיק ירושלמי המתמחה במקרקעין, עזבונות וירושות ומשפט אזרחי. A Jerusalem-based boutique firm specializing in real estate, estates and inheritances, and civil law.',
  keywords: ['עורך דין', 'מקרקעין', 'ירושה', 'צוואה', 'נדל״ן', 'ירושלים', 'lawyer', 'real estate', 'Jerusalem'],
  authors: [{ name: 'עו״ד אייל גוזלן' }],
  openGraph: {
    title: 'אייל גוזלן - משרד עורכי דין | Gozlan Law Office',
    description: 'משרד בוטיק ירושלמי המתמחה במקרקעין, עזבונות וירושות ומשפט אזרחי.',
    type: 'website',
    locale: 'he_IL',
    alternateLocale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${frankRuhlLibre.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        <LocaleProvider>
          {children}
        </LocaleProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
