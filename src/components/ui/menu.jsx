'use client'

import Link from 'next/link'
import '@/styles/header.css'

export default function Menu({ isOpen, onClose }) {
  return (
    <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <li onClick={onClose}>
        <Link href="/">Home</Link>
      </li>

      {/* Âncoras dentro da Home */}
      <li onClick={onClose}>
        <Link href="/#servicos">Serviços</Link>
      </li>
      <li onClick={onClose}>
        <Link href="/#portifolio">Portfólio</Link>
      </li>
      <li onClick={onClose}>
        <Link href="/#pricing">Preços</Link>
      </li>
      <li onClick={onClose}>
        <Link href="/#contato">Contato</Link>
      </li>
    </ul>
  )
}
