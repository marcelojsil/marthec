
import CardSimples from "../components/ui/cardsSimples";
import "../styles/precos2.css";
import { Globe,MonitorSmartphone, Search, Wallpaper, MessagesSquare, PencilRuler  } from "lucide-react";

// Ícones simples usando emojis (pode trocar por lucide-react)
const Services = () => {
  return (
    <section className="services-section" id="servicos">
      <div className="services-section-max">
          <span className="tag" >Nossos Serviços</span>
          <h2>Tudo que seu negócio precisa</h2>
          <p className="subtitle">
            Oferecemos soluções completas para sua presença digital
          </p>

          <div className="services-container" >
            <CardSimples
              icon={<Globe size={80} color="#1a2730" />}
              title="Sites Institucionais"
              description="Sites profissionais para apresentar sua empresa"
            />
            <CardSimples
              icon={<MonitorSmartphone size={80} color="#a63e1b"  />}
              title="Design Responsivo"
              description="Sites que funcionam em todos os dispositivos"
            />
            <CardSimples
              icon={<Search size={80} color="#e7ad0c" />}
              title="SEO"
              description="Otimização para aparecer no Google"
            />
            <CardSimples
              icon={<Wallpaper size={80} color="#a63e1b"  />}
              title="Design Personalizado"
              description="Visual único para sua marca"
            />
            <CardSimples
              icon={<MessagesSquare size={80} color="#e7ad0c"  />}
              title="Integração com WhatsApp"
              description="Atendimento direto do site"
            />
            <CardSimples
              icon={<PencilRuler size={80} color="#1a2730"  />}
              title="Manutenção"
              description="Suporte técnico contínuo"
            />
          </div>
      </div>
    </section>
  );
};

export default Services;
