import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen  from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

function App() {
  return (
    <BrowserRouter>
    <div class="grid-container">
    <header class="row">
        <div>
            <a class="brand" href="index.html">Loja</a>
        </div>
        <div>
            <a href="cart.html">Carrinho</a>
            <a href="signin.html">Entrar</a>
        </div>
    </header>
    <main>
      <Route path="/produto/:id" component={ProductScreen} exact></Route>
      <Route path="/" component={HomeScreen} exact></Route>
                  
    </main>
    <footer class="row center">
        Todos direitos reservados
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
