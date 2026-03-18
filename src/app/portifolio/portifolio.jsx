import SectionTitle from '../../components/ui/SectionTitle';
import Subtitle from '../../components/ui/SubTitle';
import Tag from '../../components/ui/Tag';

import CardImage from '../../components/CardImage';
import './portifolio.css';
import Link from "next/link";


// Ícones simples usando emojis (pode trocar por lucide-react)
const Portifolio = () => {
  return (
    <section className="portifolio-section" id="portifolio">
      <div className="services-section-max">

        <Tag >
          Nosso Portifólio
        </Tag>
                
        <SectionTitle align="center" gradient="primary">
          Sites e sistemas web
        </SectionTitle>
        
        <Subtitle>
          Sites desenvolvidos para clientes e projetos que realizamos
        </Subtitle>


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

          <Link href="https://corretoresdeimoveis.netlify.app"  rel="noreferrer"  target="_blank">  
          <CardImage
            image='/breve.jpg'
            title="Em Breve"
            description="Um novo site ou sistema web"
            size = {130}
          />
          </Link>

          <Link href="https://corretoresdeimoveis.netlify.app"  rel="noreferrer"  target="_blank">  
          <CardImage
            image='/breve.jpg'
            title="Em Breve"
            description="Um novo site ou sistema web"
            size = {130}
          />
          </Link>

          

          

        </div>
      </div>
    </section>
  );
};

export default Portifolio;
