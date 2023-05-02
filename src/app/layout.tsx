import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './AppBar'
import Footer from './footer'
import Providers from '@/utils/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Swaraj Bachu',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" >
      <body className={`${inter.className}`} >
        <Providers>
        <div className='dark:bg-dark  bg-light'>
        <NavBar />
        <div className='p-32 w-full h-full inline-block z-0 xl:p-24 lg:p-16 md:p-12 sm:p-8'>
        {children}
        </div>
        <Footer/>
        </div>
        </Providers>  
        </body>
    </html>
  )
}
