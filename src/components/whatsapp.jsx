'use client'

import Image from 'next/image'
import '@/styles/whatsapp.css'

export default function WhatsAppButton() {
  const phone = '551291022315' // DDI + DDD + número
  const message = 'Olá! Vim pelo site da Marthec e gostaria de um orçamento.'

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Falar no WhatsApp"
    >

      <span className="whatsapp-tooltip">Fale conosco</span>

      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={56}
        height={56}
      />
    </a>
  )
}
