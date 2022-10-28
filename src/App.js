import logo from './logo.svg';
import './App.css';

const controler = false;

const objetoEstilos = {
  width: '200px',
  height: '200px',
  backgroundColor: 'red',
};
const objetoEstilosDos = {
  width: '300px',
  height: '300px',
  backgroundColor: 'blue',
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={controler ? objetoEstilos : objetoEstilosDos}></div>
      </header>
    </div>
  );
}

export default App;
