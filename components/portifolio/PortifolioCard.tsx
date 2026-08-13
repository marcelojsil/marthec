"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "./projects";

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({
  project,
}: PortfolioCardProps) {
  const Icon = project.icon;

  return (
    <article
      className="
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-border/60

        bg-card/70
        backdrop-blur-xl

        transition-all
        duration-500

        hover:-translate-y-3
        hover:shadow-2xl
        hover:shadow-primary/20
        hover:border-primary/40

        lg:hover:[transform:perspective(1200px)_rotateX(4deg)_rotateY(-3deg)_translateY(-12px)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -top-32
          -right-32
          w-72
          h-72
          rounded-full
          bg-primary/20
          blur-3xl
          opacity-0
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      {/* IMAGEM */}

      <div className="relative aspect-[16/10] overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent

            opacity-60

            transition-all
            duration-500

            group-hover:opacity-90
          "
        />

        {/* Badge */}

        <div
          className="
            absolute
            top-5
            left-5

            flex
            items-center
            gap-2

            rounded-full

            bg-background/80
            backdrop-blur-xl

            border
            border-white/10

            px-4
            py-2
          "
        >
          <Icon
            size={16}
            className="text-primary"
          />

          <span className="text-xs font-semibold">
            {project.category}
          </span>
        </div>

        {/* Featured */}

        {project.featured && (
          <div
            className="
              absolute
              top-5
              right-5

              rounded-full

              bg-primary

              px-3
              py-1

              text-xs
              font-semibold
              text-white
            "
          >
            Destaque
          </div>
        )}

        {/* Botões Desktop */}

        <div
          className="
            hidden
            md:flex

            absolute
            bottom-6
            left-1/2

            -translate-x-1/2
            translate-y-8

            gap-3

            opacity-0

            transition-all
            duration-500

            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <Button asChild>

            <Link href={project.demo || "#"}>

              Ver Projeto

              <ArrowUpRight
                className="ml-2"
                size={16}
              />

            </Link>

          </Button>

          {project.github && (

            <Button
              variant="outline"
              asChild
            >

              <Link href={project.github}>

                <Github size={16} />

              </Link>

            </Button>

          )}

        </div>

      </div>

      {/* CONTEÚDO */}

      <div className="relative p-7">

        <h3
          className="
            text-2xl
            font-bold
            leading-tight
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-4

            leading-7

            text-muted-foreground
          "
        >
          {project.description}
        </p>

        {/* Tecnologias */}

        <div
          className="
            mt-6

            flex
            flex-wrap

            gap-2
          "
        >
          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="
                rounded-full

                border
                border-primary/20

                bg-primary/10

                px-3
                py-1

                text-xs
                font-medium

                text-primary
              "
            >
              {tech}
            </span>

          ))}
        </div>

        {/* Mobile */}

        <div className="mt-8 md:hidden">

          <Button
            className="w-full"
            asChild
          >

            <Link href={project.demo || "#"}>

              Ver Projeto

              <ArrowUpRight
                className="ml-2"
                size={16}
              />

            </Link>

          </Button>

        </div>

      </div>
    </article>
  );
}