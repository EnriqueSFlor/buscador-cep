
import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="tittle">Buscador CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu CEP..."
        ></input>

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 02882160</h2>

        <span>Rua Teste</span>
        <span>Complemento: Algum complemento</span>
        <span>Vila Cachoeirinha</span>
        <span>São Paulo - SP</span>
      </main>
    </div>
    
  );
}

export default App;
