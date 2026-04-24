import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Birane SEYE | Data Engineer & BI Consultant',
  description: 'Data Engineer spécialisé dans la conception de pipelines de données robustes, la qualité des données et les solutions BI. Transformez vos données brutes en systèmes fiables et exploitables.',
  keywords: ['Data Engineer', 'BI Consultant', 'ETL', 'Data Pipeline', 'Power BI', 'Azure', 'Spark', 'Python'],
  authors: [{ name: 'Birane SEYE' }],
  openGraph: {
    title: 'Birane SEYE | Data Engineer & BI Consultant',
    description: 'Je transforme des données brutes en systèmes fiables et exploitables',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0d1117',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
