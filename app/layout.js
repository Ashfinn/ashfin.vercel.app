import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Obidur Rahman',
  description: 'A mathematician who fell in love with code, data, and building things that matter.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}