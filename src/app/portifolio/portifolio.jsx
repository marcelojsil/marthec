
import CardImage from '../../components/CardImage';
import './portifolio.css';
import Link from "next/link";


// Ícones simples usando emojis (pode trocar por lucide-react)
const Portifolio = () => {
  return (
    <section className="portifolio-section" id="portifolio">
      <div className="services-section-max">
        <span className="tag-portifolio">Nosso Portifólio</span>
        <h2>Sites e Sistemas Web</h2>
        <p className="subtitle">
          Trabalhos para clientes e projetos que realizamos
        </p>

        <div className="services-container">
          <Link href="https://eletrotechbrasil.netlify.app"  rel="noreferrer"  target="_blank">
          <CardImage
            image='/eletrotech.png'
            title="Eletrotech Brasil"
            description="Empresa de automação e elétrica industrial"
            size = {130}
          />
          </Link>

          <Link href="https://construtora-pro.netlify.app/"  rel="noreferrer"  target="_blank">
          <CardImage
            image='/construtora.png'
            title="Contrutora Civil"
            description="Construtora de obras residenciais e comerciais"
            size = {130}
          />
          </Link>

          <Link href="https://corretoresdeimoveis.netlify.app"  rel="noreferrer"  target="_blank"> 
          <CardImage
            image='/corretor_autonomo.png'
            title="Corretor de Imóveis"
            description="Corretor de imóveis autônomo"
            size = {130}
          />
          </Link>

          <CardImage
            image='/breve.jpg'
            title="Em Breve"
            description="Um novo site ou sistema web"
            size = {130}
          />

          

        </div>
      </div>
    </section>
  );
};

export default Portifolio;
