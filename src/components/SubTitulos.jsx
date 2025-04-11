import React from 'react';
import '../css/components.css'; 

const SubTitulos = ({ children, color }) => {
  return (
    <div
      className="sub-titulos"
      style={{ color: color }}
    >
      {children}
    </div>
  );
};

export default SubTitulos;
