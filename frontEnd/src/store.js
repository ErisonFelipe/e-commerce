import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { reducerListProdutos } from './reducer/produtosReduce'

const initialState = {};

const reducer = combineReducers({
    produtoList: reducerListProdutos,
})

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );

export default store;