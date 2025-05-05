import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style.css';

import Header from './header/Header';

import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/whatsapp';

import Home from './main/Home';
import ClientsView from './components/supabase/ClientsView';
import ClientEdit from './components/supabase/ClientsEdit';
import LeadView from './components/supabase/LeadView';

//import Sobre from './main/Sobre';
//import Servicos from './main/Servicos';
//import Contato from './main/Contato';

function App() {
  return (
    
            <Router>
    
              <nav className="app">
              
                <Header />
    
                <div className="routes-app">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/sobre" element={<Sobre />} />
                    <Route path="/servicos" element={<Servicos />} />
                    <Route path="/contato" element={<Contato />} /> */}
                    <Route path="/Clientes" element={<ClientsView />} />
                    <Route path='/ClientesEdit:id' element={<ClientEdit />} />
                    <Route path='/Lead' element={<LeadView />} />
                  </Routes>
                </div>       


              
                
                <ScrollToTopButton />
                <WhatsAppButton />              

              </nav>               
            
            </Router>
            
  );
};

export default App;
