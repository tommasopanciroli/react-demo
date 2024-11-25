import logo from './logo.svg'
import './App.css'
import MainComponent from './components/MainComponent'
import ClassComponent from './components/ClassComponent'
// questo potrebbe se,brare un HTML, ma in realtà è una sintassi chiamata "JSX"
//differenze principali tra JSX e HTML
//le lassi CSS si applicano con "classNAme" e non "class"
//si possono interpolare le variabili con {}
//onclick, onsubmit ecc. diventano onClick, onSumit ecc



//nella sua forma più semplice, un componente React può benissimo essere una funzione che ritorna del JSX

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>PRIMO PROGETTO REACT</h1>

        <ClassComponent label="CLICCAMI 1"/>
        <ClassComponent label="CLICCAMI 2"/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <MainComponent student="Stefano" color="red" />
        <MainComponent student="Giulio" color="green" />
        <MainComponent student="Tommaso" color="blue" />
      </main>
    </div>
  )
}

export default App
