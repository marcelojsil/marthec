'use client'

import SectionTitle from '../../components/ui/SectionTitle';
import Subtitle from '../../components/ui/SubTitle';
import Tag from '../../components/ui/Tag';

import CardValores from '../../components/CardValores';
import './valores.css';
import { CheckCircle } from "lucide-react";

const Valores = () => {
  return (
    <section id="pricing">
      <div className="pricing-max">

        <Tag >
          Nossos valores
        </Tag>
                
        <SectionTitle align="center" gradient="primary">
          Planos para sua Presença Digital
        </SectionTitle>
        
        <Subtitle>
          Escolha o plano ideal para seu negócio e deixe a Marthec cuidar de tudo para você.
        </Subtitle>

        <div className="pricing-grid">
          <CardValores
            title="Plano Start Digital"
            price={149.90}
            promoPrice={49.90}
            features={[
              "Site profissional de 1 página",
              "Atualizações simples de conteúdo",
              "Botão WhatsApp",
              "SEO local otimizado",
              "Suporte via WhatsApp"
            ]}
          />

          <CardValores
            title="Plano Crescimento (Recomendado)"
            price={199.90}
            promoPrice={99.90}
            destaque
            features={[
              "Plano Start Digital +",
              "Até 5 páginas",
              "Integração com formulário de lead",
              "Relatório simples mensal",
              "Suporte e auterações básicas via WhatsApp"
            ]}
          />

          <CardValores
            title="Plano Autoridade"
            price={249.90}
            promoPrice={149.90}
            features={[
              "Plano Crescimento +",
              "Página administrativa básica",
              "Landing page mensal para campanhas",
              "Configuração Google Meu Negócio",
              "Bot de conversação para atendimento inicial"
            ]}
          />
        </div>
        
      
        <div className="precos-diferenciais">
          <div><CheckCircle size={25} color="#095f0d" /><p>Desenvolvimento do site incluso</p></div>
          <div><CheckCircle size={25} color="#095f0d" /><p>Início do pagamento 30 dias após entrega</p></div>
          <div><CheckCircle size={25} color="#095f0d" /><p>Contrato mínimo de 12 meses</p></div>
          <div><CheckCircle size={25} color="#095f0d" /><p>Hospedagem inclusa</p></div>
          <div><CheckCircle size={25} color="#095f0d" /><p>Suporte e manutenção inclusos</p></div>
          <div><CheckCircle size={25} color="#095f0d" /><p>Responsividade inclusa</p></div>
        </div>
        
      </div>
    </section>
  );
};

export default Valores;
