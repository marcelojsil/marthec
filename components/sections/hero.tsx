"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Zap, Globe, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

const floatingElements = [
  { icon: Code2, delay: 0, x: "10%", y: "20%" },
  { icon: Zap, delay: 0.2, x: "85%", y: "15%" },
  { icon: Globe, delay: 0.4, x: "75%", y: "70%" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-accent/20 blur-[120px]"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(69,88,108,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(69,88,108,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating icons */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, -20, 0],
          }}
          transition={{
            delay: el.delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute hidden lg:block"
          style={{ left: el.x, top: el.y }}
        >
          <div className="p-4 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50">
            <el.icon className="w-8 h-8 text-primary" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1">
            
                          <Terminal size={14} className="text-primary"/>
            
                          <span className="text-sm font-medium text-primary">
                            Desenvolvedor Web
                          </span>
            
                        </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-5xl lg:text-10xl font-bold leading-tight mb-6 text-balance"
          >
            Criação de {" "}
            <span className="text-primary">sites profissionais</span> para empresas que{" "}
            <span className="text-accent">querem crescer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty"
          >
            Soluções digitais sob medida para pequenas empresas, MEI e prestadores de serviço, focadas em presença online e geração de resultados
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-cta-hover text-primary-foreground font-semibold px-8 h-14 text-lg group"
            >
              <a href="#contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border bg-transparent hover:bg-secondary/50 text-foreground font-semibold px-8 h-14 text-lg"
            >
              <a href="#portfolio">Ver Projetos</a>
            </Button>
          </motion.div>

          {/* Stats */}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-evenly gap-8"
          >
            {[
              { value: "Desenvolvimento", label: "completo" },
              { value: "Hospedagem", label: "total" },
              { value: "SEO", label: "avançado" },
              { value: "Suporte", label: "24x7" },
            ].map((stat, index) => (
    <div key={index} className="flex flex-col items-center text-center">
      <div className="text-3xl md:text-2xl font-bold text-accent mb-1">
        {stat.value}
      </div>
      <div className="text-sm text-muted-foreground">
        {stat.label}
      </div>
    </div>
  ))}
</motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
