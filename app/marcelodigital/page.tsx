"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Code2,
  Terminal,
  Code,
  Lightbulb,
  Rocket,
  Users,
  Globe,
  Layout,
  Smartphone,
  Database,
  Cloud,
  Wrench,
  ExternalLink,
  Github,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
} from "lucide-react"
import { FloatingButtons } from "@/components/floating-buttons"

gsap.registerPlugin(ScrollTrigger)

// Data
const techStack = ["Desenvolvimento", "Domínio", "Hospedagem", "Suporte", "SEO"]

const values = [
  {
    icon: Code,
    title: "Site pronto",
    description: "Do desenvolvimento a implementação. Entrego seu site completo, pronto para impressionar seus clientes.",
  },
  {
    icon: Lightbulb,
    title: "Soluções Criativas",
    description: "Busco sempre a melhor abordagem para cada desafio, unindo criatividade e funcionalidade.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Sites rápidos e otimizados que proporcionam a melhor experiência para o usuário.",
  },
  {
    icon: Users,
    title: "Comunicação Clara",
    description: "Mantenho você informado em cada etapa do projeto, sem termos técnicos desnecessários.",
  },
]

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Sites profissionais que apresentam sua empresa, serviços e valores de forma impactante.",
    features: ["Design personalizado", "SEO otimizado", "Carregamento rápido"],
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Páginas focadas em conversão para campanhas, lançamentos e captação de leads.",
    features: ["Alta conversão", "Design persuasivo", "Busca de Leads"],
  },
  {
    icon: Smartphone,
    title: "Sites Responsivos",
    description: "Experiências perfeitas em qualquer dispositivo, do celular ao desktop.",
    features: ["Mobile-first", "Adaptação fluida", "Touch-friendly"],
  },
  {
    icon: Database,
    title: "Sistemas Web",
    description: "Aplicações web completas para automatizar processos e gerenciar seu negócio.",
    features: ["Dashboards", "Relatórios", "Automação"],
  },
  {
    icon: Cloud,
    title: "SaaS",
    description: "Aplicações com modelo de assinatura para escalar seu negócio.",
    features: ["Bots", "Agendador", "Painel Admin"],
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Suporte contínuo para manter seu site sempre atualizado e funcionando.",
    features: ["Atualizações", "Backups", "Monitoramento"],
  },
]

const projects = [
  {
    id: 1,
    title: "Fisioterapeuta",
    category: "Site Institucional",
    description: "Site para clínica de fisioterapia com agendamento online, blog de saúde e área do paciente.",
    image: "/images/fisioterapeuta.png",
    tags: [], 
    gradient: "from-blue-500/20 to-cyan-500/20",
    isDemo: true,
  },
  {
    id: 2,
    title: "Corretor de Imóveis",
    category: "Site Institucional",
    description: "Site para empresa de metal e madeira, com catálogo de produtos, área de orçamento e de projetos.",
    image: "/images/corretor.png",
    tags: [], 
    gradient: "from-green-500/20 to-emerald-500/20",
    isDemo: true,
  },
  {
    id: 3,
    title: "Empresa de Automação",
    category: "Site Institucional",
    description: "Site para empresa de automação residencial e comercial, com portfólio de projetos, blog de tecnologia e área de contato.",
    image: "/images/automacao.png",
    tags: [], 
    gradient: "from-purple-500/20 to-pink-500/20",
    isDemo: true,
  },
  {
    id: 4,
    title: "Construtora",
    category: "Site Institucional",
    description: "Essa própria landing page para apresentar meus serviços, portfólio e contato de forma clara e profissional.",
    image: "/images/construtora.png",
    tags: [], 
    gradient: "from-purple-500/20 to-pink-500/20",
    isDemo: false,
  },
   {
    id: 4,
    title: "Marcelo Silva",
    category: "Landing Page",
    description: "Essa própria landing page para apresentar meus serviços, portfólio e contato de forma clara e profissional.",
    image: "/images/marcelosilva.png",
    tags: [], 
    gradient: "from-purple-500/20 to-pink-500/20",
    isDemo: false,
  },
   {
    id: 4,
    title: "Novos Projetos",
    category: "Landing Page",
    description: "Aqui pode aparecer o seu site e/ou landing page.",
    image: "/images/breve.jpg",
    tags: [], 
    gradient: "from-purple-500/20 to-pink-500/20",
    isDemo: false,
  },
]

const categories = ["Todos", "Sistema Web", "SaaS", "Landing Page", "Site Institucional"]

const contactInfo = [
  { icon: Mail, label: "E-mail", value: "dev.marcelojs@gmail.com", href: "mailto:dev.marcelojs@gmail.com" },
  { icon: Phone, label: "WhatsApp", value: "(12) 99102-2315", href: "https://wa.me/5512991022315" },
  { icon: MapPin, label: "Localização", value: "Pindamonhangaba/SP", href: null },
]

const socialLinks = [
  /*
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  */,
  { icon: Instagram, href: "https://www.instagram.com/marthec.web/", label: "Instagram" },
]

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null)
  const heroButtonsRef = useRef<HTMLDivElement>(null)
  const heroTechRef = useRef<HTMLDivElement>(null)
  const heroIconRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const portfolioRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const footerRef = useRef<HTMLElement>(null)

  const [activeCategory, setActiveCategory] = useState("Todos")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } })

      heroTl
        .fromTo(
          heroRef.current?.querySelector(".hero-badge"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
        .fromTo(
          heroTitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          heroSubtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          heroButtonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          heroTechRef.current?.querySelectorAll("span") || [],
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1 },
          "-=0.2"
        )

      // Floating hero icon animation
      if (heroIconRef.current) {
        gsap.to(heroIconRef.current, {
          y: -20,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })

        gsap.to(heroIconRef.current.querySelector(".blur-circle"), {
          scale: 1.2,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      }

      // About section scroll animation
      if (aboutRef.current) {
        gsap.fromTo(
          aboutRef.current.querySelector(".about-text"),
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )

        gsap.fromTo(
          aboutRef.current.querySelectorAll(".value-card"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: aboutRef.current.querySelector(".values-grid"),
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Services section scroll animation
      if (servicesRef.current) {
        gsap.fromTo(
          servicesRef.current.querySelector(".services-header"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )

        gsap.fromTo(
          servicesRef.current.querySelectorAll(".service-card"),
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: servicesRef.current.querySelector(".services-grid"),
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Portfolio section scroll animation
      if (portfolioRef.current) {
        gsap.fromTo(
          portfolioRef.current.querySelector(".portfolio-header"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: portfolioRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )

        gsap.fromTo(
          portfolioRef.current.querySelectorAll(".project-card"),
          { opacity: 0, y: 40, rotateX: 10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: portfolioRef.current.querySelector(".projects-grid"),
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )

        gsap.fromTo(
          portfolioRef.current.querySelector(".cta-box"),
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: portfolioRef.current.querySelector(".cta-box"),
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Contact section scroll animation
      if (contactRef.current) {
        gsap.fromTo(
          contactRef.current.querySelector(".contact-header"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )

        gsap.fromTo(
          contactRef.current.querySelector(".contact-info"),
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: contactRef.current.querySelector(".contact-grid"),
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )

        gsap.fromTo(
          contactRef.current.querySelector(".contact-form"),
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: contactRef.current.querySelector(".contact-grid"),
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Footer animation
      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 95%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} id="inicio" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">
                MarceloSilva<span className="text-primary">.</span>
              </span>
            </div>
            <div className="hero-badge flex items-center gap-2 text-primary mb-6">
              <Terminal size={20} />
              <span className="text-sm font-mono">Desenvolvedor Web</span>
            </div>

            <h1
              ref={heroTitleRef}
              className="text-4xl md:text-5x1 lg:text-4x1 font-bold text-foreground leading-tight text-balance"
            >
              Criação de{" "}
              <span className="text-primary">sites profissionais </span>
              para empresas que querem crescer
            </h1>

            <p
              ref={heroSubtitleRef}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Olá, sou Marcelo Silva, desenvolvo sites e sistemas web modernos, rápidos e estratégicos para ajudar 
              empresas a crescer no digital. Unimos tecnologia, design e performance para transformar ideias em resultados reais.
            </p>

            <div ref={heroButtonsRef} className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="#portfolio">
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contato">Entre em Contato</Link>
              </Button>
            </div>

            <div ref={heroTechRef} className="mt-16 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div ref={heroIconRef} className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="blur-circle w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
              <Code2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="sobre" className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="about-text">
              <span className="text-primary font-mono text-sm">Sobre mim</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
                Da experiência de empreender ao compromisso de fazer sua empresa crescer
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  lá, sou Marcelo Silva, desenvolvedor de sites e sistemas web apaixonado por tecnologia e por ajudar empresas a crescerem no ambiente digital.
                <p>
                  Por também empreender, entendo os desafios diários de quem administra um negócio: atrair clientes, 
                  gerar confiança e crescer em um mercado cada vez mais digital. É por isso que meu trabalho vai além da criação de sites. 
                  Desenvolvo soluções digitais estratégicas que ajudam empresas a fortalecer sua marca, aumentar sua presença online e transformar 
                  visitantes em oportunidades de negócio.
                </p>
                <p>
                  Cada projeto é construído com foco em performance, experiência do usuário e crescimento, porque acredito que a 
                  tecnologia deve ser uma aliada no sucesso de cada empresa. Em breve, formalizar meu trabalho através da <strong className="text-foreground">Marthec</strong>,
                  minha futura empresa de desenvolvimento.
                </p>
                </p>
              </div>
            </div>

            <div className="values-grid grid sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="value-card p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <value.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="servicos" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="services-header text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-mono text-sm">Serviços</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Soluções completas para sua presença digital
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ofereço serviços de desenvolvimento web personalizados para atender às necessidades do seu negócio.
            </p>
          </div>

          <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="service-card group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef}  className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div id="portfolio" className="portfolio-header text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-mono text-sm">Portfólio</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Projetos em destaque
            </h2>
            <p className="mt-4 text-muted-foreground">
              Confira alguns projetos conceituais que demonstram minhas habilidades e o tipo de trabalho que posso entregar.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6  ">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card group relative overflow-hidden rounded-xl bg-background border border-border hover:border-primary/50 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-100 h-full object-cover transition-transform duration-500 group-hover:scale-100"
                  />

                  {project.isDemo && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs text-muted-foreground">
                      <Sparkles size={12} className="text-primary" />
                      Conceitual
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-xs text-primary font-medium">{project.category}</span>
                  <h3 className="mt-1 font-semibold text-foreground text-lg">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-secondary text-xs text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3">
                    <Button variant="outline" size="sm" disabled className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Site
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-box mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Seu projeto pode ser o próximo!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Estou em busca de novos projetos para construir meu portfólio.
              Condições especiais para os primeiros clientes.
            </p>
            <Button asChild>
              <Link href="#contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef}  className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div id="contato" className="contact-header text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-mono text-sm">Contato</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Entre em contato para discutirmos como posso ajudar a transformar sua ideia em realidade.
            </p>
          </div>

          <div className="contact-grid grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="contact-info">
              <h3 className="text-xl font-semibold text-foreground mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <Link href={info.href} className="text-foreground font-medium hover:text-primary transition-colors">
                          {info.value}
                        </Link>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h4 className="text-sm text-muted-foreground mb-4">Redes Sociais</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-10 p-4 rounded-lg bg-card border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Em breve: Marthec</strong>
                  <br />
                  Minha futura empresa de desenvolvimento web.
                  Enquanto isso, atendo como pessoa física com a mesma qualidade e dedicação.
                </p>
              </div>
            </div>

            <div className="contact-form bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Envie uma Mensagem</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Mensagem Enviada!</h4>
                  <p className="text-muted-foreground">Obrigado pelo contato. Responderei em breve!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Conte-me sobre seu projeto..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer 
      <footer ref={footerRef} className="py-12 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">
                MarceloSilva<span className="text-primary">.</span>
              </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6">
              {["Início", "Sobre", "Serviços", "Portfólio", "Contato"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <p className="text-sm text-muted-foreground">
              Marthec Web © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              Em breve: <strong className="text-foreground">Marthec</strong> — Desenvolvimento Web Profissional
            </p>
          </div>
        </div>
      </footer>*/}

      <FloatingButtons />

    </main>
  )
}
