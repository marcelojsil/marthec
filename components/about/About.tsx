"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Lightbulb, Rocket, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Code,
    title: "Site pronto",
    description:
      "Do desenvolvimento à publicação. Seu site entregue funcionando, hospedado e otimizado.",
  },
  {
    icon: Lightbulb,
    title: "Soluções Inteligentes",
    description:
      "Cada projeto é pensado estrategicamente para gerar mais autoridade e novos clientes.",
  },
  {
    icon: Rocket,
    title: "Alta Performance",
    description:
      "Sites rápidos, modernos e preparados para alcançar excelentes notas no Google.",
  },
  {
    icon: Users,
    title: "Atendimento Próximo",
    description:
      "Você acompanha todas as etapas do projeto com uma comunicação clara e objetiva.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-text", {
        opacity: 0,
        x: -60,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".about-card").forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          x: index % 2 === 0 ? -80 : 80,
          duration: 0.8,
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
      id="sobre"
      className="py-20 lg:py-32 bg-card"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}

          <div>

            <span className="text-primary font-semibold tracking-widest uppercase text-sm">
              Sobre mim
            </span>

            <h2 className="about-title mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Tecnologia para transformar empresas em referências digitais.
            </h2>

            <div className="about-text mt-8 space-y-6 text-muted-foreground leading-8 text-base sm:text-lg">

              <p>
                Sou Marcelo Silva, desenvolvedor especializado na criação de
                Sites Institucionais, Landing Pages, Sistemas Web e SaaS.
              </p>

              <p>
                Mais do que desenvolver páginas bonitas, meu objetivo é criar
                ferramentas que ajudem empresas a conquistar autoridade,
                atrair novos clientes e crescer através da internet.
              </p>

              <p>
                Também sou empreendedor e conheço de perto os desafios de quem
                administra um negócio. Por isso cada projeto é pensado para
                entregar resultados reais, combinando design, tecnologia,
                velocidade e estratégia.
              </p>

            </div>

          </div>

          {/* Cards */}

          <div className="grid gap-6 sm:grid-cols-2">

            {values.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    about-card
                    group
                    rounded-2xl
                    border
                    border-border
                    bg-background
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-primary/50
                    hover:shadow-xl
                    hover:shadow-primary/10
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-xl
                      bg-primary/10
                      flex
                      items-center
                      justify-center
                      mb-5
                      transition-all
                      group-hover:bg-primary
                    "
                  >

                    <Icon
                      className="
                        w-7
                        h-7
                        text-primary
                        group-hover:text-white
                      "
                    />

                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-7">
                    {item.description}
                  </p>

                </div>

              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}