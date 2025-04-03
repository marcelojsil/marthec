import React from "react";
import "./main.css";
import FullScreenImg from "../components/FullImage";
import DivsDeslizantes from "../components/DivsDeslizantes";
import BackgroundEffect from "../components/BackTransition";



const Home = () => {
  return (
    <section className="home"> 
      
      <FullScreenImg />
      
      <BackgroundEffect />
      
      <DivsDeslizantes />      

    </section>
  );
};

export default Home;