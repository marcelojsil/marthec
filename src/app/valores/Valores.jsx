'use client'

// pages/Precos1.jsx
import CardValores from '../../components/CardValores';
import './valores.css';
import { CheckCircle } from "lucide-react";

const Valores = () => {
  return (
    <section id="pricing">
      <div className="pricing-max">
        <span className="tag-portifolio">Nossos preços</span>
        <h2>Planos e valores</h2>
        <p className="subtitle">
          Valores para desenvolvimento, para mais informações solicite um orçamento sem compromisso
        </p>

        <div className="pricing-grid">
          <CardValores
            title="Página Única (SPA)"
            price={799}
            promoPrice={349}
            features={[
              "Estrutura One Page responsiva",
              "Seções personalizadas",
              "Integração com formulário de contato",
              "Otimização inicial para SEO",
            ]}
          />

          <CardValores
            title="Páginas Múltiplas"
            price={999}
            promoPrice={999}
            destaque
            features={[
              "Até 5 páginas internas",
              "Navegação com menu dinâmico",
              "Estrutura responsiva das páginas",
              "Otimização inicial para SEO",
            ]}
          />

          <CardValores
            title="Landing Page"
            price={899}
            features={[
              "Estrutura focada em conversão",
              "Seções otimizadas para marketing",
              "Integração com formulário de lead",
              "Design responsivo e leve",
            ]}
          />
        </div>
        
      
        <div className="precos-diferenciais">
          <div><CheckCircle size={25} color="#095f0d" /><p>Pagamento em até 12x no crédito</p></div>
          <div><CheckCircle size={25} color="#095f0d" /><p>Pagamento só na entrega</p></div>
          <div><CheckCircle size={25} color="#095f0d" /><p>Dashboard para administrador</p></div>
          
        </div>
        <div className="precos-diferenciais">
          <div>
            <CheckCircle size={25} color="#ec1414" />
            <p className="promocao">50% Desconto para pacote completo (Desenvolvimento / Hospedagem / Suporte)
            </p><CheckCircle size={25} color="#ec1414" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Valores;
