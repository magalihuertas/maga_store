
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { NavBar } from "./components/NavBar";
import { Carrousel } from "./components/Carrousel"
import { Footer } from "./components/Footer";
import { Cards } from "./components/Cards";
/* import { ItemListContainer } from "./containers/ItemListContainer" */

function App() {
  const product = [
    { id: 1, nombre: "unik gato", precio: 10 },
    { id: 2, nombre: "unik perro", precio: 20 }
  ];
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />
        <Carrousel />
        <Cards/>
        <Footer />
        
        
        {/* <ItemListContainer greeting={"Bienvenidos a la tienda"}/> */}
        
      </header>
    </div>
  );
}

export default App;
