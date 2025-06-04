"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import {
  Smartphone,
  Search,
  Users,
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
  FileText,
  FilePen,
  MonitorCog
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import type React from "react"
import Portfolio from "@/components/portifolio"
import {AnchorButton} from "@/components/ui/link-button"


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
      const response = await fetch('/.netlify/functions/contact', {
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
                    Criamos sites profissionais com foco em pequenas empresas, MEI e prestadores de serviço. Impulsione a presença digital do seu negócio.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-end">
   
                    <AnchorButton 
                      href="#contato" 
                      size="lg" 
                      className="bg-gradient-to-r from-[#e95d2c] to-[#ff8a5b] hover:from-[#d14f26] hover:to-[#f57f4c]"
                    >
                      <Rocket className="h-5 w-5 mr-2" />
                      Impulsione seu Negócio 2
                    </AnchorButton>

                  
                  {/*
                  <Button variant="outline" size="lg" className="border-[#b0cee2] text-[#1a2730] hover:bg-[#b0cee2]/20 hover:text-[#b0cee2]">
                    <Globe className="h-5 w-5 mr-2" />
                    Tire suas Dúvidas
                  </Button>
                  */} 
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
                    SEO de qualidade
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2730] mb-4">Especialista em Sites para empresas</h2>
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
                      Portfólio de serviços
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-2" />
                      Depoimentos de clientes
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-2" />
                      Relatório de Lead
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
                      Integração com WhatsApp
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-2" />
                      Portfólio de serviços
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#1a2730] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-[#b0cee2]" />
                  </div>
                  <h3 className="font-semibold text-[#1a2730] mb-2">Sites Institucionais</h3>
                  <p className="text-sm text-[#45586c]">Sites profissionais para apresentar sua empresa</p>
                </CardContent>
              </Card>
              {/*
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
                  <div className="w-12 h-12 bg-[#1a2730] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-6 w-6 text-[#b0cee2]" />
                  </div>
                  <h3 className="font-semibold text-[#1a2730] mb-2">Analytics</h3>
                  <p className="text-sm text-[#45586c]">Relatórios de visitantes e vendas</p>
                </CardContent>
              </Card>
              */}
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
                  <div className="w-12 h-12 bg-[#e95d2c] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-[#fff]" />
                  </div>
                  <h3 className="font-semibold text-[#1a2730] mb-2">Integração com Whatsapp</h3>
                  <p className="text-sm text-[#45586c]">Atendimento direto do site</p>
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
       
        <Portfolio />  


        {/*
        {/* Depoimentos 
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
        */}


        {/* Preços */}
        <section id="precos" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#f8cc53] text-[#1a2730]">Escolha o plano ideal</Badge>
              
              <p className="text-xl text-[#45586c] max-w-3xl mx-auto">
                Preço justo e transparência para todos os tipos de negócio
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2730] mb-4 pt-6">
                Planos por Assinatura
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="flex flex-col min-h-[300px] border-2 border-[#b0cee2] hover:border-[#e95d2c] transition-colors">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2 text-[#1a2730]">Básico</CardTitle>
                  <div className="text-3xl font-bold text-[#1a2730]">R$ 34,90/mês</div>
                  <p className="text-sm text-[#45586c]">Site institucional simples</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Página única</span>
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
                    <span className="text-sm text-[#45586c]">Botão Whatsapp</span>
                  </div>
                </CardContent>
                <CardFooter className="text-center pb-4">
                  <Button className="w-full mt-6 bg-[#e95d2c] hover:bg-[#a63e1b] text-[#fff]">Escolher Plano</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col min-h-[300px] border-2 border-[#e95d2c] hover:border-[#a63e1b] transition-colors relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#e95d2c] text-[#fff]">Mais Popular</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2 text-[#1a2730]">Profissional</CardTitle>
                  <div className="text-3xl font-bold text-[#1a2730]">R$ 49,90/mês</div>
                  <p className="text-sm text-[#45586c]">Site institucional com até 5 páginas</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Site com até 5 páginas</span>
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
                    <span className="text-sm text-[#45586c]">Botão Whatsapp</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">SEO Avançado</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Google Analytics</span>
                  </div>
                </CardContent>
                <CardFooter className="text-center pb-4">
                  <Button className="w-full mt-6 bg-[#e95d2c] hover:bg-[#a63e1b] text-[#fff]">Escolher Plano</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col min-h-[300px] border-2 border-[#b0cee2] hover:border-[#e95d2c] transition-colors">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2 text-[#1a2730]">Premium</CardTitle>
                  <div className="text-3xl font-bold text-[#1a2730]">R$ 69,90/mês</div>
                  <p className="text-sm text-[#45586c]">Site com até 5 páginas e CRM Simples</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Site com até 5 páginas</span>
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
                    <span className="text-sm text-[#45586c]">Botão Whatsapp</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">SEO Avançado</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Google Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Gestão de textos e Imagens</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Relatórios de Lead</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Suporte prioritário</span>
                  </div>
                </CardContent>
                <CardFooter className="text-center pb-4">
                  <Button className="w-full mt-6 bg-[#e95d2c] hover:bg-[#a63e1b] text-[#fff]">Escolher Plano</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-[#45586c] mb-4">Todos os <b>Planos por Assinatura</b> incluem:</p>
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
                  <Globe className="h-4 w-4 text-[#e95d2c] mr-2" />
                  Domínio e hospedagem
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 text-[#e95d2c] mr-2" />
                  Relatório semanal de lead
                </div>
                <div className="flex items-center">
                  <FilePen className="h-4 w-4 text-[#e95d2c] mr-2" />
                  Edições do site
                </div>
                <div className="flex items-center">
                  <MonitorCog className="h-4 w-4 text-[#e95d2c] mr-2" />
                  Suporte técnico Integral
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="precos" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2730] mb-4 pt-6">
                Planos por Desenvolvimento
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="flex flex-col min-h-[300px] border-2 border-[#e95d2c] hover:border-[#a63e1b] transition-colors relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#e95d2c] text-[#fff]">Mais Popular</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2 text-[#1a2730]">Básico</CardTitle>
                  <div className="text-3xl font-bold text-[#1a2730]">R$ 499,00</div>
                  <p className="text-sm text-[#45586c]">Em até 10x sem juros</p>
                  <p className="text-sm text-[#45586c]">Site institucional simples</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Página única</span>
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
                    <span className="text-sm text-[#45586c]">Botão Whatsapp</span>
                  </div>
                </CardContent>
                <CardFooter className="text-center pb-4">
                  <Button className="w-full mt-6 bg-[#e95d2c] hover:bg-[#a63e1b] text-[#fff]">Escolher Plano</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col min-h-[300px] border-2 border-[#b0cee2] hover:border-[#e95d2c] transition-colors">
               
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2 text-[#1a2730]">Profissional</CardTitle>
                  <div className="text-3xl font-bold text-[#1a2730]">R$ 699,00</div>
                  <p className="text-sm text-[#E95D2C]">Preço promocional em 10x s/ juros</p>
                  <p className="text-sm text-[#45586c]">Site institucional com até 5 páginas</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Site com até 5 páginas</span>
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
                    <span className="text-sm text-[#45586c]">Botão Whatsapp</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">SEO Avançado</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Google Analytics</span>
                  </div>
                </CardContent>
                <CardFooter className="text-center pb-4">
                  <Button className="w-full mt-6 bg-[#e95d2c] hover:bg-[#a63e1b] text-[#fff]">Escolher Plano</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col min-h-[300px] border-2 border-[#b0cee2] hover:border-[#e95d2c] transition-colors">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2 text-[#1a2730]">Premium</CardTitle>
                  <div className="text-3xl font-bold text-[#1a2730]">R$ 999,00</div>
                  <p className="text-sm text-[#E95D2C]">Preço promocional em 10x s/ juros</p>
                  <p className="text-sm text-[#45586c]">Site com até 5 páginas e CRM Simples</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Site com até 5 páginas</span>
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
                    <span className="text-sm text-[#45586c]">Botão Whatsapp</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">SEO Avançado</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Google Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Gestão de textos e Imagens</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Relatórios de Lead</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#e95d2c] mr-3" />
                    <span className="text-sm text-[#45586c]">Suporte prioritário</span>
                  </div>
                </CardContent>
                <CardFooter className="text-center pb-4">
                  <Button className="w-full mt-6 bg-[#e95d2c] hover:bg-[#a63e1b] text-[#fff]">Escolher Plano</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-[#45586c] mb-4">Todos os <b>Planos por Desenvolvimento</b> incluem:</p>
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
                  <MonitorCog className="h-4 w-4 text-[#e95d2c] mr-2" />
                  Suporte técnico para o código
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-[#45586c] mb-4"><b>não</b> incluem:</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-[#45586c]">
                <div className="flex items-center">
                  <Globe className="h-4 w-4 text-[#e95d2c] mr-2" />
                  Domínio e hospedagem
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 text-[#e95d2c] mr-2" />
                  Relatório semanal de lead
                </div>
                <div className="flex items-center">
                  <FilePen className="h-4 w-4 text-[#e95d2c] mr-2" />
                  Edições do site
                </div>
                <div className="flex items-center">
                  <MonitorCog className="h-4 w-4 text-[#e95d2c] mr-2" />
                  Suporte técnico Integral
                </div>
              </div>
            </div>
          </div>
          </section>
        




        {/* Contato */}
        <section id="contato" className="py-20 bg-[#b0cee2]/20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              {/*
              <Badge className="mb-4 bg-[#f8cc53] text-[#1a2730]">Entre em Contato</Badge>
              */}
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
                        <p className="font-semibold text-[#1a2730]">(12) 99102-2315</p>
                        <p className="text-[#45586c]">WhatsApp e ligações</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#1a2730] rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-[#b0cee2]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a2730]">contato@marthec.com.br</p>
                        <p className="text-[#45586c]">E-mail comercial</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#f8cc53] rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-[#1a2730]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a2730]">Pindamonhangaba/SP</p>
                        <p className="text-[#45586c]">Atendemos todo o Brasil</p>
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
                      href="https://www.instagram.com"
                      className="w-10 h-10 bg-[#1a2730] rounded-lg flex items-center justify-center hover:bg-[#45586c] transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-[#fff]" />
                    </Link>
                    <Link
                      href="https://www.facebook.com"
                      className="w-10 h-10 bg-[#e95d2c] rounded-lg flex items-center justify-center hover:bg-[#a63e1b] transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-[#fff]" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com"
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
                        <option value="ecommerce">Autônomo</option>
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
                <Image
                  src="/logo.png"
                  width={40}
                  height={30}
                  alt="Desenvolvimento de sites"
                  className="rounded-2xl shadow-2xl"
                />
                {/*
                <div className="w-8 h-8 bg-[#e95d2c] rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-[#fff]" />
                </div>
                */}
                <span className="text-xl font-bold text-[#fff]">Marthec Web</span>
              </div>
              <p className="text-[#b0cee2] mb-4">Desenvolvimento de sites institucionais para seu negócio</p>
              <div className="flex space-x-3">
                <Link href="https://instagram.com" className="text-[#b0cee2] hover:text-[#fff] transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://www.facebook.com" className="text-[#b0cee2] hover:text-[#fff] transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://www.linkedin.com" className="text-[#b0cee2] hover:text-[#fff] transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#fff]">Serviços</h4>
              <div className="space-y-2 text-[#b0cee2]">
                <p>Sites Institucionais</p>
                <p>Design Responsivo</p>
                <p>SEO de qualidade</p>
                <p>Hospedagem</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#fff]">Público</h4>
              <div className="space-y-2 text-[#b0cee2]">
                <p>Prestadores de Serviço</p>
                <p>Pequenas Empresas</p>
                <p>MEI</p>
                <p>Autônomos</p>
                
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#fff]">Contato</h4>
              <div className="space-y-2 text-[#b0cee2]">
                <p>(12) 99102-2315</p>
                <p>contato@marthec.com.br</p>
                <p>Pindamonhangaba/SP</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#45586c] mt-8 pt-8 text-center text-[#b0cee2]">
            <p>© {new Date().getFullYear()} Marthec Web. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    {/* WhatsApp Button */}
    <Link
      href="https://wa.me/551291022315"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        viewBox="0 0 25 25"
        fill="currentColor"
      >
        <path d="M20.52 3.48a11.87 11.87 0 0 0-16.78 0 11.87 11.87 0 0 0-2.4 13.14L.02 24l7.59-1.98a11.87 11.87 0 0 0 5.64 1.44c6.56 0 11.9-5.34 11.9-11.9a11.86 11.86 0 0 0-4.63-9.08zM12.3 20.1c-1.8 0-3.57-.48-5.12-1.4l-.37-.22-4.51 1.17 1.21-4.4-.24-.38a9.81 9.81 0 0 1 1.47-11.63A9.87 9.87 0 0 1 21.6 12a9.9 9.9 0 0 1-9.3 8.1zm5.28-7.28c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.63.15s-.73.93-.9 1.12c-.17.2-.33.22-.62.07s-1.21-.45-2.3-1.42a8.54 8.54 0 0 1-1.57-1.95c-.17-.29-.02-.45.13-.6.13-.14.29-.37.44-.55.14-.18.19-.3.29-.5s.05-.37-.02-.52c-.07-.15-.63-1.52-.86-2.07s-.46-.48-.63-.49h-.54c-.18 0-.46.07-.7.3s-.91.88-.91 2.15.93 2.5 1.06 2.67c.13.17 1.83 2.79 4.45 3.91.62.27 1.1.42 1.47.54.62.2 1.18.17 1.62.1.5-.08 1.55-.63 1.77-1.24.22-.6.22-1.11.15-1.24-.08-.13-.26-.2-.55-.34z" />
      </svg>
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
