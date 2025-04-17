import React from "react";
import "../css/components.css";
import H2 from "../components/HTwo";
import dev from "../img/DEV-removebg.png";
import man from "../img/MAN-removebg.png";
import seo from "../img/SEO-removebg.png";

const Servicos = () => {
  const dados = [
    {
      image: dev,
      titulo: "Desenvolvimento",
      descricao: "Criação de plataformas digitais profissionais e responsivas, projetadas para representar empresas, marcas ou produtos. Os sites institucionais reforçam a identidade corporativa e a credibilidade.",
    },
    {
      image: man,
      titulo: "Manutenção",
      descricao: "Suporte contínuo para garantir o funcionamento ideal do seu site. Inclui atualização de conteúdos, correção de erros, melhorias na segurança, otimização de desempenho e adaptação a novas tecnologias, garantindo que sua plataforma esteja sempre atualizada e eficiente.",
    },
    {
      image: seo,
      titulo: "Análise SEO",
      descricao: "Estudo detalhado da estrutura e conteúdo do site para melhorar o posicionamento nos mecanismos de busca. Inclui otimização de palavras-chave, revisão de performance técnica, estratégias de link building e melhorias na experiência do usuário, visando aumentar a visibilidade e atrair mais tráfego qualificado.",
    },
  ];

  return (
    <section className="servicos">

            <section className="vmv-container container-servicos">
              {dados.map((item, index) => (
                <div key={index} className="vmv-card card-servicos">
                     
                  <img src={item.image} />
                  <H2 color="#e95d2c" >{item.titulo}</H2>
                  <p className="card-servicos-p">{item.descricao}</p>
                
                </div>
              ))}
            </section>

    </section>
  );
};

export default Servicos;


{/*
  
Lista de serviços: Exemplo: "Desenvolvimento de Sites", "Criação de Lojas Virtuais", "Consultoria em SEO", "Manutenção de Sites", etc.

- Descrição curta de cada serviço: Breve explicação Servicos o que está incluído em cada serviço.

- Ícones ou ilustrações: Use ícones para tornar a leitura mais visual e agradável.

- Call-to-Action (CTA): Botões de "Saiba mais" ou "Solicite uma proposta" para cada serviço.
  
  
  
*/}