"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, Shield, Cpu, Users, Clock, HeartHandshake } from "lucide-react"

const differentials = [
  {
    icon: Rocket,
    title: "Alta Performance",
    description:
      "Sites e sistemas otimizados para carregamento ultrarrápido e melhor experiência do usuário.",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description:
      "Proteção contra ameaças com criptografia, backups automáticos e boas práticas de segurança.",
  },
  {
    icon: Cpu,
    title: "Tecnologia de Ponta",
    description:
      "Utilizamos as tecnologias mais modernas do mercado para garantir escalabilidade e inovação.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description:
      "Profissionais experientes e dedicados em cada etapa do seu projeto.",
  },
  {
    icon: Clock,
    title: "Entrega no Prazo",
    description:
      "Compromisso com cronogramas e entregas pontuais, mantendo a qualidade.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Contínuo",
    description:
      "Acompanhamento pós-lançamento com suporte técnico e manutenção preventiva.",
  },
]

export function Differentials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,93,44,0.03),transparent_70%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Diferenciais que fazem a{" "}
            <span className="text-primary">diferença</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Nosso compromisso é entregar soluções que superam expectativas e
            geram resultados reais.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-card/30 border border-border/50 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <item.icon className="w-8 h-8" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
