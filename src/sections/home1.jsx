import LinkButton from "../components/ui/botaoLink";
import "../styles/home1.css";
import { CheckCircle } from "lucide-react";


const Home = () => {

    return (

    <section className="home">
        <div className="overlay">
            <div className="home-max">
            <div className="home-left">
                <div><h1>Criação de <span className="gradient-text">sites profissionais</span> para empresas que querem crescer</h1></div>
                <div><h2>Soluções digitais sob medida para pequenas empresas, MEI e prestadores de serviço,
  focadas em presença online e geração de resultados.</h2></div>
                <div className="buttons">
                    <LinkButton href="#contato" variant="outline">mais informações</LinkButton>
                    <LinkButton href="#pricing" variant="primary">Impulsione seu negócio</LinkButton>
                </div>
                <div className="home-diferenciais">
                    <div><CheckCircle size={20} color="#e7ad0c" /><p>Sites responsivos</p></div>
                    <div><CheckCircle size={20} color="#e7ad0c" /><p>SEO de qualidade</p></div>
                    <div><CheckCircle size={20} color="#e7ad0c" /><p>Online em 10 dias</p></div>
                </div>
            </div>
            <div className="home-right">
                
            </div>
            </div>
        </div>
    </section>

    );

}

export default Home;