import './App.css';
import FormLead from './components/FormLead';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/whatsapp';
import Header from './header/header';

function App() {
  return (
    <div className="App">
      <Header />

      <FormLead />

      <FormLead />


      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}

export default App;
