import SectionTitle from '../../components/ui/SectionTitle';
import Subtitle from '../../components/ui/SubTitle';
import Tag from '../../components/ui/Tag';

import './servicos.css'
import { Globe, MonitorSmartphone, Search, Wallpaper, MessagesSquare, PencilRuler } from 'lucide-react';
import CardSimples from '../../components/CardSimples';

export default function Servicos() {
  return (
    <section className="services-section" id="servicos">
      <div className="services-section-max">

        <Tag>
          Quais são os nossos serviços?
        </Tag>
                
        <SectionTitle align="center" gradient="primary">
          Tudo que seu negócio precisa para ir além
        </SectionTitle>
        
        <Subtitle>
          Oferecemos soluções completas para sua presença digital
        </Subtitle>

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
  
}