import { useEffect, useState, useRef } from "react";
import "./components.css";

export default function BackgroundEffect() {
  const [showImage, setShowImage] = useState(false);
  const containerRef = useRef(null);  // Referência para o contêiner da imagem

  useEffect(() => {
    // Função que será chamada quando o contêiner estiver visível na tela
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Se o contêiner entrou na tela, define showImage como true
          setShowImage(true);
        }
      });
    };

    // Criação de um IntersectionObserver para monitorar o contêiner
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 50% do elemento precisa estar visível
    });

    // Inicia a observação do contêiner
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup: Quando o componente for desmontado ou o ref mudar
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef} // Referência para o contêiner
      className={`background-container ${showImage ? "show-image" : ""}`}
    >
      <div className="content">
        <h3>Seu negócio precisa ser visto!</h3>
        <p>Com um site profissional, seu negócio alcança mais clientes 
            e expande suas oportunidades no mercado digital.
        </p>
        <h3>Marthec, levando seu negócio além!</h3>
      </div>
    </div>
  );
}

