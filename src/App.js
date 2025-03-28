import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style.css';
import Header from './header/Header';

import Home from './main/Home';
import Sobre from './main/Sobre';
import Servicos from './main/Servicos';
import Contato from './main/Contato';



function App() {
  return (
    
            <Router>
    
              <nav className="app">
              
                <Header />
    
                  <div className="routes-app">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/sobre" element={<Sobre />} />
                      <Route path="/servicos" element={<Servicos />} />
                      <Route path="/contato" element={<Contato />} />
                    </Routes>
                  </div>
    
              
    
              </nav>
            
            </Router>
  );
}

export default App;
