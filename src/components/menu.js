import styleFlexRow from "./styleFlexRow";

const divP = {
    marginLeft:'3vw',
}

const Menu = () => {
    return(
        
        <div style={styleFlexRow}>
            <p style={divP}>Sobre</p>
            <p style={divP}>Visão e Missão</p>
            <p style={divP}>Contato</p>
            <p style={divP}>Serviços</p>
        </div>

    );
        
}
  
export default Menu;