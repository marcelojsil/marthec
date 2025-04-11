import React from "react";
import "../css/components.css";

const Esfera = () => {
  return (
    <div className="sphere-wrapper">
      <div className="sphere">
        {/* Linhas horizontais */}
        {[...Array(6)].map((_, i) => (
          <div key={`h-${i}`} className="ring-horizontal" style={{ transform: `rotateX(${i * 15}deg)` }}></div>
        ))}

        {/* Linhas verticais */}
        {[...Array(12)].map((_, i) => (
          <div key={`v-${i}`} className="ring-vertical" style={{ transform: `rotateY(${i * 15}deg)` }}></div>
        ))}
      </div>
    </div>
  );
};

export default Esfera;