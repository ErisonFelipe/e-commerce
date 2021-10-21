import React from "react";

export default function Classificacao(props){
    const {avaliacao, numAvaliacao} = props;

    return(
        <div class="avaliacao">
                <span><i className={avaliacao >= 1 ?"fa fa-star": avaliacao >= 0.5 ?"fa fa-start-half-o": "fa fa-start-o"}></i></span>                        
                <span><i className={avaliacao >= 2 ?"fa fa-star": avaliacao >= 1.5 ?"fa fa-start-half-o": "fa fa-start-o"}></i></span>                        
                <span><i className={avaliacao >= 3 ?"fa fa-star": avaliacao >= 2.5 ?"fa fa-start-half-o": "fa fa-start-o"}></i></span>                        
                <span><i className={avaliacao >= 4 ?"fa fa-star": avaliacao >= 3.5 ?"fa fa-start-half-o": "fa fa-start-o"}></i></span>                        
                <span><i className={avaliacao >= 5 ?"fa fa-star": avaliacao >= 4.5 ?"fa fa-start-half-o": "fa fa-start-o"}></i></span>
                <span>{numAvaliacao + "Avaliação"}</span>                   
        </div>
    )
};