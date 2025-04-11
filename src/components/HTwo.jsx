import React from 'react';


const H2 = ({children, color}) => {
 
  return (

    <div className="text-h2" style={{ color: color }}> {children} </div>

  );
  
};

export default H2;