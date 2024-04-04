import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from '../components/Header/Head'
import Navbar from '@/components/Navbar/Navbar'
import LeftSidebar from '@/components/LeftSidebar/LeftSidebar'
import Setting from '@/components/Setting/Setting'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dua & Ruqyah | All Duas Collection',
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
      <body
        className={`${inter.className} bg-secondary dark:bg-secondary-dark text-lettering`}
      >
        <main className='relative h-[100vh] flex gap-6 p-6 max-xl:p-0'>
          <LeftSidebar />
          <div className='w-full ml-7 max-xl:m-0'>
            <Navbar />
            <div className=' flex justify-between pt-7'>
              {children}
              <Setting />
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
