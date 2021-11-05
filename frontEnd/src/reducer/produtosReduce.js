import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS } from "../constants/produtosConstants";

export const reducerListProdutos = (state = {loading: true, produtos: []}, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_SUCESS:
            return {loading: false, produtos: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
            default:
                return state;
    }
}