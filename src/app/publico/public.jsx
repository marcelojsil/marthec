import SectionTitle from '../../components/ui/SectionTitle';
import { CheckCircle,Store,ChartNoAxesCombined,Handshake } from "lucide-react";
import './publico1.css';


const Publico = () => {

    return (

    <section className="publico" id="publico">
      <div className="publico-max">
        <span className="tag" >Nosso Público</span>
        <div><SectionTitle align="center" gradient>Especialista em Sites para empresas</SectionTitle></div>
        <div>Desenvolvemos soluções digitais sob medida para diferentes tipos de negócio</div>
       
            <section id="services">
              
              <div className="services-flex">

                <div className="card">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="lucide1">
                        <Handshake size={60} />
                      </div>
                      Prestadores de Serviço
                    </div>
                    <div className="card-back">
                      Advogados, dentistas, consultores, personal trainers e outros profissionais liberais
                      <div><CheckCircle size={15} color="#e7ad0c" />  Portifólio de serviços</div>
                      <div><CheckCircle size={15} color="#e7ad0c" />  Depoimento de clientes</div>
                      <div><CheckCircle size={15} color="#e7ad0c" />  Relatório de lead</div>
                    </div>
                  </div>
                </div>
        
                <div className="card">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="lucide2">
                        <Store size={60} />
                      </div>
                      Pequenas Empresas
                    </div>
                    <div className="card-back">
                      Advogados, dentistas, consultores, personal trainers e outros profissionais liberais
                      <div><CheckCircle size={15} color="#e7ad0c" />  Catálogo de produtos</div>
                      <div><CheckCircle size={15} color="#e7ad0c" />  Integração com WhatsApp</div>
                      <div><CheckCircle size={15} color="#e7ad0c" />  Portifólio de serviços</div>
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
                      Microempreendedores individuais que querem profissionalizar seu negócio
                      <div><CheckCircle size={15} color="#e7ad0c" />  Site Institucional</div>
                      <div><CheckCircle size={15} color="#e7ad0c" />  Formulário de Contato</div>
                      <div><CheckCircle size={15} color="#e7ad0c" />  Redes sociais integradas</div>
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