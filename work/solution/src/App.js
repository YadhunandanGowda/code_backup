import './App.css';
import {Router } from '@reach/router';
import { BrowserRouter , Route , Switch , HashRouter} from 'react-router-dom';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Products from './Components/products/products';

function App() {
  return (
      <div className="main-container">
        <HashRouter>
      <Header></Header>
          <Switch>
            <Route path="/about">
              <About routeName="notProd" />
            </Route>
            <Route path="/contact">
              <Contact routeName="notProd"/>
            </Route>
            <Route path="/products/:id">
              <Products routeName="notProd"/>
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </HashRouter >
      </div>
  );
}

export default App;
