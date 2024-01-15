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
        className={`${inter.className} flex flex-col container bg-primaryBg mx-auto py-20 px-10 gap-20 text-textColor xl:px-20 lg:gap-0 max-sm:px-6`}
      >
        {children}
      </body>
    </html>
  )
}
