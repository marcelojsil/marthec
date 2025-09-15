import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes /*, Route*/} from "react-router-dom";
import config from "./config";
import "./global.css";


import WhatsAppButton from "./components/whatsapp";
import ToTopButton from "./components/toTop";
//import SectionTeste from "./components/section_teste";
import Header from "./sections/header";
import Footer from "./sections/footer1";
import Home from "./sections/home1";
import Publico from "./sections/publico1";
import Precos from "./sections/precos2";
import Portifolio from "./sections/portifolio1";
import Precos1 from "./sections/precos1";
import Contact from "./components/contatos";



function JSONLD() {
  return (
    <script type="application/ld+json">
      {JSON.stringify(config.businessInfo)}
    </script>
  );
}

function App() {

  // Informações vindas do arquivo config.js
  useEffect(() => { document.querySelector('link[rel="icon"]').setAttribute("href", config.favicon); }, []);
  useEffect(() => { document.title = config.siteTitle; }, []);
  useEffect(() => { document.querySelector('meta[name="description"]').setAttribute("content", config.nameDescription); }, []);
  useEffect(() => { document.querySelector('meta[name="keywords"]').setAttribute("content", config.nameKeywords); }, []);
  useEffect(() => { document.querySelector('meta[property="og:title"]').setAttribute("content", config.siteTitle); }, []);
   useEffect(() => { document.querySelector('meta[property="og:description"]').setAttribute("content", config.nameDescription); }, []);
  useEffect(() => { document.querySelector('meta[property="og:url"]').setAttribute("content", config.ogURL); }, []);
  useEffect(() => { document.querySelector('meta[property="og:title"]').setAttribute("content", config.siteTitle); }, []);
  useEffect(() => { document.querySelector('meta[property="og:image"]').setAttribute("content", config.logo); }, []);

  return (
    
    <Router>

      <JSONLD />

      <nav className="App">

        <title>{config.siteTitle}</title>

        <Header />

        <Home />

        

        <Publico />

        <Precos />

        <Portifolio />

        <Precos1 />

        <Contact />

        <div className="routes-app">

          <Routes>

            {/*
            <Route path="/" element={
              <Home />
            } />
             <Route path="/servicos" element={
              <Servicos />
            } />
            */}
            

          </Routes>

        </div>    
        
        <Footer />

        <ToTopButton />
        <WhatsAppButton />  

      </nav>               
    
    </Router>
 
  );
}

export default App;