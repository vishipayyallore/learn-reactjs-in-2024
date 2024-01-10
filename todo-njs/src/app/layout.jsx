import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/nav/Header'

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
          {children}
        </div>
      </body>
    </html>
  )
}
