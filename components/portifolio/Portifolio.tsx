"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PortfolioCard from "./PortifolioCard";
import { categories, projects } from "./projects";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Todos");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".portfolio-item");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 40,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, [filteredProjects]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}

        <div className="portfolio-header text-center max-w-3xl mx-auto">
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold">
            Portfólio
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Projetos desenvolvidos para gerar resultados.
          </h2>

          <p className="mt-6 text-muted-foreground leading-8">
            Cada projeto é desenvolvido com foco em performance,
            experiência do usuário e conversão.
          </p>
        </div>

        {/* Filtros */}

        <div className="mt-14 flex justify-center">
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-secondary hover:bg-primary/10"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}

        <div
          ref={gridRef}
          className="
            mt-16
            grid
            gap-8

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-item"
            >
              <PortfolioCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}