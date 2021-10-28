import React from 'react';
import { Link } from 'react-router-dom';
import Classificacao from '../components/classificacao';
import data from '../data';

export default function ProductScreen(props){
    const produto = data.produtos.find(x => x._id === props.match.params.id);
    if(!produto){
        return <div>Produto não encontrado.</div>
    }

    return(
        <div>
            <Link to="/" >Voltar para resultados</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={produto.imagem} alt={produto.name}/>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{produto.name}</h1>
                        </li>
                        <li>
                            <Classificacao classificacao={produto.avaliacao} numAvaliacao={produto.numAvaliacao}></Classificacao>
                        </li>
                        <li>
                            Preço: ${produto.preco}
                        </li>
                        <li>
                            Descrição:
                            <p>{produto.descricao}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Preço</div>
                                    <div className="preco">${produto.preco}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {produto.countInStock > 0 ? <span className="sucess">Em estoque</span> : <span className="error">Indisponível</span>}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Adicionar ao carrinho</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};