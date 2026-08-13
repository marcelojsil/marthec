"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Server, Cloud, Puzzle, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento de Sites",
    description:
      "Sites modernos, responsivos e otimizados para SEO. Landing pages, sites institucionais e pessoais.",
    features: ["Design Responsivo", "SEO Otimizado", "Alta Performance"],
  },
  {
    icon: Server,
    title: "Sistemas Web",
    description:
      "Sistemas personalizados para gestão empresarial, automação de processos e controle operacional.",
    features: ["Gestão Empresarial", "Automação", "Dashboards"],
  },
  {
    icon: Cloud,
    title: "SaaS",
    description:
      "Desenvolvimento de plataformas SaaS escaláveis e seguras para atender milhares de usuários.",
    features: ["Escalabilidade", "Multi-tenant", "APIs Robustas"],
  },
  {
    icon: Puzzle,
    title: "Integrações",
    description:
      "Conectamos seus sistemas com APIs, ERPs e outras ferramentas.",
    features: ["APIs REST", "Webhooks", "Sincronização"],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(233,93,44,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Soluções completas para sua{" "}
            <span className="text-primary">presença digital</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Oferecemos um portfólio completo de serviços para transformar sua
            visão em realidade digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/80 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {service.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-secondary/50 text-sm text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
