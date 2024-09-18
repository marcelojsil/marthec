import './sections.css';
import '../components/css/header.css';
import logo_branca from '../img/logo_branca.svg';
import Menu from '../components/menu';
import Button from '../components/button';


const Header = () => {
    return(
        
        <div className='header'>
            <img src={logo_branca} className='img-logo'/>
            <Menu />
            <Button />
        </div>

    );
        
}
  
export default Header;