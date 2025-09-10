import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Darian Tan - Product Manager & Quantitative Analyst',
  description: 'Portfolio of Darian Tan - Product-minded CS student at UCSD and Quantitative Analyst specializing in cross-functional leadership, data-driven decisions, and user-centered product development.',
  keywords: ['product manager', 'quantitative analyst', 'ucsd', 'computer science', 'agile', 'data analysis', 'leadership', 'arima', 'garch'],
  authors: [{ name: 'Darian Tan' }],
  openGraph: {
    title: 'Darian Tan - Product Manager & Quantitative Analyst',
    description: 'Product-minded developer bridging technology and business strategy',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}