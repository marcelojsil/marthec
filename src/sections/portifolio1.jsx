
import CardImage from "../components/ui/cardImage";
import "../styles/portifolio1.css";
import Eletrotech from "../image/eletrotech.png";
import Contrutora from "../image/construtora.png";
import Corretor from "../image/corretor_autonomo.png";
import Breve from "../image/breve.jpg";

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
          <a href="https:\\eletrotechbrasil.netlify.app"  rel="noreferrer"  target="_blank">
          <CardImage
            image={Eletrotech}
            title="Eletrotech Brasil"
            description="Empresa de automação e elétrica industrial"
            size = {100}
          />
          </a>

          <a href="https://construtora-pro.netlify.app/"  rel="noreferrer"  target="_blank">
          <CardImage
            image={Contrutora}
            title="Contrutora Civil"
            description="Construtora de obras residenciais e comerciais"
            size = {100}
          />
          </a>

          <a href="https://corretoresdeimoveis.netlify.app"  rel="noreferrer"  target="_blank"> 
          <CardImage
            image={Corretor}
            title="Corretor de Imóveis"
            description="Corretor de imóveis autônomo"
            size = {100}
          />
          </a>

          <CardImage
            image={Breve}
            title="Em Breve"
            description="Um novo site ou sistema web"
            size = {100}
          />

          

        </div>
      </div>
    </section>
  );
};

export default Portifolio;
