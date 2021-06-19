
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { NavBar } from "./components/NavBar";
import { Carrousel } from "./components/Carrousel"
import { Footer } from "./components/Footer";

import { ItemListContainer } from "./containers/ItemListContainer"

function App() {
  const product = [
    { id: 1, nombre: "Unik Gatito 2 kilos", marca: "Unik Gato", precio: 10, stock:10 },
    { id: 2, nombre: "Unik Gatito 7,5 kilos", marca:"Unik Perro", precio: 20, stock:10 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Carrousel/>
        <ItemListContainer productlist={product} greeting="Bienvenidos a la tienda"/>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
