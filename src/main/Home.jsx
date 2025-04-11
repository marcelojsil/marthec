import React from "react";
import "../css/style.css";
//import FullScreenImg from "../components/FullImage";
import DivsDeslizantes from "../components/DivsDeslizantes";
//import BackgroundEffect from "../components/BackTransition";
import SubTitulos from "../components/SubTitulos";
import SecMain from "../pages/SecMain";
import Sobre from "../pages/Sobre";



const Home = () => {
  return (
    <section className="home"> 
    
      <SecMain />

      <SubTitulos color="#1a2730">Sua empresa precisa ser vista</SubTitulos>
      <DivsDeslizantes /> 

      <section className="home-sobre-titulo">
        <SubTitulos color="#fff" >Comprometidos com o crescimento do seu negócio</SubTitulos>
      </section>
      < Sobre />
      

      {/*

      

      <SubTitulos color="#1a2730">Comprometidos com o sucesso do seu negócio</SubTitulos>
      
      <BackgroundEffect />
       */}
           

    </section>
  );
};

export default Home;