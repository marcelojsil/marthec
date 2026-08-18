"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
]

const quickLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#sobre", label: "Sobre" },
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="py-12 lg:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tight inline-block mb-4">
              <span className="text-foreground">Mar</span>
              <span className="text-primary">thec</span>
            </a>
            <p className="text-muted-foreground mb-6">
              Transformamos ideias em soluções digitais de alta performance.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground">Desenvolvimento de Sites</span>
              </li>
              <li>
                <span className="text-muted-foreground">Sistemas Web</span>
              </li>
              <li>
                <span className="text-muted-foreground">SaaS</span>
              </li>
              <li>
                <span className="text-muted-foreground">Integrações</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@marthec.com.br"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  marthec.sistemas@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5500000000000"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (12) 99131-9315
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Victor de Paula © {new Date().getFullYear()} Marthec. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
