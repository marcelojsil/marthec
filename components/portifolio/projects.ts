import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Layout,
  Database,
  Cloud,
  Briefcase,
  HeartPulse,
} from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: "Site Institucional" | "Landing Page" | "Sistema Web" | "SaaS";
  description: string;
  image: string;
  technologies: string[];
  icon: LucideIcon;
  featured?: boolean;
  demo?: string;
  github?: string;
}

export const categories = [
  "Todos",
  "Site Institucional",
  "Landing Page",
  "Sistema Web",
  "SaaS",
] as const;

export const projects: Project[] = [
  {
    id: 1,
    title: "Clínica de Fisioterapia",
    category: "Site Institucional",
    description:
      "Site moderno para clínica de fisioterapia com foco em autoridade, agendamento e captação de pacientes.",
    image: "/images/projects/fisioterapia.jpg",
    technologies: [
      "Next.js",
      "Tailwind",
      "SEO",
      "Responsivo",
    ],
    icon: HeartPulse,
    featured: true,
    demo: "#",
    github: "",
  },

  {
    id: 2,
    title: "Corretor de Imóveis",
    category: "Site Institucional",
    description:
      "Website institucional para corretor com imóveis em destaque, integração com WhatsApp e formulário inteligente.",
    image: "/images/projects/corretor.jpg",
    technologies: [
      "Next.js",
      "GSAP",
      "SEO",
      "Supabase",
    ],
    icon: Briefcase,
    featured: true,
    demo: "#",
    github: "",
  },

  {
    id: 3,
    title: "Empresa de Automação",
    category: "Site Institucional",
    description:
      "Landing institucional para empresa de automação residencial e comercial com foco em geração de leads.",
    image: "/images/projects/automacao.jpg",
    technologies: [
      "Next.js",
      "Framer Motion",
      "SEO",
    ],
    icon: Globe,
    demo: "#",
    github: "",
  },

  {
    id: 4,
    title: "Marcelo Digital",
    category: "Landing Page",
    description:
      "Minha landing page profissional para apresentação de serviços de desenvolvimento web.",
    image: "/images/projects/marcelo.jpg",
    technologies: [
      "Next.js",
      "GSAP",
      "Tailwind",
      "Supabase",
    ],
    icon: Layout,
    featured: true,
    demo: "#",
    github: "",
  },

  {
    id: 5,
    title: "Sistema de Gestão",
    category: "Sistema Web",
    description:
      "Sistema web completo para gerenciamento de clientes, serviços, usuários e relatórios.",
    image: "/images/projects/dashboard.jpg",
    technologies: [
      "React",
      "Supabase",
      "Charts",
      "Dashboard",
    ],
    icon: Database,
    demo: "#",
    github: "",
  },

  {
    id: 6,
    title: "SaaS de Agendamentos",
    category: "SaaS",
    description:
      "Sistema SaaS para gerenciamento de agendas, pagamentos e clientes recorrentes.",
    image: "/images/projects/saas.jpg",
    technologies: [
      "Next.js",
      "Supabase",
      "Stripe",
      "API",
    ],
    icon: Cloud,
    demo: "#",
    github: "",
  },

  {
    id: 7,
    title: "Seu Projeto Aqui",
    category: "Landing Page",
    description:
      "O próximo projeto apresentado nesta seção pode ser o da sua empresa.",
    image: "/images/projects/breve.jpg",
    technologies: [
      "Seu Negócio",
      "Sua Marca",
      "Seu Sucesso",
    ],
    icon: Layout,
    featured: true,
    demo: "#",
    github: "",
  },
];