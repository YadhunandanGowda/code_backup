import { createStore } from 'redux';
import pQReducer from './priceandquantity/reducer';

const store = createStore(pQReducer);

export default store;
