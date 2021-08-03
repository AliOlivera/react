import logo from './logo.svg';
import './App.css';
import Alina from './Alina';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Alina nombre='Alina' texto='Saludos desde Argentina' color></Alina>
        <Alina nombre='Juan' texto='Saludos desde España'></Alina>
          
      </header>
    </div>
  );
}

export default App;



