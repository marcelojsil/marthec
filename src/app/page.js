

import Contato from './contato/Contato';
import './globals.css'
import Hero from './hero/Hero'
import Portifolio from './portifolio/portifolio';
import Publico from './publico/public';
import Servicos from './servicos/Servicos'
import Valores from './valores/Valores';

export const metadata = {
  title: "Criação de sites profissionais",
  description:
    "Criamos sites profissionais para pequenas empresas, MEI e prestadores de serviço que querem crescer na internet."
};

export default function Home() {
  return (
    <section className="page">
      

      <Hero />

      <Publico />

      <Servicos />

      <Portifolio />

      <Valores />

      <Contato />

    </section>
  )
}