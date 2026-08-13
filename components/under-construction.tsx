"use client"

import { motion } from "framer-motion"
import { Construction, Mail, Instagram, Linkedin, MessageCircle } from "lucide-react"

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5512991022315"

export function UnderConstruction() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4">

      {/* Background image */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/fundo_site.png)" }}
        aria-hidden="true"
      />

      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden="true"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          
          <div className="p-5 rounded-3xl bg-primary/10 border border-primary/20">
            <Construction className="w-12 h-12 text-primary" />
          </div>

 
        </motion.div>

        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight inline-block mb-6"
        >
          <span className="text-foreground">Marthec Web</span>
          {/*an className="text-primary">Web</span>*/}
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold leading-tight mb-6 gradient-tex"
        >
          Estamos em <span className="gradient-text">construção</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto text-pretty"
        >
          Estamos preparando algo incrível para você. Nosso novo site estará
          disponível em breve. Enquanto isso, entre em contato conosco pelo whatsapp
          ou pelo site pessoal 
          <a
            href={`http://192.168.0.15:3000/marcelodigital`}
            //target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg leading-tight text-foreground hover:text-primary font-semibold"
          >www.marthec.com.br/marcelodigital</a>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
        
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg whatsapp"
          >
            <MessageCircle className="w-4 h-4" />Falar no WhatsApp</a>

        </motion.div>

        
      </div>
    </main>
  )
}
