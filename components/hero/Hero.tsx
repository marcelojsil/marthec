"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const techStack = [
  "Desenvolvimento",
  "Domínio",
  "Hospedagem",
  "Suporte",
  "SEO",
];


export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const heroTechRef = useRef<HTMLDivElement>(null);
  const heroIconRef = useRef<HTMLDivElement>(null);

  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {

    // Entrada da página
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from(badgeRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.5,
    })
      .from(
        titleRef.current,
        {
          opacity: 0,
          y: 60,
          duration: 0.8,
        },
        "-=0.2"
      )
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        buttonsRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.5,
        },
        "-=0.4"
      )
      .from(
        techRef.current?.children || [],
        {
          opacity: 0,
          scale: 0.8,
          stagger: 0.08,
          duration: 0.4,
        },
        "-=0.2"
      );

    // Ícone flutuando
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Parallax do conteúdo
    gsap.to(titleRef.current, {
      yPercent: 25,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(subtitleRef.current, {
      yPercent: 40,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    gsap.to(imageRef.current, {
      yPercent: -35,
      rotate: 8,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });

    gsap.to(".blur-circle", {
      scale: 1.25,
      opacity: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

  });

  return () => ctx.revert();

}, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Grid */}
      <div ref={badgeRef} className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Blur */}
      <div ref={imageRef} className="absolute -top-52 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 py-5">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Conteúdo */}

          <div ref={badgeRef}>

            <div className="flex items-center gap-2">

              <Code2 className="w-6 h-6 text-primary"/>

              <span className="font-bold text-lg">
                MarceloSilva
                <span className="text-primary">.</span>
              </span>

            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1">

              <Terminal size={14} className="text-primary"/>

              <span className="text-sm font-medium text-primary">
                Desenvolvedor Web
              </span>

            </div>

            <h1 ref={titleRef}
              //ref={heroTitleRef}
              className="
                mt-8
                text-3xl
                sm:text-5xl
                lg:text-6xl
                font-extrabold
                leading-tight
              "
            >
              Criação de{" "}
              <span className="gradient-text">
                sites profissionais
              </span>{" "}
              para empresas que querem crescer.
            </h1>

            <p ref={subtitleRef}
              //ref={heroSubtitleRef}
              className="
                mt-6
                max-w-xl
                text-base
                sm:text-lg
                leading-5
                text-muted-foreground
              "
            >
              Desenvolvo sites institucionais, Landing Pages,
              Sistemas Web e SaaS modernos, rápidos e pensados
              para transformar visitantes em clientes.
            </p>

            <div ref={buttonsRef}
              //ref={heroButtonsRef}
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                gap-4
              "
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="#portfolio">

                  Ver Projetos

                  <ArrowRight className="ml-2 h-4 w-4"/>

                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="#contato">
                  Solicitar Orçamento
                </Link>
              </Button>

            </div>

            <div ref={techRef}
              //ref={heroTechRef}
              className="
                mt-12
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >
              {techStack.map((item) => (

                <div
                  key={item}
                  className="
                    rounded-full
                    border
                    border-border
                    bg-secondary
                    px-2
                    py-1
                    text-sm
                    font-medium
                  "
                >
                  {item}
                </div>

              ))}
            </div>

          </div>

          {/* Lado direito */}

          <div
            ref={heroIconRef}
            className="
              hidden
              lg:flex
              justify-center
              items-center
            "
          >

            <div className="relative">

              <div className="blur-circle absolute inset-0 rounded-full bg-primary/10 blur-3xl"/>

              <div
                className="
                  relative
                  w-80
                  h-80
                  rounded-full
                  border
                  border-primary/20
                  bg-card
                  flex
                  items-center
                  justify-center
                  shadow-2xl
                "
              >

                <Code2
                  className="w-32 h-32 text-primary"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}