
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ItemDetailContainer } from "./containers/ItemDetailContainer"
import { NavBar } from "./components/NavBar";
import { Carrousel } from "./components/Carrousel"
import { Footer } from "./components/Footer";
/* import { ItemListContainer } from "./containers/ItemListContainer" */

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Carrousel/>
        {/* <ItemListContainer greeting="Bienvenidos a la tienda"/> */}
        <ItemDetailContainer/>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
