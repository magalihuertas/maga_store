import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ItemDetailContainer } from "./containers/ItemDetailContainer"
import { NavBar } from "./components/NavBar";
import { Carrousel } from "./components/Carrousel"
import { Footer } from "./components/Footer";
import { ItemListContainer } from "./containers/ItemListContainer"
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {CartContextComponent} from './context/CartContext';

function App() {
  
  return (
    <div className="App">
      <CartContextComponent>
        <BrowserRouter>
          <header>
            <NavBar/>
          </header>
            <Carrousel/>
              <Switch>
                <Route exact path="/" component={ItemListContainer}/>
                <Route path="/category/:id" component={ItemListContainer}/>
                <Route path="/item/:id" component={ItemDetailContainer}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
      </CartContextComponent>
    </div>
  );
}

export default App;
