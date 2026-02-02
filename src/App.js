
import { BrowserRouter as Router, Routes , Route, Navigate} from "react-router-dom";
//import config from "./config";
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
//ROTAS
import Login from "./sections/login"; 
import Admin from "./sections/admin";

function App() {

  const PrivateRoute = ({ children }) => {
    const isAuth = localStorage.getItem("isAuthenticated") === "true";
    return isAuth ? children : <Navigate to="/admin" />;
  };

  return (
    
    <Router>

      <nav className="App">

          <Routes>
      
            {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Publico />
              <Precos />
              <Portifolio />
              <Precos1 />
              <Contact />
              <Footer />
              <ToTopButton />
              <WhatsAppButton />
            </>
          }
        />

        {/* Página Admin */}
        <Route path="/admin" element={<Login />} />

         {/* Dashboard protegido */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
                       
        </Routes>

      </nav>               
    
    </Router>
 
  );
}

export default App;