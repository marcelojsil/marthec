import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Marthec | Transformamos Ideias em Soluções Digitais',
  description: 'Desenvolvimento de sites, sistemas web, SaaS e integrações. Tecnologia de ponta para impulsionar seu negócio.',
  keywords: ['desenvolvimento web', 'sistemas', 'SaaS', 'tecnologia', 'sites', 'integrações'],
  authors: [{ name: 'Marthec' }],
  openGraph: {
    title: 'Marthec | Soluções Digitais',
    description: 'Transformamos ideias em soluções digitais de alta performance.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
