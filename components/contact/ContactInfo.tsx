"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "(12) 99123-4567",
    link: "https://wa.me/5512991234567",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@marthec.com.br",
    link: "mailto:contato@marthec.com.br",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Pindamonhangaba • SP",
  },
  {
    icon: Clock,
    title: "Atendimento",
    value: "Seg. a Sex. • 08h às 18h",
  },
];

const benefits = [
  "Resposta rápida",
  "Orçamento sem compromisso",
  "Projeto personalizado",
  "Suporte durante o desenvolvimento",
];

export default function ContactInfo() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-info-title", {
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".contact-card", {
        opacity: 0,
        x: -50,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".contact-benefit", {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="space-y-10">

      {/* Cabeçalho */}

      <div className="contact-info-title">

        <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold">
          Vamos conversar
        </span>

        <h2 className="mt-4 text-3xl lg:text-5xl font-bold leading-tight">
          Vamos transformar sua ideia em um projeto incrível.
        </h2>

        <p className="mt-6 text-muted-foreground leading-8">
          Entre em contato para tirar dúvidas, solicitar um orçamento
          ou conversar sobre o seu próximo projeto.
        </p>

      </div>

      {/* Cards */}

      <div className="space-y-5">

        {contacts.map((item) => {

          const Icon = item.icon;

          const content = (
            <div
              className="
                contact-card
                group
                relative
                overflow-hidden

                rounded-3xl

                border
                border-white/10

                bg-white/[0.04]
                backdrop-blur-xl

                p-5

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-primary/40
                hover:shadow-xl
                hover:shadow-primary/10
              "
            >

              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-40
                  h-40
                  rounded-full
                  bg-primary/20
                  blur-3xl
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative flex items-center gap-4">

                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-primary/10

                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-300

                    group-hover:bg-primary
                  "
                >

                  <Icon
                    className="
                      w-6
                      h-6
                      text-primary
                      group-hover:text-white
                    "
                  />

                </div>

                <div className="flex-1">

                  <p className="text-sm text-muted-foreground">
                    {item.title}
                  </p>

                  <p className="font-semibold mt-1">
                    {item.value}
                  </p>

                </div>

                {item.link && (
                  <ArrowRight
                    className="
                      text-primary
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                )}

              </div>

            </div>
          );

          if (item.link) {
            return (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={item.title}>
              {content}
            </div>
          );

        })}

      </div>

      {/* Benefícios */}

      <div
        className="
          rounded-3xl

          border
          border-primary/20

          bg-primary/5

          p-8
        "
      >

        <h3 className="text-xl font-bold">
          Por que escolher a Marthec?
        </h3>

        <div className="mt-6 space-y-4">

          {benefits.map((benefit) => (

            <div
              key={benefit}
              className="
                contact-benefit
                flex
                items-center
                gap-3
              "
            >

              <CheckCircle2
                className="text-primary"
                size={20}
              />

              <span>{benefit}</span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}