import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from '../components/Header/Head'
import LeftSidebar from '@/components/LeftSidebar/LeftSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dua',
  description:
    'Dua is an app designed for learning, practicing, and reading duas (Islamic supplications). Explore a vast collection of duas for various occasions and purposes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Head />
      <body className={`{inter.className} bg-secondary dark:bg-secondary-dark`}>
        <div className='relative h-[100vh]'>
          <LeftSidebar />
        </div>
      </body>
    </html>
  )
}
