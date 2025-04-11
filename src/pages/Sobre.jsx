import React from "react";
import "../css/components.css";
import H2 from "../components/HTwo";

const Sobre = () => {
  const dados = [
    {
      titulo: "Visão",
      descricao: "Ser referência em desenvolvimento web, entregando soluções inovadoras e sob medida para nossos clientes.",
    },
    {
      titulo: "Missão",
      descricao: "Ajudar empresas a crescerem no mundo digital por meio de sites eficientes, responsivos e estratégicos.",
    },
    {
      titulo: "Valores",
      descricao: "Compromisso com a qualidade, ética profissional, inovação constante e foco nos resultados dos clientes.",
    },
  ];

  return (
    <sectiion className="sobre">
    <section className="vmv-container">
      {dados.map((item, index) => (
        <div key={index} className="vmv-card">
          <H2 color="#1a2730" >{item.titulo}</H2>
          
          <p>{item.descricao}</p>
        </div>
      ))}
    </section>
    </sectiion>
  );
};

export default Sobre;



{/*
  
Uma seção que explica quem você é e o que a empresa faz.

- Breve descrição da empresa: Fale sobre a missão, visão e valores.

- Diferenciais: O que faz a empresa se destacar? Exemplo: "Mais de 10 anos no mercado", "Equipe especializada em design responsivo", "Desenvolvimento com foco em SEO".

- Imagem ou foto da equipe: Isso pode humanizar a empresa e dar uma sensação de confiança.  
  
  
*/}