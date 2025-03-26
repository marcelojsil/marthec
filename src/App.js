import './App.css';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/whatsapp';
import Header from './header/header';

function App() {
  return (
    <div className="App">
      <Header />



      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}

export default App;
