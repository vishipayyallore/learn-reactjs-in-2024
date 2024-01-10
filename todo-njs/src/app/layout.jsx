import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/app/components/shared/Header'
import Footer from './components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo Items - App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div>
          <Header />
          <div className="p-5">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
