"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const highlights = [
  "Metodologia ágil e transparente",
  "Comunicação clara em todas as etapas",
  "Soluções personalizadas para cada negócio",
  "Foco em entregar o melhor",
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(248,204,83,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            {/*
            <div className="aspect-square lg:aspect-[4/3] relative rounded-2xl overflow-hidden">
              {/* Abstract tech visual 
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-2 border-dashed border-primary/30 rounded-full flex items-center justify-center">
                  <div className="w-1/2 h-1/2 border-2 border-dashed border-accent/30 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
              

              {/* Grid overlay 
              <div className="absolute inset-0 bg-[linear-gradient(rgba(69,88,108,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(69,88,108,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
            */}

            <div className="aspect-square lg:aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image 
                src="/images/about.png" 
                alt="Sobre nós" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 p-2 rounded-2xl bg-card border border-border/50 backdrop-blur-sm shadow-xl"
            >
              <div className="text-2xl font-bold text-accent">Tecnologia com propósito</div>
              <div className="text-sm text-muted-foreground">Soluções que conectam negócios a pessoas</div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              Sobre Nós
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Mais que tecnologia, um {" "}
              <span className="text-accent">propósito</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 text-pretty">
              A Marthec nasce do sonho de transformar idéias em soluções digitais reais. 
              O nome Marthec é a junção das sílabas iniciais dos pais de Victor, desenvolvedor fundador.
            </p>

            <p className="text-muted-foreground mb-8 text-pretty">
              Nosso propósito é ajudar pequenas e médias empresas a conquistarem sua presença digital, 
              com valores acessíveis, com sites modernos, rápidos e estratégicos, que geram resultados e impulsionam negócios.
            </p>

            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
