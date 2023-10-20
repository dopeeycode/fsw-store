import type { Metadata } from 'next'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { AuthProvider } from '@/providers/auth'
import Footer from '@/components/Footer'

const spaceGroteskFont = SpaceGrotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'FSW Store',
  description: 'FSW Store, garanta produtos com ate 50% de desconto!.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={spaceGroteskFont.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
