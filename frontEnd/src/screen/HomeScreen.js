import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import data from '../data';
import Produto from "../components/produtos";
import { listProdutos } from "../actions/produtosAction"

export default function HomeScreen(){
    const dispatch = useDispatch();
    const produtoList = useSelector((state )=>state.produtoList);
    const { loading, error, produtos} = produtoList;

    useEffect(()=>{
        dispatch(listProdutos({}))
    }, []);

    return(
        <div class="row center">
        {data.produtos.map((produto) => (
          <Produto key={produto._id} produto={produto}></Produto> 
            ))
        }                     
        </div>
    )
};