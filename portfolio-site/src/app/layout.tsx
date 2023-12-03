import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arthur Riechert',
  description: `Computer science student and aspiring software
                engineer at Georgia Institute of Technology.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        <div className='px-40'>
          {children}
        </div>
      </body>
    </html>
  )
}
