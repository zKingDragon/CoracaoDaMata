import type { Metadata } from 'next'
import { Press_Start_2P, VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'

const pressStart = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start'
})

const vt323 = VT323({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323'
})

export const metadata: Metadata = {
  title: 'Coração da Mata - Aventura Retrô na Selva',
  description: 'Explore a floresta pixelada em uma jornada épica no estilo 8-bit',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo-game.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
      },
    ],
    apple: '/logo-game.png',
    shortcut: '/logo-game.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${pressStart.variable} ${vt323.variable} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
