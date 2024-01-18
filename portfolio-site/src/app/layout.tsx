import ThemeProvider from '@/components/ThemeProvider'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import './globals.css'

/**
 * @author Arthur Riechert
 * @version 1.0.0
 */

export const metadata: Metadata = {
  title: 'Arthur Riechert',
  description: `Computer science student and aspiring software
                engineer at Georgia Institute of Technology.`,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
