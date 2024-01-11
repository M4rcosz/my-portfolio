import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marcos Paulo',
  description: 'Portfólio do Front End Developer Marcos Paulo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} bg-primaryBg container mx-auto items-center my-20 text-textColor px-20 `}
      >
        {children}
      </body>
    </html>
  )
}
