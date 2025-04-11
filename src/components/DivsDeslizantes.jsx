import React from 'react';
import '../css/components.css'; // Arquivo CSS para estilos
import MyComponent from './ImageTextLeft';
import MyComponentRight from './ImageTextRight';

const DivsDeslizantes = () => {
 

  return (

    <div className="divs-desl">
        <MyComponent />
        <MyComponentRight/>
    </div>

  );
};

export default DivsDeslizantes;