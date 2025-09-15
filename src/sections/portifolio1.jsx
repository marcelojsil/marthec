
import CardSimples from "../components/ui/cardsSimples";
import "../styles/precos2.css";

// Ícones simples usando emojis (pode trocar por lucide-react)
const Portifolio = () => {
  return (
    <section className="services-section">
      <span className="tag">Nossos Serviços</span>
      <h2>Tudo que seu negócio precisa</h2>
      <p className="subtitle">
        Oferecemos soluções completas para sua presença digital
      </p>

      <div className="services-container">
        <CardSimples
          icon="🌐"
          title="Sites Institucionais"
          description="Sites profissionais para apresentar sua empresa"
        />
        <CardSimples
          icon="📱"
          title="Design Responsivo"
          description="Sites que funcionam em todos os dispositivos"
        />
        <CardSimples
          icon="🔎"
          title="SEO"
          description="Otimização para aparecer no Google"
        />
        <CardSimples
          icon="🎨"
          title="Design Personalizado"
          description="Visual único para sua marca"
        />
        <CardSimples
          icon="💬"
          title="Integração com WhatsApp"
          description="Atendimento direto do site"
        />
        <CardSimples
          icon="🛠"
          title="Manutenção"
          description="Suporte técnico contínuo"
        />
      </div>
    </section>
  );
};

export default Portifolio;
