import "../styles/footer1.css";

const Footer = () => {
   return (
    <footer className="footer">
      <p>&copy; 2024 / {new Date().getFullYear()} Marthec - Desenvolvimento de Sites para Empresas</p>
      <p>Todos os direitos reservados.</p>
      
    </footer>
  );
};

export default Footer;