import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import config from "@/config";

import Header from '@/components/Header'
import Footer from '@/components/Footer'
//import WhatsAppButton from '@/components/whatsapp.jsx'
import BackToTop from "../components/BackTop"
import RobotButton from "../components/Robot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.marthec.com.br"),
  title: { default: config.title, template: "%s | Marthec" },
  description: config.description,
  keywords: [
    "criação de sites",
    "desenvolvimento de sites",
    "agência digital",
    "sites profissionais",
    "Pindamonhangaba",
    "Vale do Paraíba"
  ],
  robots: {
    index: true,
    follow: true
  },

  /* Open Graph (Facebook, WhatsApp, LinkedIn) */
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.marthec.com.br",
    siteName: "Marthec",
    title:
      "Criação de sites profissionais para empresas que querem crescer",
    description:
      "Sites profissionais para pequenas empresas, MEI e prestadores de serviço.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Marthec Agência Digital"
      }
    ]
  },

  /* Twitter card */
  twitter: {
    card: "summary_large_image",
    title:
      "Criação de sites profissionais para empresas que querem crescer",
    description:
      "Agência digital especializada em criação de sites profissionais.",
    images: ["/logo.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <RobotButton />
        {/*<WhatsAppButton />*/}
        <BackToTop />
        
{/* Schema.org - LocalBusiness / WebDesignAgency */}
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebDesignAgency",
      name: "Marthec",
      url: "https://www.marthec.com.br",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pindamonhangaba",
        addressRegion: "SP",
        addressCountry: "BR"
      },
      areaServed: {
        "@type": "Country",
        name: "Brasil"
      }
    })
  }}
/>

      </body>
    </html>
  );
}
