"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Fisioterapeuta",
    category: "Site Institucional",
    //description: "Plataforma completa de e-commerce com gestão de estoque e integração de pagamentos.",
    image: "/portfolio/fisioterapeuta.png",
    //tech: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Corretor de Imóveis",
    category: "Site Pessoal",
    //description: "ERP personalizado para controle financeiro, vendas e relatórios gerenciais.",
    image: "/portfolio/corretor.png",
    //tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Construtora",
    category: "Site Institucional",
    //description: "Plataforma multi-tenant para restaurantes com app de pedidos e painel admin.",
    image: "/portfolio/construtora.png",
    //tech: ["React Native", "Firebase", "AWS"],
  },
  {
    title: "Empresa de Automação",
    category: "Site Institucional",
    //description: "Portal responsivo com área de alunos, cursos online e sistema de matrícula.",
    image: "/portfolio/automacao.png",
    //tech: ["Next.js", "Supabase", "Vercel"],
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-muted/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(248,204,83,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Projetos que{" "}
            <span className="text-accent">impulsionam resultados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50"
            >
              {/* Image placeholder with gradient */}
              <div className="aspect-video relative overflow-hidden bg-secondary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">

                  <Image
                    src={project.image}
                    fill
                    //className="object-cover group-hover:scale-105 transition-transform duration-300"
                    //className="object-cover scale-95 group-hover:scale-100 transition-transform duration-500 ease-out"
                    className="object-contain scale-95 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  <div className="text-6xl font-bold text-foreground/10">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="p-4 rounded-full bg-primary text-primary-foreground"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.div>
                </div>
              </div>

              <div className="p-6">
                <span className="text-sm text-primary font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/*
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary/50 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
