const redux = require('redux');
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combinedReducer = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const initialCakeState = {
    numberOfCakes: 10
};

const initialIcecreamState = {
    numberOfIceCreams: 20
};

function buyCake(){
    return {
        type: "buy_cake"
    }
}

function buyIceCream(){
    return {
        type: "buy_icecream"
    }
}




const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case("buy_cake") : {
            return {
                ...state,
                numberOfCakes: state.numberOfCakes -1
            }
        }
        default : {
            return state;
        }
    }
}
const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type) {
        case("buy_icecream") : {
            document.getElementById("title").innerText = action.type;
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams -1
            }
        }
        default : {
            return state;
        }
    }
}

const rootReducer = combinedReducer({cake:cakeReducer, icecream:iceCreamReducer})
const Store  = createStore(rootReducer,applyMiddleware(logger));

console.log("initial state ",Store.getState());
// let unsubscribe = Store.subscribe(()=>{console.log("updated state ", Store.getState())});
Store.dispatch(buyCake());
Store.dispatch(buyCake());
Store.dispatch(buyCake());
Store.dispatch(buyIceCream());
Store.dispatch(buyIceCream());

// unsubscribe()