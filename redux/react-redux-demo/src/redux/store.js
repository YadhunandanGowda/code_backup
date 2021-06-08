import {createStore , combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import icecreamReducer from './icecream/icecreamReducer';

const cReducers = combineReducers({cake: cakeReducer, icecream: icecreamReducer});
const store = createStore(cReducers);


export default store;

