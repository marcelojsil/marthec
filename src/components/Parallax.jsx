import React from 'react';
import Footer from '../footer/Footer';
import SubTitulos from './SubTitulos';
import H2 from './HTwo';
import FormLead from './supabase/FormLead';

export default function ParallaxSection()  {
  return (
    <div className="parallax-container">
      <div className="parallax-content">
        <SubTitulos>Faça um orçamento sem compromisso!</SubTitulos>
        
        <FormLead />
        <Footer />
      </div>
    </div>
  );
};


