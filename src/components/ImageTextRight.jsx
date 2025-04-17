import React, { useEffect, useState } from 'react';
import '../css/components.css'; // Arquivo CSS para estilos
import SubTitulos from './SubTitulos';

const MyComponentRight = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para detectar visibilidade do elemento
  const handleScroll = () => {
    const slideInDiv = document.querySelector('.slide-right');
    if (!slideInDiv) return;

    const rect = slideInDiv.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);  // Se o elemento está na tela, ative a classe
    } else {
      setIsVisible(false); // Se o elemento saiu da tela, remova a classe
    }
  };

  // Adiciona o event listener para scroll e limpa ao desmontar o componente
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

        <div className={`slide-right ${isVisible ? 'active' : ''}`}>
            
            <p>Com um site profissional, seu negócio alcança mais clientes 
            e expande suas oportunidades no mercado digital.</p>

            <SubTitulos color="#e95d2c">Marthec, levando seu negócio além!</SubTitulos>
            
        </div>

    
  );
};

export default MyComponentRight;
