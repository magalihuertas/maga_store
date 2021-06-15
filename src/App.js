
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { NavBar } from "./components/NavBar";
import { Carrousel } from "./components/Carrousel"
import { Footer } from "./components/Footer";
import { Cards } from "./components/Cards";

/* import { ItemListContainer } from "./containers/ItemListContainer" */

function App() {
  const product = [
    { id: 1, nombre: "Unik Gatito 2 kilos", marca: "Unik Gato", precio: 10 },
    { id: 2, nombre: "Unik Gatito 7,5 kilos", marca:"Unik Perro", precio: 20 }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Carrousel />
        <Cards productData ={product[0]} greeting={"Bienvenidos a la tienda"}/>
        <Cards productData ={product[1]}/>
        <br/>
        <br/>
        <br/>
        <Footer/>
        
        {/* <ItemListContainer greeting={"Bienvenidos a la tienda"}/> */}
        
      </header>
    </div>
  );
}

export default App;
