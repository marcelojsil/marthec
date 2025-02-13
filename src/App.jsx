import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./views/home";
import Servicos from "./views/servicos";
import Header from "./views/header";
import Footer from "./views/footer";
import AreaCliente from "./views/pages/areaCliente";
import Solicitacao from "./views/pages/solicitacao";

const App = () => {
    return (
      
        <Router>
          <Header />
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/servicos">Serviços</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicos" element={<Servicos />} />
                    <Route path="/areaCliente" element={<AreaCliente/>} />
                    <Route path="/solicitacao" element={<Solicitacao />} />
                </Routes>
            </div>
          <Footer />
        </Router>
    );
};

export default App