'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function OfferModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Abre o modal quando a página carrega
    setIsOpen(true)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative w-full max-w-lg bg-gradient-to-br from-background to-card rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              <div className="relative p-8 md:p-10 text-center">
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-primary text-accent-foreground font-semibold text-sm mb-6"
                >
                  ⚡ Oferta Especial
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance"
                >
                  50% de Desconto
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-lg text-white/80 mb-8"
                >
                  No desenvolvimento do seu site e/ou serviço
                </motion.p>

                {/* Highlight text */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="bg-accent/20 border border-accent/40 rounded-lg p-4 mb-8"
                >
                  <p className="text-accent font-semibold text-base">
                    Válido apenas para os próximos 10 clientes
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <Button
                    onClick={() => setIsOpen(false)}
                    size="lg"
                    className="w-full bg-primary hover:bg-highlight-hover text-accent-foreground font-semibold h-12 text-base"
                  >
                    Aproveitar Oferta
                  </Button>
                </motion.div>

                {/* Close hint */}
                <p className="text-sm text-white/60 mt-6">
                  Clique fora para fechar
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
