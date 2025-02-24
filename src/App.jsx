import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/style.css";

// Cabeçalho e Rodapé fixos
import Header from "./views/header";
import Footer from "./views/footer";

// Páginas das rotas
import Home from "./views/home";
import Servicos from "./views/pages/servicos";
import Planos from "./views/pages/planos";
import AreaCliente from "./views/pages/areaCliente";

const App = () => {
    return (
   
        <Router className="app">
          
          <Header />

            <div>
             
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/planos" element={<Planos />} />
                <Route path="/areaCliente" element={<AreaCliente/>} />
              </Routes>
              
            </div>

          <Footer />
        
        </Router>

      
    );
};

export default App