import Header from './sections/header';
import Frases from './sections/frases';
import Servicos from './sections/servicos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='section-main'>
        <Frases />
        <Servicos />
      </div>

      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
