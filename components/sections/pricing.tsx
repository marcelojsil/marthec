'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PricingPlanProps {
  isOpen: boolean
  onOpenBudget: () => void
}

export function Pricing({ onOpenBudget }: PricingPlanProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const plans = [
    {
      name: 'Iniciante',
      description: 'Perfeito para pequenos negócios',
      price: 'A partir de R$ 3.500',
      features: [
        'Website responsivo',
        'Design moderno',
        'SEO otimizado',
        'Integração com email',
        'Analytics básico',
        'Suporte por 3 meses',
      ],
      highlight: false,
    },
    {
      name: 'Profissional',
      description: 'Para empresas em crescimento',
      price: 'A partir de R$ 8.500',
      features: [
        'Tudo do Iniciante',
        'Sistema de gerenciamento',
        'Integração com CRM',
        'Painel de controle',
        'Formulários avançados',
        'Suporte por 6 meses',
        'Treinamento de uso',
        'Atualizações mensais',
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      description: 'Soluções personalizadas',
      price: 'Customizado',
      features: [
        'Tudo do Profissional',
        'API customizada',
        'Integrações múltiplas',
        'Dashboard executivo',
        'Suporte 24/7',
        'Suporte contínuo',
        'Consultoria estratégica',
        'Manutenção contínua',
      ],
      highlight: false,
    },
  ]

  return (
    <section id="planos" className="py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-6"
          >
            <span className="text-primary font-semibold text-sm">NOSSOS PLANOS</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Soluções para Cada Necessidade
          </h2>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Escolha o plano ideal para sua empresa e comece sua transformação digital
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-br from-primary via-primary to-cta-hover ring-2 ring-primary/50 shadow-2xl md:scale-105'
                  : 'bg-card border border-border hover:border-primary/30'
              }`}
            >
              {/* Highlight badge */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />
              )}

              <div className="p-8 lg:p-10">
                {plan.highlight && (
                  <div className="inline-flex px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-4">
                    MAIS POPULAR
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/80' : 'text-foreground/70'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className={`text-3xl font-bold mb-8 ${plan.highlight ? 'text-white' : 'text-primary'}`}>
                  {plan.price}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 * featureIndex }}
                      className="flex items-start gap-3"
                    >
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-accent' : 'text-primary'}`} />
                      <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-foreground/80'}`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={onOpenBudget}
                  size="lg"
                  className={`w-full h-12 font-semibold ${
                    plan.highlight
                      ? 'bg-accent hover:bg-highlight-hover text-accent-foreground'
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-card via-card to-secondary rounded-2xl border border-border p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Podemos criar um plano totalmente customizado de acordo com suas necessidades específicas
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={onOpenBudget}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-8"
            >
              Conversar com Especialista
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-card/50 text-foreground font-semibold h-12 px-8"
            >
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
