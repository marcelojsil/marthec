import LinkButton from "../../components/ui/ButtonLink"
import "./hero.css"
import { CheckCircle } from "lucide-react"
import config from "../../config"


const Hero = () => {

    return (

    <section className="home">
        <div className="overlay">
            <div className="home-max">
                <div className="home-left">
                    <div><h1>{config.h1}</h1></div>
                    <div><h2>{config.h2}</h2></div>
                    <div className="buttons">
                        
                        <LinkButton href="#contato" variant="outline" className="buttons-itens">mais informações</LinkButton>
                        <LinkButton href="#pricing" variant="primary" className="buttons-itens">Impulsione seu negócio</LinkButton>
                        
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

export default Hero;