import './globals.css'
import Hero from './hero/Hero'
import Servicos from './servicos/Servicos'

export const metadata = {
  title: "Criação de sites profissionais",
  description:
    "Criamos sites profissionais para pequenas empresas, MEI e prestadores de serviço que querem crescer na internet."
};

export default function Home() {
  return (
    <section className="page">
      

      <Hero />

      <Servicos />

    </section>
  )
}