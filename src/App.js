import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { NavBar } from "./components/NavBar";
import { Carrousel } from "./components/Carrousel"
import { Footer } from "./components/Footer";
import { Cards } from "./components/Cards";
import { ItemListContainer } from "./containers/ItemListContainer"

function App() {
  const product =[
    {id:1, nombre:"unik gato", precio:10},
    {id:2, nombre:"unik perro", precio:20}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar/>
        <ItemListContainer greeting={"Bienvenidos a la tienda"}/>
        <Carrousel/>
        <Cards/>
        <Footer/>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;
