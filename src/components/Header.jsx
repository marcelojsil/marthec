'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from './ui/Menu'
import '@/styles/header.css'

import Logo from '../image/logo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <Link href="/" className="logo">
          <Image
            src={Logo}
            alt='Marthec'
            width={160}
            height={50}
            priority
          />
        </Link>

        {/* BOTÃO MENU MOBILE */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* MENU */}
        <Menu isOpen={menuOpen}  onClose={() => setMenuOpen(false)}/>

      </div>
    </header>
  )
}
