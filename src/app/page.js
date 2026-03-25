

import Contato from './contato/Contato';
import './globals.css'
import Hero from './hero/Hero'
//import Hero_1 from './hero/Hero_1'
import Portifolio from './portifolio/portifolio';
import Publico from './publico/public';
import Servicos from './servicos/Servicos'
import Valores from './valores/Valores';
//import CardCaroussel from '../components/caroussel/Caroussel';
//import CardCarouselPro from '@/components/caroussel/Caroussel-2';

export const metadata = {
  title: "Criação de sites profissionais",
  description:
    "Criamos sites profissionais para pequenas empresas, MEI e prestadores de serviço que querem crescer na internet."
};

const cards = [
  {
    image: "../../public/carousel-1.jpg",
    title: "Desenvolvimento de Sites",
    description: "Criamos sites profissionais modernos e responsivos."
  },
  {
    image: "../../public/caroussel/carousel-2.jpg",
    title: "Sistemas Web",
    description: "Soluções personalizadas para gestão empresarial."
  },
  {
    image: "../../public/caroussel/carousel-3.jpg",
    title: "Automação de Processos",
    description: "Integração e automação para aumentar produtividade."
  },
  {
    image: "../../public/caroussel/carousel-4.jpg",
    title: "SEO e Performance",
    description: "Seu site mais rápido e melhor posicionado no Google."
  }
];

export default function Home() {
  return (
    <section className="page">
      

      <Hero />

     

      <Publico />

      <Servicos />

      <Portifolio />

      {/* <CardCaroussel cards={cards} /> */}

      {/* <CardCarouselPro cards={cards} /> */}

      <Valores />

      <Contato />

    </section>
  )
}