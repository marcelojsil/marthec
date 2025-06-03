import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


const projetos = [
  { nome: "Eletrotech", tipo: "Prestador de Serviço", imagem: "/imagens/construcao-x.jpg" },
  { nome: "Corretor de Imóveis", tipo: "MEI", imagem: "/imagens/servico-y.jpg" },
  { nome: "Loteamento", tipo: "Pequena Empresa", imagem: "/imagens/servico-y.jpg" },
  { nome: "Serralheria", tipo: "Autnônomo", imagem: "/imagens/servico-y.jpg" },
  { nome: "Empreiteira", tipo: "Pequena Empresa", imagem: "/imagens/servico-y.jpg" },
  { nome: "Saão de Beleza", tipo: "Pequena Empresa", imagem: "/imagens/empresa-z.jpg" }
];

export default function Portfolio() {
  return (
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
          {projetos.map((projeto, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-video bg-[#b0cee2]/20">
                <Image
                  src={projeto.imagem}
                  width={300}
                  height={200}
                  alt={`Projeto ${projeto.nome}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[#1a2730] mb-2">{projeto.nome}</h3>
                <p className="text-sm text-[#45586c] mb-4">{projeto.tipo}</p>
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
  );
}