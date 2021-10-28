import React from 'react';
import data from '../data';
import Produto from "../components/produtos";

export default function HomeScreen(){
    return(
        <div class="row center">
        {data.produtos.map((produto) => (
          <Produto key={produto._id} produto={produto}></Produto> 
            ))
        }                     
        </div>
    )
};