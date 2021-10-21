import React from "react";
import data from './data';
import Produto from "./components/produtos";

function App() {
  return (
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
        <div class="row center">
            {data.produtos.map((produto) => (
              <Produto key={produto._id} produto={produto}></Produto> 
                ))
            }                     
            </div>            
    </main>
    <footer class="row center">
        Todos direitos reservados
    </footer>
</div>
  );
}

export default App;
