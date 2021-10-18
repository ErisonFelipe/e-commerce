import React from "react";
import data from './data';

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
            {
                data.produtos.map((produto) => (
                    <div key={produto._id} class="card">
                <a href={`/produto/${produto._id}`}>
                    <img class="media" src={produto.imagem} alt={produto.name}/>
                </a>
                <div class="card-box">
                    <a href={`/produto/${produto._id}`}>
                        <h2>{produto.name}</h2>
                    </a>
                    <div class="avaliacao">
                        <span><i class="fa fa-star"></i></span>                        
                        <span><i class="fa fa-star"></i></span>           
                        <span><i class="fa fa-star"></i></span>                        
                        <span><i class="fa fa-star"></i></span>                        
                        <span><i class="fa fa-star"></i></span>
                        <div class="preco">${produto.preco}</div>                        
                    </div>                    
                    </div>                    
                </div>  
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
