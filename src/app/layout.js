import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Links from '@/components/navbar/links/Links'
import ClientSideProviderTest from '@/components/ClientSideProviderTest'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <ClientSideProviderTest>
        <div className="container">
      <Navbar />
      {children}
      <Footer />
      </div>
      </ClientSideProviderTest>
      </body>
      
    </html>
  )
}