import SectionTitle from '../../components/ui/SectionTitle';
import Subtitle from '../../components/ui/SubTitle';
import Tag from '../../components/ui/Tag';
import { CheckCircle,Store,ChartNoAxesCombined,Handshake } from "lucide-react";
import './publico1.css';


const Publico = () => {

    return (

    <section className="publico" id="publico">
      <div className="publico-max">
        
        <Tag>
          Quem é o nosso público?
        </Tag>
                
        <SectionTitle align="center" gradient="primary">
          Especialista em Sites para empresas
        </SectionTitle>
        
        <Subtitle>
          Desenvolvemos soluções digitais sob medida para diferentes tipos de negócio
        </Subtitle>
       
            <section id="services">
              
              <div className="services-flex">

                <div className="card">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="lucide1">
                        <Handshake size={60} />
                      </div>
                      Profissional Liberal
                    </div>
                    <div className="card-back">
                      Construtores, corretores, advogados, dentistas, consultores e  outros profissionais liberais
                      <div><CheckCircle size={15} color="#e7ad0c" />  Portifólio de serviços</div>
                      <div><CheckCircle size={15} color="#e7ad0c" />  Depoimento de clientes</div>
                      <div><CheckCircle size={15} color="#e7ad0c" />  Relatório de lead</div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="lucide3">
                        <ChartNoAxesCombined size={60} />
                      </div>
                      MEI
                    </div>
                    <div className="card-back">
                      Microempreendedores individuais que querem expandir seu negócio
                      <div><CheckCircle size={15} color="#e7ad0c" />  Site Institucional</div>
                      <div><CheckCircle size={15} color="#e7ad0c" />  Formulário de Contato</div>
                      <div><CheckCircle size={15} color="#e7ad0c" />  Redes sociais integradas</div>
                    </div>
                  </div>
                </div>
        
                <div className="card">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="lucide2">
                        <Store size={60} />
                      </div>
                      Pequena Empresa
                    </div>
                    <div className="card-back">
                      Imobiliárias, lojas diversas, lojas de carro, petshops, salões de beleza, restaurantes e outros pequenos negócios
                      <div><CheckCircle size={15} color="#e7ad0c" />  Catálogo de produtos</div>
                      <div><CheckCircle size={15} color="#e7ad0c" />  Integração com WhatsApp</div>
                      <div><CheckCircle size={15} color="#e7ad0c" />  Portifólio de serviços</div>
                    </div>
                  </div>
                </div>
        
                

              </div>
            </section>
      </div>
    </section>

    );

};

export default Publico;