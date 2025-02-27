import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./css/style.css";

// Cabeçalho e Rodapé fixos
import Header from "./views/header";
import Footer from "./views/footer";

// Páginas das rotas
import Home from "./views/home";
import Servicos from "./views/pages/servicos";
import Planos from "./views/pages/planos";
import AreaCliente from "./views/pages/areaCliente";
import Contato from "./views/pages/contato";

const App = () => {
    return (
   
        <Router>

          <nav className="app">
          
            <Header />

              <div className="routes-app">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/marthec" element={<Home />} />
                  <Route path="/servicos" element={<Servicos />} />
                  <Route path="/planos" element={<Planos />} />
                  <Route path="/areaCliente" element={<AreaCliente/>} />
                  <Route path="/contato" element={<Contato />} />
                </Routes>
              </div>

            <Footer />

          </nav>
        
        </Router>

      
    );
};

export default App