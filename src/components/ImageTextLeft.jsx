import React, { useEffect, useState } from 'react';
import '../css/components.css'; 
import Parceria from '../img/solucao-1.png';


const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para detectar visibilidade do elemento
  const handleScroll = () => {
    const slideInDiv = document.querySelector('.slide-in');
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

        <div className={`slide-in ${isVisible ? 'active' : ''}`}>
            <img src={Parceria} className="slide-img" alt='Marthec sites para empresas' width={600}/>
        </div>

    

  );
};

export default MyComponent;
