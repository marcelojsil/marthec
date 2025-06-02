import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marthec | Site para empresas',
  description: 'Created with v0',
  generator: 'NextJS com Tailwind',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
