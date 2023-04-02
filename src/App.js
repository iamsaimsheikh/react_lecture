import './App.css';
import Header from './components/Header/Header';

function App() {

  const myName = "Saim";
  const myExp = 14
  const myPosition = 'Full Stack Engineer'

  return (
    <div className="App">
     <Header name={myName} exp={myExp} position={myPosition}/>
    </div>
  );
}

export default App;
