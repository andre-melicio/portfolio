import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'André Melício - Portfolio',
  description: 'Portfolio profissional com projetos do GitHub e posts do LinkedIn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="light">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  )
} 