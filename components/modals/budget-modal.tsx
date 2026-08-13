'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'

interface BudgetModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BudgetModal({ isOpen, onClose }: BudgetModalProps) {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    tipo_projeto: '',
    descricao: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const { error: insertError } = await supabase
        .from('marthec_orcamento')
        .insert([formData])

      if (insertError) throw insertError

      setSubmitted(true)
      setTimeout(() => {
        onClose()
        setSubmitted(false)
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          empresa: '',
          tipo_projeto: '',
          descricao: '',
        })
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar formulário')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              className="relative w-full max-w-2xl bg-background rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Content */}
              {!submitted ? (
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Solicitar Orçamento
                  </h2>
                  <p className="text-foreground/70 mb-8">
                    Preencha o formulário para receber um orçamento personalizado
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nome */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-card text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Seu nome"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-card text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="seu@email.com"
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-card text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(00) 99999-9999"
                      />
                    </div>

                    {/* Empresa */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-card text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Sua empresa"
                      />
                    </div>

                    {/* Tipo de Projeto */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tipo de Projeto *
                      </label>
                      <select
                        name="tipo_projeto"
                        value={formData.tipo_projeto}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-card text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="site">Website</option>
                        <option value="sistema">Sistema Web</option>
                        <option value="saas">SaaS</option>
                        <option value="integracao">Integração</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    {/* Descrição */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Descreva seu projeto *
                      </label>
                      <textarea
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 bg-card text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Conte-nos sobre seu projeto..."
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                        <p className="text-destructive text-sm">{error}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={loading}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12"
                    >
                      {loading ? (
                        <>
                          <Loader className="w-4 h-4 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        'Solicitar Orçamento'
                      )}
                    </Button>
                  </form>
                </div>
              ) : (
                /* Success Message */
                <div className="p-8 md:p-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6"
                  >
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Orçamento Enviado!
                  </h3>
                  <p className="text-foreground/70">
                    Obrigado! Entraremos em contato em breve com seu orçamento personalizado.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
