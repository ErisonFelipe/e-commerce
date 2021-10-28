import React from 'react';
import Classificacao from './classificacao';

export default function Produto(props){
    const { produto } = props;
    
    return(
        <div key={produto._id} class="card">
        <a href={`/produto/${produto._id}`}>
            <img class="media" src={produto.imagem} alt={produto.name}/>
        </a>
        <div class="card-box">
            <a href={`/produto/${produto._id}`}>
                <h2>{produto.name}</h2>
            </a>
            
            <Classificacao avaliacao={produto.avaliacao} numAvaliacao={produto.numAvaliacao}></Classificacao>

            <div class="preco">${produto.preco}</div>                    
            </div>                    
        </div> 
    )
};