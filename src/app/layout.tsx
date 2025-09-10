import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Darko Toni - Full Stack Developer',
  description: 'Portfolio of Darko Toni - Full Stack Developer specializing in React, Next.js, Python, and data analysis.',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'python', 'full-stack'],
  authors: [{ name: 'Darko Toni' }],
  openGraph: {
    title: 'Darko Toni - Full Stack Developer',
    description: 'Portfolio of Darko Toni - Full Stack Developer',
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