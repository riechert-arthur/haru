import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import './globals.css'

/**
 * @author Arthur Riechert
 * @version 1.0.0
 */

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`overflow-x-hidden bg-slate-800 ${inter.className}`}>
        <NavBar></NavBar>
        <div className='z-10'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
