import React from 'react';
import Footer from '../footer/Footer';
import SubTitulos from './SubTitulos';
import H2 from './HTwo';

export default function ParallaxSection()  {
  return (
    <div className="parallax-container">
      <div className="parallax-content">
        <SubTitulos>Faça um orçamento sem compromisso!</SubTitulos>
        <H2 color="#e95d2c">chama no whatsapp</H2>
        <Footer />
      </div>
    </div>
  );
};


