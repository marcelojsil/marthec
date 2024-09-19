import '../sections/sections.css';
import '../components/css/conteiner-servicos.css';

const ConteinerServicos = () => {
    return(
        <div className="conteiner">
            <a href='#'>
                <div className='conteiner-servicos'>
                    <p>Desenvolvimento de sites</p>                
                </div>
            </a>
            <a href='#'>
                <div className='conteiner-servicos'>
                    <p>Manutenção de sites</p>
                </div>
            </a>
            <a href='#'>
                <div className='conteiner-servicos'>
                    <p>Sistema de Gestão breve</p>
                </div>
            </a>
        </div>
    );
}
  
export default ConteinerServicos;