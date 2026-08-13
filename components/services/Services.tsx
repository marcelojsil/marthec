"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Layout,
  Smartphone,
  Database,
  Cloud,
  Wrench,
  Check,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Sites profissionais para fortalecer sua marca e gerar credibilidade.",
    features: [
      "Design Exclusivo",
      "SEO Otimizado",
      "Alta Performance",
    ],
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Páginas focadas em conversão para campanhas e geração de leads.",
    features: [
      "Alta Conversão",
      "Integrações",
      "Copy Estratégica",
    ],
  },
  {
    icon: Smartphone,
    title: "Sites Responsivos",
    description:
      "Experiência perfeita em celulares, tablets e computadores.",
    features: [
      "Mobile First",
      "UX Moderna",
      "Velocidade",
    ],
  },
  {
    icon: Database,
    title: "Sistemas Web",
    description:
      "Automatize processos internos e ganhe produtividade.",
    features: [
      "Painel Administrativo",
      "Relatórios",
      "Automação",
    ],
  },
  {
    icon: Cloud,
    title: "SaaS",
    description:
      "Desenvolvimento de plataformas online para escalar seu negócio.",
    features: [
      "Login Seguro",
      "Banco de Dados",
      "Assinaturas",
    ],
  },
  {
    icon: Wrench,
    title: "Suporte & Manutenção",
    description:
      "Seu projeto sempre atualizado, seguro e funcionando.",
    features: [
      "Atualizações",
      "Backup",
      "Monitoramento",
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".services-header", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>(".service-card");

cards.forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    x: index % 2 === 0 ? -80 : 80,
    y: 30,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="py-20 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}

        <div className="services-header max-w-3xl mx-auto text-center">

          <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold">
            Serviços
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Soluções completas para acelerar o crescimento da sua empresa.
          </h2>

          <p className="mt-6 text-muted-foreground leading-8">
            Desenvolvo soluções digitais modernas que unem design,
            tecnologia e estratégia para gerar resultados reais.
          </p>

        </div>

        {/* Grid */}

        <div className="services-grid mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="
                  service-card
                  group
                  relative
                  overflow-hidden

                  rounded-3xl

                  border
                  border-white/10

                  bg-white/[0.04]
                  dark:bg-white/[0.03]

                  backdrop-blur-xl

                  p-8

                  transition-all
                  duration-500

                  hover:-translate-y-3
                  hover:scale-[1.02]
                  hover:border-primary/40
                  hover:shadow-2xl
                  hover:shadow-primary/10
                "
              >

                {/* Glow */}

                <div
                  className="
                    absolute
                    -top-24
                    -right-24
                    w-48
                    h-48
                    rounded-full
                    bg-primary/20
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Reflexo */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-3xl
                    bg-gradient-to-br
                    from-white/10
                    via-transparent
                    to-transparent
                    opacity-40
                  "
                />

                {/* Ícone */}

                <div
                  className="
                    relative

                    w-16
                    h-16

                    rounded-2xl

                    bg-primary/10

                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-500

                    group-hover:bg-primary
                  "
                >

                  <Icon
                    className="
                      w-8
                      h-8
                      text-primary
                      transition-all
                      duration-500
                      group-hover:text-white
                      group-hover:rotate-6
                    "
                  />

                </div>

                {/* Conteúdo */}

                <h3 className="relative mt-8 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="relative mt-4 leading-7 text-muted-foreground">
                  {service.description}
                </p>

                <div className="relative mt-8 space-y-3">

                  {service.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <div
                        className="
                          w-6
                          h-6
                          rounded-full
                          bg-primary/10
                          flex
                          items-center
                          justify-center
                        "
                      >

                        <Check
                          size={14}
                          className="text-primary"
                        />

                      </div>

                      <span className="text-sm">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}