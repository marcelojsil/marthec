"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import {
  Code,
  Smartphone,
  Search,
  Zap,
  Users,
  Star,
  CheckCircle,
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Globe,
  ShoppingCart,
  Palette,
  BarChart3,
  MessageCircle,
  Clock,
  Award,
  Target,
  Rocket,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import type React from "react"
import Post from "next/server"

export default function DevSitesPindaLanding() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    tipoNegocio: "",
    mensagem: "",
  })
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Seu contato foi enviado com sucesso. Entraremos em contato em breve!",
        })
        setFormData({
          nome: "",
          telefone: "",
          email: "",
          tipoNegocio: "",
          mensagem: "",
        })
      } else {
        toast({
          title: "Erro",
          description: result.error || "Erro ao enviar contato. Tente novamente.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro de conexão. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="top-0 z-40 w-full bg-[#1a2730]">
        <div className="container flex h-26 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            {/*
            <div className="w-8 h-8 bg-[#e95d2c] rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            */}
            <Image
              src="/logo-semfundo.png"
              width={200}
              height={150}
              alt="Desenvolvimento de sites"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#inicio" className="text-sm font-medium text-[#b0cee2] hover:text-[#fff] transition-colors">
              Início
            </Link>
            <Link href="#servicos" className="text-sm font-medium text-[#b0cee2] hover:text-[#fff] transition-colors">
              Serviços
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-[#b0cee2] hover:text-[#fff] transition-colors">
              Portfólio
            </Link>
            <Link href="#precos" className="text-sm font-medium text-[#b0cee2] hover:text-[#fff] transition-colors">
              Preços
            </Link>
            <Link href="#contato" className="text-sm font-medium text-[#b0cee2] hover:text-[#fff] transition-colors">
              Contato
            </Link>
          </nav>
            {/*
            <Link href="#contato">
              <Button className="bg-gradient-to-r from-[#e95d2c] to-[#ff8a5b] hover:from-[#d14f26] hover:to-[#f57f4c]">
              <Phone />
              Fale Conosco
              </Button>
            </Link>
            */}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative py-32 md:py-60 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/fundo_site.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2730]/95 to-[#1a2730] opacity-85"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  {/*
                  <Badge className="bg-[#f8cc53] text-[#1a2730] hover:bg-[#e7ad0c]">
                    🚀 Desenvolvimento Web
                  </Badge>
                  */}
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#fff]">
                    Sites que
                    <span className="bg-gradient-to-r from-[#e95d2c] to-[#ffbb5c] bg-clip-text text-transparent font-bold">
                      {" "}
                      promovem{" "}
                    </span>
                    o seu negócio
                  </h1>
                  <p className="text-xl text-[#b0cee2] leading-relaxed">
                    Criamos sites profissionais para prestadores de serviço, pequenas empresas e MEI. Aumente suas
                    vendas com presença digital de qualidade.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#e95d2c] to-[#ff8a5b] hover:from-[#d14f26] hover:to-[#f57f4c]"
                  >
                    <Rocket className="h-5 w-5 mr-2" />
                    Impulsione seu Negócio
                  </Button>
                  <Button variant="outline" size="lg" className="border-[#b0cee2] text-[#b0cee2] hover:bg-[#1a2730]/20">
                    <Globe className="h-5 w-5 mr-2" />
                    Ver Portfólio
                  </Button>
                </div>

                <div className="flex items-center space-x-8 text-sm text-[#b0cee2]">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#f8cc53] mr-2" />
                    Sites responsivos
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#f8cc53] mr-2" />
                    Entrega em 7 dias
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#f8cc53] mr-2" />
                    Suporte incluso
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {/*
                <div className="relative z-10">
                  <Image
                    src="/hero.png"
                    width={500}
                    height={420}
                    alt="Desenvolvimento de sites"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#e95d2c] rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#f8cc53] rounded-full blur-3xl opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Público-Alvo */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2730] mb-4">Especialistas em Sites para</h2>
              <p className="text-xl text-[#45586c] max-w-3xl mx-auto">
                Desenvolvemos soluções digitais sob medida para diferentes tipos de negócio
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-[#1a2730] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#b0cee2]" />
                  </div>
                  <CardTitle className="text-xl text-[#1a2730]">Prestadores de Serviço</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-[#45586c] mb-6">
                    Advogados, dentistas, consultores, personal trainers e outros profissionais liberais
                  </p>
                  <div className="space-y-2 text-sm text-[#424048]">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-2" />
                      Agendamento online
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-2" />
                      Portfólio de serviços
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-2" />
                      Depoimentos de clientes
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-[#e95d2c] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-8 w-8 text-[#fff]" />
                  </div>
                  <CardTitle className="text-xl text-[#1a2730]">Pequenas Empresas</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-[#45586c] mb-6">
                    Lojas, restaurantes, oficinas, salões de beleza e empresas locais
                  </p>
                  <div className="space-y-2 text-sm text-[#424048]">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-2" />
                      Catálogo de produtos
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-2" />
                      Sistema de pedidos
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-2" />
                      Integração WhatsApp
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-[#f8cc53] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-[#1a2730]" />
                  </div>
                  <CardTitle className="text-xl text-[#1a2730]">MEI</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-[#45586c] mb-6">
                    Microempreendedores individuais que querem profissionalizar seu negócio
                  </p>
                  <div className="space-y-2 text-sm text-[#424048]">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-2" />
                      Site institucional
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-2" />
                      Formulário de contato
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-2" />
                      Redes sociais integradas
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-20 bg-[#b0cee2]/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#f8cc53] text-[#1a2730]">Nossos Serviços</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2730] mb-4">Tudo que seu negócio precisa</h2>
              <p className="text-xl text-[#45586c] max-w-3xl mx-auto">
                Oferecemos soluções completas para sua presença digital
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#1a2730] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-[#b0cee2]" />
                  </div>
                  <h3 className="font-semibold text-[#1a2730] mb-2">Sites Institucionais</h3>
                  <p className="text-sm text-[#45586c]">Sites profissionais para apresentar sua empresa</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#e95d2c] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-6 w-6 text-[#fff]" />
                  </div>
                  <h3 className="font-semibold text-[#1a2730] mb-2">E-commerce</h3>
                  <p className="text-sm text-[#45586c]">Lojas virtuais para vender online</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#f8cc53] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-6 w-6 text-[#1a2730]" />
                  </div>
                  <h3 className="font-semibold text-[#1a2730] mb-2">Design Responsivo</h3>
                  <p className="text-sm text-[#45586c]">Sites que funcionam em todos os dispositivos</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#45586c] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Search className="h-6 w-6 text-[#b0cee2]" />
                  </div>
                  <h3 className="font-semibold text-[#1a2730] mb-2">SEO</h3>
                  <p className="text-sm text-[#45586c]">Otimização para aparecer no Google</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#a63e1b] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-6 w-6 text-[#fff]" />
                  </div>
                  <h3 className="font-semibold text-[#1a2730] mb-2">Design Personalizado</h3>
                  <p className="text-sm text-[#45586c]">Visual único para sua marca</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#1a2730] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-6 w-6 text-[#b0cee2]" />
                  </div>
                  <h3 className="font-semibold text-[#1a2730] mb-2">Analytics</h3>
                  <p className="text-sm text-[#45586c]">Relatórios de visitantes e vendas</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#e95d2c] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-[#fff]" />
                  </div>
                  <h3 className="font-semibold text-[#1a2730] mb-2">Chat Online</h3>
                  <p className="text-sm text-[#45586c]">Atendimento direto no site</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#f8cc53] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-[#1a2730]" />
                  </div>
                  <h3 className="font-semibold text-[#1a2730] mb-2">Manutenção</h3>
                  <p className="text-sm text-[#45586c]">Suporte técnico contínuo</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfólio */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#e95d2c] text-[#fff]">Nosso Trabalho</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2730] mb-4">Sites que criamos</h2>
              <p className="text-xl text-[#45586c] max-w-3xl mx-auto">
                Veja alguns projetos que desenvolvemos para nossos clientes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card
                  key={item}
                  className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden"
                >
                  <div className="aspect-video bg-[#b0cee2]/20">
                    <Image
                      src={`/placeholder.svg?height=200&width=300&text=Projeto ${item}`}
                      width={300}
                      height={200}
                      alt={`Projeto ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#1a2730] mb-2">Cliente {item}</h3>
                    <p className="text-sm text-[#45586c] mb-4">
                      {item % 3 === 1 ? "Prestador de Serviço" : item % 3 === 2 ? "Pequena Empresa" : "MEI"}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-[#e95d2c] text-[#e95d2c] hover:bg-[#e95d2c]/10"
                    >
                      Ver Projeto
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 bg-[#1a2730]">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#f8cc53] text-[#1a2730]">Depoimentos</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#fff] mb-4">O que nossos clientes dizem</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg bg-[#fff]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-[#f8cc53] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#45586c] mb-4">
                    "Excelente trabalho! Meu site ficou profissional e já estou recebendo mais clientes."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#b0cee2] rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-[#1a2730]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a2730]">Maria Silva</p>
                      <p className="text-sm text-[#45586c]">Advogada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-[#fff]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-[#f8cc53] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#45586c] mb-4">
                    "Equipe muito profissional. Entregaram no prazo e o resultado superou minhas expectativas."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#e95d2c] rounded-full flex items-center justify-center mr-3">
                      <ShoppingCart className="h-5 w-5 text-[#fff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a2730]">João Santos</p>
                      <p className="text-sm text-[#45586c]">Loja de Roupas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-[#fff]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-[#f8cc53] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#45586c] mb-4">
                    "Investimento que valeu a pena. Meu negócio cresceu muito depois do site."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#f8cc53] rounded-full flex items-center justify-center mr-3">
                      <Target className="h-5 w-5 text-[#1a2730]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a2730]">Ana Costa</p>
                      <p className="text-sm text-[#45586c]">Personal Trainer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section id="precos" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#f8cc53] text-[#1a2730]">Planos e Preços</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2730] mb-4">Escolha o plano ideal</h2>
              <p className="text-xl text-[#45586c] max-w-3xl mx-auto">
                Preços justos e transparentes para todos os tipos de negócio
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-[#b0cee2] hover:border-[#e95d2c] transition-colors">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2 text-[#1a2730]">Básico</CardTitle>
                  <div className="text-3xl font-bold text-[#1a2730]">R$ 497</div>
                  <p className="text-sm text-[#45586c]">Ideal para MEI</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Site de até 5 páginas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Design responsivo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Formulário de contato</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Integração redes sociais</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">SEO básico</span>
                  </div>
                  <Button className="w-full mt-6 bg-[#e95d2c] hover:bg-[#a63e1b] text-[#fff]">Escolher Plano</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#e95d2c] hover:border-[#a63e1b] transition-colors relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#e95d2c] text-[#fff]">Mais Popular</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2 text-[#1a2730]">Profissional</CardTitle>
                  <div className="text-3xl font-bold text-[#1a2730]">R$ 897</div>
                  <p className="text-sm text-[#45586c]">Ideal para Pequenas Empresas</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Site de até 10 páginas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Design personalizado</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Sistema de agendamento</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Chat WhatsApp</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">SEO avançado</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Google Analytics</span>
                  </div>
                  <Button className="w-full mt-6 bg-[#e95d2c] hover:bg-[#a63e1b] text-[#fff]">Escolher Plano</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#b0cee2] hover:border-[#e95d2c] transition-colors">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2 text-[#1a2730]">Premium</CardTitle>
                  <div className="text-3xl font-bold text-[#1a2730]">R$ 1.497</div>
                  <p className="text-sm text-[#45586c]">Ideal para E-commerce</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Loja virtual completa</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Até 100 produtos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Gateway de pagamento</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Gestão de estoque</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Relatórios de vendas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Suporte prioritário</span>
                  </div>
                  <Button className="w-full mt-6 bg-[#e95d2c] hover:bg-[#a63e1b] text-[#fff]">Escolher Plano</Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-[#45586c] mb-4">Todos os planos incluem:</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-[#45586c]">
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-[#e95d2c] mr-2" />
                  Garantia de 30 dias
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-[#e95d2c] mr-2" />
                  Entrega em até 7 dias
                </div>
                <div className="flex items-center">
                  <Zap className="h-4 w-4 text-[#e95d2c] mr-2" />
                  Suporte técnico
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20 bg-[#b0cee2]/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#f8cc53] text-[#1a2730]">Entre em Contato</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2730] mb-4">Vamos criar seu site?</h2>
              <p className="text-xl text-[#45586c] max-w-3xl mx-auto">
                Entre em contato conosco e receba uma proposta personalizada
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#1a2730] mb-6">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#e95d2c] rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-[#fff]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a2730]">(12) 99999-9999</p>
                        <p className="text-[#45586c]">WhatsApp e ligações</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#1a2730] rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-[#b0cee2]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a2730]">contato@devsitespinda.com.br</p>
                        <p className="text-[#45586c]">E-mail comercial</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#f8cc53] rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-[#1a2730]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a2730]">Pindamonhangaba/SP</p>
                        <p className="text-[#45586c]">Atendemos toda a região</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1a2730] mb-4">Horário de Atendimento</h4>
                  <div className="space-y-2 text-[#45586c]">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1a2730] mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="w-10 h-10 bg-[#1a2730] rounded-lg flex items-center justify-center hover:bg-[#45586c] transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-[#fff]" />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 bg-[#e95d2c] rounded-lg flex items-center justify-center hover:bg-[#a63e1b] transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-[#fff]" />
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 bg-[#f8cc53] rounded-lg flex items-center justify-center hover:bg-[#e7ad0c] transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-[#1a2730]" />
                    </Link>
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1a2730]">Solicite um Orçamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-[#45586c] mb-2 block">Nome</label>
                        <Input
                          name="nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          placeholder="Seu nome"
                          className="border-[#b0cee2] focus:border-[#e95d2c]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#45586c] mb-2 block">Telefone</label>
                        <Input
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="(12) 99999-9999"
                          className="border-[#b0cee2] focus:border-[#e95d2c]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-[#45586c] mb-2 block">E-mail</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="border-[#b0cee2] focus:border-[#e95d2c]"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-[#45586c] mb-2 block">Tipo de Negócio</label>
                      <select
                        name="tipoNegocio"
                        value={formData.tipoNegocio}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-[#b0cee2] rounded-md focus:border-[#e95d2c] outline-none"
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="prestador-servico">Prestador de Serviço</option>
                        <option value="pequena-empresa">Pequena Empresa</option>
                        <option value="mei">MEI</option>
                        <option value="ecommerce">E-commerce</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-[#45586c] mb-2 block">Mensagem</label>
                      <Textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Conte-nos sobre seu projeto..."
                        rows={4}
                        className="border-[#b0cee2] focus:border-[#e95d2c]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#e95d2c] to-[#ff8a5b] hover:from-[#d14f26] hover:to-[#f57f4c]"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Rocket className="h-4 w-4 mr-2" />
                          Solicitar Orçamento
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a2730] text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#e95d2c] rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-[#fff]" />
                </div>
                <span className="text-xl font-bold text-[#fff]">DevSites Pinda</span>
              </div>
              <p className="text-[#b0cee2] mb-4">Desenvolvimento de sites profissionais em Pindamonhangaba/SP</p>
              <div className="flex space-x-3">
                <Link href="#" className="text-[#b0cee2] hover:text-[#fff] transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-[#b0cee2] hover:text-[#fff] transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-[#b0cee2] hover:text-[#fff] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#fff]">Serviços</h4>
              <div className="space-y-2 text-[#b0cee2]">
                <p>Sites Institucionais</p>
                <p>E-commerce</p>
                <p>Design Responsivo</p>
                <p>SEO</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#fff]">Público</h4>
              <div className="space-y-2 text-[#b0cee2]">
                <p>Prestadores de Serviço</p>
                <p>Pequenas Empresas</p>
                <p>MEI</p>
                <p>E-commerce</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#fff]">Contato</h4>
              <div className="space-y-2 text-[#b0cee2]">
                <p>(12) 99999-9999</p>
                <p>contato@devsitespinda.com.br</p>
                <p>Pindamonhangaba/SP</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#45586c] mt-8 pt-8 text-center text-[#b0cee2]">
            <p>© {new Date().getFullYear()} DevSites Pinda. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/5512999999999"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#e95d2c] hover:bg-[#a63e1b] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
      >
        <MessageCircle className="h-7 w-7 text-[#fff]" />
      </Link>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-[#1a2730] hover:bg-[#45586c] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        >
          <ArrowUp className="h-5 w-5 text-[#fff]" />
        </button>
      )}
    </div>
  )
}
