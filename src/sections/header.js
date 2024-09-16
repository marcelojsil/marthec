import './sections.css';
import logo_branca from '../img/logo_branca.svg';
import Menu from '../components/menu';
import Button from '../components/button';

const divHeader = {
    backgroundColor: 'var(--color1)',
    height: '15vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 'calc(10 + 2)',
    color: 'white',
    padding: '0 3vw',
}

const imgLogo = {
    height: '13vh'
}

const Header = () => {
    return(
        
        <div style={divHeader}>
            <img src={logo_branca} style={imgLogo}/>
            <Menu />
            <Button />
        </div>

    );
        
}
  
export default Header;