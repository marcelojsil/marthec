import React, { useEffect, useRef, useState } from "react";
import "../css/components.css";

const EsferaAleat = () => {
  const sphereRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomY = Math.random() * 360; // Gira aleatoriamente no eixo Y
      const randomX = Math.random() * 30 - 30; // Gira levemente no eixo X (oscilar)

      setRotation({ x: randomX, y: randomY });
    }, 10); // A cada 3 segundos muda o ângulo

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sphere-wrapper">
      <div
        ref={sphereRef}
        className="sphere"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="ring-horizontal"
            style={{ transform: `rotateX(${i * 15}deg)` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="ring-vertical"
            style={{ transform: `rotateY(${i * 15}deg)` }}
          />
        ))}
      </div>
    </div>
  );
};

export default EsferaAleat;
