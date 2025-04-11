import React from "react";
//import "./main.css";
//import FullScreenImg from "../components/FullImage";
import DivsDeslizantes from "../components/DivsDeslizantes";
//import BackgroundEffect from "../components/BackTransition";
import SubTitulos from "../components/SubTitulos";
import SecMain from "../pages/SecMain";



const Home = () => {
  return (
    <section className="home"> 
    
      <SecMain />

      <SubTitulos color="#1a2730">Sua empresa precisa ser vista</SubTitulos>
      <DivsDeslizantes /> 

      {/*

      

      <SubTitulos color="#1a2730">Comprometidos com o sucesso do seu negócio</SubTitulos>
      
      <BackgroundEffect />
       */}
           

    </section>
  );
};

export default Home;